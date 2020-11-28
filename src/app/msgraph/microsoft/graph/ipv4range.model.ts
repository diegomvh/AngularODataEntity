import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IpRangeModel } from './iprange.model';
import { IPv4Range } from './ipv4range.entity';
import { IPv4RangeCollection } from './ipv4range.collection';
//#endregion

export class IPv4RangeModel<E extends IPv4Range> extends IpRangeModel<E> {
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