import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ConditionalAccessGrantControl } from './conditionalaccessgrantcontrol.enum';
import { ConditionalAccessGrantControls } from './conditionalaccessgrantcontrols.complex';
import { ConditionalAccessGrantControlsModel } from './conditionalaccessgrantcontrols.model';
//#endregion

export class ConditionalAccessGrantControlsCollection<E extends ConditionalAccessGrantControls, M extends ConditionalAccessGrantControlsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}