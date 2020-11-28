import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Phone } from './phone.complex';
import { Location } from './location.complex';
import { PersonType } from './persontype.complex';
import { ScoredEmailAddress } from './scoredemailaddress.complex';
import { Website } from './website.complex';
import { PhoneModel } from './phone.model';
import { LocationModel } from './location.model';
import { PersonTypeModel } from './persontype.model';
import { ScoredEmailAddressModel } from './scoredemailaddress.model';
import { WebsiteModel } from './website.model';
import { EntityModel } from './entity.model';
import { PhoneCollection } from './phone.collection';
import { LocationCollection } from './location.collection';
import { PersonTypeCollection } from './persontype.collection';
import { ScoredEmailAddressCollection } from './scoredemailaddress.collection';
import { WebsiteCollection } from './website.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface Person extends Entity {
  //#region ODataApi Properties
  birthday?: string;
  companyName?: string;
  department?: string;
  displayName?: string;
  givenName?: string;
  imAddress?: string;
  isFavorite?: boolean;
  jobTitle?: string;
  officeLocation?: string;
  personNotes?: string;
  personType?: PersonType;
  phones?: Phone[];
  postalAddresses?: Location[];
  profession?: string;
  scoredEmailAddresses?: ScoredEmailAddress[];
  surname?: string;
  userPrincipalName?: string;
  websites?: Website[];
  yomiCompany?: string;
  //#endregion
}