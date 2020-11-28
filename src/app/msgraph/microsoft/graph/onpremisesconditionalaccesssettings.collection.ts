import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { OnPremisesConditionalAccessSettings } from './onpremisesconditionalaccesssettings.entity';
import { OnPremisesConditionalAccessSettingsModel } from './onpremisesconditionalaccesssettings.model';
//#endregion

export class OnPremisesConditionalAccessSettingsCollection<E extends OnPremisesConditionalAccessSettings, M extends OnPremisesConditionalAccessSettingsModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}