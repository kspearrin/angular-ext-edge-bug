import 'core-js';
import 'zone.js/dist/zone';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        AppComponent,
    ],
    entryComponents: [

    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
