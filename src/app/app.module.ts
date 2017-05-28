import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//////////////////
// Importer les composants
//////////////////
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search-component/search.component';
import { DetailComponent } from './components/detail-component/detail.component';
import { DetailFilmComponent } from './components/detail-film-component/detail-film.component';

//////////////////
// Importer les services
//////////////////
import { StarwarsService } from './services/star-wars.service';

//////////////////
// Importer les routes
//////////////////
import { RouterModule, Routes } from "@angular/router";

const approutes: Routes = [
  { path: "accueil", component: SearchComponent },
  { path: "detail/:url", component: DetailComponent},
  { path: "detailFilm/:url", component: DetailFilmComponent},
  { path: "**", redirectTo: "/accueil", pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DetailComponent,
    DetailFilmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [StarwarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
