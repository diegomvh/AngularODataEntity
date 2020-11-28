import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AlternativeSecurityId } from './alternativesecurityid.entity';
import { AlternativeSecurityIdCollection } from './alternativesecurityid.collection';
//#endregion

export class AlternativeSecurityIdModel<E extends AlternativeSecurityId> extends ODataModel<E> {
  //#region ODataApi Properties
  identityProvider?: string;
  key?: ArrayBuffer;
  type?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}