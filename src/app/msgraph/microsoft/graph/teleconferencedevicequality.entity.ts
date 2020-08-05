import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { TeleconferenceDeviceMediaQuality } from './teleconferencedevicemediaquality.entity';
//#endregion

export interface TeleconferenceDeviceQuality {
  //#region ODataApi Properties
  callChainId: string;
  participantId: string;
  mediaLegId: string;
  deviceName: string;
  deviceDescription: string;
  cloudServiceName?: string;
  cloudServiceInstanceName?: string;
  cloudServiceDeploymentId?: string;
  cloudServiceDeploymentEnvironment?: string;
  mediaQualityList: TeleconferenceDeviceMediaQuality[];
  //#endregion
}