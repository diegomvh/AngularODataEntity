import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IpRange } from './iprange.entity';
import { IpRangeModel } from './iprange.model';
import { IpRangeCollection } from './iprange.collection';
//#endregion

export interface IPv6Range extends IpRange {
  //#region ODataApi Properties
  lowerAddress: string;
  upperAddress: string;
  //#endregion
}