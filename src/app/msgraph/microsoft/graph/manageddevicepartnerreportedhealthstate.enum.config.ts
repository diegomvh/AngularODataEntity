import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedDevicePartnerReportedHealthState } from './manageddevicepartnerreportedhealthstate.enum';
//#endregion

export const ManagedDevicePartnerReportedHealthStateConfig = {
  name: "ManagedDevicePartnerReportedHealthState",
  members: ManagedDevicePartnerReportedHealthState
} as EnumConfig<ManagedDevicePartnerReportedHealthState>;