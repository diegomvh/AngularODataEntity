import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { MobileAppContentFileUploadState } from './mobileappcontentfileuploadstate.enum';
//#endregion

export interface MobileAppContentFile extends Entity {
  //#region ODataApi Properties
  azureStorageUri?: string;
  isCommitted: boolean;
  createdDateTime: Date;
  name?: string;
  size: number;
  sizeEncrypted: number;
  azureStorageUriExpirationDateTime?: Date;
  manifest?: ArrayBuffer;
  uploadState: MobileAppContentFileUploadState;
  //#endregion
}