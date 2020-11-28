import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AssignedLabel } from './assignedlabel.entity';
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
} as EntityConfig<AssignedLabel>;