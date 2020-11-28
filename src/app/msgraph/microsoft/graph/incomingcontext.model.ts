import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
import { IncomingContext } from './incomingcontext.entity';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
import { IncomingContextCollection } from './incomingcontext.collection';
//#endregion

export class IncomingContextModel<E extends IncomingContext> extends ODataModel<E> {
  //#region ODataApi Properties
  observedParticipantId?: string;
  onBehalfOf?: IdentitySetModel<IdentitySet>;
  sourceParticipantId?: string;
  transferor?: IdentitySetModel<IdentitySet>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}