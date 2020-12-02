// eslint-disable-next-line import/prefer-default-export
export default class Movie {
  constructor(id, title, overview, poster, rating, releaseDate) {
    this.id = id;
    this.title = title;
    this.overview = overview;
    this.poster = poster;
    this.rating = rating;
    this.releaseDate = releaseDate;
  }
}
