import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/service/web.service';
import { Testimonio } from "src/app/interface/testimonio";
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.css']
})
export class TestimoniosComponent implements OnInit {

  testimonios: Testimonio[];

  //Opciones del carrousel
  customOptions: OwlOptions = {
    loop: true,
    center: true,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 3
      },
      1024: {
        items: 3
      },
      1200: {
        items: 3
      }
    }
  };

  constructor(private webService: WebService) { }

  ngOnInit(): void {
    this.webService.getTestimonios().subscribe(
      data => {
        this.testimonios = data;
      }, err => {
        console.log(JSON.parse(err.error).message);
      }
    );
  }

}
