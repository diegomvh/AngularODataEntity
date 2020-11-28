import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PadronLocalidad } from './padronlocalidad.entity';
import { PadronLocalidadModel } from './padronlocalidad.model';
import { PadronLocalidadCollection } from './padronlocalidad.collection';
//#endregion

export const PadronLocalidadConfig = {
  name: "PadronLocalidad",
  model: PadronLocalidadModel,
  collection: PadronLocalidadCollection,
  annotations: [],
  fields: {
    departamentoId: {type: 'Edm.Int32', nullable: false},
    nombre: {type: 'Edm.String', nullable: false, maxLength: 40},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    padrones: {type: 'SIU.Padron.Padron', collection: true, navigation: true},
    departamento: {type: 'SIU.Padron.PadronDepartamento', navigation: true}
  }
} as EntityConfig<PadronLocalidad>;