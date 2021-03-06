import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Build, BuildResponse } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class BuildService {

  buildDetailRoute = '/api/build/';

  constructor(private http: HttpClient) { }

  fetchDetails(componentId: string, numberOfDays: number): Observable<Build[]> {
    const params = {
      params: new HttpParams().set('componentId', componentId).set('numberOfDays', numberOfDays.toFixed(0))
    };
    return this.http.get<BuildResponse>(this.buildDetailRoute, params).pipe(
      map(response => response.result));
  }
}
