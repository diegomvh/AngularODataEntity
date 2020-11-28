import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ItemReference } from './itemreference.complex';
import { ContentTypeOrder } from './contenttypeorder.complex';
import { ContentType } from './contenttype.entity';
import { ColumnLink } from './columnlink.entity';
import { ItemReferenceModel } from './itemreference.model';
import { ContentTypeOrderModel } from './contenttypeorder.model';
import { ContentTypeModel } from './contenttype.model';
import { ColumnLinkModel } from './columnlink.model';
import { ItemReferenceCollection } from './itemreference.collection';
import { ContentTypeOrderCollection } from './contenttypeorder.collection';
import { ColumnLinkCollection } from './columnlink.collection';
//#endregion

export class ContentTypeCollection<E extends ContentType, M extends ContentTypeModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}