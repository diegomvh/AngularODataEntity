import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { NamedLocation } from './namedlocation.entity';
import { IpRange } from './iprange.entity';
import { IpRangeModel } from './iprange.model';
import { NamedLocationModel } from './namedlocation.model';
import { IpRangeCollection } from './iprange.collection';
import { NamedLocationCollection } from './namedlocation.collection';
//#endregion

export interface IpNamedLocation extends NamedLocation {
  //#region ODataApi Properties
  ipRanges: IpRange[];
  isTrusted: boolean;
  //#endregion
}