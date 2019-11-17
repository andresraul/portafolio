import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramacionService } from '../../services/programacion.service';



@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  id: any;
  datos: any;

  constructor(private activatedRoute: ActivatedRoute,
              public ps: ProgramacionService) {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
    });
   }

  ngOnInit() {
    this.ps.getProgramacionById(this.id)
    .subscribe((data: any) => {

      this.datos = {
      mainText: data.data.title,
      secondaryText: data.data.body,
      githuburl: data.data.githuburl,
      slug: 'proyecto',
      bg: 'bg-masthead6.jpg'
    };

    });
  }

}
