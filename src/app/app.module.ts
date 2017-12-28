import '../polyfills.ts';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {
  MatAutocompleteModule,MatButtonModule,MatButtonToggleModule,MatCardModule,MatCheckboxModule,MatChipsModule,
  MatDatepickerModule,MatDialogModule,MatExpansionModule,MatGridListModule,MatIconModule,MatInputModule,
  MatListModule,MatMenuModule,MatNativeDateModule,MatPaginatorModule,MatProgressBarModule,MatProgressSpinnerModule,MatRadioModule,
  MatRippleModule,MatSelectModule,MatSidenavModule,MatSliderModule,MatSlideToggleModule,MatSnackBarModule,MatSortModule,MatTableModule,
  MatTabsModule,MatToolbarModule,MatTooltipModule,
  MatStepperModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const appRoutes: Routes =[
  { path: 'contacts', component: ContactsComponent},
  { path: 'phonebook', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RegistrationComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);