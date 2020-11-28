import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
import { IosCertificateProfile } from './ioscertificateprofile.entity';
import { IosCertificateProfileModel } from './ioscertificateprofile.model';
//#endregion

export class IosCertificateProfileCollection<E extends IosCertificateProfile, M extends IosCertificateProfileModel<E>> extends DeviceConfigurationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}