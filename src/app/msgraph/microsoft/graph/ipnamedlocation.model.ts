import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { NamedLocationModel } from './namedlocation.model';
import { IpRange } from './iprange.complex';
import { IpNamedLocation } from './ipnamedlocation.entity';
import { IpRangeModel } from './iprange.model';
import { IpRangeCollection } from './iprange.collection';
import { IpNamedLocationCollection } from './ipnamedlocation.collection';
//#endregion

export class IpNamedLocationModel<E extends IpNamedLocation> extends NamedLocationModel<E> {
  //#region ODataApi Properties
  ipRanges: IpRangeCollection<IpRange, IpRangeModel<IpRange>>;
  isTrusted: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}