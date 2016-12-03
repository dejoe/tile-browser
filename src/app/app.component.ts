import { Component } from '@angular/core';
import { AppGlobalService } from './app-global.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private appGlobalService: AppGlobalService){
    appGlobalService.setTileSrc("http://drupalrealwta.azurewebsites.net/tiles/all");
   }
}
