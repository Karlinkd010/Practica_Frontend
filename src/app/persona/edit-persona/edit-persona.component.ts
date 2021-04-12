import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicePersonaService } from 'src/app/service/service-persona.service';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {


 
  form!:FormGroup;
  id:number | undefined;

  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private formBuilder: FormBuilder, private personaservice: ServicePersonaService) { }


  ngOnInit(): void {

    this.form = this.formBuilder.group({
      personaId: [this.route.snapshot.paramMap.get('id')],
      nombreCompleto: [this.route.snapshot.paramMap.get('nombre')],
      correo: [this.route.snapshot.paramMap.get('correo')]

    });


  }

  editar_persona(){
   console.log(this.form.value.personaId);

   this.personaservice.editarPersona(this.form.value.personaId,this.form.value).subscribe( data=>{

    this.toastr.success('Registro Actualizado!!', 'Correctamente');
    this.form.reset();
    this.router.navigate(['persona']);
   
  }, error=>{
   console.error(error);
  })
  
  }

}


