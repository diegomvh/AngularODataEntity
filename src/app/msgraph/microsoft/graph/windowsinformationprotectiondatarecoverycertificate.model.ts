import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WindowsInformationProtectionDataRecoveryCertificate } from './windowsinformationprotectiondatarecoverycertificate.entity';
import { WindowsInformationProtectionDataRecoveryCertificateCollection } from './windowsinformationprotectiondatarecoverycertificate.collection';
//#endregion

export class WindowsInformationProtectionDataRecoveryCertificateModel<E extends WindowsInformationProtectionDataRecoveryCertificate> extends ODataModel<E> {
  //#region ODataApi Properties
  certificate?: ArrayBuffer;
  description?: string;
  expirationDateTime: Date;
  subjectName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}