import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ChangeTrackedEntity } from './changetrackedentity.entity';
import { WorkforceIntegrationSupportedEntities } from './workforceintegrationsupportedentities.enum';
import { WorkforceIntegrationEncryption } from './workforceintegrationencryption.complex';
import { WorkforceIntegrationEncryptionModel } from './workforceintegrationencryption.model';
import { ChangeTrackedEntityModel } from './changetrackedentity.model';
import { WorkforceIntegrationEncryptionCollection } from './workforceintegrationencryption.collection';
import { ChangeTrackedEntityCollection } from './changetrackedentity.collection';
//#endregion

export interface WorkforceIntegration extends ChangeTrackedEntity {
  //#region ODataApi Properties
  apiVersion?: number;
  displayName?: string;
  encryption?: WorkforceIntegrationEncryption;
  isActive?: boolean;
  supportedEntities?: WorkforceIntegrationSupportedEntities;
  url?: string;
  //#endregion
}