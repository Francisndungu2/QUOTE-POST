
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  mQuotes: Quote[] = [
    new Quote(0, "If you would convince a man that he does wrong, do right. But do not care to convince him. Men will believe what they see. Let them see.", "kerrykomar", "milinia cherot", new Date(2020, 9, 8), 0, 0),
    new Quote(1, "Hide yourself in God, so when a man wants to find you he will have to go there first.", "bernard akaka", "steve ride", new Date(2020, 9, 10), 0, 0),
    new Quote(2, "I would rather be an artist than a leader. Ironically, a leader has to follow the rules.", "henry kan", "Rowena Rono", new Date(2020, 9, 30), 0, 0),
    new Quote(3, "To bring up a child in the way he should go, travel that way yourself once in a while.", "john mariga", "renox wakanda", new Date(2020, 9, 19), 0, 0),

  ];


  isComplete = true;
  upvotes = 0;
  downvotes = 0;

  bestVotes = 0;
  bestAuthor: string;
  bestQuote: string;
  bestUser: string;
  lowVotes: number;
  date: any;


  newQuote(quote) {
    quote.name = quote.name;
    quote.quote = quote.quote;
    quote.author = quote.author;
    quote.date = new Date(quote.date)
    this.mQuotes.unshift(quote)
  }
  upVote(quote) {
    quote.upvotes = quote.upvotes + 1;

  }
  downVote(quote) {
    quote.downvotes = quote.downvotes + 1;

  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.mQuotes[index].quote}?`)

      if (toDelete) {
        this.mQuotes.splice(index, 1)
      }
    }
  }

  bestmQuote() {
    for (let i = 0; i < this.mQuotes.length; i++) {
      if (this.mQuotes[i].upvotes > this.bestVotes) {
        this.bestVotes = this.mQuotes[i].upvotes;
        this.bestAuthor = this.mQuotes[i].author;
        this.bestQuote = this.mQuotes[i].quote;
        this.bestUser = this.mQuotes[i].user;
        this.lowVotes = this.mQuotes[i].downvotes;
        this.date = this.mQuotes[i].date;
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
