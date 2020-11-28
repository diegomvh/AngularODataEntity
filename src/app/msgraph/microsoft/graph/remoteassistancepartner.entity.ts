import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { RemoteAssistanceOnboardingStatus } from './remoteassistanceonboardingstatus.enum';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface RemoteAssistancePartner extends Entity {
  //#region ODataApi Properties
  displayName?: string;
  lastConnectionDateTime: Date;
  onboardingStatus: RemoteAssistanceOnboardingStatus;
  onboardingUrl?: string;
  //#endregion
}