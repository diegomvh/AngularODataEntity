import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { Windows10EnterpriseModernAppManagementConfiguration } from './windows10enterprisemodernappmanagementconfiguration.entity';
import { Windows10EnterpriseModernAppManagementConfigurationCollection } from './windows10enterprisemodernappmanagementconfiguration.collection';
//#endregion

export class Windows10EnterpriseModernAppManagementConfigurationModel<E extends Windows10EnterpriseModernAppManagementConfiguration> extends DeviceConfigurationModel<E> {
  //#region ODataApi Properties
  uninstallBuiltInApps: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}