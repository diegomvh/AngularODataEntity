import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Employee } from './employee.entity';
import { Region } from './region.entity';
import { Territory } from './territory.entity';
import { EmployeeModel } from './employee.model';
import { RegionModel } from './region.model';
import { TerritoryModel } from './territory.model';
import { EmployeeCollection } from './employee.collection';
import { RegionCollection } from './region.collection';
//#endregion

export class TerritoryCollection<E extends Territory, M extends TerritoryModel<E>> extends ODataCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}