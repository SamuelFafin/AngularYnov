import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Person } from './../models/person.model';
import { Film } from './../models/film.model';
import { personListFactory } from './../models/person.factory';
import { personFactory } from './../models/person.factory';
import { filmFactory } from './../models/film.factory';
import 'rxjs/add/operator/toPromise';
import 'rxjs';

@Injectable()
export class StarwarsService {

  public person: Object;

  constructor(private http: Http) {}

  getListPersonByName(search: string): Observable<Person[]> {
    return this.http.get("https://swapi.co/api/people/?search=" + search)
      .map((res: Response) => {
        let resultat = res.json()["results"];
        return personListFactory(resultat);
      });
  }

  getPersonByUrl(url: string): Observable<Person> {
    return this.http.get(url)
      .map((res: Response) => {
        let resultat = res.json();
        return personFactory(resultat);
      });
  }

  getFilmByUrl(url: string): Observable<Film> {
    return this.http.get(url)
      .map((res: Response) => {
        let resultat = res.json();
        return filmFactory(resultat);
      });
  }
}
