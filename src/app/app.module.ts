import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BooksService } from './books.service';


import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BooksService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
