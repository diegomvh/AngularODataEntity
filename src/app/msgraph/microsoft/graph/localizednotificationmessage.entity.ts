import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface LocalizedNotificationMessage extends Entity {
  //#region ODataApi Properties
  lastModifiedDateTime: Date;
  locale: string;
  subject: string;
  messageTemplate: string;
  isDefault: boolean;
  //#endregion
}