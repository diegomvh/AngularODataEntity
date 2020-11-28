import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OutlookItemCollection } from './outlookitem.collection';
import { EmailAddress } from './emailaddress.complex';
import { PhysicalAddress } from './physicaladdress.complex';
import { Contact } from './contact.entity';
import { ProfilePhoto } from './profilephoto.entity';
import { Extension } from './extension.entity';
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
import { EmailAddressModel } from './emailaddress.model';
import { PhysicalAddressModel } from './physicaladdress.model';
import { ContactModel } from './contact.model';
import { ProfilePhotoModel } from './profilephoto.model';
import { ExtensionModel } from './extension.model';
import { MultiValueLegacyExtendedPropertyModel } from './multivaluelegacyextendedproperty.model';
import { SingleValueLegacyExtendedPropertyModel } from './singlevaluelegacyextendedproperty.model';
import { EmailAddressCollection } from './emailaddress.collection';
import { PhysicalAddressCollection } from './physicaladdress.collection';
import { ProfilePhotoCollection } from './profilephoto.collection';
import { ExtensionCollection } from './extension.collection';
import { MultiValueLegacyExtendedPropertyCollection } from './multivaluelegacyextendedproperty.collection';
import { SingleValueLegacyExtendedPropertyCollection } from './singlevaluelegacyextendedproperty.collection';
//#endregion

export class ContactCollection<E extends Contact, M extends ContactModel<E>> extends OutlookItemCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}