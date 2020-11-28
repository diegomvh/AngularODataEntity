import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OpenShiftItem } from './openshiftitem.entity';
import { OpenShiftItemModel } from './openshiftitem.model';
import { OpenShiftItemCollection } from './openshiftitem.collection';
//#endregion

export const OpenShiftItemConfig = {
  name: "openShiftItem",
  base: "microsoft.graph.shiftItem",
  model: OpenShiftItemModel,
  collection: OpenShiftItemCollection,
  annotations: [],
  fields: {
    openSlotCount: {type: 'Edm.Int32', nullable: false}
  }
} as EntityConfig<OpenShiftItem>;