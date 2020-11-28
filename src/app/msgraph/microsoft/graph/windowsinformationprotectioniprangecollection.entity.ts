import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IpRange } from './iprange.entity';
import { IpRangeModel } from './iprange.model';
import { IpRangeCollection } from './iprange.collection';
//#endregion

export interface WindowsInformationProtectionIPRangeCollection {
  //#region ODataApi Properties
  displayName: string;
  ranges: IpRange[];
  //#endregion
}