import { Film } from './film.model';

export class Person {
  public name: string;
  public height: string;
  public mass: string;
  public hair_color: string;
  public skyn_color: string;
  public eye_color: string;
  public birth_year: string;
  public gender: string;
  public homeworld: string;
  public url: string;
  public filmsUrl: string[];

  public constructor(
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skyn_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    url: string,
    films: string[]
  ) {
    this.name = name;
    this.height = height;
    this.mass = mass;
    this.hair_color = hair_color;
    this.skyn_color = skyn_color;
    this.eye_color = eye_color;
    this.birth_year = birth_year;
    this.gender = gender;
    this.homeworld = homeworld;
    this.url = url;
    this.filmsUrl = films;
  }
}
