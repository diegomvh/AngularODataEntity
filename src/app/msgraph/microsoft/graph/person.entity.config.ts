import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Person } from './person.entity';
import { PersonModel } from './person.model';
import { PersonCollection } from './person.collection';
//#endregion

export const PersonConfig = {
  name: "person",
  base: "microsoft.graph.entity",
  model: PersonModel,
  collection: PersonCollection,
  annotations: [],
  fields: {
    birthday: {type: 'Edm.String'},
    companyName: {type: 'Edm.String'},
    department: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    givenName: {type: 'Edm.String'},
    imAddress: {type: 'Edm.String'},
    isFavorite: {type: 'Edm.Boolean'},
    jobTitle: {type: 'Edm.String'},
    officeLocation: {type: 'Edm.String'},
    personNotes: {type: 'Edm.String'},
    personType: {type: 'graph.personType'},
    phones: {type: 'graph.phone', collection: true},
    postalAddresses: {type: 'graph.location', collection: true},
    profession: {type: 'Edm.String'},
    scoredEmailAddresses: {type: 'graph.scoredEmailAddress', collection: true},
    surname: {type: 'Edm.String'},
    userPrincipalName: {type: 'Edm.String'},
    websites: {type: 'graph.website', collection: true},
    yomiCompany: {type: 'Edm.String'}
  }
} as EntityConfig<Person>;