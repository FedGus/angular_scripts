import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PersonViewComponent } from './person-view/person-view.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { FilterFirstNamePipe } from './pipes/filter-first-name.pipe';
import { FilterLastNamePipe } from './pipes/filter-last-name.pipe';

import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterComponent } from './filter/filter.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PersonViewComponent,
    PersonAddComponent,
    FilterFirstNamePipe,
    FilterLastNamePipe,
    HeaderComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    FormsModule,
    TextMaskModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
