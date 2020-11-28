import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PublicationFacet } from './publicationfacet.complex';
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
} as StructuredTypeConfig<PublicationFacet>;