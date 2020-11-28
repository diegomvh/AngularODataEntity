import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { RemoteAssistanceOnboardingStatus } from './remoteassistanceonboardingstatus.enum';
import { RemoteAssistancePartner } from './remoteassistancepartner.entity';
import { RemoteAssistancePartnerModel } from './remoteassistancepartner.model';
//#endregion

export class RemoteAssistancePartnerCollection<E extends RemoteAssistancePartner, M extends RemoteAssistancePartnerModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}