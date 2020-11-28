import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { UsageDetails } from './usagedetails.complex';
import { UsageDetailsModel } from './usagedetails.model';
//#endregion

export class UsageDetailsCollection<E extends UsageDetails, M extends UsageDetailsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}