import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OpenShiftItem } from './openshiftitem.entity';
//#endregion

export const OpenShiftItemConfig = {
  name: "openShiftItem",
  base: "microsoft.graph.shiftItem",
  annotations: [],
  fields: {
    openSlotCount: {type: 'Edm.Int32', nullable: false}
  }
} as EntityConfig<OpenShiftItem>;