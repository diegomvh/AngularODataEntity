import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { OnPremisesConditionalAccessSettings } from './onpremisesconditionalaccesssettings.entity';
import { OnPremisesConditionalAccessSettingsCollection } from './onpremisesconditionalaccesssettings.collection';
//#endregion

export class OnPremisesConditionalAccessSettingsModel<E extends OnPremisesConditionalAccessSettings> extends EntityModel<E> {
  //#region ODataApi Properties
  enabled: boolean;
  excludedGroups: string[];
  includedGroups: string[];
  overrideDefaultRule: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}