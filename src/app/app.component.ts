import { Component } from '@angular/core';
import { BooksService } from './books.service';
import { Book, Review } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  reviews: Review[];
  constructor(private booksService: BooksService){}

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.booksService.getBooks().subscribe(
      reviews => this.reviews = reviews
    );
  }

  onHeadingClick(heading1: string, heading2: string): void {
    this.reviews = this.reviews.sort((currentValue, nextValue) => {
      const cur = heading2 ? currentValue[heading1] : currentValue[heading1][heading2];
      const next = heading2 ? nextValue[heading1] : currentValue[heading1][heading2];
      if (cur < next) return -1;
      else if (cur > next) return 1;
      return 0;
    });
  } 
}
