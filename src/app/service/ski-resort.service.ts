import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SkiResortInfo } from '../model/ski-resort-info';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { SkiResort } from '../model/ski-resort';

const baseURL = "http://localhost:3000/api/"

@Injectable({
  providedIn: 'root'
})
export class SkiResortService {

  constructor(private http: HttpClient){ }

  getAll(): Observable<SkiResortInfo[]> {
    return this.http.get(`${baseURL}skiresorts`).pipe(map((x) => {
      return x as Array<SkiResortInfo>
    }))
  }

  getOne(id:number): Observable<SkiResort> {
    return this.http.get(`${baseURL}skiresorts/${id}`).pipe(map((x) => {
      return new SkiResort(x);
    }))
  }
}
