import { Component, OnInit, TemplateRef } from '@angular/core';
import { AudiovisualesService } from '../../services/audiovisuales.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-audiovisuales',
  templateUrl: './audiovisuales.component.html',
  styleUrls: ['./audiovisuales.component.css']
})
export class AudiovisualesComponent implements OnInit {

  data: [];

  videoSelTitle: string;
  videoId: any;

  modalRef: BsModalRef;

  constructor(private audiovisualesService: AudiovisualesService,
              private modalService: BsModalService) {}

  ngOnInit() {
    this.audiovisualesService.getAudiovisuales()
    .subscribe((resp: any) => {
      this.data = resp.audiovisuales;

    }, (err) => {});
  }

  openModal(template: TemplateRef<any>, title, id) {
    this.modalRef = this.modalService.show(template);
    this.videoSelTitle = title;
    this.videoId = id;
  }

}
