import { Component, OnInit } from '@angular/core';
import { ProgramacionService } from '../../services/programacion.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-programacion',
  templateUrl: './programacion.component.html',
  styleUrls: ['./programacion.component.css']
})
export class ProgramacionComponent implements OnInit {

  items: any;

  constructor(public ps: ProgramacionService,
              private router: Router) {

  this.ps.getProgramacion()
  .subscribe((data: any) => {
  this.items = data.programacion;
  });

   }

  ngOnInit() {
  }

  goProyecto(id) {
  this.router.navigate(['programacion', 'proyecto', id]);
  }

}
