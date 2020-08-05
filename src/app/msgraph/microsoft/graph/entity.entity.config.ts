import { EntityConfig as ODataEntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export const EntityConfig = {
  name: "Entity",
  annotations: [],
  fields: {
    id: {type: 'Edm.String', key: true, ref: 'id', nullable: false}
  }
} as ODataEntityConfig<Entity>;