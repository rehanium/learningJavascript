// function Book(title, author, ISBN, numCopies) {
// 	this.title = title
// 	this.author = author
// 	this.isbn = ISBN
// 	this.numCopies = numCopies
// }

// Book.prototype.getAvailability = function() {
// 	if (this.numCopies === 0) {
// 		return "Out of stock"
// 	}
// 	else if (this.numCopies < 10) {
// 		return "Low stock"
// 	}
// 	return "In stock"
// }

// Book.prototype.sell = function(numCopiesSold = 1) {
// 	this.numCopies -= numCopiesSold
// }

// Book.prototype.reStock = function(numCopiesStocked = 5) {
// 	this.numCopies += numCopiesStocked
// }

class Book {
	constructor(title, author, ISBN, numCopies) {
		this.title = title
		this.author = author
		this.isbn = ISBN
		this.numCopies = numCopies
	}

	getAvailability() {
	if (this.numCopies === 0) {
		return "Out of stock"
	}
	else if (this.numCopies < 10) {
		return "Low stock"
	}
	return "In stock"
	}

	sell(copies = 1) {
		this.numCopies -= copies
	}

	reStock(copies = 5) {
		this.numCopies += copies
	}
}

const HungerGames = new Book("Hunger Games", "Suzzane", 123919, 5)
console.log(HungerGames.getAvailability())
HungerGames.reStock(12)
console.log(HungerGames.getAvailability())
HungerGames.sell(17)
console.log(HungerGames.getAvailability())

