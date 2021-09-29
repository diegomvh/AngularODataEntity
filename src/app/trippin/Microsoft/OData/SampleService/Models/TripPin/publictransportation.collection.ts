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
import { PlanItemCollection } from './planitem.collection';
import { PublicTransportation } from './publictransportation.entity';
import { PublicTransportationModel } from './publictransportation.model';
//#endregion

export class PublicTransportationCollection<E extends PublicTransportation, M extends PublicTransportationModel<E>> extends PlanItemCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}