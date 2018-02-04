import { Component } from '@angular/core';
import { BooksService } from './books.service';
import { Book, Review, Heading } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  reviews: Review[];
  headings: Heading[];

  constructor(private booksService: BooksService){
    this.headings = [{
      title: 'Title',
      key1: 'book',
      key2: 'title',
      isSorted: false}, {
      title: 'Description',
      key1: 'book',
      key2: 'description',
      isSorted: false}, {
      title: 'Author',
      key1: 'book',
      key2: 'author',
      isSorted: false}, {
      title: 'Average Rating',
      key1: 'book',
      key2: 'average_rating',
      isSorted: false}, {
      title: 'Date Added',
      key1: 'date_added',
      isSorted: false
    }];
  }

  ngOnInit() {
    this.getBooks();
  }

  clearSortedHeadings(): void {
    this.headings.map((heading) => heading.isSorted = false);
  }

  getBooks(): void {
    this.booksService.getBooks().subscribe(
      reviews => this.reviews = reviews
    );
  }

  onHeadingClick(e: Event, heading1: string, heading2: string, index: number): void {
    this.clearSortedHeadings();
    this.headings[index].isSorted = true;
    this.reviews = this.reviews.sort((currentValue, nextValue) => {
      const cur = heading2 ? currentValue[heading1][heading2] : currentValue[heading1];
      const next = heading2 ? nextValue[heading1][heading2] : nextValue[heading1];

      if (heading1 === 'date_added') {
        if(new Date(cur) < new Date(next)) {
          return -1;
        } else return 1;
      }

      if (cur < next) return -1;
      else if (cur > next) return 1;
      return 0;
    });
  } 
}
