import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Asesor } from './asesor.entity';
import { AsesorModel } from './asesor.model';
import { AsesorCollection } from './asesor.collection';
//#endregion

export const AsesorConfig = {
  name: "Asesor",
  model: AsesorModel,
  collection: AsesorCollection,
  annotations: [],
  fields: {
    nombres: {type: 'Edm.String', nullable: false, maxLength: 35},
    apellidos: {type: 'Edm.String', nullable: false, maxLength: 35},
    telefono: {type: 'Edm.String', maxLength: 20},
    habilitado: {type: 'Edm.Boolean', nullable: false},
    guid: {type: 'Edm.Guid', nullable: false},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    expedientes: {type: 'SIU.Tramites.Expediente', collection: true, navigation: true}
  }
} as EntityConfig<Asesor>;