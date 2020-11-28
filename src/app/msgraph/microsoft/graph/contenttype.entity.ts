import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ItemReference } from './itemreference.complex';
import { ContentTypeOrder } from './contenttypeorder.complex';
import { ColumnLink } from './columnlink.entity';
import { ItemReferenceModel } from './itemreference.model';
import { ContentTypeOrderModel } from './contenttypeorder.model';
import { EntityModel } from './entity.model';
import { ColumnLinkModel } from './columnlink.model';
import { ItemReferenceCollection } from './itemreference.collection';
import { ContentTypeOrderCollection } from './contenttypeorder.collection';
import { EntityCollection } from './entity.collection';
import { ColumnLinkCollection } from './columnlink.collection';
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