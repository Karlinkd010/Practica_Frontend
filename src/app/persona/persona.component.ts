import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicePersonaService } from '../service/service-persona.service';


export interface PeriodicElement {
  personaId : Number;
  nombreCompleto: string;
  correo: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
];
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  

    displayedColumns: string[] = ['personaId','nombreCompleto', 'correo','Editar','Eliminar'];
    dataSource = ELEMENT_DATA;

  constructor(private router:Router,private _personaservice: ServicePersonaService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerlist();
  }

  obtenerlist(){
    this._personaservice.getListpersona().subscribe(data =>{
     this.dataSource=data;
  
    }, error=>{
        console.error(error);
    })
  }


  editar_persona(id:number,nombre:String,correo:String){
    this.router.navigate(['persona/edit/'+id+'/'+nombre+'/'+correo]);

    console.log(id+''+nombre+correo);



 }


 eliminar_persona(id:number){
  this._personaservice.eliminarPersona(id).subscribe(data =>{
    this.toastr.success('Registro Eliminado!!', 'Correctamente');
  
    this.ngOnInit();
  

  }, error=>{
      console.error(error);
  })
}
}



