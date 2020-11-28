import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Thumbnail } from './thumbnail.complex';
import { ThumbnailModel } from './thumbnail.model';
import { EntityModel } from './entity.model';
import { ThumbnailCollection } from './thumbnail.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface ThumbnailSet extends Entity {
  //#region ODataApi Properties
  large?: Thumbnail;
  medium?: Thumbnail;
  small?: Thumbnail;
  source?: Thumbnail;
  //#endregion
}