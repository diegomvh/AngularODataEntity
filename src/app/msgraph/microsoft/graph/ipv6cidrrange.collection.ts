import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IpRangeCollection } from './iprange.collection';
import { IPv6CidrRange } from './ipv6cidrrange.complex';
import { IPv6CidrRangeModel } from './ipv6cidrrange.model';
//#endregion

export class IPv6CidrRangeCollection<E extends IPv6CidrRange, M extends IPv6CidrRangeModel<E>> extends IpRangeCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}