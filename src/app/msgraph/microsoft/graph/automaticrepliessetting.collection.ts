import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AutomaticRepliesStatus } from './automaticrepliesstatus.enum';
import { ExternalAudienceScope } from './externalaudiencescope.enum';
import { AutomaticRepliesSetting } from './automaticrepliessetting.complex';
import { DateTimeTimeZone } from './datetimetimezone.complex';
import { AutomaticRepliesSettingModel } from './automaticrepliessetting.model';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
//#endregion

export class AutomaticRepliesSettingCollection<E extends AutomaticRepliesSetting, M extends AutomaticRepliesSettingModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}