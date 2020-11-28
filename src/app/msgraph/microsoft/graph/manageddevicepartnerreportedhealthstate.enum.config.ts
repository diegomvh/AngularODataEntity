import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedDevicePartnerReportedHealthState } from './manageddevicepartnerreportedhealthstate.enum';
//#endregion

export const ManagedDevicePartnerReportedHealthStateConfig = {
  name: "managedDevicePartnerReportedHealthState",
  members: ManagedDevicePartnerReportedHealthState
} as EnumTypeConfig<ManagedDevicePartnerReportedHealthState>;