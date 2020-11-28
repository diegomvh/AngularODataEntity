import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IpRangeCollection } from './iprange.collection';
import { IPv4Range } from './ipv4range.complex';
import { IPv4RangeModel } from './ipv4range.model';
//#endregion

export class IPv4RangeCollection<E extends IPv4Range, M extends IPv4RangeModel<E>> extends IpRangeCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}