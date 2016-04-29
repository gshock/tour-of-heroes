import {Injectable}     from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import {Hero}           from '../hero';
import {Observable}     from 'rxjs/Observable';



@Injectable()
export class HeroService2 {
  constructor (private http: Http) {}
  //private _heroesUrl = 'app/api/heroes';  // URL to web api
  private _heroesUrl = 'heroes.json'; // URL to JSON file
  getHeroes (): Observable<Hero[]> {
    return this.http.get(this._heroesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}