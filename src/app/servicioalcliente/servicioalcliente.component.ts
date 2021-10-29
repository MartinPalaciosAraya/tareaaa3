import { Component, OnInit } from '@angular/core';

import{FormBuilder,FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-servicioalcliente',
  templateUrl: './servicioalcliente.component.html',
  styleUrls: ['./servicioalcliente.component.scss']
})
export class ServicioalclienteComponent implements OnInit {

  activarMsg:boolean=false;

  formulario:FormGroup;


  constructor(public Form: FormBuilder) {
    this.formulario=this.Form.group({
      nombre: ["", [Validators.required,Validators.maxLength(50)]],
      "telefono": ["", Validators.required],
      "correo": ["", [Validators.required, Validators.email]],
      "opcion": ["", Validators.required],
      "mensaje": ["", [Validators.required,Validators.maxLength(500)]],
    })
  }

  ngOnInit(): void {
  }


  validacion(){
    console.log(this.formulario.get("nombre")?.value);

    this.activarMsg=true;
  }

}
