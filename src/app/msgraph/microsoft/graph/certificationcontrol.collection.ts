import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CertificationControl } from './certificationcontrol.complex';
import { CertificationControlModel } from './certificationcontrol.model';
//#endregion

export class CertificationControlCollection<E extends CertificationControl, M extends CertificationControlModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}