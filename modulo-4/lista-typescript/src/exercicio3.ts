enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

function organizeFilms(filmName: string, releaseYear: number, genre: GENERO, reviewScore?: number) {
  type organizedFilms = {
    name: string;
    year: number;
    genre: GENERO;
    reviewScore?: number;
  };

  if (reviewScore !== undefined) {
    const newFilm: organizedFilms = {
      name: filmName,
      year: releaseYear,
      genre: genre,
      reviewScore: reviewScore,
    }
    return newFilm
  } else {
    const newFilm2: organizedFilms = {
      name: filmName,
      year: releaseYear,
      genre: genre,
    }
    return newFilm2
  }
}
console.log(organizeFilms("Filme de ação", 2010, GENERO.ACAO, 20))
console.log(organizeFilms("Filme aterroziante", 2000, GENERO.TERROR, 50))
console.log(organizeFilms("Filme romantico", 1970, GENERO.ROMANCE))
