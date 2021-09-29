import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  Model,
  ModelField,
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  Duration,
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Region } from './region.entity';
import { Territory } from './territory.entity';
import { TerritoryModel } from './territory.model';
import { RegionCollection } from './region.collection';
import { TerritoryCollection } from './territory.collection';
//#endregion

@Model()
export class RegionModel<E extends Region> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  RegionID!: number;
  public $RegionID() {
    return this.property<number>('RegionID');
  }
  public getRegionID(options?: ODataOptions) {
    return this.getValue<number>('RegionID', options) as Observable<number>;
  }
  
  @ModelField()
  RegionDescription!: string;
  public $RegionDescription() {
    return this.property<string>('RegionDescription');
  }
  public getRegionDescription(options?: ODataOptions) {
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
  public setTerritories(model: TerritoryCollection<Territory, TerritoryModel<Territory>> | null, options?: ODataOptions) {
    return this.setReference<Territory>('Territories', model, options);
  }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}