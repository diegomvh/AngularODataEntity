import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenotePatchContentCommand } from './onenotepatchcontentcommand.entity';
//#endregion

export const OnenotePatchContentCommandConfig = {
  name: "OnenotePatchContentCommand",
  annotations: [],
  fields: {
    action: {type: 'graph.onenotePatchActionType', nullable: false},
    target: {type: 'Edm.String', nullable: false},
    content: {type: 'Edm.String'},
    position: {type: 'graph.onenotePatchInsertPosition'}
  }
} as EntityConfig<OnenotePatchContentCommand>;