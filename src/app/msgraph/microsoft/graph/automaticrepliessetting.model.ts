import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AutomaticRepliesStatus } from './automaticrepliesstatus.enum';
import { ExternalAudienceScope } from './externalaudiencescope.enum';
import { AutomaticRepliesSetting } from './automaticrepliessetting.complex';
import { DateTimeTimeZone } from './datetimetimezone.complex';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { AutomaticRepliesSettingCollection } from './automaticrepliessetting.collection';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
//#endregion

export class AutomaticRepliesSettingModel<E extends AutomaticRepliesSetting> extends ODataModel<E> {
  //#region ODataApi Properties
  externalAudience?: ExternalAudienceScope;
  externalReplyMessage?: string;
  internalReplyMessage?: string;
  scheduledEndDateTime?: DateTimeTimeZoneModel<DateTimeTimeZone>;
  scheduledStartDateTime?: DateTimeTimeZoneModel<DateTimeTimeZone>;
  status?: AutomaticRepliesStatus;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}