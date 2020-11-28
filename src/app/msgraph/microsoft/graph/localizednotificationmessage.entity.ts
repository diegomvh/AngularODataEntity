import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface LocalizedNotificationMessage extends Entity {
  //#region ODataApi Properties
  isDefault: boolean;
  lastModifiedDateTime: Date;
  locale: string;
  messageTemplate: string;
  subject: string;
  //#endregion
}