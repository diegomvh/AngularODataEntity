import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SubMateria } from './submateria.entity';
import { SubMateriaModel } from './submateria.model';
import { SubMateriaCollection } from './submateria.collection';
//#endregion

export const SubMateriaConfig = {
  name: "SubMateria",
  model: SubMateriaModel,
  collection: SubMateriaCollection,
  annotations: [],
  fields: {
    nombre: {type: 'Edm.String', nullable: false, maxLength: 40},
    descripcion: {type: 'Edm.String', maxLength: 150},
    oculto: {type: 'Edm.Boolean'},
    materiaId: {type: 'Edm.Int32'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    casos: {type: 'SIU.Tramites.Caso', collection: true, navigation: true},
    avenimientos: {type: 'SIU.Tramites.Avenimiento', collection: true, navigation: true},
    historicoSubmaterias: {type: 'SIU.Tramites.HistoricoSubmateria', collection: true, navigation: true},
    notaAvenimientos: {type: 'SIU.Tramites.NotaAvenimiento', collection: true, navigation: true},
    requirentesEnEsperas: {type: 'SIU.Personas.RequirenteEnEspera', collection: true, navigation: true},
    requirenteCasos: {type: 'SIU.Tramites.RequirenteCaso', collection: true, navigation: true},
    materia: {type: 'SIU.Tramites.Materia', navigation: true, field: 'materiaId', ref: 'id'}
  }
} as EntityConfig<SubMateria>;