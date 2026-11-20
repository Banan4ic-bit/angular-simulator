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

  companyName: string = 'РУМТИБЕТ'

  constructor() {
    this.saveLastVisit();
    this.saveVisitCount();
    this.testCollection();
  }
  
  isColorSelected(color: Color): boolean {
    return [Color.BLUE, Color.RED, Color.GREEN].includes(color);
  }

  saveLastVisit(): void {
    const date: Date = new Date();
    localStorage.setItem('LastVisit', date.toLocaleString());
  }

  saveVisitCount(): void {
    const visitCountKey: string = 'LastVisitCount';
    const visitCount: string | null = localStorage.getItem(visitCountKey);
    let newVisitCount: number;
    if(visitCount === null) {
      newVisitCount = 1;
    } else {
      newVisitCount = Number(visitCount) + 1;
    }
    localStorage.setItem(visitCountKey, newVisitCount.toString());
  }

  testCollection(): void {
    const numbers: Collection<number> = new Collection<number>([10, 20, 30, 40, 20]);
    numbers.replaceElement(20, 100)
    numbers.deleteCertainElement(20);

    const products: Collection<string> = new Collection<string>(['apple', 'banana', 'cherry']);
    products.replaceElement('apple', 'pine');
    products.deleteCertainElement('cherry');
  }
}