import { Component } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock.books';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books = BOOKS;
  onHeadingClick(heading: string): void {
    this.books = BOOKS.sort((currentValue, nextValue) => {
      const cur = currentValue[heading];
      const next = nextValue[heading];
      if (cur < next) return -1;
      else if (cur > next) return 1;
      return 0;
    });
  } 
}
