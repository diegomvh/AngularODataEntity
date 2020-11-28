import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Oficina } from '../Lugares/oficina.entity';
import { Requirente } from './requirente.entity';
import { Empleado } from './empleado.entity';
import { EstadoCivil } from './estadocivil.entity';
import { OficinaModel } from '../Lugares/oficina.model';
import { RequirenteModel } from './requirente.model';
import { EmpleadoModel } from './empleado.model';
import { EstadoCivilModel } from './estadocivil.model';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { RequirenteCollection } from './requirente.collection';
import { EmpleadoCollection } from './empleado.collection';
import { EstadoCivilCollection } from './estadocivil.collection';
//#endregion

export interface DeclaracionJurada {
  //#region ODataApi Properties
  estadoCivilId?: number;
  requirenteId?: number;
  fecha: Date;
  direccion: string;
  ocupacion: string;
  remuneracionMensual: number;
  grupoFamiliarConv?: string;
  ingresosGrupoConv?: string;
  situacionHabitacional: string;
  sitHab_RentaMensual?: number;
  sitHab_OtroTexto?: string;
  serv_Agua?: boolean;
  serv_Luz?: boolean;
  serv_Gas?: boolean;
  serv_Videocable?: boolean;
  serv_Telefono?: boolean;
  serv_Internet?: boolean;
  serv_Celular?: boolean;
  gastos_Servicios: number;
  auto_Propietario: boolean;
  auto_Marca?: string;
  auto_Modelo?: string;
  auto_Anio?: number;
  gastos_Auto: number;
  otrosBienes?: string;
  motivoRequerimiento: string;
  documentacionPresentada?: string;
  oficinaId?: number;
  empleadoId?: number;
  observaciones?: string;
  admitido: boolean;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  estadoCivil?: EstadoCivil;
  requirente?: Requirente;
  empleado?: Empleado;
  oficina?: Oficina;
  //#endregion
}