import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IpRangeCollection } from './iprange.collection';
import { IPv6Range } from './ipv6range.entity';
import { IPv6RangeModel } from './ipv6range.model';
//#endregion

export class IPv6RangeCollection<E extends IPv6Range, M extends IPv6RangeModel<E>> extends IpRangeCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}