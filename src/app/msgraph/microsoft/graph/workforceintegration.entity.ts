import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ChangeTrackedEntity } from './changetrackedentity.entity';
import { WorkforceIntegrationSupportedEntities } from './workforceintegrationsupportedentities.enum';
import { WorkforceIntegrationEncryption } from './workforceintegrationencryption.entity';
//#endregion

export interface WorkforceIntegration extends ChangeTrackedEntity {
  //#region ODataApi Properties
  displayName?: string;
  apiVersion?: number;
  encryption?: WorkforceIntegrationEncryption;
  isActive?: boolean;
  url?: string;
  supportedEntities?: WorkforceIntegrationSupportedEntities;
  //#endregion
}