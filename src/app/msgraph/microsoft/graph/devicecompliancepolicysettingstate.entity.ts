import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ComplianceStatus } from './compliancestatus.enum';
import { SettingSource } from './settingsource.entity';
//#endregion

export interface DeviceCompliancePolicySettingState {
  //#region ODataApi Properties
  setting?: string;
  settingName?: string;
  instanceDisplayName?: string;
  state: ComplianceStatus;
  errorCode: number;
  errorDescription?: string;
  userId?: string;
  userName?: string;
  userEmail?: string;
  userPrincipalName?: string;
  sources?: SettingSource[];
  currentValue?: string;
  //#endregion
}