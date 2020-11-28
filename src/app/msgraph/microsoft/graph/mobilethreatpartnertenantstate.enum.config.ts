import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MobileThreatPartnerTenantState } from './mobilethreatpartnertenantstate.enum';
//#endregion

export const MobileThreatPartnerTenantStateConfig = {
  name: "mobileThreatPartnerTenantState",
  members: MobileThreatPartnerTenantState
} as EnumTypeConfig<MobileThreatPartnerTenantState>;