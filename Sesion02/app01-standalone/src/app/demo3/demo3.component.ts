import { Component, input } from '@angular/core';

@Component({
  selector: 'app-demo3',
  standalone: true,
  imports: [],
  templateUrl: './demo3.component.html',
  styleUrl: './demo3.component.css'
})
export class Demo3Component {
  title = input(''); // Inputs en forma de Signals en la versión de Angular 19

}
