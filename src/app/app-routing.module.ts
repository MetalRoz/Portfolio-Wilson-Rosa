import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { SuccessComponent } from './components/success/success.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { VentasComponent } from './components/ventas/ventas.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path:"success", component: SuccessComponent},
  {path: "ventas", component: VentasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
