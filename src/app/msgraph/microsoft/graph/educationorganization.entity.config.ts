import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { EducationOrganization } from './educationorganization.entity';
import { EducationOrganizationModel } from './educationorganization.model';
import { EducationOrganizationCollection } from './educationorganization.collection';
//#endregion

export const EducationOrganizationConfig = {
  name: "educationOrganization",
  base: "microsoft.graph.entity",
  model: EducationOrganizationModel,
  collection: EducationOrganizationCollection,
  annotations: [],
  fields: {
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String', nullable: false},
    externalSource: {type: 'graph.educationExternalSource'}
  }
} as StructuredTypeConfig<EducationOrganization>;