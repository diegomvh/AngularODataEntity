import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedEBook } from './managedebook.entity';
import { ManagedEBookModel } from './managedebook.model';
import { ManagedEBookCollection } from './managedebook.collection';
//#endregion

export const ManagedEBookConfig = {
  name: "managedEBook",
  base: "microsoft.graph.entity",
  model: ManagedEBookModel,
  collection: ManagedEBookCollection,
  annotations: [],
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String', nullable: false},
    informationUrl: {type: 'Edm.String'},
    largeCover: {type: 'graph.mimeContent'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    privacyInformationUrl: {type: 'Edm.String'},
    publishedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    publisher: {type: 'Edm.String'},
    assignments: {type: 'graph.managedEBookAssignment', collection: true, navigation: true},
    deviceStates: {type: 'graph.deviceInstallState', collection: true, navigation: true},
    installSummary: {type: 'graph.eBookInstallSummary', navigation: true},
    userStateSummary: {type: 'graph.userInstallStateSummary', collection: true, navigation: true}
  }
} as EntityConfig<ManagedEBook>;