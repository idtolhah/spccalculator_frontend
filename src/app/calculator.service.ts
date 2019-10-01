import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Calculator } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

    API_URL = "http://localhost:8080"; 

  constructor(
    private http:HttpClient
  ) { }

  getAddResult(number1, number2){
    return this.http.get<Calculator>(`${this.API_URL}/calculator/add/${number1}/${number2}`);
  }

  getSubResult(number1, number2){
    return this.http.get<Calculator>(`${this.API_URL}/calculator/sub/${number1}/${number2}`);
  }

  getMulResult(number1, number2){
    return this.http.get<Calculator>(`${this.API_URL}/calculator/mul/${number1}/${number2}`);
  }

  getDivResult(number1, number2){
    return this.http.get<Calculator>(`${this.API_URL}/calculator/div/${number1}/${number2}`);
  }

}
