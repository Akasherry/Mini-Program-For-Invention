package utils

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
)

type TencentRes struct {
	Openid      string
	Session_key string
	Unionid     string
	Errcode     int
	Errmsg      string
}

const appId = "wx45f642298fc4715c"
const appSecret = "c38891e91dfd0b280e689a4bbe410c0b"

func GetOpenIdFromTencent(code string) *TencentRes {
	var url = "https://api.weixin.qq.com/sns/jscode2session?appid=" + appId + "&secret=" + appSecret + "&js_code=" + code + "&grant_type=authorization_code"
	resp, err := http.Get(url)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	object, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		panic(err)
	}

	var ATencentRes TencentRes
	err = json.Unmarshal(object, &ATencentRes)
	if err != nil {
		panic(err)
	}

	return &ATencentRes
}
