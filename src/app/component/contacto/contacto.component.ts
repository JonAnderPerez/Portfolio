import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WebService } from 'src/app/service/web.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  formulario: FormGroup;
  miPatternNombre: string = '[a-zA-Z]*';
  miPatternEmail: string = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}';

  constructor(private formBuilder: FormBuilder, private webService: WebService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.max(50), Validators.pattern(this.miPatternNombre)]],
      email: ['', [Validators.required, Validators.pattern(this.miPatternEmail)]],
      asunto: ['', [Validators.required]],
      mensaje: ['', [Validators.required]]
    });
  }

  onSubmit(form) {
    this.webService.postContactForm(form.value);
  }

}
