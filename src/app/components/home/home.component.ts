import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  modalRef: BsModalRef;
  fullImage: any;

  photos = [
    {
      miniatura: './assets/img/portfolio/thumbnails/1.jpg',
      fullSize: './assets/img/bg-masthead1.jpg'
    },
    {
      miniatura: './assets/img/portfolio/thumbnails/2.jpg',
      fullSize: './assets/img/bg-masthead2.jpg'
    },
    {
      miniatura: './assets/img/portfolio/thumbnails/3.jpg',
      fullSize: './assets/img/bg-masthead3.jpg'
    },
    {
      miniatura: './assets/img/portfolio/thumbnails/4.jpg',
      fullSize: './assets/img/bg-masthead4.jpg'
    },
    {
      miniatura: './assets/img/portfolio/thumbnails/5.jpg',
      fullSize: './assets/img/bg-masthead5.jpg'
    },
    {
      miniatura: './assets/img/portfolio/thumbnails/6.jpg',
      fullSize: './assets/img/bg-masthead6-2.jpg'
    }
  ]

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>, image) {
    this.modalRef = this.modalService.show(template);
    this.fullImage = image;

  }

}
