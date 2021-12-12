import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Album } from './album';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  private _albumUrl: string = '../assets/album.json';

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map((response) => <Album>response.json());
  }
}
