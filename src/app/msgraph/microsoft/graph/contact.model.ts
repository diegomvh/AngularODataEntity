import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OutlookItemModel } from './outlookitem.model';
import { EmailAddress } from './emailaddress.entity';
import { PhysicalAddress } from './physicaladdress.entity';
import { Contact } from './contact.entity';
import { ProfilePhoto } from './profilephoto.entity';
import { Extension } from './extension.entity';
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
import { EmailAddressModel } from './emailaddress.model';
import { PhysicalAddressModel } from './physicaladdress.model';
import { ProfilePhotoModel } from './profilephoto.model';
import { ExtensionModel } from './extension.model';
import { MultiValueLegacyExtendedPropertyModel } from './multivaluelegacyextendedproperty.model';
import { SingleValueLegacyExtendedPropertyModel } from './singlevaluelegacyextendedproperty.model';
import { EmailAddressCollection } from './emailaddress.collection';
import { PhysicalAddressCollection } from './physicaladdress.collection';
import { ContactCollection } from './contact.collection';
import { ProfilePhotoCollection } from './profilephoto.collection';
import { ExtensionCollection } from './extension.collection';
import { MultiValueLegacyExtendedPropertyCollection } from './multivaluelegacyextendedproperty.collection';
import { SingleValueLegacyExtendedPropertyCollection } from './singlevaluelegacyextendedproperty.collection';
//#endregion

export class ContactModel<E extends Contact> extends OutlookItemModel<E> {
  //#region ODataApi Properties
  assistantName?: string;
  birthday?: Date;
  businessAddress?: PhysicalAddressModel<PhysicalAddress>;
  businessHomePage?: string;
  businessPhones?: string[];
  children?: string[];
  companyName?: string;
  department?: string;
  displayName?: string;
  emailAddresses?: EmailAddressCollection<EmailAddress, EmailAddressModel<EmailAddress>>;
  fileAs?: string;
  generation?: string;
  givenName?: string;
  homeAddress?: PhysicalAddressModel<PhysicalAddress>;
  homePhones?: string[];
  imAddresses?: string[];
  initials?: string;
  jobTitle?: string;
  manager?: string;
  middleName?: string;
  mobilePhone?: string;
  nickName?: string;
  officeLocation?: string;
  otherAddress?: PhysicalAddressModel<PhysicalAddress>;
  parentFolderId?: string;
  personalNotes?: string;
  profession?: string;
  spouseName?: string;
  surname?: string;
  title?: string;
  yomiCompanyName?: string;
  yomiGivenName?: string;
  yomiSurname?: string;
  extensions?: ExtensionCollection<Extension, ExtensionModel<Extension>>;
  multiValueExtendedProperties?: MultiValueLegacyExtendedPropertyCollection<MultiValueLegacyExtendedProperty, MultiValueLegacyExtendedPropertyModel<MultiValueLegacyExtendedProperty>>;
  photo?: ProfilePhotoModel<ProfilePhoto>;
  singleValueExtendedProperties?: SingleValueLegacyExtendedPropertyCollection<SingleValueLegacyExtendedProperty, SingleValueLegacyExtendedPropertyModel<SingleValueLegacyExtendedProperty>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}