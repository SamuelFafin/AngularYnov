import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../services/star-wars.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  public index: number;
  public boolInit: boolean;
  public error: string;
  public searchText: string;
  public result: Person[];
  public resultShow: Object[];

  constructor(private starWarsService: StarwarsService) {

  }

  ngOnInit() {
    this.index = 0;
    this.boolInit = true;
    this.searchText = "";
    this.defaultSearch();
  }

  defaultSearch() {
    this.starWarsService.getListPersonByName(this.searchText)
      .subscribe((list) => {
        this.result = list;
      });
  }

  searchByName() {
    this.error = "";

    if(this.searchText.length <= 0) {
      this.error = "Veuillez saisir une recherche !"
    } else {
      this.starWarsService.getListPersonByName(this.searchText)
        .subscribe((list) => {
          this.result = list;
        });
    }
  }

  pagination() {

  }
}
