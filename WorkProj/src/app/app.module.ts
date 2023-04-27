import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { DocumentsDetailComponent } from './documents/documents-detail/documents-detail.component';
import { DocumentsItemComponent } from './documents/documents-item/documents-item.component';
import { DocumentsListComponent } from './documents/documents-list/documents-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentsComponent,
    DocumentEditComponent,
    DocumentsDetailComponent,
    DocumentsItemComponent,
    DocumentsListComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
