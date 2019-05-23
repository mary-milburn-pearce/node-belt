import { DashboardComponent } from './dashboard/dashboard.component';
import { PetDisplayComponent } from './pet-display/pet-display.component';
import { PetAddComponent } from './pet-add/pet-add.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'pets',component: DashboardComponent },
  { path: 'pets/new',component: PetAddComponent },
  { path: 'pets/:id',component: PetDisplayComponent },
  { path: 'pets/:id/edit', component: PetEditComponent },
  // redirect to /home if there is nothing in the url
  { path: '', pathMatch: 'full', redirectTo: '/pets' },
  // the ** will catch anything that did not match any of the above routes
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
