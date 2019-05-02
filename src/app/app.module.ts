import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- import FormsModule.

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
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
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { ShopComponent } from './shop/shop.component';
import { StoryComponent } from './story/story.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    StoryComponent,
    CartComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { 

    CdkTableModule
    CdkTreeModule
    DragDropModule
    MatAutocompleteModule
    MatBadgeModule
    MatBottomSheetModule
    MatButtonModule
    MatButtonToggleModule
    MatCardModule
    MatCheckboxModule
    MatChipsModule
    MatStepperModule
    MatDatepickerModule
    MatDialogModule
    MatDividerModule
    MatExpansionModule
    MatGridListModule
    MatIconModule
    MatInputModule
    MatListModule
    MatMenuModule
    MatNativeDateModule
    MatPaginatorModule
    MatProgressBarModule
    MatProgressSpinnerModule
    MatRadioModule
    MatRippleModule
    MatSelectModule
    MatSidenavModule
    MatSliderModule
    MatSlideToggleModule
    MatSnackBarModule
    MatSortModule
    MatTableModule
    MatTabsModule
    MatToolbarModule
    MatTooltipModule
    MatTreeModule
    ScrollingModule
    
}
