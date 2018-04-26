import { Component } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  count:number =0;
  constructor() {
  }

  countlength(word: string) {
    this.count=word.length;
  }
  cleanvalue(input: HTMLInputElement)
  {
    input.value='';
    this.count=0;
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title  = 'The Will Will Web';
    }
  }
}
