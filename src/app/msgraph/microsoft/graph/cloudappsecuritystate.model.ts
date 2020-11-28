import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CloudAppSecurityState } from './cloudappsecuritystate.entity';
import { CloudAppSecurityStateCollection } from './cloudappsecuritystate.collection';
//#endregion

export class CloudAppSecurityStateModel<E extends CloudAppSecurityState> extends ODataModel<E> {
  //#region ODataApi Properties
  destinationServiceIp?: string;
  destinationServiceName?: string;
  riskScore?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}