import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { BitLockerRemovableDrivePolicy } from './bitlockerremovabledrivepolicy.entity';
//#endregion

export const BitLockerRemovableDrivePolicyConfig = {
  name: "bitLockerRemovableDrivePolicy",
  annotations: [],
  fields: {
    encryptionMethod: {type: 'graph.bitLockerEncryptionMethod'},
    requireEncryptionForWriteAccess: {type: 'Edm.Boolean', nullable: false},
    blockCrossOrganizationWriteAccess: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<BitLockerRemovableDrivePolicy>;