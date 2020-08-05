import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IpRange } from './iprange.entity';
//#endregion

export interface IPv4Range extends IpRange {
  //#region ODataApi Properties
  lowerAddress: string;
  upperAddress: string;
  //#endregion
}