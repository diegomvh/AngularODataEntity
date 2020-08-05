import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { MobileThreatPartnerTenantState } from './mobilethreatpartnertenantstate.enum';
//#endregion

export const MobileThreatPartnerTenantStateConfig = {
  name: "MobileThreatPartnerTenantState",
  members: MobileThreatPartnerTenantState
} as EnumConfig<MobileThreatPartnerTenantState>;