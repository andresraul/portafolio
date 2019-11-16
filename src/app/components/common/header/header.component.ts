import { Component, OnInit, Input } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { HeaderModel } from '../../../models/header.model';
import { timeout } from 'q';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Input()slug: string;

  headerData: HeaderModel;
  image: string;
  bg: string;

  constructor(private headerService: HeaderService) {
   }

  ngOnInit() {
    this.headerService.getHeader(this.slug).subscribe((data: HeaderModel) => {
      this.headerData = data;
      this.bg = `linear-gradient(to bottom, rgba(92, 77, 66, .8) 0, rgba(92, 77, 66, .8) 100%), url(./assets/img/${data.bg})`;
    });
  }

}
