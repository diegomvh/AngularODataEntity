import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EducationTerm } from './educationterm.entity';
import { EducationTermModel } from './educationterm.model';
import { EducationTermCollection } from './educationterm.collection';
//#endregion

export const EducationTermConfig = {
  name: "educationTerm",
  model: EducationTermModel,
  collection: EducationTermCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    endDate: {type: 'Edm.Date'},
    externalId: {type: 'Edm.String'},
    startDate: {type: 'Edm.Date'}
  }
} as EntityConfig<EducationTerm>;