import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData() {
    return this.http.get('https://nn-angular-7d617.firebaseio.com/.json').map(
      (res) => res.json()
    );
  }
}
