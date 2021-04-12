import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceUserService } from '../service/service-user.service';

@Component({
  selector: 'app-registro-user',
  templateUrl: './registro-user.component.html',
  styleUrls: ['./registro-user.component.css']
})

export class RegistroUserComponent implements OnInit {

  form!: FormGroup;
  
  constructor(private router:Router,private toastr: ToastrService,private formBuilder: FormBuilder, private userService: ServiceUserService ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Correo: ['ndknksnsn', [Validators.required]],
      Salt: ['Nnknknknkull'],
      Password: ['lmsldlmslms', [Validators.required]],
      NombreCompleto: ['mlsmdmsm', [Validators.required]],
      Estatus: [true],
    });
 
    console.log(this.form.value);
  }

  guardarUser(){
    this.userService.crearUser(this.form.value).subscribe( data=>{

      this.toastr.success('Registro Guardada!!', 'Correctamente');
      this.form.reset();
      this.router.navigate(['login']);
    }, error=>{
     console.error(error);
    })
  
  }




}
