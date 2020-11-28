import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CertificationControl } from './certificationcontrol.entity';
import { ComplianceInformation } from './complianceinformation.entity';
import { CertificationControlModel } from './certificationcontrol.model';
import { ComplianceInformationModel } from './complianceinformation.model';
import { CertificationControlCollection } from './certificationcontrol.collection';
//#endregion

export class ComplianceInformationCollection<E extends ComplianceInformation, M extends ComplianceInformationModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}