import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppModel } from './mobileapp.model';
import { VppTokenAccountType } from './vpptokenaccounttype.enum';
import { IosDeviceType } from './iosdevicetype.entity';
import { VppLicensingType } from './vpplicensingtype.entity';
import { IosVppApp } from './iosvppapp.entity';
import { IosDeviceTypeModel } from './iosdevicetype.model';
import { VppLicensingTypeModel } from './vpplicensingtype.model';
import { IosDeviceTypeCollection } from './iosdevicetype.collection';
import { VppLicensingTypeCollection } from './vpplicensingtype.collection';
import { IosVppAppCollection } from './iosvppapp.collection';
//#endregion

export class IosVppAppModel<E extends IosVppApp> extends MobileAppModel<E> {
  //#region ODataApi Properties
  applicableDeviceType?: IosDeviceTypeModel<IosDeviceType>;
  appStoreUrl?: string;
  bundleId?: string;
  licensingType?: VppLicensingTypeModel<VppLicensingType>;
  releaseDateTime?: Date;
  totalLicenseCount: number;
  usedLicenseCount: number;
  vppTokenAccountType: VppTokenAccountType;
  vppTokenAppleId?: string;
  vppTokenOrganizationName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}