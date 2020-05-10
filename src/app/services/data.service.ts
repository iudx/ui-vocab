import { Injectable } from '@angular/core';
import Globals from './global';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface ClassResult {
  'rdfs:label': string;
  'rdfs:comment': string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private BASE_URL = Globals.api;
  constructor(private http: HttpClient) {}

  getAllClasses() {
    return this.http.get<ClassResult[]>(this.BASE_URL + 'classes');
  }
}
