import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface ApplePushNotificationCertificate extends Entity {
  //#region ODataApi Properties
  appleIdentifier?: string;
  topicIdentifier?: string;
  lastModifiedDateTime: Date;
  expirationDateTime: Date;
  certificate?: string;
  //#endregion
}