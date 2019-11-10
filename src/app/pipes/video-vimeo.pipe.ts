import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'videoVimeo'
})
export class VideoVimeoPipe implements PipeTransform {


  constructor(private domSanitizer: DomSanitizer) {}
  transform(video: string): any {
const url = 'https://player.vimeo.com/video/';




return this.domSanitizer.bypassSecurityTrustResourceUrl(url + video);
  }

}