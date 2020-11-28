import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SettingTemplateValue } from './settingtemplatevalue.entity';
import { SettingTemplateValueCollection } from './settingtemplatevalue.collection';
//#endregion

export class SettingTemplateValueModel<E extends SettingTemplateValue> extends ODataModel<E> {
  //#region ODataApi Properties
  defaultValue?: string;
  description?: string;
  name?: string;
  type?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}