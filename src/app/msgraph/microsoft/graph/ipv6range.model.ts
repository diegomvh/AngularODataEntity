import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IpRangeModel } from './iprange.model';
import { IPv6Range } from './ipv6range.complex';
import { IPv6RangeCollection } from './ipv6range.collection';
//#endregion

export class IPv6RangeModel<E extends IPv6Range> extends IpRangeModel<E> {
  //#region ODataApi Properties
  lowerAddress: string;
  upperAddress: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}