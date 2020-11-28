import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CertificationControl } from './certificationcontrol.entity';
import { CertificationControlCollection } from './certificationcontrol.collection';
//#endregion

export class CertificationControlModel<E extends CertificationControl> extends ODataModel<E> {
  //#region ODataApi Properties
  name?: string;
  url?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}