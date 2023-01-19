import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }


  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQANFNaOnz83hB7oatJvyy2soMiRdlGOlQvvZVbrjZF3mzZRxpqnDdAI3oeGEiWFI965pvQ0nOU4X9vtsN7L8ticlYxYx2WseBvsP5e9A10ZpvwzYC4'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=21', {headers})
  }
}
