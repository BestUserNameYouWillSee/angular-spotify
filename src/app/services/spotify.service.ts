import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const URL= environment.spotyUrl;

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getQuery(query:string){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQAZ5WFFMkXcOX3hg_dKeaI18QJlbHxX79XyVO-t9pFNxujudLvKMUJ281pn0FAMnjGQe7MdZ_rdWY6OxBTOEfBtoYaPF0Ci71pzlwgdVD3PbV6glA8',
    });

    return this.http.get(`${URL}/${query}`, {headers});


  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=21').pipe(
      map((res:any)=>{
        return res.albums.items
      })
    )
  }

  getArtist(term:string){
    return this.getQuery(`search?query=${term}&type=artist&limit=18`)
  }
}
