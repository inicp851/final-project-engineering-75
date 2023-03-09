package main

import (
	"database/sql"

	"final-project-engineering-75/server-side/api"
	"final-project-engineering-75/server-side/repository"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "./test.db")
	if err != nil {
		panic(err)
	}

	usersRepo := repository.NewUserRepository(db)
	journalRepo := repository.NewJournalRepository(db)

	mainAPI := api.NewAPI(*usersRepo, *journalRepo)
	mainAPI.Start()
}
