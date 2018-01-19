import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { MessageService } from './message.service';
import { BOOKS } from './mock.books';
import { Book } from './book';

@Injectable()
export class BooksService {

  private url = 'http://localhost:5000/v1/books/';

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  getBooks(): Observable<Book[]> {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    this.messageService.add('Fetched your list of books to read :)');
    return this.http.get<Book[]>(this.url, {headers: new HttpHeaders(headers)});
  }

}
