import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileApp } from './mobileapp.entity';
import { VppTokenAccountType } from './vpptokenaccounttype.enum';
import { IosDeviceType } from './iosdevicetype.complex';
import { VppLicensingType } from './vpplicensingtype.complex';
import { IosDeviceTypeModel } from './iosdevicetype.model';
import { VppLicensingTypeModel } from './vpplicensingtype.model';
import { MobileAppModel } from './mobileapp.model';
import { IosDeviceTypeCollection } from './iosdevicetype.collection';
import { VppLicensingTypeCollection } from './vpplicensingtype.collection';
import { MobileAppCollection } from './mobileapp.collection';
//#endregion

export interface IosVppApp extends MobileApp {
  //#region ODataApi Properties
  applicableDeviceType?: IosDeviceType;
  appStoreUrl?: string;
  bundleId?: string;
  licensingType?: VppLicensingType;
  releaseDateTime?: Date;
  totalLicenseCount: number;
  usedLicenseCount: number;
  vppTokenAccountType: VppTokenAccountType;
  vppTokenAppleId?: string;
  vppTokenOrganizationName?: string;
  //#endregion
}