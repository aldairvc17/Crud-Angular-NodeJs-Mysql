import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  //Metodos para consumir los datos del API en Node
  url = '/api'; //Se coloca la ruta sin el localhost
  constructor(private http: HttpClient) { }

  // retornar todos los equipos haciendo uso del api
  getEquipos(){
    return this.http.get(this.url);
  }

  /**
   * Metodo para retornar un equipo, pero en realidad retorna una lista
   * por lo cual se tiene que poner res[0] en el componente modificar
   * id:string => id del equipo a obtener
   */
  getUnEquipo(id:string){
    return this.http.get<Equipo[]>(this.url+'/'+id);
  }

  /**
   * Metodo para agregar un equipo haciendo uso del api
   * por lo cual se tiene que poner res[0] en el componente modificar
   * id:string => id del equipo a obtener
   */
  addEquipo(equipo:any){
    return this.http.post(this.url, equipo);
  }

  /**
   * Metodo para eliminar un equipo haciendo uso del api
   * id:string => id del equipo a eliminar
   */
  deleteEquipo(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  /**
   * Metodo para editar un equipo haciendo uso del api
   * id:string => id del equipo a editar
   * equipo:Equipo => Equipo a guardar
   */
  editEquipo(id:string, equipo:Equipo){
    return this.http.put(this.url+'/'+id, equipo);
  }
  
}

export interface Equipo {
  id_equipo?:string;
  nombre?:string;
  logo?:string;
}
