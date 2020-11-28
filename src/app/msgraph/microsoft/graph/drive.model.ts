import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { BaseItemModel } from './baseitem.model';
import { IdentitySet } from './identityset.complex';
import { Quota } from './quota.complex';
import { SharepointIds } from './sharepointids.complex';
import { SystemFacet } from './systemfacet.complex';
import { Drive } from './drive.entity';
import { DriveItem } from './driveitem.entity';
import { List } from './list.entity';
import { IdentitySetModel } from './identityset.model';
import { QuotaModel } from './quota.model';
import { SharepointIdsModel } from './sharepointids.model';
import { SystemFacetModel } from './systemfacet.model';
import { DriveItemModel } from './driveitem.model';
import { ListModel } from './list.model';
import { IdentitySetCollection } from './identityset.collection';
import { QuotaCollection } from './quota.collection';
import { SharepointIdsCollection } from './sharepointids.collection';
import { SystemFacetCollection } from './systemfacet.collection';
import { DriveCollection } from './drive.collection';
import { DriveItemCollection } from './driveitem.collection';
import { ListCollection } from './list.collection';
//#endregion

export class DriveModel<E extends Drive> extends BaseItemModel<E> {
  //#region ODataApi Properties
  driveType?: string;
  owner?: IdentitySetModel<IdentitySet>;
  quota?: QuotaModel<Quota>;
  sharePointIds?: SharepointIdsModel<SharepointIds>;
  system?: SystemFacetModel<SystemFacet>;
  following?: DriveItemCollection<DriveItem, DriveItemModel<DriveItem>>;
  items?: DriveItemCollection<DriveItem, DriveItemModel<DriveItem>>;
  list?: ListModel<List>;
  root?: DriveItemModel<DriveItem>;
  special?: DriveItemCollection<DriveItem, DriveItemModel<DriveItem>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public search(q: string, options?: HttpOptions): Observable<DriveItemCollection<DriveItem, DriveItemModel<DriveItem>>> {
    var res = this._function<{q: string}, DriveItem>('microsoft.graph.search');
    res.segment.entitySet('drives');
    return res.call({q}, 'collection', options) as Observable<DriveItemCollection<DriveItem, DriveItemModel<DriveItem>>>;
  }
  public recent(options?: HttpOptions): Observable<DriveItemCollection<DriveItem, DriveItemModel<DriveItem>>> {
    var res = this._function<null, DriveItem>('microsoft.graph.recent');
    res.segment.entitySet('drives');
    return res.call(null, 'collection', options) as Observable<DriveItemCollection<DriveItem, DriveItemModel<DriveItem>>>;
  }
  public sharedWithMe(options?: HttpOptions): Observable<DriveItemCollection<DriveItem, DriveItemModel<DriveItem>>> {
    var res = this._function<null, DriveItem>('microsoft.graph.sharedWithMe');
    res.segment.entitySet('drives');
    return res.call(null, 'collection', options) as Observable<DriveItemCollection<DriveItem, DriveItemModel<DriveItem>>>;
  }
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}