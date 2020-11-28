import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Win32LobAppRuleType } from './win32lobappruletype.enum';
import { Win32LobAppRule } from './win32lobapprule.complex';
import { Win32LobAppRuleModel } from './win32lobapprule.model';
//#endregion

export class Win32LobAppRuleCollection<E extends Win32LobAppRule, M extends Win32LobAppRuleModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}