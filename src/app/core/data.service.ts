import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Content } from '../shared/models/content.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private contentPath = 'assets/i18n/content.json';

  constructor(private http: HttpClient) {}

  public getContent(): Observable<Content> {
    return this.http.get<Content>(this.contentPath);
  }
}
