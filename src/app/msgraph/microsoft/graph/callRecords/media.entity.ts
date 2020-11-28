import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceInfo } from './deviceinfo.entity';
import { NetworkInfo } from './networkinfo.entity';
import { MediaStream } from './mediastream.entity';
import { DeviceInfoModel } from './deviceinfo.model';
import { NetworkInfoModel } from './networkinfo.model';
import { MediaStreamModel } from './mediastream.model';
import { DeviceInfoCollection } from './deviceinfo.collection';
import { NetworkInfoCollection } from './networkinfo.collection';
import { MediaStreamCollection } from './mediastream.collection';
//#endregion

export interface Media {
  //#region ODataApi Properties
  calleeDevice?: DeviceInfo;
  calleeNetwork?: NetworkInfo;
  callerDevice?: DeviceInfo;
  callerNetwork?: NetworkInfo;
  label?: string;
  streams?: MediaStream[];
  //#endregion
}