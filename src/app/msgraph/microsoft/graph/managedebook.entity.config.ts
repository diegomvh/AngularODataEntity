import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedEBook } from './managedebook.entity';
//#endregion

export const ManagedEBookConfig = {
  name: "managedEBook",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String', nullable: false},
    description: {type: 'Edm.String'},
    publisher: {type: 'Edm.String'},
    publishedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    largeCover: {type: 'graph.mimeContent'},
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    informationUrl: {type: 'Edm.String'},
    privacyInformationUrl: {type: 'Edm.String'},
    assignments: {type: 'graph.managedEBookAssignment', collection: true, navigation: true},
    installSummary: {type: 'graph.eBookInstallSummary', navigation: true},
    deviceStates: {type: 'graph.deviceInstallState', collection: true, navigation: true},
    userStateSummary: {type: 'graph.userInstallStateSummary', collection: true, navigation: true}
  }
} as EntityConfig<ManagedEBook>;