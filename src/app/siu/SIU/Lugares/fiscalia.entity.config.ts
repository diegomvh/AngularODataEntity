import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Fiscalia } from './fiscalia.entity';
import { FiscaliaModel } from './fiscalia.model';
import { FiscaliaCollection } from './fiscalia.collection';
//#endregion

export const FiscaliaConfig = {
  name: "Fiscalia",
  model: FiscaliaModel,
  collection: FiscaliaCollection,
  annotations: [],
  fields: {
    abreviado: {type: 'Edm.String'},
    nombre: {type: 'Edm.String'},
    localidadId: {type: 'Edm.Int32'},
    guid: {type: 'Edm.Guid', nullable: false},
    shortname: {type: 'Edm.String'},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    localidad: {type: 'SIU.Lugares.Localidad', navigation: true, field: 'localidadId', ref: 'id'}
  }
} as EntityConfig<Fiscalia>;