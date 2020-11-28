import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenotePatchContentCommand } from './onenotepatchcontentcommand.entity';
import { OnenotePatchContentCommandModel } from './onenotepatchcontentcommand.model';
import { OnenotePatchContentCommandCollection } from './onenotepatchcontentcommand.collection';
//#endregion

export const OnenotePatchContentCommandConfig = {
  name: "onenotePatchContentCommand",
  model: OnenotePatchContentCommandModel,
  collection: OnenotePatchContentCommandCollection,
  annotations: [],
  fields: {
    action: {type: 'graph.onenotePatchActionType', nullable: false},
    content: {type: 'Edm.String'},
    position: {type: 'graph.onenotePatchInsertPosition'},
    target: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<OnenotePatchContentCommand>;