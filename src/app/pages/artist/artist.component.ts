import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.sass']
})
export class ArtistsComponent implements OnInit {

  constructor(private spotify:SpotifyService, private router:Router) { }

  ngOnInit(): void {
  }

}
