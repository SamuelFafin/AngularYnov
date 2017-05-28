export class Film {
  public title: string;
  public episodeId: number;
  public openingCrawl: string;
  public director: string;
  public productor: string;
  public releaseDate: string;
  public url: string;

  public constructor (
    title: string,
    episodeId: number,
    openingCrawl: string,
    director: string,
    producer: string,
    releaseDate: string,
    url
  ) {
    this.title = title;
    this.episodeId = episodeId;
    this.openingCrawl = openingCrawl;
    this.director = director;
    this.productor = releaseDate;
    this.releaseDate = releaseDate;
    this.url = url
  }
}
