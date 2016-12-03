import { Component, OnInit, Input } from '@angular/core';
import { Tile } from '../tile.model';
import { TileService } from '../tile.service';
import { AppGlobalService } from '../../app-global.service';

@Component({
  selector: 'app-tile-list',
  templateUrl: './tile-list.component.html',
  styleUrls: ['./tile-list.component.css']
})
export class TileListComponent implements OnInit {

  private tileSrc: string;
  tiles: Tile[] =[];
  selectedTileIndex:number;
  private comboLabel = 'Select a tile';
  items:any = [];


  constructor(private tileService: TileService,private appGlobalService: AppGlobalService) { }

  getTiles():void{
    this.tileService.getTiles(this.tileSrc)
        .subscribe(
          tiles => {
            for (let i of tiles){
              this.tiles.push(i.tile);
            }
            this.setItems();
          }
        )
    
  }

  setItems() {
    this.items = []; 
    for (let i in this.tiles){
      this.items.push({
        "label": this.tiles[i].title,
        "value": i
      });
    }
    return this.items;
  }
  ngOnInit() {
    this.tileSrc = this.appGlobalService.getTileSrc();
    this.getTiles();
  }
}