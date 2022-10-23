import { Component, OnInit } from '@angular/core';

import { EquipoService } from '../../SERVICES/equipo.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  lista:any=[];// Se declara la lista a obtener todos los equipos
  constructor(private EquipoService:EquipoService, private router:Router) { }

  ngOnInit(): void {
    this.listarEquipo(); // Ejecuta el metodo de listarEquipo() al iniciar la ventana
  }

  /**Metodo para listar los equipos*/
  listarEquipo()
  {
    /**Se hace uso del Service para obtener todos equipos*/
    this.EquipoService.getEquipos().subscribe(
      res=>{
        this.lista=res;
        console.log(res);
      },
      err => console.log(err)
    );
  }
  /**Metodo para ir a la ventana de modificar con el id del equipo correspondiente */
  modificar(id:string){
    this.router.navigate(['/edit/'+id]);
  }
  
  deleteEquipo(id_equipo:string){
    /**Se hace uso del Service para eliminar el equipo y luego recargar la ventana */
    this.EquipoService.deleteEquipo(id_equipo).subscribe(
      res=>{
        this.ngOnInit();
      },
      err => console.log(err)
    );
  }
}
