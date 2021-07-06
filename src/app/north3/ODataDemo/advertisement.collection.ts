import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpActionOptions, 
  HttpFunctionOptions, 
  HttpNavigationPropertyOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Advertisement } from './advertisement.entity';
import { AdvertisementModel } from './advertisement.model';
//#endregion

export class AdvertisementCollection<E extends Advertisement, M extends AdvertisementModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}