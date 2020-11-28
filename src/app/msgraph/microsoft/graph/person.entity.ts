import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Phone } from './phone.entity';
import { Location } from './location.entity';
import { PersonType } from './persontype.entity';
import { ScoredEmailAddress } from './scoredemailaddress.entity';
import { Website } from './website.entity';
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