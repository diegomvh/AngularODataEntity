import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ItemReference } from './itemreference.entity';
import { ContentTypeOrder } from './contenttypeorder.entity';
import { ContentType } from './contenttype.entity';
import { ColumnLink } from './columnlink.entity';
import { ItemReferenceModel } from './itemreference.model';
import { ContentTypeOrderModel } from './contenttypeorder.model';
import { ColumnLinkModel } from './columnlink.model';
import { ItemReferenceCollection } from './itemreference.collection';
import { ContentTypeOrderCollection } from './contenttypeorder.collection';
import { ContentTypeCollection } from './contenttype.collection';
import { ColumnLinkCollection } from './columnlink.collection';
//#endregion

export class ContentTypeModel<E extends ContentType> extends EntityModel<E> {
  //#region ODataApi Properties
  description?: string;
  group?: string;
  hidden?: boolean;
  inheritedFrom?: ItemReferenceModel<ItemReference>;
  name?: string;
  order?: ContentTypeOrderModel<ContentTypeOrder>;
  parentId?: string;
  readOnly?: boolean;
  sealed?: boolean;
  columnLinks?: ColumnLinkCollection<ColumnLink, ColumnLinkModel<ColumnLink>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}