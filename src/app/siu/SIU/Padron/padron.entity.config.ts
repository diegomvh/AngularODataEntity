import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Padron } from './padron.entity';
import { PadronModel } from './padron.model';
import { PadronCollection } from './padron.collection';
//#endregion

export const PadronConfig = {
  name: "Padron",
  model: PadronModel,
  collection: PadronCollection,
  annotations: [],
  fields: {
    localidadPadronId: {type: 'Edm.Int32', nullable: false},
    documento: {type: 'Edm.String', maxLength: 8},
    clase: {type: 'Edm.Int32'},
    nombre: {type: 'Edm.String', maxLength: 60},
    ocupacion: {type: 'Edm.String', maxLength: 30},
    direccion: {type: 'Edm.String', maxLength: 40},
    tipoDoc: {type: 'Edm.String', maxLength: 10},
    sexo: {type: 'Edm.String', maxLength: 1},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    localidad: {type: 'SIU.Padron.PadronLocalidad', navigation: true}
  }
} as EntityConfig<Padron>;