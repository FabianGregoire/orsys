import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { StyleTestComponent } from './style-test/style-test.component';
import { SecondComponent } from './second/second.component';
import { CvComponentComponent } from './cv-component/cv-component.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { DetailsComponentComponent } from './details-component/details-component.component';
import { ItemComponentComponent } from './item-component/item-component.component';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { ListAccountComponent } from './accounts/list-account/list-account.component';
import { SetAccountComponent } from './accounts/set-account/set-account.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    StyleTestComponent,
    SecondComponent,
    CvComponentComponent,
    ListComponentComponent,
    DetailsComponentComponent,
    ItemComponentComponent,
    AddAccountComponent,
    ListAccountComponent,
    SetAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
