import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { Phone } from './phone.entity';
import { Location } from './location.entity';
import { PersonType } from './persontype.entity';
import { ScoredEmailAddress } from './scoredemailaddress.entity';
import { Website } from './website.entity';
import { Person } from './person.entity';
import { PhoneModel } from './phone.model';
import { LocationModel } from './location.model';
import { PersonTypeModel } from './persontype.model';
import { ScoredEmailAddressModel } from './scoredemailaddress.model';
import { WebsiteModel } from './website.model';
import { PhoneCollection } from './phone.collection';
import { LocationCollection } from './location.collection';
import { PersonTypeCollection } from './persontype.collection';
import { ScoredEmailAddressCollection } from './scoredemailaddress.collection';
import { WebsiteCollection } from './website.collection';
import { PersonCollection } from './person.collection';
//#endregion

export class PersonModel<E extends Person> extends EntityModel<E> {
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
  personType?: PersonTypeModel<PersonType>;
  phones?: PhoneCollection<Phone, PhoneModel<Phone>>;
  postalAddresses?: LocationCollection<Location, LocationModel<Location>>;
  profession?: string;
  scoredEmailAddresses?: ScoredEmailAddressCollection<ScoredEmailAddress, ScoredEmailAddressModel<ScoredEmailAddress>>;
  surname?: string;
  userPrincipalName?: string;
  websites?: WebsiteCollection<Website, WebsiteModel<Website>>;
  yomiCompany?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}