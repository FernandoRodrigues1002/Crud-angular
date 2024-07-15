import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PeopleCreateComponent } from './people-create/people-create.component';
import { FormsModule } from '@angular/forms';
import { PeopleEditComponent } from './people-edit/people-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PeopleCreateComponent,
    PeopleEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
