import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Materia } from './materia.entity';
import { MateriaModel } from './materia.model';
import { MateriaCollection } from './materia.collection';
//#endregion

export const MateriaConfig = {
  name: "Materia",
  model: MateriaModel,
  collection: MateriaCollection,
  annotations: [],
  fields: {
    nombre: {type: 'Edm.String', nullable: false, maxLength: 40},
    descripcion: {type: 'Edm.String', maxLength: 150},
    oculto: {type: 'Edm.Boolean'},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    subMaterias: {type: 'SIU.Tramites.SubMateria', collection: true, navigation: true},
    oficinas: {type: 'SIU.Lugares.Oficina', collection: true, navigation: true}
  }
} as EntityConfig<Materia>;