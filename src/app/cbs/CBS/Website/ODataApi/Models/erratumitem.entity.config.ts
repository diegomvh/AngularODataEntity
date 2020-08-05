import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ErratumItem } from './erratumitem.entity';
//#endregion

export const ErratumItemConfig = {
  name: "ErratumItem",
  annotations: [],
  fields: {
    PresentationTime: {type: 'Edm.DateTimeOffset', nullable: false},
    Body: {type: 'Edm.String'}
  }
} as EntityConfig<ErratumItem>;