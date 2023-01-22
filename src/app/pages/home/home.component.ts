import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  NewReleases:any[]=[];

  constructor(private spotify:SpotifyService) {

    this.spotify.getNewReleases().subscribe((res:any)=>{

      this.NewReleases = res;


    })

  }

  ngOnInit() {


  }

}
