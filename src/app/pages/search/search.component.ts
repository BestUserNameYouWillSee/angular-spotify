import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent{

  artists:any[]=[];

  constructor(private spotify:SpotifyService) { }



  fetch(term:string){

    this.spotify.getArtists(term).subscribe((res:any)=>{
      this.artists=res.artists.items;
      console.log(this.artists);
    })

  }

}
