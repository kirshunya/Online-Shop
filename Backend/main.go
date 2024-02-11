package main

import (
	"fmt"
	"net/http"

	"github.com/kirshunya/online-shop/backend/structs"
)

func home_page(page http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(page, "Hello world")
}

func main() {
	fmt.Print("Hello world")
	http.HandleFunc("/", home_page)
	http.ListenAndServe(":8080", nil)
	per := structs.User{
		Name:     "Timoxa",
		Password: "1123",
		Mail:     "mamamia",
	}
	fmt.Print(per)
}
