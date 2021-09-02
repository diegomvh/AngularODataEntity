import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  Model, 
  ModelField, 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpQueryOptions, 
  Duration, 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Region } from './region.entity';
import { Territory } from './territory.entity';
import { TerritoryModel } from './territory.model';
import { RegionCollection } from './region.collection';
import { TerritoryCollection } from './territory.collection';
//#endregion

@Model()
export class RegionModel<E extends Region> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  RegionID!: number;
  public $RegionID() {
    return this.property<number>('RegionID');
  }
  public getRegionID(options?: HttpOptions) {
    return this.getValue<number>('RegionID', options) as Observable<number>;
  }
  
  @ModelField()
  RegionDescription!: string;
  public $RegionDescription() {
    return this.property<string>('RegionDescription');
  }
  public getRegionDescription(options?: HttpOptions) {
    return this.getValue<string>('RegionDescription', options) as Observable<string>;
  }
  
  @ModelField()
  Territories?: TerritoryCollection<Territory, TerritoryModel<Territory>>;
  public $Territories() {
    return this.navigationProperty<Territory>('Territories');
  }
  public getTerritories() {
    return this.getReference<Territory>('Territories') as TerritoryCollection<Territory, TerritoryModel<Territory>>;
  }
  public setTerritories(model: TerritoryCollection<Territory, TerritoryModel<Territory>> | null, options?: HttpOptions) {
    return this.setReference<Territory>('Territories', model, options);
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}