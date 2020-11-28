import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CertificationControl } from './certificationcontrol.complex';
import { ComplianceInformation } from './complianceinformation.complex';
import { CertificationControlModel } from './certificationcontrol.model';
import { CertificationControlCollection } from './certificationcontrol.collection';
import { ComplianceInformationCollection } from './complianceinformation.collection';
//#endregion

export class ComplianceInformationModel<E extends ComplianceInformation> extends ODataModel<E> {
  //#region ODataApi Properties
  certificationControls?: CertificationControlCollection<CertificationControl, CertificationControlModel<CertificationControl>>;
  certificationName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}