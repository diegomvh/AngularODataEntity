import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { MobileAppContentFileUploadState } from './mobileappcontentfileuploadstate.enum';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface MobileAppContentFile extends Entity {
  //#region ODataApi Properties
  azureStorageUri?: string;
  azureStorageUriExpirationDateTime?: Date;
  createdDateTime: Date;
  isCommitted: boolean;
  manifest?: ArrayBuffer;
  name?: string;
  size: number;
  sizeEncrypted: number;
  uploadState: MobileAppContentFileUploadState;
  //#endregion
}