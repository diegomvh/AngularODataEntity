import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PadronDepartamento } from './padrondepartamento.entity';
import { PadronDepartamentoModel } from './padrondepartamento.model';
import { PadronDepartamentoCollection } from './padrondepartamento.collection';
//#endregion

export const PadronDepartamentoConfig = {
  name: "PadronDepartamento",
  model: PadronDepartamentoModel,
  collection: PadronDepartamentoCollection,
  annotations: [],
  fields: {
    nombre: {type: 'Edm.String', nullable: false, maxLength: 20},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    localidades: {type: 'SIU.Padron.PadronLocalidad', collection: true, navigation: true}
  }
} as EntityConfig<PadronDepartamento>;