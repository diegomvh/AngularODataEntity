import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IpRange } from './iprange.entity';
//#endregion

export interface WindowsInformationProtectionIPRangeCollection {
  //#region ODataApi Properties
  displayName: string;
  ranges: IpRange[];
  //#endregion
}