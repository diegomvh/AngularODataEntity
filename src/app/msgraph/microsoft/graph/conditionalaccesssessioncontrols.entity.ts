import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ApplicationEnforcedRestrictionsSessionControl } from './applicationenforcedrestrictionssessioncontrol.entity';
import { CloudAppSecuritySessionControl } from './cloudappsecuritysessioncontrol.entity';
import { SignInFrequencySessionControl } from './signinfrequencysessioncontrol.entity';
import { PersistentBrowserSessionControl } from './persistentbrowsersessioncontrol.entity';
//#endregion

export interface ConditionalAccessSessionControls {
  //#region ODataApi Properties
  applicationEnforcedRestrictions?: ApplicationEnforcedRestrictionsSessionControl;
  cloudAppSecurity?: CloudAppSecuritySessionControl;
  signInFrequency?: SignInFrequencySessionControl;
  persistentBrowser?: PersistentBrowserSessionControl;
  //#endregion
}