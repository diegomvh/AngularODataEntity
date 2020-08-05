import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Contact } from './contact.entity';
//#endregion

export const ContactConfig = {
  name: "contact",
  base: "microsoft.graph.outlookItem",
  open: true,
  annotations: [],
  fields: {
    parentFolderId: {type: 'Edm.String'},
    birthday: {type: 'Edm.DateTimeOffset'},
    fileAs: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    givenName: {type: 'Edm.String'},
    initials: {type: 'Edm.String'},
    middleName: {type: 'Edm.String'},
    nickName: {type: 'Edm.String'},
    surname: {type: 'Edm.String'},
    title: {type: 'Edm.String'},
    yomiGivenName: {type: 'Edm.String'},
    yomiSurname: {type: 'Edm.String'},
    yomiCompanyName: {type: 'Edm.String'},
    generation: {type: 'Edm.String'},
    emailAddresses: {type: 'graph.emailAddress', collection: true},
    imAddresses: {type: 'Edm.String', collection: true},
    jobTitle: {type: 'Edm.String'},
    companyName: {type: 'Edm.String'},
    department: {type: 'Edm.String'},
    officeLocation: {type: 'Edm.String'},
    profession: {type: 'Edm.String'},
    businessHomePage: {type: 'Edm.String'},
    assistantName: {type: 'Edm.String'},
    manager: {type: 'Edm.String'},
    homePhones: {type: 'Edm.String', collection: true},
    mobilePhone: {type: 'Edm.String'},
    businessPhones: {type: 'Edm.String', collection: true},
    homeAddress: {type: 'graph.physicalAddress'},
    businessAddress: {type: 'graph.physicalAddress'},
    otherAddress: {type: 'graph.physicalAddress'},
    spouseName: {type: 'Edm.String'},
    personalNotes: {type: 'Edm.String'},
    children: {type: 'Edm.String', collection: true},
    singleValueExtendedProperties: {type: 'graph.singleValueLegacyExtendedProperty', collection: true, navigation: true},
    multiValueExtendedProperties: {type: 'graph.multiValueLegacyExtendedProperty', collection: true, navigation: true},
    photo: {type: 'graph.profilePhoto', navigation: true},
    extensions: {type: 'graph.extension', collection: true, navigation: true}
  }
} as EntityConfig<Contact>;