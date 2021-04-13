import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  currentSection = 'skills';

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(section) {
    document.querySelector('#' + section).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  onSectionChange(section:string) {
    this.currentSection = section;
  }

}
