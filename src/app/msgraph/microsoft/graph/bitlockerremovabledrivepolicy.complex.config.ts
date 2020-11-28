import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { BitLockerRemovableDrivePolicy } from './bitlockerremovabledrivepolicy.complex';
import { BitLockerRemovableDrivePolicyModel } from './bitlockerremovabledrivepolicy.model';
import { BitLockerRemovableDrivePolicyCollection } from './bitlockerremovabledrivepolicy.collection';
//#endregion

export const BitLockerRemovableDrivePolicyConfig = {
  name: "bitLockerRemovableDrivePolicy",
  model: BitLockerRemovableDrivePolicyModel,
  collection: BitLockerRemovableDrivePolicyCollection,
  annotations: [],
  fields: {
    blockCrossOrganizationWriteAccess: {type: 'Edm.Boolean', nullable: false},
    encryptionMethod: {type: 'graph.bitLockerEncryptionMethod'},
    requireEncryptionForWriteAccess: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<BitLockerRemovableDrivePolicy>;