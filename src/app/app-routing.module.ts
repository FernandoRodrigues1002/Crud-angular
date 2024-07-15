import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleCreateComponent } from './people-create/people-create.component';
import { PeopleEditComponent } from './people-edit/people-edit.component';


const routes: Routes = [
  { path: 'people-list', component: PeopleListComponent },
  { path: '', redirectTo: '/people-list', pathMatch: 'full' },
  { path: 'people-create', component: PeopleCreateComponent },
  { path: 'people-edit/:id', component: PeopleEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
