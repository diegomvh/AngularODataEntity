import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PublicationFacet } from './publicationfacet.entity';
import { PublicationFacetModel } from './publicationfacet.model';
import { PublicationFacetCollection } from './publicationfacet.collection';
//#endregion

export const PublicationFacetConfig = {
  name: "publicationFacet",
  model: PublicationFacetModel,
  collection: PublicationFacetCollection,
  annotations: [],
  fields: {
    level: {type: 'Edm.String'},
    versionId: {type: 'Edm.String'}
  }
} as EntityConfig<PublicationFacet>;