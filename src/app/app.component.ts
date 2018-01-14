import { Component } from '@angular/core';
import { BooksService } from './books.service';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books: Book[];
  constructor(private booksService: BooksService){}

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.booksService.getBooks().subscribe(
      books => this.books = books
    );
  }

  onHeadingClick(heading: string): void {
    this.books = this.books.sort((currentValue, nextValue) => {
      const cur = currentValue[heading];
      const next = nextValue[heading];
      if (cur < next) return -1;
      else if (cur > next) return 1;
      return 0;
    });
  } 
}
