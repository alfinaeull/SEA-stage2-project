/**
 * Data Catalog Project Modified Starter Code - SEA Stage 2s
 */

// This is an nested array of objects (books)
let books = [
    {
        title: "The Martian",
        cover: "https://m.media-amazon.com/images/I/71SRkQ-DwZL._AC_UF1000,1000_QL80_.jpg",
        author: "Andy Weir",
        year: 2011,
        rating: 4.4
    },
    {
        title: "Ready Player One",
        cover: "https://m.media-amazon.com/images/I/91FGDm7MfIL._AC_UF1000,1000_QL80_.jpg",
        author: "Ernest Cline",
        year: 2011,
        rating: 4.2
    },
    {
        title: "The Hunger Games",
        cover: "https://m.media-amazon.com/images/I/71un2hI4mcL._AC_UF1000,1000_QL80_.jpg",
        author: "Suzanne Collins",
        year: 2008,
        rating: 4.3
    },
    {
        title: "Ender's Game",
        cover: "https://m.media-amazon.com/images/I/81c2Rdl-TXL._AC_UF1000,1000_QL80_.jpg",
        author: "Orson Scott Card",
        year: 1985,
        rating: 4.3
    },
    {
        title: "Redshirts",
        cover: "https://m.media-amazon.com/images/I/812UjkJX5eL._AC_UF1000,1000_QL80_.jpg",
        author: "John Scalzi",
        year: 2012,
        rating: 3.9
    },
    {
        title: "Leviathan Wakes",
        cover: "https://m.media-amazon.com/images/I/51NidZzffML._AC_UF1000,1000_QL80_.jpg",
        author: "James S.A. Corey",
        year: 2011,
        rating: 4.3
    },
    {
        title: "Dr. Jekyll and Mr. Hyde",
        cover: "https://m.media-amazon.com/images/I/51neI+ff8fL._AC_UF1000,1000_QL80_.jpg",
        author: "Robert Louis Stevenson",
        year: 1886,
        rating: 3.8
    },
    {
        title: "The Time Machine",
        cover: "https://m.media-amazon.com/images/I/61KxCNiWAxL._AC_UF1000,1000_QL80_.jpg",
        author: "H.G. Wells",
        year: 1895,
        rating: 3.9
    },
    {
        title: "Journey to the Center of the Earth",
        cover: "https://m.media-amazon.com/images/I/91KW9L4PYhL._AC_UF1000,1000_QL80_.jpg",
        author: "Jules Verne",
        year: 1864,
        rating: 3.8
    },
    {
        title: "Twenty Thousand Leagues Under the Sea",
        cover: "https://m.media-amazon.com/images/I/71zc4dyOnAL._AC_UF1000,1000_QL80_.jpg",
        author: "Jules Verne",
        year: 1870,
        rating: 3.9
    },
    {
        title: "Way Station",
        cover: "https://m.media-amazon.com/images/I/A1NdX+NGD5L._AC_UF1000,1000_QL80_.jpg",
        author: "Clifford D. Simak",
        year: 1963,
        rating: 4.0
    },
    {
        title: "Parable of the Sower",
        cover: "https://m.media-amazon.com/images/I/71568fwf4CL._AC_UF1000,1000_QL80_.jpg",
        author: "Octavia E. Butler",
        year: 1993,
        rating: 4.2
    },
    {
        title: "Project Hail Mary",
        cover: "https://m.media-amazon.com/images/I/81zD9kaVW9L._AC_UF1000,1000_QL80_.jpg",
        author: "Andy Weir",
        year: 2021,
        rating: 4.5
    },
    {
        title: "The Handmaid's Tale",
        cover: "https://m.media-amazon.com/images/I/61su39k8NUL._AC_UF1000,1000_QL80_.jpg",
        author: "Margaret Atwood",
        year: 1985,
        rating: 4.1
    },
    {
        title: "A Wrinkle in Time",
        cover: "https://m.media-amazon.com/images/I/81oqdz4hkeL._AC_UF1000,1000_QL80_.jpg",
        author: "Madeleine L'Engle",
        year: 1962,
        rating: 4.0
    },
    {
        title: "The Always War",
        cover: "https://m.media-amazon.com/images/I/71TMPtbjBdL._AC_UF1000,1000_QL80_.jpg",
        author: "Margaret Peterson Haddix",
        year: 2011,
        rating: 3.4
    },
];

// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    for (let i = 0; i < books.length; i++) {
        let title = books[i].title;

        let author = books[i].author;

        let year = books[i].year;

        let rating = books[i].rating;

        let imageURL = books[i].cover;

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, author, year, rating, imageURL); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newTitle, newAuthor, newYear, newRating, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Cover";

    const cardAuthor = card.querySelector("#author");
    cardAuthor.textContent = "AUTHOR: " + newAuthor;

    const cardYear = card.querySelector("#year");
    cardYear.textContent = "YEAR PUBLISHED: " + newYear;

    const cardRating = card.querySelector("#rating");
    cardRating.textContent = "GOODREADS RATING: " + newRating;

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function showRandomCard() {

    // This function generates a random number from the range of size of books
    // Source *NOT MINE*: https://www.educative.io/answers/how-to-generate-a-random-number-between-a-range-in-javascript
    function generateRandom(min = 0, max = 15) {

        // Find diff
        let difference = max - min;

        // Generate random number 
        let rand = Math.random();

        // Multiply with difference 
        rand = Math.floor(rand * difference);

        // Add with min value 
        rand = rand + min;

        return rand;
    }

    var num = generateRandom(); // Get the random index

    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    let title = books[num].title;

    let author = books[num].author;

    let year = books[num].year;

    let rating = books[num].rating;

    let imageURL = books[num].cover;

    // Display the random card
    const Card = templateCard.cloneNode(true);
    editCardContent(Card, title, author, year, rating, imageURL);
    cardContainer.appendChild(Card);

}

function sortByYear() {

    // Creates new books array sorted by year published
    const sorted_books = books.slice().sort(function (a, b) {
        return a.year - b.year;
    });

    // Display in new sorted order
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    for (let i = 0; i < sorted_books.length; i++) {
        let title = sorted_books[i].title;

        let author = sorted_books[i].author;

        let year = sorted_books[i].year;

        let rating = sorted_books[i].rating;

        let imageURL = sorted_books[i].cover;

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, author, year, rating, imageURL); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function sortByRating() {

    // Creates new books array sorted by rating (high to low)
    const books_sorted = books.slice().sort(function (a, b) {
        return b.rating - a.rating;
    });

    // Display in new sorted order
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    for (let i = 0; i < books_sorted.length; i++) {
        let title = books_sorted[i].title;

        let author = books_sorted[i].author;

        let year = books_sorted[i].year;

        let rating = books_sorted[i].rating;

        let imageURL = books_sorted[i].cover;

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, author, year, rating, imageURL); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}