class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
      this.numChecked = 0;
    }
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
    
    getAverageRating() {
      const initialValue = 0;
      const sum = this._ratings.reduce((v1,v2) => v1 + v2, initialValue);
      const average = sum / this._ratings.length;
      return average;
        }
  
    toggleCheckOutStatus() {
      this._isCheckedOut?this._isCheckedOut = false:this._isCheckedOut = true;
    }
  
    addRating(element) {
      this._ratings.push(element);
    }
  
  }
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      
      this._author = author;
      this._pages = pages;
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
      }
      get director() {
        return this._director;
      }
  
      get runTime() {
        return this._runTime;
      }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.ratings);
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());