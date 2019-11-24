import { Component, OnInit, Input } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { HeaderModel } from '../../../models/header.model';
import { Router } from '@angular/router';





@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()slug: string;
  @Input()proyecto: any;

  headerData: any;
  image: string;
  bg: string;

  constructor(private headerService: HeaderService,
              private router: Router) {
   }

  ngOnInit() {


    if (this.slug !== 'proyecto') {

      this.headerService.getHeader(this.slug).subscribe((data: HeaderModel) => {
        this.headerData = data;
        this.bg = `linear-gradient(to bottom, rgba(32, 24, 18, .8) 0, rgba(32, 24, 18, .8) 100%), url(./assets/img/${data.bg})`;
      });
    } else {

        this.headerData = this.proyecto;
        this.bg = `linear-gradient(to bottom, rgba(32, 24, 18, .8) 0, rgba(32, 24, 18, .8) 100%), url(./assets/img/${this.proyecto.bg})`;


    }

  }

  goGitHub() {
  this.router.navigate([this.proyecto.githuburl]);
  }

}
