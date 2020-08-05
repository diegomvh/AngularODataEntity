import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Phone } from './phone.entity';
import { Location } from './location.entity';
import { ScoredEmailAddress } from './scoredemailaddress.entity';
import { Website } from './website.entity';
import { PersonType } from './persontype.entity';
//#endregion

export interface Person extends Entity {
  //#region ODataApi Properties
  displayName?: string;
  givenName?: string;
  surname?: string;
  birthday?: string;
  personNotes?: string;
  isFavorite?: boolean;
  scoredEmailAddresses?: ScoredEmailAddress[];
  phones?: Phone[];
  postalAddresses?: Location[];
  websites?: Website[];
  jobTitle?: string;
  companyName?: string;
  yomiCompany?: string;
  department?: string;
  officeLocation?: string;
  profession?: string;
  personType?: PersonType;
  userPrincipalName?: string;
  imAddress?: string;
  //#endregion
}