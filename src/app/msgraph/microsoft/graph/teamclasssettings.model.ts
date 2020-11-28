import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TeamClassSettings } from './teamclasssettings.entity';
import { TeamClassSettingsCollection } from './teamclasssettings.collection';
//#endregion

export class TeamClassSettingsModel<E extends TeamClassSettings> extends ODataModel<E> {
  //#region ODataApi Properties
  notifyGuardiansAboutAssignments?: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}