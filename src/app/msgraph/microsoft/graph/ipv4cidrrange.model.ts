import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IpRangeModel } from './iprange.model';
import { IPv4CidrRange } from './ipv4cidrrange.complex';
import { IPv4CidrRangeCollection } from './ipv4cidrrange.collection';
//#endregion

export class IPv4CidrRangeModel<E extends IPv4CidrRange> extends IpRangeModel<E> {
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