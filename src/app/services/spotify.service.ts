import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const URL = environment.spotyUrl;

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAm56eplXuzGeJwRiZuKR3_hqe444HxCYRLXZFD5vLGqPVbMExfsWh85GldGbrPwGh_wc7z8uVwmCDpr88_D9e_PO70SYpv_I11EKrbRVLLmR4qgYo',
    });

    return this.http.get(`${URL}/${query}`, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=21').pipe(
      map((res: any) => {
        return res.albums.items;
      })
    );
  }

  getArtists(term: string) {
    return this.getQuery(`search?query=${term}&type=artist&limit=18`).pipe(
      map((res: any) => {
        return res.artists.items;
      })
    );
  }

  getArtist(id:string){
    return this.getQuery(`artists/${id}`);
  }
}
