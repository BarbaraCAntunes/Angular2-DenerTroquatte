import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent {
  public condition : boolean = true;
  public nome : string = "Barbara"
  
  ngOnInit (): void{
    setInterval(() => {
      if (this.condition) {
        this.condition = false 
      } else {
        this.condition = true
      }
    }, 2000)
  }

  public list : Array<{nome : string}> = [
    {nome : "Barbara"},
    {nome : "Marcus"},
    {nome : "Maria"},
    {nome : "João"},
  ]
}
  
  
  
