class Movie {
	constructor(title, director, genre, year, rating) {
		this.title = title
		this.director = director
		this.genre = genre
		this.year = year
		this.rating = rating
	}

	getOverview() {
		return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.year}. It received a rating of ${this.rating}`
	}
}

let thor = new Movie("Thor", "idk", "action", 2012, 4.5)

console.log(thor.getOverview())