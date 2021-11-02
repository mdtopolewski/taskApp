import { Injectable } from '@angular/core';
import { Burger } from './burger';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BurgersService {

  private burgerUrl = 'api/burgers'

  getBurgers(): Observable<Burger[]>{
    return this.http.get<Burger[]>(this.burgerUrl)
  }

  constructor(
    private http: HttpClient
  ) { }
}
