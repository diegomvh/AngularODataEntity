import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { BaseItemCollection } from './baseitem.collection';
import { SharepointIds } from './sharepointids.complex';
import { SystemFacet } from './systemfacet.complex';
import { ListInfo } from './listinfo.complex';
import { Drive } from './drive.entity';
import { List } from './list.entity';
import { ListItem } from './listitem.entity';
import { Subscription } from './subscription.entity';
import { ColumnDefinition } from './columndefinition.entity';
import { ContentType } from './contenttype.entity';
import { SharepointIdsModel } from './sharepointids.model';
import { SystemFacetModel } from './systemfacet.model';
import { ListInfoModel } from './listinfo.model';
import { DriveModel } from './drive.model';
import { ListModel } from './list.model';
import { ListItemModel } from './listitem.model';
import { SubscriptionModel } from './subscription.model';
import { ColumnDefinitionModel } from './columndefinition.model';
import { ContentTypeModel } from './contenttype.model';
import { SharepointIdsCollection } from './sharepointids.collection';
import { SystemFacetCollection } from './systemfacet.collection';
import { ListInfoCollection } from './listinfo.collection';
import { DriveCollection } from './drive.collection';
import { ListItemCollection } from './listitem.collection';
import { SubscriptionCollection } from './subscription.collection';
import { ColumnDefinitionCollection } from './columndefinition.collection';
import { ContentTypeCollection } from './contenttype.collection';
//#endregion

export class ListCollection<E extends List, M extends ListModel<E>> extends BaseItemCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}