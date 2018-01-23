import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { MessageService } from './message.service';
import { BOOKS } from './mock.books';
import { Review, Reviews } from './book';
import 'rxjs/add/operator/map';

@Injectable()
export class BooksService {

  // private url = 'http://localhost:5000/v1/books/';
  private url = 'assets/mock.books.ts';

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  getBooks(): Observable<Review[]> {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    this.messageService.add('Fetched your list of books to read :)');
    return this.http.get<Reviews>(this.url, {headers: new HttpHeaders(headers)})
        .map(res => res.review)
  }

}
