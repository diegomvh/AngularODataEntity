import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { IosCertificateProfile } from './ioscertificateprofile.entity';
import { IosCertificateProfileCollection } from './ioscertificateprofile.collection';
//#endregion

export class IosCertificateProfileModel<E extends IosCertificateProfile> extends DeviceConfigurationModel<E> {
  //#region ODataApi Properties
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}