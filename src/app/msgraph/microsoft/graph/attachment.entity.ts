import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface Attachment extends Entity {
  //#region ODataApi Properties
  lastModifiedDateTime?: Date;
  name?: string;
  contentType?: string;
  size: number;
  isInline: boolean;
  //#endregion
}