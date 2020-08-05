import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PublicationFacet } from './publicationfacet.entity';
//#endregion

export const PublicationFacetConfig = {
  name: "PublicationFacet",
  annotations: [],
  fields: {
    level: {type: 'Edm.String'},
    versionId: {type: 'Edm.String'}
  }
} as EntityConfig<PublicationFacet>;