import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IpRangeCollection } from './iprange.collection';
import { IPv4CidrRange } from './ipv4cidrrange.complex';
import { IPv4CidrRangeModel } from './ipv4cidrrange.model';
//#endregion

export class IPv4CidrRangeCollection<E extends IPv4CidrRange, M extends IPv4CidrRangeModel<E>> extends IpRangeCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}