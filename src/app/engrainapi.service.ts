import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EngrainapiService {

  constructor(private http: HttpClient) { }

  // THIS WILL FETCH DATA FROM THE PHP/LARAVEL SERVER BASED ON
  //THE PER PAGE COUNT AND CURRENT PAGE BEING PASSED IN THE FUNCTION
  getAllUnits(val1:number, val2:number):Observable<any> {
    const headers = {'API-Key': '7d64ca3869544c469c3e7a586921ba37'}
    return this.http.get<any>(`https://engrain.up.railway.app/?per-page=${val1}&page=${val2}`, { headers})
  }
}