import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { VerifiedDomain } from './verifieddomain.complex';
import { VerifiedDomainCollection } from './verifieddomain.collection';
//#endregion

export class VerifiedDomainModel<E extends VerifiedDomain> extends ODataModel<E> {
  //#region ODataApi Properties
  capabilities?: string;
  isDefault?: boolean;
  isInitial?: boolean;
  name?: string;
  type?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}