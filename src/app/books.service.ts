import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { BOOKS } from './mock.books';
import { Book } from './book';

// https://www.goodreads.com/review/list/11879872.xml?key=jLD63Pc9b85YEDcwpgCQ&v=2&id=anbarasiu&shelf=to-read

@Injectable()
export class BooksService {

  constructor(private messageService: MessageService) { }

  getBooks(): Observable<Book[]> {
    this.messageService.add('Fetched your list of books to read :)');
    return of(BOOKS);
  }

}
