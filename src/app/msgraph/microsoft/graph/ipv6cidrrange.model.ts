import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IpRangeModel } from './iprange.model';
import { IPv6CidrRange } from './ipv6cidrrange.complex';
import { IPv6CidrRangeCollection } from './ipv6cidrrange.collection';
//#endregion

export class IPv6CidrRangeModel<E extends IPv6CidrRange> extends IpRangeModel<E> {
  //#region ODataApi Properties
  cidrAddress: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}