import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
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
import { PersonModel } from './person.model';
import { PhoneCollection } from './phone.collection';
import { LocationCollection } from './location.collection';
import { PersonTypeCollection } from './persontype.collection';
import { ScoredEmailAddressCollection } from './scoredemailaddress.collection';
import { WebsiteCollection } from './website.collection';
//#endregion

export class PersonCollection<E extends Person, M extends PersonModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}