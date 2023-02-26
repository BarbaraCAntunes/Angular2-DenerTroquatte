import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  public nome: string = "Barbara"
  public idade: number = 31
  public checkedDisabled : boolean = false 
  public alertaInfo(valor: MouseEvent){
    alert(valor)
  } 

}
