import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppCollection } from './mobileapp.collection';
import { VppTokenAccountType } from './vpptokenaccounttype.enum';
import { IosDeviceType } from './iosdevicetype.complex';
import { VppLicensingType } from './vpplicensingtype.complex';
import { IosVppApp } from './iosvppapp.entity';
import { IosDeviceTypeModel } from './iosdevicetype.model';
import { VppLicensingTypeModel } from './vpplicensingtype.model';
import { IosVppAppModel } from './iosvppapp.model';
import { IosDeviceTypeCollection } from './iosdevicetype.collection';
import { VppLicensingTypeCollection } from './vpplicensingtype.collection';
//#endregion

export class IosVppAppCollection<E extends IosVppApp, M extends IosVppAppModel<E>> extends MobileAppCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}