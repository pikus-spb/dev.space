import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRootComponent } from './app-root.component';
import { AppRoutingModule } from './app-root.routing.module';

@NgModule({
  declarations: [AppRootComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppRootComponent],
})
export class AppRootModule {}
