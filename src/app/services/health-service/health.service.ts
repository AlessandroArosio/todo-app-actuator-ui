import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Health} from '../../common/health/health';
import {map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HealthService {

  constructor(private http: HttpClient) { }

  getHealth(): Observable<Health> {
    return this.http.get('/server/actuator/health').pipe(
      map((data: Health) => data)
    );
  }
}
