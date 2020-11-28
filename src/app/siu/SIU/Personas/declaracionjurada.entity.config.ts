import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeclaracionJurada } from './declaracionjurada.entity';
import { DeclaracionJuradaModel } from './declaracionjurada.model';
import { DeclaracionJuradaCollection } from './declaracionjurada.collection';
//#endregion

export const DeclaracionJuradaConfig = {
  name: "DeclaracionJurada",
  model: DeclaracionJuradaModel,
  collection: DeclaracionJuradaCollection,
  annotations: [],
  fields: {
    estadoCivilId: {type: 'Edm.Int32'},
    requirenteId: {type: 'Edm.Int32'},
    fecha: {type: 'Edm.DateTimeOffset', nullable: false},
    direccion: {type: 'Edm.String', nullable: false, maxLength: 270},
    ocupacion: {type: 'Edm.String', nullable: false, maxLength: 30},
    remuneracionMensual: {type: 'Edm.Int32', nullable: false},
    grupoFamiliarConv: {type: 'Edm.String', maxLength: 300},
    ingresosGrupoConv: {type: 'Edm.String', maxLength: 300},
    situacionHabitacional: {type: 'Edm.String', nullable: false, maxLength: 8},
    sitHab_RentaMensual: {type: 'Edm.Int32'},
    sitHab_OtroTexto: {type: 'Edm.String', maxLength: 40},
    serv_Agua: {type: 'Edm.Boolean'},
    serv_Luz: {type: 'Edm.Boolean'},
    serv_Gas: {type: 'Edm.Boolean'},
    serv_Videocable: {type: 'Edm.Boolean'},
    serv_Telefono: {type: 'Edm.Boolean'},
    serv_Internet: {type: 'Edm.Boolean'},
    serv_Celular: {type: 'Edm.Boolean'},
    gastos_Servicios: {type: 'Edm.Int32', nullable: false},
    auto_Propietario: {type: 'Edm.Boolean', nullable: false},
    auto_Marca: {type: 'Edm.String', maxLength: 15},
    auto_Modelo: {type: 'Edm.String', maxLength: 20},
    auto_Anio: {type: 'Edm.Int32'},
    gastos_Auto: {type: 'Edm.Int32', nullable: false},
    otrosBienes: {type: 'Edm.String', maxLength: 300},
    motivoRequerimiento: {type: 'Edm.String', nullable: false, maxLength: 300},
    documentacionPresentada: {type: 'Edm.String', maxLength: 300},
    oficinaId: {type: 'Edm.Int32'},
    empleadoId: {type: 'Edm.Int32'},
    observaciones: {type: 'Edm.String', maxLength: 300},
    admitido: {type: 'Edm.Boolean', nullable: false},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    estadoCivil: {type: 'SIU.Personas.EstadoCivil', navigation: true, field: 'estadoCivilId', ref: 'id'},
    requirente: {type: 'SIU.Personas.Requirente', navigation: true, field: 'requirenteId', ref: 'id'},
    empleado: {type: 'SIU.Personas.Empleado', navigation: true, field: 'empleadoId', ref: 'id'},
    oficina: {type: 'SIU.Lugares.Oficina', navigation: true, field: 'oficinaId', ref: 'id'}
  }
} as EntityConfig<DeclaracionJurada>;