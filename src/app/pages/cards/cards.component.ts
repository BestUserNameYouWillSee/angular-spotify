import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { ArtistsComponent } from '../artists/artists.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent {

  @Input() items:any[]=[];

  constructor(private router:Router) { }

  verArtists(items:any){

    let artistId;

    if(items.type==='artist'){
    artistId = items.id;
    }else{
      artistId = items.artists[0].id
    }
  }

}
