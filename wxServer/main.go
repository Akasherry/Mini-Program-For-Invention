package main

import (
	"net/http"

	"wxServer/handlers"
	"wxServer/utils"
)

func main() {
	//多路复用器
	mux := http.NewServeMux()
	//处理器绑定
	mux.HandleFunc("/wxServer/test", utils.Test)
	mux.HandleFunc("/wxServer/send", handlers.Sign)
	mux.HandleFunc("/wxServer/send2", handlers.Sign2)
	mux.HandleFunc("/wxServer/login", handlers.Login)
	mux.HandleFunc("/wxServer/upload", handlers.FileUpload)
	mux.HandleFunc("/wxServer/getGroup", handlers.GetGroupFromOpenId)
	mux.HandleFunc("/wxServer/setInfo", handlers.SetInfo)

	http.ListenAndServe("localhost:8079", mux)
}
