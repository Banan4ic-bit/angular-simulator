import { Component } from '@angular/core';
//import './training';
import { Color } from '../enums/Color';
import { Collection } from './collection';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  constructor() {
    this.saveLastVisit();
    this.saveVisitCount();
  }
  
  companyName: string = 'РУМТИБЕТ'
  
  //Проверка переданного цвета
  isColorSelected(color: Color): boolean {
    return color === Color.RED || color === Color.BLUE || color === Color.GREEN
  }

  //Сохранение даты последнего захода на страницу в локальное хранилище
  saveLastVisit(): void {
    const date = new Date()
    localStorage.setItem('LastVisit', date.toLocaleString())
    console.log(localStorage.getItem('LastVisit'))
  }

  //Сохранение количества заходов на странциу в локальное хранилище
    saveVisitCount(): void {
      if(localStorage.getItem('LastVisitCount') === null) {
        localStorage.setItem('LastVisitCount', '1')
      } else {
        localStorage.setItem('LastVisitCount', (Number(localStorage.getItem('LastVisitCount')) + 1).toString())
    }
  }
}

const app = new AppComponent;
console.log(app.isColorSelected(Color.GREEN))

const numbers = new Collection<number>([10, 20, 30, 40, 20]);
numbers.replaceElement(20, 100)
console.log(numbers.getAll())
numbers.deleteCertainElement(20);
console.log(numbers.getAll());


const products = new Collection<string>(['apple', 'banana', 'cherry']);
products.replaceElement('apple', 'pine');
console.log(products.getAll());
products.deleteCertainElement('cherry');
console.log(products.getAll());