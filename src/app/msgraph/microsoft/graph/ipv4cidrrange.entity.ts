import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IpRange } from './iprange.entity';
//#endregion

export interface IPv4CidrRange extends IpRange {
  //#region ODataApi Properties
  cidrAddress: string;
  //#endregion
}