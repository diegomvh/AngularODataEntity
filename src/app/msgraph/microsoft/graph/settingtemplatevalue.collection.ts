import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SettingTemplateValue } from './settingtemplatevalue.entity';
import { SettingTemplateValueModel } from './settingtemplatevalue.model';
//#endregion

export class SettingTemplateValueCollection<E extends SettingTemplateValue, M extends SettingTemplateValueModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}