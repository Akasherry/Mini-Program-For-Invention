package handlers

import (
	"database/sql"
	"encoding/json"
	"log"
	"net/http"

	"wxServer/utils"

	_ "github.com/mattn/go-sqlite3"
)

type User struct {
	OpenId      string
	HasGroup    int8
	DivideIndex string
}

func Login(w http.ResponseWriter, r *http.Request) {
	var ATencentRes = utils.GetOpenIdFromTencent(r.PostFormValue("code"))
	if ATencentRes.Errcode != 0 {
		w.Write([]byte(ATencentRes.Errmsg))
		return
	}

	db, err := sql.Open("sqlite3", "./SQLite3/inventionClient.db")
	if err != nil {
		panic(err)
	}
	defer db.Close()

	var AUser User
	var order = "SELECT OpenId,HasGroup,DivideIndex FROM User WHERE OpenId='" + ATencentRes.Openid + "';"
	err = db.QueryRow(order).Scan(&AUser.OpenId, &AUser.HasGroup, &AUser.DivideIndex)
	log.Println(err)
	if err != nil {
		w.Write([]byte("New User"))
		stmt, err := db.Prepare("INSERT INTO User(OpenId,HasGroup,DivideIndex) VALUES(?,?,?);")
		if err != nil {
			panic(err)
		}
		stmt.Exec(ATencentRes.Openid, 0, "-1")
		return
	}

	output, err := json.MarshalIndent(&AUser, "", "\t\t")
	w.Write(output)
}

func GetGroupFromOpenId(w http.ResponseWriter, r *http.Request) {
	db, err := sql.Open("sqlite3", "./SQLite3/inventionClient.db")
	if err != nil {
		panic(err)
	}
	defer db.Close()

	var AUser User
	var order = "SELECT * FROM User WHERE OpenId='" + r.PostFormValue("openId") + "';"
	err = db.QueryRow(order).Scan(&AUser.OpenId, &AUser.HasGroup, &AUser.DivideIndex)

	output, err := json.MarshalIndent(&AUser, "", "\t\t")
	w.Write(output)
}

func SetGroup(w http.ResponseWriter, r *http.Request) {
	db, err := sql.Open("sqlite3", "./SQLite3/inventionClient.db")
	if err != nil {
		panic(err)
	}
	defer db.Close()
	log.Println(r.PostFormValue("group"), r.PostFormValue("openId"))
	stmt, err := db.Prepare("UPDATE User set HasGroup=? where OpenId=?")
	if err != nil {
		panic(err)
	}
	stmt.Exec(1, r.PostFormValue("openId"))

	stmt, err = db.Prepare("UPDATE User set DivideIndex=? where OpenId=?")
	if err != nil {
		panic(err)
	}
	stmt.Exec(r.PostFormValue("group"), r.PostFormValue("openId"))
	w.Write([]byte("Success"))
}
