import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MimeContent } from './mimecontent.complex';
import { MimeContentModel } from './mimecontent.model';
import { MimeContentCollection } from './mimecontent.collection';
//#endregion

export const MimeContentConfig = {
  name: "mimeContent",
  model: MimeContentModel,
  collection: MimeContentCollection,
  annotations: [],
  fields: {
    type: {type: 'Edm.String'},
    value: {type: 'Edm.Binary'}
  }
} as StructuredTypeConfig<MimeContent>;