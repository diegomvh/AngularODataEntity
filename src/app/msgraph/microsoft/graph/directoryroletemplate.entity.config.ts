import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryRoleTemplate } from './directoryroletemplate.entity';
import { DirectoryRoleTemplateModel } from './directoryroletemplate.model';
import { DirectoryRoleTemplateCollection } from './directoryroletemplate.collection';
//#endregion

export const DirectoryRoleTemplateConfig = {
  name: "directoryRoleTemplate",
  base: "microsoft.graph.directoryObject",
  open: true,
  model: DirectoryRoleTemplateModel,
  collection: DirectoryRoleTemplateCollection,
  annotations: [],
  fields: {
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DirectoryRoleTemplate>;