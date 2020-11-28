import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { BaseItemCollection } from './baseitem.collection';
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
import { DriveModel } from './drive.model';
import { DriveItemModel } from './driveitem.model';
import { ListModel } from './list.model';
import { IdentitySetCollection } from './identityset.collection';
import { QuotaCollection } from './quota.collection';
import { SharepointIdsCollection } from './sharepointids.collection';
import { SystemFacetCollection } from './systemfacet.collection';
import { DriveItemCollection } from './driveitem.collection';
import { ListCollection } from './list.collection';
//#endregion

export class DriveCollection<E extends Drive, M extends DriveModel<E>> extends BaseItemCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}