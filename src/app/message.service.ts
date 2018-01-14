import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages: string[] = [];

  constructor() { }

  add(message: string) {
    this.messages.push(message);
    setTimeout(() => {
      this.pop()
    }, 5000);
  }

  pop() {
    this.messages.shift();
  }

  clear() {
    this.messages = [];
  }

}
