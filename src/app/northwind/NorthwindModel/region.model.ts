import { Model, ModelField, ODataModel, ODataCollection, HttpOptions, Duration, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  
  
  @ModelField()
  RegionDescription!: string;
  
  
  @ModelField()
  Territories?: TerritoryCollection<Territory, TerritoryModel<Territory>>;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}