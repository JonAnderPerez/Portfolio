import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  @Input() proyecto;

  constructor() { }

  ngOnInit(): void {
  }

}
