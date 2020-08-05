import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EducationOrganization } from './educationorganization.entity';
//#endregion

export const EducationOrganizationConfig = {
  name: "educationOrganization",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String', nullable: false},
    description: {type: 'Edm.String'},
    externalSource: {type: 'graph.educationExternalSource'}
  }
} as EntityConfig<EducationOrganization>;