//Последние изменения быди внесены 03.03.22 10-30
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rechner',
  templateUrl: './rechner.component.html',
  styleUrls: ['./rechner.component.scss'],
})
export class RechnerComponent implements OnInit {

  numberDisplay = ' '
  myNum: number = null
  operator: any = null
  myCursor = false
  coma = false

  constructor() { }

  ngOnInit() {}

  click(val: any) {
    switch (val) {
      case 'ac':
        this.numberDisplay = '0'
        this.myNum = null
        this.operator = null
        this.myCursor = false
        break
      case '+/-':
        if (Math.sign(parseInt(this.numberDisplay, 0)) === 1) {
          const sign = -Math.abs(parseInt(this.numberDisplay, 0))
          this.numberDisplay = sign.toString()
        } else if (Math.sign(parseInt(this.numberDisplay, 0)) === -1) {
          const sign = Math.abs(parseInt(this.numberDisplay, 0))
          this.numberDisplay = sign.toString()
        } else {
          this.numberDisplay = this.numberDisplay
        }
        break

      case '%':
        this.addProzent()
        break
      case '/':
        this.addOperator('/')
        break
      case 'X':
        this.addOperator('X')
        break
      case '-':
        this.addOperator('-')
        break
      case '+':
        this.addOperator('+')
        break
      case '=':
        if (this.myNum !== null && this.operator !== null) this.myCalculation()
        this.operator = null
        break
      case '0':
        this.addNum('0')
        break
      case '1':
        this.addNum('1')
        break
      case '2':
        this.addNum('2')
        break
      case '3':
        this.addNum('3')
        break
      case '4':
        this.addNum('4')
        break
      case '5':
        this.addNum('5')
        break
      case '6':
        this.addNum('6')
        break
      case '7':
        this.addNum('7')
        break
      case '8':
        this.addNum('8')
        break
      case '9':
        this.addNum('9')
        break
      case ',':
        this.floatPoimt()
        break
    }
  }

  //Определение числа
  addNum(num: string) {
    if (num === '0') {
      if (this.myCursor === true) {
        this.numberDisplay = num
        this.myCursor = false
      } else if (this.numberDisplay !== '0') 
      {
        //Добавляем точку 
        this.coma === true ? this.numberDisplay = `${this.numberDisplay.toString()}.${num}` 
        : this.numberDisplay = this.numberDisplay.toString() + num
      } else if (this.numberDisplay === '0') 
      {
        if (this.coma === true) this.numberDisplay = `${this.numberDisplay.toString()}.${num}`
      }
    } else {
      if (this.myCursor === true) {
        this.numberDisplay = num
        this.myCursor = false
      } else if (this.numberDisplay === '0') {
        if (this.coma === true) 
        {
          this.numberDisplay.toString().indexOf('.') > -1 ? this.numberDisplay = this.numberDisplay.toString() + num 
          : this.numberDisplay = `${this.numberDisplay.toString()}.${num}`
        } else {
          this.numberDisplay = num
        }
      } else {
        if (this.coma === true) {
          this.numberDisplay.toString().indexOf('.') > -1 ? this.numberDisplay = this.numberDisplay.toString() + num 
          : this.numberDisplay = `${this.numberDisplay.toString()}.${num}`
        } else {
           this.numberDisplay = this.numberDisplay.toString() + num
        }
      }
    }
    
  }

  //добавление запятой, что б  не дублировалось
  floatPoimt() {
    this.coma === false ? this.coma = true : this.coma 
  }
  
  //Добавление оператора
  addOperator(operator: string) {
    if (this.myCursor === false) {

      if (this.myNum === null) {
        //контроль  запятой
        this.coma === true ? this.myNum = parseFloat(this.numberDisplay) : this.myNum = parseInt(this.numberDisplay, 0)
      }
      //Контроль пустоты полей и действия
      if (this.myNum !== null && this.operator !== null) this.myCalculation();
      
    }
    this.coma = false;
    this.operator = operator;
    this.myCursor = true;
  }

  //Определение процента
  addProzent() {
    this.coma 
    this.myNum = parseInt(this.numberDisplay, 0) / 100 
    this.numberDisplay = this.myNum.toString();
  }

  //Вчисления
  myCalculation() {
    !this.coma
    switch (this.operator) {
      case '/':
        this.myNum = (this.myNum / parseFloat(this.numberDisplay)) || (this.myNum / parseInt(this.numberDisplay, 0))
        break;
      case 'X':
        this.myNum = (this.myNum * parseFloat(this.numberDisplay)) || (this.myNum * parseInt(this.numberDisplay, 0))
        break;
        case '-':
          this.myNum = (this.myNum - parseFloat(this.numberDisplay)) || (this.myNum - parseInt(this.numberDisplay, 0))
        break;
      case '+':
        this.myNum = (this.myNum + parseFloat(this.numberDisplay)) || (this.myNum + parseInt(this.numberDisplay, 0))
        break;
    }
    this.numberDisplay = this.myNum.toString();
  }

}
