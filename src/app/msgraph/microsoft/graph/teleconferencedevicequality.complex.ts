import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { TeleconferenceDeviceMediaQuality } from './teleconferencedevicemediaquality.complex';
import { TeleconferenceDeviceMediaQualityModel } from './teleconferencedevicemediaquality.model';
import { TeleconferenceDeviceMediaQualityCollection } from './teleconferencedevicemediaquality.collection';
//#endregion

export interface TeleconferenceDeviceQuality {
  //#region ODataApi Properties
  callChainId: string;
  cloudServiceDeploymentEnvironment?: string;
  cloudServiceDeploymentId?: string;
  cloudServiceInstanceName?: string;
  cloudServiceName?: string;
  deviceDescription: string;
  deviceName: string;
  mediaLegId: string;
  mediaQualityList: TeleconferenceDeviceMediaQuality[];
  participantId: string;
  //#endregion
}