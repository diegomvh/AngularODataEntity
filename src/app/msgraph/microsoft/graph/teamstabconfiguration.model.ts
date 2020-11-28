import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TeamsTabConfiguration } from './teamstabconfiguration.complex';
import { TeamsTabConfigurationCollection } from './teamstabconfiguration.collection';
//#endregion

export class TeamsTabConfigurationModel<E extends TeamsTabConfiguration> extends ODataModel<E> {
  //#region ODataApi Properties
  contentUrl?: string;
  entityId?: string;
  removeUrl?: string;
  websiteUrl?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}