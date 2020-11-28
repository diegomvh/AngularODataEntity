import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { InsightIdentity } from './insightidentity.complex';
import { InsightIdentityCollection } from './insightidentity.collection';
//#endregion

export class InsightIdentityModel<E extends InsightIdentity> extends ODataModel<E> {
  //#region ODataApi Properties
  address?: string;
  displayName?: string;
  id?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}