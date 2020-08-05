import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { TeleconferenceDeviceMediaQuality } from './teleconferencedevicemediaquality.entity';
//#endregion

export interface TeleconferenceDeviceVideoQuality extends TeleconferenceDeviceMediaQuality {
  //#region ODataApi Properties
  averageInboundFrameRate?: number;
  averageOutboundFrameRate?: number;
  averageInboundBitRate?: number;
  averageOutboundBitRate?: number;
  //#endregion
}