import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { IdentitySet } from './identityset.complex';
import { AccessAction } from './accessaction.complex';
import { DriveItem } from './driveitem.entity';
import { ItemActivity } from './itemactivity.entity';
import { IdentitySetModel } from './identityset.model';
import { AccessActionModel } from './accessaction.model';
import { DriveItemModel } from './driveitem.model';
import { IdentitySetCollection } from './identityset.collection';
import { AccessActionCollection } from './accessaction.collection';
import { DriveItemCollection } from './driveitem.collection';
import { ItemActivityCollection } from './itemactivity.collection';
//#endregion

export class ItemActivityModel<E extends ItemActivity> extends EntityModel<E> {
  //#region ODataApi Properties
  access?: AccessActionModel<AccessAction>;
  activityDateTime?: Date;
  actor?: IdentitySetModel<IdentitySet>;
  driveItem?: DriveItemModel<DriveItem>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}