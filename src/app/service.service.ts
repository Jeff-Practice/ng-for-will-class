import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceService {
  data;
  constructor(private http: HttpClient) {}
  load() {
    return this.http.get('./api/articles.json');
  }
}
