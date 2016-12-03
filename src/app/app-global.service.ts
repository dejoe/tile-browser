import { Injectable } from '@angular/core';

@Injectable()
export class AppGlobalService {
  private tileSrc:string;

  constructor() { }

  getTileSrc():string {
    this.tileSrc = localStorage.getItem("tileSrc");
    if (!this.tileSrc){
      return "";
    }
    return this.tileSrc;
  }

  setTileSrc(tileSrc):void {
    this.tileSrc = tileSrc;
    localStorage.setItem("tileSrc",tileSrc);
  }
  getDomain():string {
    let arr = this.tileSrc.split("/");
    return arr[0] + "//" + arr[2]
  }
  


}
/* This is supposed to be the communication channel 
between app and other stuff. 
This will be injected by the app to its children.
This will have the config. 
All its children will communicate by setting data.
https://angular.io/docs/ts/latest/cookbook/component-communication.html
 */