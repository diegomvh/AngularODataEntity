import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Thumbnail } from './thumbnail.entity';
//#endregion

export interface ThumbnailSet extends Entity {
  //#region ODataApi Properties
  large?: Thumbnail;
  medium?: Thumbnail;
  small?: Thumbnail;
  source?: Thumbnail;
  //#endregion
}