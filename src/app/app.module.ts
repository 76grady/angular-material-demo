import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MatButtonModule, 
  MatCheckboxModule, 
  MatSelectModule, 
  MatOptionModule, 
  MatInputModule, 
  MatToolbarModule, 
  MatIconModule, 
  MatIcon, 
  MatSidenavModule, 
  MatCardModule,
  MatTableModule,
  MatDialogModule } from '@angular/material';
import { AddPrioirtyComponent } from './add-prioirty/add-prioirty.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TextEditComponent } from './text-edit/text-edit.component';
import { PrioritiesGridComponent } from './priorities-grid/priorities-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPrioirtyComponent,
    SideMenuComponent,
    TextEditComponent,
    PrioritiesGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatToolbarModule, 
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule
  ],
  entryComponents: [AddPrioirtyComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
