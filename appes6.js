// Class for the book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
};

// Class for the UI
class UI {
  addBookToList(book) {
    const list = document.getElementById('book-list');

    // Create a TR element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;
  
    list.appendChild(row);
  }

  showAlert(msg, className) {
    // Create a div
    const div = document.createElement('div');
    // Add class
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(msg));
    // Get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');

    // Insert alert
    container.insertBefore(div, form);

    // Disappear after 3 sec
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000)
  }

  deleteBook(target) {
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
    };
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
};

// Event listeners for adding a book
document.getElementById('book-form').addEventListener('submit', function(e) {
  // Get form values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  // Instantiating a book
  const book = new Book(title, author, isbn);
  
  // Instantiate UI
  const ui = new UI();

  // Validate
  if(title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');

  } else {
    // Add book to list
    ui.addBookToList(book);

    // Show Alert
    ui.showAlert('book added', 'succes');

    // Clear fields
    ui.clearFields();
  }


  e.preventDefault();
});

// Event listener for deleting a book
document.getElementById('book-list').addEventListener('click', function(e) {
  console.log('jippie');

  // Instantiate UI
  const ui = new UI();
  ui.deleteBook(e.target);

  // Show message
  ui.showAlert('Book Removed', 'succes');

  e.preventDefault();
})