import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EducationClass } from './educationclass.entity';
//#endregion

export const EducationClassConfig = {
  name: "EducationClass",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String', nullable: false},
    mailNickname: {type: 'Edm.String', nullable: false},
    description: {type: 'Edm.String'},
    createdBy: {type: 'graph.identitySet'},
    classCode: {type: 'Edm.String'},
    externalName: {type: 'Edm.String'},
    externalId: {type: 'Edm.String'},
    externalSource: {type: 'graph.educationExternalSource'},
    term: {type: 'graph.educationTerm'},
    schools: {type: 'graph.educationSchool', collection: true, navigation: true},
    members: {type: 'graph.educationUser', collection: true, navigation: true},
    teachers: {type: 'graph.educationUser', collection: true, navigation: true},
    group: {type: 'graph.group', navigation: true}
  }
} as EntityConfig<EducationClass>;