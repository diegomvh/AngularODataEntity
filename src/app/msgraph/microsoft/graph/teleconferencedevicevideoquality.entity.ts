import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { TeleconferenceDeviceMediaQuality } from './teleconferencedevicemediaquality.entity';
import { TeleconferenceDeviceMediaQualityModel } from './teleconferencedevicemediaquality.model';
import { TeleconferenceDeviceMediaQualityCollection } from './teleconferencedevicemediaquality.collection';
//#endregion

export interface TeleconferenceDeviceVideoQuality extends TeleconferenceDeviceMediaQuality {
  //#region ODataApi Properties
  averageInboundBitRate?: number;
  averageInboundFrameRate?: number;
  averageOutboundBitRate?: number;
  averageOutboundFrameRate?: number;
  //#endregion
}