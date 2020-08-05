import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DriveItemVersion } from './driveitemversion.entity';
//#endregion

export const DriveItemVersionConfig = {
  name: "driveItemVersion",
  base: "microsoft.graph.baseItemVersion",
  annotations: [],
  fields: {
    content: {type: 'Edm.Stream'},
    size: {type: 'Edm.Int64'}
  }
} as EntityConfig<DriveItemVersion>;