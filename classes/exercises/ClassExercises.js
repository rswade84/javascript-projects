class Book {
  constructor(
    title,
    author,
    copyright,
    isbn,
    pages,
    timesCheckedOut = 0,
    discarded = 'No',
  ) {
    this.title = title;
    this.author = author;
    this.copyright = copyright;
    this.isbn = isbn;
    this.pages = pages;
    this.timesCheckedOut = timesCheckedOut;
    this.discarded = discarded;
  }

  checkout(uses = 1) {
    this.timesCheckedOut += uses;
  }
}

class Manual extends Book {
  constructor(
    title,
    author,
    copyright,
    isbn,
    pages,
    timesCheckedOut = 0,
    discarded = 'No',
  ) {
    super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
  }

  dispose(currentYear) {
    if (currentYear - this.copyright > 5) {
      this.discarded = 'Yes';
    }
  }
}

class Novel extends Book {
  constructor(
    title,
    author,
    copyright,
    isbn,
    pages,
    timesCheckedOut = 0,
    discarded = 'No',
  ) {
    super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
  }

  dispose() {
    if (this.timesCheckedOut > 100) {
      this.discarded = 'Yes';
    }
  }
}
