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
import { PlanItemCollection } from './plan-item.collection';
import { PublicTransportation } from './public-transportation.entity';
import { PublicTransportationModel } from './public-transportation.model';
//#endregion

export class PublicTransportationCollection<E extends PublicTransportation, M extends PublicTransportationModel<E>> extends PlanItemCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}