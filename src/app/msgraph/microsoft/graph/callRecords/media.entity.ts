import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { NetworkInfo } from './networkinfo.entity';
import { DeviceInfo } from './deviceinfo.entity';
import { MediaStream } from './mediastream.entity';
//#endregion

export interface Media {
  //#region ODataApi Properties
  label?: string;
  callerNetwork?: NetworkInfo;
  calleeNetwork?: NetworkInfo;
  callerDevice?: DeviceInfo;
  calleeDevice?: DeviceInfo;
  streams?: MediaStream[];
  //#endregion
}