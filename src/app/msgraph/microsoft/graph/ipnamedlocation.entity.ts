import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { NamedLocation } from './namedlocation.entity';
import { IpRange } from './iprange.entity';
//#endregion

export interface IpNamedLocation extends NamedLocation {
  //#region ODataApi Properties
  ipRanges: IpRange[];
  isTrusted: boolean;
  //#endregion
}