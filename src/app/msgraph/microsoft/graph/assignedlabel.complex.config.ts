import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AssignedLabel } from './assignedlabel.complex';
import { AssignedLabelModel } from './assignedlabel.model';
import { AssignedLabelCollection } from './assignedlabel.collection';
//#endregion

export const AssignedLabelConfig = {
  name: "assignedLabel",
  model: AssignedLabelModel,
  collection: AssignedLabelCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    labelId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<AssignedLabel>;