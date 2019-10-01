import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './calculator.service';

export class Calculator {
  constructor(
    public number1: number,
    public number2: number,
    public operator: string,
    public result: number
  ){  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SPC Calculator';
  error = false;
  errorMessage = 'Isian tidak boleh kosong atau input tidak valid!';
  calculated: Calculator;

  constructor(
    private calculatorService: CalculatorService
  ){ }

  ngOnInit(){
    this.calculated = new Calculator(null, null, "OP_ADD", null);
  }

  getResult(){
    this.calculated.result = null;
    this.error = false;
    if(this.calculated.number1 === null || this.calculated.number2 === null ) this.error = true;      
    
    if(!this.error){
      if(this.calculated.operator === "OP_ADD" )
        this.add();
      else if(this.calculated.operator === "OP_SUB" )
        this.substract();
      else if(this.calculated.operator === "OP_MUL" )
        this.multiply();
      else if(this.calculated.operator === "OP_DIV" )
        this.divide();
    }
  }

  add(){
    this.calculatorService.getAddResult(this.calculated.number1, this.calculated.number2)
          .subscribe ( data => this.calculated = data )
  }
  substract(){
    this.calculatorService.getSubResult(this.calculated.number1, this.calculated.number2)
          .subscribe ( data => this.calculated = data )
  }
  multiply(){
    this.calculatorService.getMulResult(this.calculated.number1, this.calculated.number2)
          .subscribe ( data => this.calculated = data )
  }
  divide(){
    this.calculatorService.getDivResult(this.calculated.number1, this.calculated.number2)
          .subscribe ( data => this.calculated = data )
  }
}
