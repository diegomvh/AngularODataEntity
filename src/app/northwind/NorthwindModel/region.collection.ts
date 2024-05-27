import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Region } from './region.entity';
import { Territory } from './territory.entity';
import { RegionModel } from './region.model';
import { TerritoryModel } from './territory.model';
import { TerritoryCollection } from './territory.collection';
//#endregion

export class RegionCollection<E extends Region, M extends RegionModel<E>> extends ODataCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}