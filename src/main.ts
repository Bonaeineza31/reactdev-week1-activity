export {}; // Ensuring this file is treated as a module 

// --- Starter JavaScript Code ---

// A simple Book class (using constructor function in JS)
class Book {
  title: string;
  author: string;
  year: number;

  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}
// Interface for a Review object
interface Review {
  bookId: number;
  rating: number;
  comment: string;
}
// Array to store reviews
const reviews: Review[] = [];
// Function to add a review to a book
function addReview(bookId: number, rating: number, comment: string): void {
  const review: Review = { bookId, rating, comment };
  reviews.push(review);
}

// Function to display book information
function displayBook(book: Book): void {
  const bookList = document.getElementById("book-list");
  const bookDiv = document.createElement("div");
  bookDiv.innerHTML = `
    <h2>${book.title}</h2>
    <p>By ${book.author}, ${book.year}</p>
  `;
  bookList!.appendChild(bookDiv);
}

// Create some book objects
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);

// Display the books on the webpage
displayBook(book1);
displayBook(book2);
addReview(1, 5, "An absolute classic!");
console.log(reviews);

// --- Tasks (Converting to TypeScript) ---

// Task 1: Add type annotations to the function parameters and return types.
// Task 2: Convert the Book function to a TypeScript class.
// Task 3: Create an interface for a "Review" object (with properties like bookId, rating, comment).
// Task 4: Add a function to add a review to a book (you can simulate this with an array for now).
// Task 5: Add type annotations to the new variables and functions that you created in prior steps.
