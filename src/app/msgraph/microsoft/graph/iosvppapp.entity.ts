import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileApp } from './mobileapp.entity';
import { VppTokenAccountType } from './vpptokenaccounttype.enum';
import { IosDeviceType } from './iosdevicetype.entity';
import { VppLicensingType } from './vpplicensingtype.entity';
//#endregion

export interface IosVppApp extends MobileApp {
  //#region ODataApi Properties
  usedLicenseCount: number;
  totalLicenseCount: number;
  releaseDateTime?: Date;
  appStoreUrl?: string;
  licensingType?: VppLicensingType;
  applicableDeviceType?: IosDeviceType;
  vppTokenOrganizationName?: string;
  vppTokenAccountType: VppTokenAccountType;
  vppTokenAppleId?: string;
  bundleId?: string;
  //#endregion
}