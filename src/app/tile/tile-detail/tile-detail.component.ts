import { Component, OnInit, Input } from '@angular/core';
import { Tile } from '../tile.model';
  import { TileService } from '../tile.service';
import { SafePipe } from '../../utils/safe.pipe';
import { ResizeEvent } from 'angular-resizable-element';

import { AppGlobalService } from '../../app-global.service';

@Component({
  selector: 'app-tile-detail',
  templateUrl: './tile-detail.component.html',
  styleUrls: ['./tile-detail.component.css']
})
export class TileDetailComponent implements OnInit {
  @Input() tile: Tile;
  payloadURL: string = "";
  constructor(private appGlobalService:AppGlobalService) { }
  get diagnostic() { return JSON.stringify(this.tile); }

  ngOnInit() {
    this.setURL();
  }
  ngOnChanges() {
    this.setURL();
  }
  setURL() {
    if (this.tile.field_tile_eg_url) {
      this.payloadURL = this.appGlobalService.getDomain() + this.tile.field_tile_eg_url.toString();
      
    } else {
      this.payloadURL = this.appGlobalService.getDomain() + this.tile.field_tile_url_base.toString();
    }
  }
}
