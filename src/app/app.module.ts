import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationPlusComponent } from './components/Maps-components/location-plus/location-plus.component';
import { AddAutocompleteAddessComponent } from './components/Maps-components/add-autocomplete-addess/add-autocomplete-addess.component';
import { ChooseMapViewComponent } from './components/Maps-components/choose-map-view/choose-map-view.component';
import { NeighborhoodDiscoveryComponent } from './components/Maps-components/neighborhood-discovery/neighborhood-discovery.component';
import { AddStyleToYourMapComponent } from './components/Maps-components/add-style-to-your-map/add-style-to-your-map.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationPlusComponent,
    AddAutocompleteAddessComponent,
    ChooseMapViewComponent,
    NeighborhoodDiscoveryComponent,
    AddStyleToYourMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
