import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "./model/book";

@Injectable()

export class BookService {
    private url = 'https://sheet.best/api/sheets/717518e6-4ca2-45c7-87eb-2e0399d6a9cc';

    httpOptions={
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private http: HttpClient) {}

    getBook(){
        return this.http.get(this.url)
    }
}