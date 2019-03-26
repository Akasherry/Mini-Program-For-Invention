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
	PhoneNumber string
	Org         string
	HasGroup    int8
	DivideIndex string
	Name        string
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
	var order = "SELECT * FROM User WHERE OpenId='" + ATencentRes.Openid + "';"
	err = db.QueryRow(order).Scan(&AUser.OpenId, &AUser.PhoneNumber, &AUser.Org, &AUser.HasGroup, &AUser.DivideIndex, &AUser.Name)
	log.Println(err)
	if err != nil {
		stmt, err := db.Prepare("INSERT INTO User(OpenId,PhoneNumber,Org,HasGroup,DivideIndex,Name) VALUES(?,?,?,?,?,?);")
		if err != nil {
			panic(err)
		}
		stmt.Exec(ATencentRes.Openid, "nil", "nil", 0, "nil", "nil")
		AUser.OpenId = ATencentRes.Openid
		AUser.PhoneNumber = "nil"
		AUser.Org = "nil"
		AUser.HasGroup = 0
		AUser.DivideIndex = "nil"
		AUser.Name = "nil"
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
	err = db.QueryRow(order).Scan(&AUser.OpenId, &AUser.PhoneNumber, &AUser.Org, &AUser.HasGroup, &AUser.DivideIndex, &AUser.Name)

	output, err := json.MarshalIndent(&AUser, "", "\t\t")
	w.Write(output)
}

func SetInfo(w http.ResponseWriter, r *http.Request) {
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

	stmt, err = db.Prepare("UPDATE User set Name=? where OpenId=?")
	if err != nil {
		panic(err)
	}
	stmt.Exec(r.PostFormValue("name"), r.PostFormValue("openId"))

	stmt, err = db.Prepare("UPDATE User set DivideIndex=? where OpenId=?")
	if err != nil {
		panic(err)
	}
	stmt.Exec(r.PostFormValue("group"), r.PostFormValue("openId"))

	stmt, err = db.Prepare("UPDATE User set PhoneNumber=? where OpenId=?")
	if err != nil {
		panic(err)
	}
	stmt.Exec(r.PostFormValue("phone"), r.PostFormValue("openId"))

	stmt, err = db.Prepare("UPDATE User set Org=? where OpenId=?")
	if err != nil {
		panic(err)
	}
	stmt.Exec(r.PostFormValue("groupName"), r.PostFormValue("openId"))

	w.Write([]byte("Success"))
}
