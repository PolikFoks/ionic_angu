import { Component, OnInit } from '@angular/core';

//указываем что используем это как компонент
@Component({
  //путь, куда вставляется наш файл
  selector: 'app-cards',
  //путь html шаблона
  templateUrl: './cards.component.html',
  //путь к файлу стилей компонента 
  styleUrls: ['./cards.component.scss'],
})

//любые сущности в ангуляр это классы, 
//они экспортируются что их видели в других файлах
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
