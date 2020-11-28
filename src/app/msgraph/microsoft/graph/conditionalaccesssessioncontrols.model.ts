import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ApplicationEnforcedRestrictionsSessionControl } from './applicationenforcedrestrictionssessioncontrol.entity';
import { CloudAppSecuritySessionControl } from './cloudappsecuritysessioncontrol.entity';
import { ConditionalAccessSessionControls } from './conditionalaccesssessioncontrols.entity';
import { PersistentBrowserSessionControl } from './persistentbrowsersessioncontrol.entity';
import { SignInFrequencySessionControl } from './signinfrequencysessioncontrol.entity';
import { ApplicationEnforcedRestrictionsSessionControlModel } from './applicationenforcedrestrictionssessioncontrol.model';
import { CloudAppSecuritySessionControlModel } from './cloudappsecuritysessioncontrol.model';
import { PersistentBrowserSessionControlModel } from './persistentbrowsersessioncontrol.model';
import { SignInFrequencySessionControlModel } from './signinfrequencysessioncontrol.model';
import { ApplicationEnforcedRestrictionsSessionControlCollection } from './applicationenforcedrestrictionssessioncontrol.collection';
import { CloudAppSecuritySessionControlCollection } from './cloudappsecuritysessioncontrol.collection';
import { ConditionalAccessSessionControlsCollection } from './conditionalaccesssessioncontrols.collection';
import { PersistentBrowserSessionControlCollection } from './persistentbrowsersessioncontrol.collection';
import { SignInFrequencySessionControlCollection } from './signinfrequencysessioncontrol.collection';
//#endregion

export class ConditionalAccessSessionControlsModel<E extends ConditionalAccessSessionControls> extends ODataModel<E> {
  //#region ODataApi Properties
  applicationEnforcedRestrictions?: ApplicationEnforcedRestrictionsSessionControlModel<ApplicationEnforcedRestrictionsSessionControl>;
  cloudAppSecurity?: CloudAppSecuritySessionControlModel<CloudAppSecuritySessionControl>;
  persistentBrowser?: PersistentBrowserSessionControlModel<PersistentBrowserSessionControl>;
  signInFrequency?: SignInFrequencySessionControlModel<SignInFrequencySessionControl>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}