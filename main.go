package main

import (
	"fmt"
	"html/template"
	"net/http"
)

func home_page(page http.ResponseWriter, r *http.Request) {
	tmp, err := template.ParseFiles("public/index.html")
	if err != nil {
		fmt.Fprintf(page, "Error with opening HTML")
		panic(err)
	}
	tmp.Execute(page, nil)
}

func handleRequest() {
	http.HandleFunc("/", home_page)
	http.ListenAndServe(":8081", nil)
}

func main() {
	handleRequest()
	// per := structs.User{
	// 	Name:     "Timoxa",
	// 	Password: "1123",
	// 	Mail:     "mamamia",
	// }
}
