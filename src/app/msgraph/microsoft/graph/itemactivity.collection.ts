import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { IdentitySet } from './identityset.entity';
import { AccessAction } from './accessaction.entity';
import { DriveItem } from './driveitem.entity';
import { ItemActivity } from './itemactivity.entity';
import { IdentitySetModel } from './identityset.model';
import { AccessActionModel } from './accessaction.model';
import { DriveItemModel } from './driveitem.model';
import { ItemActivityModel } from './itemactivity.model';
import { IdentitySetCollection } from './identityset.collection';
import { AccessActionCollection } from './accessaction.collection';
import { DriveItemCollection } from './driveitem.collection';
//#endregion

export class ItemActivityCollection<E extends ItemActivity, M extends ItemActivityModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}