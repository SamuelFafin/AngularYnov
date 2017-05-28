import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarwarsService } from '../../services/star-wars.service';
import { Person } from './../../models/person.model';
import { Film } from './../../models/film.model';

@Component({
  selector: 'detail-component',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  private sub: any;

  public url: string;
  public person: Person;
  public films: Film[];

  constructor(
    private route: ActivatedRoute,
    private starwarsService: StarwarsService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      this.url = params["url"];
      this.starwarsService.getPersonByUrl(this.url).subscribe((person) => {
          this.films = [];
          this.person = person;

          for (var item of person.filmsUrl) {
            this.starwarsService.getFilmByUrl(item)
              .subscribe((film) => {
                  this.films.push(film);
              });
          }
        });
    })
  }
}
