import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SettingSource } from './settingsource.entity';
import { SettingSourceCollection } from './settingsource.collection';
//#endregion

export class SettingSourceModel<E extends SettingSource> extends ODataModel<E> {
  //#region ODataApi Properties
  displayName?: string;
  id?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}