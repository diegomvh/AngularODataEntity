import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { NamedLocationCollection } from './namedlocation.collection';
import { IpRange } from './iprange.complex';
import { IpNamedLocation } from './ipnamedlocation.entity';
import { IpRangeModel } from './iprange.model';
import { IpNamedLocationModel } from './ipnamedlocation.model';
import { IpRangeCollection } from './iprange.collection';
//#endregion

export class IpNamedLocationCollection<E extends IpNamedLocation, M extends IpNamedLocationModel<E>> extends NamedLocationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}