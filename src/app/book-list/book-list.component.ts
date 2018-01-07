import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  book: Book = {
    id: 1,
    title: 'Bio of An',
    description: 'Life history of An',
    isbn: 'adsjfsdk342',
    author: 'Anbarasi U',
    rating: 5,
    dateAdded: new Date('1/1/2018')
  };

  constructor() { 
    
  }

  ngOnInit() {
    
  }

}
