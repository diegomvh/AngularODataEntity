import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Win32LobAppRuleModel } from './win32lobapprule.model';
import { Win32LobAppRuleOperator } from './win32lobappruleoperator.enum';
import { Win32LobAppProductCodeRule } from './win32lobappproductcoderule.complex';
import { Win32LobAppProductCodeRuleCollection } from './win32lobappproductcoderule.collection';
//#endregion

export class Win32LobAppProductCodeRuleModel<E extends Win32LobAppProductCodeRule> extends Win32LobAppRuleModel<E> {
  //#region ODataApi Properties
  productCode?: string;
  productVersion?: string;
  productVersionOperator: Win32LobAppRuleOperator;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}