import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../config';
import { AppGlobalService } from '../../app-global.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  config:Config = new Config('');
  constructor(private appGlobalService:AppGlobalService, private router:Router) { }

  onSubmit() {
    /* G */
    this.appGlobalService.setTileSrc(this.config.tileSrc);
    this.router.navigate(['/tile']);
    return false;
  }
  ngOnInit() {
  }

}
