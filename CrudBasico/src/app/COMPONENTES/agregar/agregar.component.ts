import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipo, EquipoService } from '../../SERVICES/equipo.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  /**Se declara el objeto para agregar*/
  equipoNuevo: Equipo={id_equipo:'', nombre:'', logo:''};
  
  constructor(private equipoService:EquipoService, private router:Router) { }

  ngOnInit(): void {
  }
  /** Metodo para agregar Equipo*/
  agregarEquipo(){
    /**Se hace uso del Service para agregar el equipo
     * por ultimo retorna a la ventana de inicio
     */
    this.equipoService.addEquipo(this.equipoNuevo).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/inicio']);
      },
      err=> console.log(err)
    ); 
  }
}