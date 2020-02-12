import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Health} from '../../common/health/health';
import {map} from 'rxjs/operators';

const baseUrl = '/server/actuator';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ActuatorService {

  constructor(private http: HttpClient) { }

  getHealth(): Observable<Health> {
    return this.http.get(`${baseUrl}/health`).pipe(
      map((data: Health) => data)
    );
  }

  getActuatorEndpoints(): Observable<any> {
    return this.http.get(`${baseUrl}`).pipe(
      map((data: any) => data)
    );
  }
}
