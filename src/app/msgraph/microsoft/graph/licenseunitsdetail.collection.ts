import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { LicenseUnitsDetail } from './licenseunitsdetail.entity';
import { LicenseUnitsDetailModel } from './licenseunitsdetail.model';
//#endregion

export class LicenseUnitsDetailCollection<E extends LicenseUnitsDetail, M extends LicenseUnitsDetailModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}