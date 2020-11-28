import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { VppLicensingType } from './vpplicensingtype.complex';
import { VppLicensingTypeModel } from './vpplicensingtype.model';
//#endregion

export class VppLicensingTypeCollection<E extends VppLicensingType, M extends VppLicensingTypeModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}