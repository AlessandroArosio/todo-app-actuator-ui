import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Health} from '../../common/health/health';
import {map} from 'rxjs/operators';
import {Actuator} from '../../common/actuator/actuator';

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

  getActuatorEndpoints(): Observable<Actuator[]> {
    return this.http.get(`${baseUrl}`).pipe(
      map((data: Actuator) => {
        const actList: Actuator[] = [];
        // @ts-ignore
        const obj = data._links;
        const strings = Object.keys(obj);
        for (let st of strings) {
          let element: Actuator = new Actuator();
          element.name = st;
          actList.push(element);
        }
        return actList;
      })
    );
  }
}
