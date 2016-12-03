import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AppGlobalService } from '../app-global.service';

@Injectable()
export class ConfigGuard implements CanActivate{
    constructor (private appGlobalService: AppGlobalService){}

    canActivate(){
        let config = this.appGlobalService.getTileSrc();
        if (config){
            return true;
        }else {
            return false;
        }
    }
}
