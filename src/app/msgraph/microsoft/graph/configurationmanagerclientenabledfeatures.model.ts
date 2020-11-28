import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ConfigurationManagerClientEnabledFeatures } from './configurationmanagerclientenabledfeatures.entity';
import { ConfigurationManagerClientEnabledFeaturesCollection } from './configurationmanagerclientenabledfeatures.collection';
//#endregion

export class ConfigurationManagerClientEnabledFeaturesModel<E extends ConfigurationManagerClientEnabledFeatures> extends ODataModel<E> {
  //#region ODataApi Properties
  compliancePolicy: boolean;
  deviceConfiguration: boolean;
  inventory: boolean;
  modernApps: boolean;
  resourceAccess: boolean;
  windowsUpdateForBusiness: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}