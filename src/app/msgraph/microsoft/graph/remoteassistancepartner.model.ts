import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { RemoteAssistanceOnboardingStatus } from './remoteassistanceonboardingstatus.enum';
import { RemoteAssistancePartner } from './remoteassistancepartner.entity';
import { RemoteAssistancePartnerCollection } from './remoteassistancepartner.collection';
//#endregion

export class RemoteAssistancePartnerModel<E extends RemoteAssistancePartner> extends EntityModel<E> {
  //#region ODataApi Properties
  displayName?: string;
  lastConnectionDateTime: Date;
  onboardingStatus: RemoteAssistanceOnboardingStatus;
  onboardingUrl?: string;
  //#endregion
  //#region ODataApi Actions
  public beginOnboarding(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.beginOnboarding');
    res.segment.entitySet('');
    return res.call(null, 'property', options) as Observable<any>;
  }
  public disconnect(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.disconnect');
    res.segment.entitySet('');
    return res.call(null, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}