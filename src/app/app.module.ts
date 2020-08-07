import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { RouterModule } from '@angular/router'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//IMPORT THE PLUGINS
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { ExploreContainerComponent } from './explore-container/explore-container.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
    RouterModule.forRoot([
      { path: '', component: ExploreContainerComponent}
    ])
    ],
  providers: [
    StatusBar,
    SplashScreen,
    //ADD GEOLOCATION Y GEOCODER ON THE PROVIDERS.
    Geolocation,    
    NativeGeocoder,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
