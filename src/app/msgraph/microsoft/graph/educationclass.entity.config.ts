import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EducationClass } from './educationclass.entity';
import { EducationClassModel } from './educationclass.model';
import { EducationClassCollection } from './educationclass.collection';
//#endregion

export const EducationClassConfig = {
  name: "educationClass",
  base: "microsoft.graph.entity",
  model: EducationClassModel,
  collection: EducationClassCollection,
  annotations: [],
  fields: {
    classCode: {type: 'Edm.String'},
    createdBy: {type: 'graph.identitySet'},
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String', nullable: false},
    externalId: {type: 'Edm.String'},
    externalName: {type: 'Edm.String'},
    externalSource: {type: 'graph.educationExternalSource'},
    mailNickname: {type: 'Edm.String', nullable: false},
    term: {type: 'graph.educationTerm'},
    group: {type: 'graph.group', navigation: true},
    members: {type: 'graph.educationUser', collection: true, navigation: true},
    schools: {type: 'graph.educationSchool', collection: true, navigation: true},
    teachers: {type: 'graph.educationUser', collection: true, navigation: true}
  }
} as EntityConfig<EducationClass>;