package handlers

import (
	"errors"
	"io"
	"net/http"
	"os"
	"path"
	"strings"

	"wxServer/email"
)

const html = `<html>
    <head></head>
    <body>
        <form method="post" enctype="multipart/form-data">
            <input type="file" name="image" />
            <input type="submit" />
        </form>
    </body>
</html>`

func Sign(w http.ResponseWriter, r *http.Request) {
	msg := "联系人：" + r.PostFormValue("Applicant") + "\r\n"
	msg += "联系方式：" + r.PostFormValue("PhoneNumber") + "\r\n"
	msg += "电子邮件：" + r.PostFormValue("Email") + "\r\n"
	msg += "项目名称：" + r.PostFormValue("ProjectName") + "\r\n"
	msg += "项目介绍：" + r.PostFormValue("ProjectDetail") + "\r\n"
	email.Send("inventioncn@163.com", "inventionCN163", "InventionCN@163.com", "参展申请", msg)
}

func Sign2(w http.ResponseWriter, r *http.Request) {
	msg := "联系人：" + r.PostFormValue("Applicant") + "\r\n"
	msg += "联系方式：" + r.PostFormValue("PhoneNumber") + "\r\n"
	msg += "电子邮件：" + r.PostFormValue("Email") + "\r\n"
	msg += "专利名称：" + r.PostFormValue("ProjectName") + "\r\n"
	msg += "专利介绍：" + r.PostFormValue("ProjectDetail") + "\r\n"
	email.Send("inventioncn@163.com", "inventionCN163", "InventionCN@163.com", "专利咨询", msg)
}

func FileUpload(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")

	r.ParseForm()
	if r.Method != "POST" {
		w.Write([]byte(html))
	} else {
		// 接收图片
		uploadFile, handle, err := r.FormFile("image")
		errorHandle(err, w)

		// 检查图片后缀
		ext := strings.ToLower(path.Ext(handle.Filename))
		if ext != ".jpg" && ext != ".png" {
			errorHandle(errors.New("只支持jpg/png图片上传"), w)
			return
			//defer os.Exit(2)
		}

		// 保存图片
		var dir = "./client/" + r.PostFormValue("PhoneNumber") + "/"
		os.Mkdir(dir, 0777)
		saveFile, err := os.OpenFile(dir+handle.Filename, os.O_WRONLY|os.O_CREATE, 0666)
		errorHandle(err, w)
		io.Copy(saveFile, uploadFile)

		defer uploadFile.Close()
		defer saveFile.Close()
		// 上传图片成功
		w.Write([]byte("SUCCESS"))
	}
}

// 统一错误输出接口
func errorHandle(err error, w http.ResponseWriter) {
	if err != nil {
		w.Write([]byte(err.Error()))
	}
}
