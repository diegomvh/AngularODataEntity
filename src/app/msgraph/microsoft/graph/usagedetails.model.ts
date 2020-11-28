import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { UsageDetails } from './usagedetails.entity';
import { UsageDetailsCollection } from './usagedetails.collection';
//#endregion

export class UsageDetailsModel<E extends UsageDetails> extends ODataModel<E> {
  //#region ODataApi Properties
  lastAccessedDateTime?: Date;
  lastModifiedDateTime?: Date;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}