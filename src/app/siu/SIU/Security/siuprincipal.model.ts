import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SiuPrincipal } from './siuprincipal.entity';
import { SiuPrincipalCollection } from './siuprincipal.collection';
//#endregion

export class SiuPrincipalModel<E extends SiuPrincipal> extends ODataModel<E> {
  //#region ODataApi Properties
  roles?: string[];
  oficinaIds: number[];
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}