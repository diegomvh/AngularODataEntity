import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ConditionalAccessGrantControl } from './conditionalaccessgrantcontrol.enum';
import { ConditionalAccessGrantControls } from './conditionalaccessgrantcontrols.entity';
import { ConditionalAccessGrantControlsCollection } from './conditionalaccessgrantcontrols.collection';
//#endregion

export class ConditionalAccessGrantControlsModel<E extends ConditionalAccessGrantControls> extends ODataModel<E> {
  //#region ODataApi Properties
  builtInControls: ConditionalAccessGrantControl;
  customAuthenticationFactors: string[];
  operator?: string;
  termsOfUse: string[];
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}