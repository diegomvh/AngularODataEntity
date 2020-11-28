import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RequirenteEnEspera } from './requirenteenespera.entity';
import { RequirenteEnEsperaModel } from './requirenteenespera.model';
import { RequirenteEnEsperaCollection } from './requirenteenespera.collection';
//#endregion

export const RequirenteEnEsperaConfig = {
  name: "RequirenteEnEspera",
  model: RequirenteEnEsperaModel,
  collection: RequirenteEnEsperaCollection,
  annotations: [],
  fields: {
    fecha: {type: 'Edm.DateTimeOffset'},
    modificado: {type: 'Edm.DateTimeOffset'},
    referenteId: {type: 'Edm.Int32'},
    enAtencion: {type: 'Edm.Boolean'},
    casoId: {type: 'Edm.Int32'},
    requirenteId: {type: 'Edm.Int32'},
    oficinaId: {type: 'Edm.Int32'},
    categoriaCasoId: {type: 'Edm.Int32'},
    subMateriaId: {type: 'Edm.Int32'},
    atendiendoId: {type: 'Edm.Int32'},
    observaciones: {type: 'Edm.String', maxLength: 150},
    responsableId: {type: 'Edm.Int32'},
    atendido: {type: 'Edm.Boolean'},
    ausente: {type: 'Edm.Boolean'},
    subResponsableId: {type: 'Edm.Int32'},
    registranteId: {type: 'Edm.Int32'},
    prioridad: {type: 'Edm.String', maxLength: 150},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    caso: {type: 'SIU.Tramites.Caso', navigation: true, field: 'casoId', ref: 'id'},
    categoriaCaso: {type: 'SIU.Tramites.CategoriaCaso', navigation: true, field: 'categoriaCasoId', ref: 'id'},
    registrante: {type: 'SIU.Personas.Empleado', navigation: true},
    referente: {type: 'SIU.Personas.Empleado', navigation: true},
    responsable: {type: 'SIU.Personas.Empleado', navigation: true},
    subResponsable: {type: 'SIU.Personas.Empleado', navigation: true},
    atendiendo: {type: 'SIU.Personas.Empleado', navigation: true},
    oficina: {type: 'SIU.Lugares.Oficina', navigation: true, field: 'oficinaId', ref: 'id'},
    requirente: {type: 'SIU.Personas.Requirente', navigation: true, field: 'requirenteId', ref: 'id'},
    subMateria: {type: 'SIU.Tramites.SubMateria', navigation: true, field: 'subMateriaId', ref: 'id'}
  }
} as EntityConfig<RequirenteEnEspera>;