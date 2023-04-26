import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { SuccessComponent } from './components/success/success.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path:"success", component: SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
