import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FestivalsService {

  url = "api/codingtest/api/v1/festivals";

  constructor(private http: HttpClient) { }

  getFestivals() {
    return this.http.get(this.url);
  }

}



