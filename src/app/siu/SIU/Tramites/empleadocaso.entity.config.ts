import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EmpleadoCaso } from './empleadocaso.entity';
import { EmpleadoCasoModel } from './empleadocaso.model';
import { EmpleadoCasoCollection } from './empleadocaso.collection';
//#endregion

export const EmpleadoCasoConfig = {
  name: "EmpleadoCaso",
  model: EmpleadoCasoModel,
  collection: EmpleadoCasoCollection,
  annotations: [],
  fields: {
    empleadoId: {type: 'Edm.Int32', key: true, ref: 'empleadoId'},
    casoId: {type: 'Edm.Int32', key: true, ref: 'casoId'},
    desde: {type: 'Edm.DateTimeOffset', key: true, ref: 'desde', nullable: false},
    key: {type: 'Edm.String'},
    motivoCambioResponsableId: {type: 'Edm.Int32'},
    observaciones: {type: 'Edm.String', maxLength: 200},
    hasta: {type: 'Edm.DateTimeOffset'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    empleado: {type: 'SIU.Personas.Empleado', navigation: true, field: 'empleadoId', ref: 'id'},
    caso: {type: 'SIU.Tramites.Caso', navigation: true, field: 'casoId', ref: 'id'},
    motivoCambioResponsable: {type: 'SIU.Tramites.MotivoCambioResponsable', navigation: true, field: 'motivoCambioResponsableId', ref: 'id'}
  }
} as EntityConfig<EmpleadoCaso>;