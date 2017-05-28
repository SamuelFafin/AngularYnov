import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarwarsService } from '../../services/star-wars.service';
import { Film } from './../../models/film.model';

@Component({
  selector: 'detail-component',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})

export class DetailFilmComponent implements OnInit {
  private sub: any;
  public url: string;
  public film: Film;

  constructor(
    private route: ActivatedRoute,
    private starwarsService: StarwarsService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      this.url = params["url"];

      this.starwarsService.getFilmByUrl(this.url)
        .subscribe((film) => {
          this.film = film;
        });
    })
  }
}
