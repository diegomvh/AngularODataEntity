import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CategoriaEmpleado } from './categoriaempleado.entity';
import { CategoriaEmpleadoModel } from './categoriaempleado.model';
import { CategoriaEmpleadoCollection } from './categoriaempleado.collection';
//#endregion

export const CategoriaEmpleadoConfig = {
  name: "CategoriaEmpleado",
  model: CategoriaEmpleadoModel,
  collection: CategoriaEmpleadoCollection,
  annotations: [],
  fields: {
    nombre: {type: 'Edm.String', nullable: false, maxLength: 30},
    oculto: {type: 'Edm.Boolean', nullable: false},
    esResponsable: {type: 'Edm.Boolean'},
    esSubResponsable: {type: 'Edm.Boolean'},
    esDefensorPenal: {type: 'Edm.Boolean', nullable: false},
    esAbogado: {type: 'Edm.Boolean'},
    esProfesional: {type: 'Edm.Boolean'},
    esReferente: {type: 'Edm.Boolean'},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    empleados: {type: 'SIU.Personas.Empleado', collection: true, navigation: true}
  }
} as EntityConfig<CategoriaEmpleado>;