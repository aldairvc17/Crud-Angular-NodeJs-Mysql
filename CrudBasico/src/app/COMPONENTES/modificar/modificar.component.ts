import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipo, EquipoService } from 'src/app/SERVICES/equipo.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css'],
})
export class ModificarComponent implements OnInit {
  id_entrada= ''
  equipoActual: Equipo={ id_equipo:'', nombre:'', logo:'' };

  constructor(
    private equipoService: EquipoService,
    private antivateRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Se hace uso del service para obtener el equipo 
    this.id_entrada = <string>this.antivateRouter.snapshot.params['id'];
    this.equipoService.getUnEquipo(this.id_entrada).subscribe(
      res => {
        this.equipoActual = res[0]; // Se obtiene el primero de la lista obtenida
        console.log(this.equipoActual);
      },
      err => console.log(err)
    );
  }

  guardar(){
    /* Se hace uso del service editar el equipo, 
    * this.id_entrada => id del equipo a editar
    * this.equipoActual => objeto a guardar
    **/
    this.equipoService.editEquipo(this.id_entrada, this.equipoActual).subscribe(
      res => {
        this.router.navigate(['/inicio']);
      },
      err => console.log(err)
    );
  }
}
