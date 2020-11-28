import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AssignedLicense } from './assignedlicense.complex';
import { AssignedLicenseModel } from './assignedlicense.model';
//#endregion

export class AssignedLicenseCollection<E extends AssignedLicense, M extends AssignedLicenseModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}