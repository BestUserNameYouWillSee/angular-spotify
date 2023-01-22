import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images:any[]): any {

    if (!images){
      return 'assets/images/noimages.png';
    }

    if(images.length > 0){
      return images[1].url;
    }else{
      return 'assets/images/noimages.png';
    }

  }

}
