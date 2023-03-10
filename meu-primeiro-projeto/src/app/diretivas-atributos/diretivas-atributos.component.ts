import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent {
  public valor : boolean = true
  public altura : string = '20px'

  ngOnInit () : void {
    setInterval ( () => {
      if (this.valor) {
        this.valor = false
      } else {
        this.valor = true
      }
    }, 2000)
  }
}
