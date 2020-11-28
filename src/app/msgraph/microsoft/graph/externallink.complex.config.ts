import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ExternalLink } from './externallink.complex';
import { ExternalLinkModel } from './externallink.model';
import { ExternalLinkCollection } from './externallink.collection';
//#endregion

export const ExternalLinkConfig = {
  name: "externalLink",
  model: ExternalLinkModel,
  collection: ExternalLinkCollection,
  annotations: [],
  fields: {
    href: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ExternalLink>;