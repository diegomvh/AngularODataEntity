import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AssignedLabel } from './assignedlabel.entity';
//#endregion

export const AssignedLabelConfig = {
  name: "AssignedLabel",
  annotations: [],
  fields: {
    labelId: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'}
  }
} as EntityConfig<AssignedLabel>;