import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TipoIdentificacion } from './tipoidentificacion.entity';
import { TipoIdentificacionModel } from './tipoidentificacion.model';
import { TipoIdentificacionCollection } from './tipoidentificacion.collection';
//#endregion

export const TipoIdentificacionConfig = {
  name: "TipoIdentificacion",
  model: TipoIdentificacionModel,
  collection: TipoIdentificacionCollection,
  annotations: [],
  fields: {
    nombre: {type: 'Edm.String', nullable: false, maxLength: 15},
    descripcion: {type: 'Edm.String', nullable: false},
    oculto: {type: 'Edm.Boolean', nullable: false},
    longname: {type: 'Edm.String'},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    empleados: {type: 'SIU.Personas.Empleado', collection: true, navigation: true},
    requirentes: {type: 'SIU.Personas.Requirente', collection: true, navigation: true}
  }
} as EntityConfig<TipoIdentificacion>;