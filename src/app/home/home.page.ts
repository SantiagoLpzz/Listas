import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
  fecha = new FormControl('');
  nombre = new FormControl('');

  tasks: {fecha:string, nombre:string, completada:boolean}[]=[];

  createTask(){
    if(this.fecha.value && this.nombre.value)
    {
      const tarea = {
        fecha:this.fecha.value,
        nombre:this.nombre.value,
        completada:false
      }
      this.tasks.push(tarea);
      this.fecha.setValue('');
      this.nombre.setValue('');
    } else {
      alert('Faltan valores por seleccionar');
    }
  }


}


