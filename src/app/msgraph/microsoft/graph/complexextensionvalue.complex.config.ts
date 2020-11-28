import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ComplexExtensionValue } from './complexextensionvalue.complex';
import { ComplexExtensionValueModel } from './complexextensionvalue.model';
import { ComplexExtensionValueCollection } from './complexextensionvalue.collection';
//#endregion

export const ComplexExtensionValueConfig = {
  name: "ComplexExtensionValue",
  open: true,
  model: ComplexExtensionValueModel,
  collection: ComplexExtensionValueCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<ComplexExtensionValue>;