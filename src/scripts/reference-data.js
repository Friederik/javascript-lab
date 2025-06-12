

function setupBase() {
    const movies = []

    return {
        getAllMovie: function() {
            return movies.map((element) => element)
        },
        addMovie: function(title, year, genres, rating, watched) {
            movies.push({
                title: title,
                year: year,
                genres: genres,
                rating: rating,
                watched: watched
            })
        },
        getUnwatchedHighRated: function(minRating) {
            return movies.filter((movie) => movie.rating > minRating).filter((movie) => movie.watched === true).sort((m1, m2) => m2.rating - m1.rating)
        },
        groupByGenre: function() {
            const allGenres = new Set()
            movies.forEach((movie) => {
                movie.genres.split(', ').forEach((genre) => {
                    allGenres.add(genre)
                })
            })
            const moviesByGenres = new Map()
            allGenres.forEach((genre) => {
                moviesByGenres.set(genre, movies.filter((movie) => movie.genres.includes(genre)))
            })

            return moviesByGenres
        },
    }
}

const base = setupBase()

base.addMovie("Пульп фикшн", 1970, "Thriller, Horror", 9, true)
base.addMovie("Брат 2", 1982, "Drama, Horror", 10, false)
base.addMovie("Брат", 1981, "Drama, Comedy, Horror", 8, true)

console.log(base.groupByGenre());
