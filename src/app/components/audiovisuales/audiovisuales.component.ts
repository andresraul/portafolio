import { Component, OnInit, TemplateRef } from '@angular/core';
import { AudiovisualesService } from '../../services/audiovisuales.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-audiovisuales',
  templateUrl: './audiovisuales.component.html',
  styleUrls: ['./audiovisuales.component.css']
})
export class AudiovisualesComponent implements OnInit {

  imageUrl = `${environment.homeUrl}/images/audiovisual/`;

  data: [];

  videoSelTitle: string;
  videoId: any;
  videoText: string;

  modalRef: BsModalRef;

  constructor(private audiovisualesService: AudiovisualesService,
              private modalService: BsModalService) {}

  ngOnInit() {
    this.audiovisualesService.getAudiovisuales()
    .subscribe((resp: any) => {
      this.data = resp.audiovisuales;

    }, (err) => {
      console.log(err);
    });
  }

  openModal(template: TemplateRef<any>, title, id, text) {
    this.modalRef = this.modalService.show(template);
    this.videoSelTitle = title;
    this.videoId = id;
    this.videoText = text;
  }

}
