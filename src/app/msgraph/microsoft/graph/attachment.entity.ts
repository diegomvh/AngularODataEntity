import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface Attachment extends Entity {
  //#region ODataApi Properties
  contentType?: string;
  isInline: boolean;
  lastModifiedDateTime?: Date;
  name?: string;
  size: number;
  //#endregion
}