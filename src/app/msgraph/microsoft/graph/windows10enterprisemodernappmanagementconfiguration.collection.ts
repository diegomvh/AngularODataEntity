import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
import { Windows10EnterpriseModernAppManagementConfiguration } from './windows10enterprisemodernappmanagementconfiguration.entity';
import { Windows10EnterpriseModernAppManagementConfigurationModel } from './windows10enterprisemodernappmanagementconfiguration.model';
//#endregion

export class Windows10EnterpriseModernAppManagementConfigurationCollection<E extends Windows10EnterpriseModernAppManagementConfiguration, M extends Windows10EnterpriseModernAppManagementConfigurationModel<E>> extends DeviceConfigurationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}