import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EngrainapiService {

  constructor(private http: HttpClient) { }

  getAllUnits(url:string):Observable<any> {
    const headers = {'API-Key': '7d64ca3869544c469c3e7a586921ba37'}
    return this.http.get<any>(url, { headers})
  }
}
