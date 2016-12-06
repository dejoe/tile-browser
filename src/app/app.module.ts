import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ResizableModule } from 'angular-resizable-element';

import { AppComponent } from './app.component';
import { TesterComponent } from './tester/tester.component';
import { RouterModule, Routes } from '@angular/router';
import { TileListComponent } from './tile/tile-list/tile-list.component';
import { ConfigComponent } from './config/config/config.component';
import { TileDetailComponent } from './tile/tile-detail/tile-detail.component';
import { PolymerElement } from '@vaadin/angular2-polymer';

import { TileService } from './tile/tile.service';
import { SafePipe } from './utils/safe.pipe';
import { ConfigGuard } from './utils/config-guard';
import { CompareLandingComponent } from './compare/compare-landing/compare-landing.component';
import {AppGlobalService} from './app-global.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/config', pathMatch: 'full'},
  { path: 'tile', component: TileListComponent, canActivate:[ConfigGuard] },
  { path: 'compare', component: CompareLandingComponent, canActivate:[ConfigGuard] },
  { path: 'config', component: ConfigComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TesterComponent,
    TileListComponent,
    ConfigComponent,
    TileDetailComponent,
    SafePipe,
    PolymerElement('vaadin-combo-box'),
    PolymerElement('vaadin-split-layout'),
    CompareLandingComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    FormsModule,
    HttpModule,
    ResizableModule
  ],
  providers: [TileService, AppGlobalService, ConfigGuard],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
