import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
import { SharingInvitation } from './sharinginvitation.entity';
import { IdentitySetModel } from './identityset.model';
import { SharingInvitationModel } from './sharinginvitation.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export class SharingInvitationCollection<E extends SharingInvitation, M extends SharingInvitationModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}