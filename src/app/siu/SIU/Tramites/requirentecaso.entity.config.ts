import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RequirenteCaso } from './requirentecaso.entity';
import { RequirenteCasoModel } from './requirentecaso.model';
import { RequirenteCasoCollection } from './requirentecaso.collection';
//#endregion

export const RequirenteCasoConfig = {
  name: "RequirenteCaso",
  model: RequirenteCasoModel,
  collection: RequirenteCasoCollection,
  annotations: [],
  fields: {
    casoId: {type: 'Edm.Int32', key: true, ref: 'casoId'},
    requirenteId: {type: 'Edm.Int32', key: true, ref: 'requirenteId'},
    key: {type: 'Edm.String'},
    rolRequirenteId: {type: 'Edm.Int32'},
    ausente: {type: 'Edm.Boolean'},
    principalId: {type: 'Edm.Int32'},
    alternativoId: {type: 'Edm.Int32'},
    fecha: {type: 'Edm.DateTimeOffset'},
    delitoId: {type: 'Edm.Int32'},
    otrosDelitos: {type: 'Edm.String', maxLength: 350},
    calidadRequirenteId: {type: 'Edm.Int32'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    caso: {type: 'SIU.Tramites.Caso', navigation: true, field: 'casoId', ref: 'id'},
    requirente: {type: 'SIU.Personas.Requirente', navigation: true, field: 'requirenteId', ref: 'id'},
    rolRequirente: {type: 'SIU.Tramites.RolRequirente', navigation: true, field: 'rolRequirenteId', ref: 'id'},
    principal: {type: 'SIU.Personas.Empleado', navigation: true},
    alternativo: {type: 'SIU.Personas.Empleado', navigation: true},
    delito: {type: 'SIU.Tramites.SubMateria', navigation: true},
    calidadRequirente: {type: 'SIU.Personas.CalidadRequirente', navigation: true, field: 'calidadRequirenteId', ref: 'id'},
    historicoAbogadoPersonas: {type: 'SIU.Tramites.HistoricoAbogadoPersona', collection: true, navigation: true},
    historicoSubmaterias: {type: 'SIU.Tramites.HistoricoSubmateria', collection: true, navigation: true},
    movimientosCaso: {type: 'SIU.Tramites.MovimientoCaso', collection: true, navigation: true},
    intervenciones: {type: 'SIU.Tramites.Intervencion', collection: true, navigation: true},
    detenciones: {type: 'SIU.Tramites.Detencion', collection: true, navigation: true}
  }
} as EntityConfig<RequirenteCaso>;