import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IpRange } from './iprange.complex';
import { IpRangeModel } from './iprange.model';
import { IpRangeCollection } from './iprange.collection';
//#endregion

export interface IPv4Range extends IpRange {
  //#region ODataApi Properties
  lowerAddress: string;
  upperAddress: string;
  //#endregion
}