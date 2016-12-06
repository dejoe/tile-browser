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
  @Input() heightFilter:any;
  @Input() widthFilter:any;

  private tileSrc: string;
  tiles: Tile[] =[];
  selectedTileIndex:number;
  private comboLabel = 'Select a tile';
  items:any = [];


  constructor(private tileService: TileService,private appGlobalService: AppGlobalService) { }

  setTileIndex ($event){
    console.log($event);
    if($event.detail.value){
      this.selectedTileIndex = this.tiles.map( (el) => el.title )
                                         .indexOf($event.detail.value.label);
    }
    
  }
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
    let tempTiles :Array<Tile> = this.tiles;
    if (this.heightFilter){
      tempTiles = tempTiles.filter( (tile) => tile.field_tile_height_value == this.heightFilter ? true : false);
    }
    if (this.widthFilter){
      tempTiles = tempTiles.filter( (tile) => tile.field_tile_width_percentage == this.widthFilter ? true : false);
    }
    for (let i in tempTiles){
      this.items.push({
        "label": tempTiles[i].title,
        "value": i
      });
    }
  }
  ngOnInit() {
    this.tileSrc = this.appGlobalService.getTileSrc();
    this.getTiles();
  }
  ngOnChanges(){
    this.setItems();
  }
}