import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpQueryOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { OrderDetailsExtended } from './order_details_extended.entity';
import { OrderDetailsExtendedModel } from './order_details_extended.model';
//#endregion

export class OrderDetailsExtendedCollection<E extends OrderDetailsExtended, M extends OrderDetailsExtendedModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}