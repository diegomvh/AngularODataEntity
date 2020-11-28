import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Contact } from './contact.entity';
import { ContactModel } from './contact.model';
import { ContactCollection } from './contact.collection';
//#endregion

export const ContactConfig = {
  name: "contact",
  base: "microsoft.graph.outlookItem",
  open: true,
  model: ContactModel,
  collection: ContactCollection,
  annotations: [],
  fields: {
    assistantName: {type: 'Edm.String'},
    birthday: {type: 'Edm.DateTimeOffset'},
    businessAddress: {type: 'graph.physicalAddress'},
    businessHomePage: {type: 'Edm.String'},
    businessPhones: {type: 'Edm.String', collection: true},
    children: {type: 'Edm.String', collection: true},
    companyName: {type: 'Edm.String'},
    department: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    emailAddresses: {type: 'graph.emailAddress', collection: true},
    fileAs: {type: 'Edm.String'},
    generation: {type: 'Edm.String'},
    givenName: {type: 'Edm.String'},
    homeAddress: {type: 'graph.physicalAddress'},
    homePhones: {type: 'Edm.String', collection: true},
    imAddresses: {type: 'Edm.String', collection: true},
    initials: {type: 'Edm.String'},
    jobTitle: {type: 'Edm.String'},
    manager: {type: 'Edm.String'},
    middleName: {type: 'Edm.String'},
    mobilePhone: {type: 'Edm.String'},
    nickName: {type: 'Edm.String'},
    officeLocation: {type: 'Edm.String'},
    otherAddress: {type: 'graph.physicalAddress'},
    parentFolderId: {type: 'Edm.String'},
    personalNotes: {type: 'Edm.String'},
    profession: {type: 'Edm.String'},
    spouseName: {type: 'Edm.String'},
    surname: {type: 'Edm.String'},
    title: {type: 'Edm.String'},
    yomiCompanyName: {type: 'Edm.String'},
    yomiGivenName: {type: 'Edm.String'},
    yomiSurname: {type: 'Edm.String'},
    extensions: {type: 'graph.extension', collection: true, navigation: true},
    multiValueExtendedProperties: {type: 'graph.multiValueLegacyExtendedProperty', collection: true, navigation: true},
    photo: {type: 'graph.profilePhoto', navigation: true},
    singleValueExtendedProperties: {type: 'graph.singleValueLegacyExtendedProperty', collection: true, navigation: true}
  }
} as EntityConfig<Contact>;