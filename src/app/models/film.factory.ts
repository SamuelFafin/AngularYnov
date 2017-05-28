import { Film } from './../models/film.model'

export function filmFactory(json) {
  let person = new Film(
    json.title,
    json.episode_id,
    json.opening_crawl,
    json.director,
    json.producer,
    json.release_date,
    json.url
  );

  return person;
}
