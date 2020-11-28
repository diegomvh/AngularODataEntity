import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TeamsTabConfiguration } from './teamstabconfiguration.complex';
import { TeamsTabConfigurationModel } from './teamstabconfiguration.model';
//#endregion

export class TeamsTabConfigurationCollection<E extends TeamsTabConfiguration, M extends TeamsTabConfigurationModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}