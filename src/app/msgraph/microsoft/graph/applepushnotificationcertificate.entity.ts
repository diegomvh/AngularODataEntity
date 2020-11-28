import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface ApplePushNotificationCertificate extends Entity {
  //#region ODataApi Properties
  appleIdentifier?: string;
  certificate?: string;
  expirationDateTime: Date;
  lastModifiedDateTime: Date;
  topicIdentifier?: string;
  //#endregion
}