import { Component, OnInit,Input } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicePersonaService } from 'src/app/service/service-persona.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-persona-add',
  templateUrl: './persona-add.component.html',
  styleUrls: ['./persona-add.component.css']
})
export class PersonaAddComponent implements OnInit {
  form!: FormGroup;
  constructor(private router:Router,private toastr: ToastrService,private formBuilder: FormBuilder, private personaservice: ServicePersonaService) { }

  ngOnInit(): void {
    
    this.form = this.formBuilder.group({
      nombreCompleto: ['', [Validators.required]],
      correo: ['', [Validators.required]]

    });

  }


  guardar_persona(){
    this.personaservice.crearPersona(this.form.value).subscribe( data=>{

      this.toastr.success('Registro Guardada!!', 'Correctamente');
      this.form.reset();
      this.router.navigate(['persona']);
     
    }, error=>{
     console.error(error);
    })
  
  }



 




}
