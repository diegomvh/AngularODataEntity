import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { RemoteAssistanceOnboardingStatus } from './remoteassistanceonboardingstatus.enum';
//#endregion

export interface RemoteAssistancePartner extends Entity {
  //#region ODataApi Properties
  displayName?: string;
  onboardingUrl?: string;
  onboardingStatus: RemoteAssistanceOnboardingStatus;
  lastConnectionDateTime: Date;
  //#endregion
}