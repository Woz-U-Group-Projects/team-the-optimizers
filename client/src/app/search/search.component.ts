import { Component } from "@angular/core";

@Component({
  selector: "app-Search",
  templateUrl: "./Search.component.html",
  styleUrls: ["./Search.component.css"]
})
export class SearchComponent {
  words = [

  ];

  filteredWords = this.words;

  term = "";

  doSearch() {
    this.filteredWords = this.words.filter(s =>
      s.toLowerCase().includes(this.term.toLowerCase())
    );
  }

  resetSearch() {
    this.term = "";
    this.filteredWords = this.words;
  }
}
