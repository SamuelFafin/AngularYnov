import { Person } from './../models/person.model'

export function personListFactory(json) {
  let persons = new Array<Person>();

  for(let item of json) {
    persons.push(new Person (
      item.name,
      item.height,
      item.mass,
      item.hair_color,
      item.skyn_color,
      item.eye_color,
      item.birth_year,
      item.gender,
      item.homeworld,
      item.url,
      item.films
    ));
  }

  return persons;
}

export function personFactory(json) {
  let person = new Person(
    json.name,
    json.height,
    json.mass,
    json.hair_color,
    json.skyn_color,
    json.eye_color,
    json.birth_year,
    json.gender,
    json.homeworld,
    json.url,
    json.films
  );

  return person;
}
