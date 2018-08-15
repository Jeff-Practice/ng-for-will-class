import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any[] = [];
  keyword = '';
  constructor(private datasvc: ServiceService) {}
  ngOnInit(): void {
    this.datasvc.load().subscribe((v: any[]) => {
      this.data = v;
    });
  }
  cleanvalue() {
    this.keyword = '';
  }
}
