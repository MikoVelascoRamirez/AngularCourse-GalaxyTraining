import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Demo2Component } from '../demo2/demo2.component';
import { Demo3Component } from '../demo3/demo3.component';

@Component({
  selector: 'app-demo1',
  standalone: true,
  imports: [CommonModule, Demo2Component, Demo3Component],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css'
})
export class Demo1Component {
  titulo = "Demo 1 - Título"
  titulo_estilo = "titulo"

  n: number = 1;
  data: string[] = ['data1', 'data2', 'data3', 'data4', 'data5'];
  tipo: string = 'A';

  constructor() {
    this.procesar();
  }

  procesar(): void {
    this.n += 1;
    if(this.n > 5){
      this.titulo_estilo = "titulo2"
    } else{
      this.titulo_estilo = "titulo"
    }
  }
}
