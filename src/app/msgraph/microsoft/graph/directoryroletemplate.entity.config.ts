import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryRoleTemplate } from './directoryroletemplate.entity';
//#endregion

export const DirectoryRoleTemplateConfig = {
  name: "directoryRoleTemplate",
  base: "microsoft.graph.directoryObject",
  open: true,
  annotations: [],
  fields: {
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'}
  }
} as EntityConfig<DirectoryRoleTemplate>;