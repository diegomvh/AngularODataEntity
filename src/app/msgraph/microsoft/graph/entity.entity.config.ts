import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export const EntityConfig = {
  name: "entity",
  model: EntityModel,
  collection: EntityCollection,
  annotations: [],
  fields: {
    id: {type: 'Edm.String', key: true, ref: 'id', nullable: false}
  }
} as StructuredTypeConfig<Entity>;