import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExperienceComponent } from "./experience/experience.component";
import { HomeComponent } from "./home/home.component";
import { MoviesComponent } from "./movies/movies.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "experience",
    component: ExperienceComponent,
  },
  {
    path: "movies",
    component: MoviesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
