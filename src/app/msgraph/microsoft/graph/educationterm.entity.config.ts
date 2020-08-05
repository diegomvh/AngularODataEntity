import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EducationTerm } from './educationterm.entity';
//#endregion

export const EducationTermConfig = {
  name: "EducationTerm",
  annotations: [],
  fields: {
    externalId: {type: 'Edm.String'},
    startDate: {type: 'Edm.Date'},
    endDate: {type: 'Edm.Date'},
    displayName: {type: 'Edm.String'}
  }
} as EntityConfig<EducationTerm>;