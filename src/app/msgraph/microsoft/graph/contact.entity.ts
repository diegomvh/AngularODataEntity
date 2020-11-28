import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OutlookItem } from './outlookitem.entity';
import { EmailAddress } from './emailaddress.entity';
import { PhysicalAddress } from './physicaladdress.entity';
import { ProfilePhoto } from './profilephoto.entity';
import { Extension } from './extension.entity';
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
import { EmailAddressModel } from './emailaddress.model';
import { PhysicalAddressModel } from './physicaladdress.model';
import { OutlookItemModel } from './outlookitem.model';
import { ProfilePhotoModel } from './profilephoto.model';
import { ExtensionModel } from './extension.model';
import { MultiValueLegacyExtendedPropertyModel } from './multivaluelegacyextendedproperty.model';
import { SingleValueLegacyExtendedPropertyModel } from './singlevaluelegacyextendedproperty.model';
import { EmailAddressCollection } from './emailaddress.collection';
import { PhysicalAddressCollection } from './physicaladdress.collection';
import { OutlookItemCollection } from './outlookitem.collection';
import { ProfilePhotoCollection } from './profilephoto.collection';
import { ExtensionCollection } from './extension.collection';
import { MultiValueLegacyExtendedPropertyCollection } from './multivaluelegacyextendedproperty.collection';
import { SingleValueLegacyExtendedPropertyCollection } from './singlevaluelegacyextendedproperty.collection';
//#endregion

export interface Contact extends OutlookItem {
  //#region ODataApi Properties
  assistantName?: string;
  birthday?: Date;
  businessAddress?: PhysicalAddress;
  businessHomePage?: string;
  businessPhones?: string[];
  children?: string[];
  companyName?: string;
  department?: string;
  displayName?: string;
  emailAddresses?: EmailAddress[];
  fileAs?: string;
  generation?: string;
  givenName?: string;
  homeAddress?: PhysicalAddress;
  homePhones?: string[];
  imAddresses?: string[];
  initials?: string;
  jobTitle?: string;
  manager?: string;
  middleName?: string;
  mobilePhone?: string;
  nickName?: string;
  officeLocation?: string;
  otherAddress?: PhysicalAddress;
  parentFolderId?: string;
  personalNotes?: string;
  profession?: string;
  spouseName?: string;
  surname?: string;
  title?: string;
  yomiCompanyName?: string;
  yomiGivenName?: string;
  yomiSurname?: string;
  extensions?: Extension[];
  multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
  photo?: ProfilePhoto;
  singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
  //#endregion
}