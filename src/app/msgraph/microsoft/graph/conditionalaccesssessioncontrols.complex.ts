import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ApplicationEnforcedRestrictionsSessionControl } from './applicationenforcedrestrictionssessioncontrol.complex';
import { CloudAppSecuritySessionControl } from './cloudappsecuritysessioncontrol.complex';
import { PersistentBrowserSessionControl } from './persistentbrowsersessioncontrol.complex';
import { SignInFrequencySessionControl } from './signinfrequencysessioncontrol.complex';
import { ApplicationEnforcedRestrictionsSessionControlModel } from './applicationenforcedrestrictionssessioncontrol.model';
import { CloudAppSecuritySessionControlModel } from './cloudappsecuritysessioncontrol.model';
import { PersistentBrowserSessionControlModel } from './persistentbrowsersessioncontrol.model';
import { SignInFrequencySessionControlModel } from './signinfrequencysessioncontrol.model';
import { ApplicationEnforcedRestrictionsSessionControlCollection } from './applicationenforcedrestrictionssessioncontrol.collection';
import { CloudAppSecuritySessionControlCollection } from './cloudappsecuritysessioncontrol.collection';
import { PersistentBrowserSessionControlCollection } from './persistentbrowsersessioncontrol.collection';
import { SignInFrequencySessionControlCollection } from './signinfrequencysessioncontrol.collection';
//#endregion

export interface ConditionalAccessSessionControls {
  //#region ODataApi Properties
  applicationEnforcedRestrictions?: ApplicationEnforcedRestrictionsSessionControl;
  cloudAppSecurity?: CloudAppSecuritySessionControl;
  persistentBrowser?: PersistentBrowserSessionControl;
  signInFrequency?: SignInFrequencySessionControl;
  //#endregion
}