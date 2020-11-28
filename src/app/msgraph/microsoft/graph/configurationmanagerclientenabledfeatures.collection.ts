import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ConfigurationManagerClientEnabledFeatures } from './configurationmanagerclientenabledfeatures.entity';
import { ConfigurationManagerClientEnabledFeaturesModel } from './configurationmanagerclientenabledfeatures.model';
//#endregion

export class ConfigurationManagerClientEnabledFeaturesCollection<E extends ConfigurationManagerClientEnabledFeatures, M extends ConfigurationManagerClientEnabledFeaturesModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}