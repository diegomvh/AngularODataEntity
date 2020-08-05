import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ItemReference } from './itemreference.entity';
import { ContentTypeOrder } from './contenttypeorder.entity';
import { ColumnLink } from './columnlink.entity';
//#endregion

export interface ContentType extends Entity {
  //#region ODataApi Properties
  description?: string;
  group?: string;
  hidden?: boolean;
  inheritedFrom?: ItemReference;
  name?: string;
  order?: ContentTypeOrder;
  parentId?: string;
  readOnly?: boolean;
  sealed?: boolean;
  columnLinks?: ColumnLink[];
  //#endregion
}