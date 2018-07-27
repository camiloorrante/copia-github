import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BContainerComponent } from './components/b-container/b-container.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: BContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
