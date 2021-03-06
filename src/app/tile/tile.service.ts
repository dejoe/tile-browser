import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Tile } from './tile.model';
import { Http,Response } from '@angular/http'; 

@Injectable()
export class TileService {
  constructor(private http: Http) {  }

 /* sample call - this is kind of bullshit. 
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getHero(+params['id']) ))
  */


  getTiles(tileSrc:string):Observable<any>  {
        return this.http.get(tileSrc)
                   .map(this.extractData)
                   .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.tiles || { };
  }

  private handleError (error: Response | any) {    
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
