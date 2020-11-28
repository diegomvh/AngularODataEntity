import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
import { MiracastChannel } from './miracastchannel.enum';
import { WelcomeScreenMeetingInformation } from './welcomescreenmeetinginformation.enum';
import { Windows10TeamGeneralConfiguration } from './windows10teamgeneralconfiguration.entity';
import { Windows10TeamGeneralConfigurationModel } from './windows10teamgeneralconfiguration.model';
//#endregion

export class Windows10TeamGeneralConfigurationCollection<E extends Windows10TeamGeneralConfiguration, M extends Windows10TeamGeneralConfigurationModel<E>> extends DeviceConfigurationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}