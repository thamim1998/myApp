import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"],
})
export class MoviesComponent {
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {}

  allmovies: any;
  notEmptyPost = true;
  notscrolly = true;
  _value = 500;

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    const url = `http://localhost:3000/api/movies/${this._value}`;
    this.http.get(url).subscribe((data: any) => {
      this.allmovies = data;
    });
  }

  onScroll() {
    this._value++;

    // add newly fetched posts to the existing post

    const url = `http://localhost:3000/api/movies/${this._value}`;

    this.http.get(url).subscribe((data: any) => {
      this.allmovies = this.allmovies.concat(data);
      this.notscrolly = true;
      if (data.length === 0) {
        this.notEmptyPost = false;
      }
    });
  }
}
