import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Requirente } from '../Personas/requirente.entity';
import { EstadoCivil } from '../Personas/estadocivil.entity';
import { NotaAvenimiento } from './notaavenimiento.entity';
import { RolRequirente } from './rolrequirente.entity';
import { RequirenteModel } from '../Personas/requirente.model';
import { EstadoCivilModel } from '../Personas/estadocivil.model';
import { NotaAvenimientoModel } from './notaavenimiento.model';
import { RolRequirenteModel } from './rolrequirente.model';
import { RequirenteCollection } from '../Personas/requirente.collection';
import { EstadoCivilCollection } from '../Personas/estadocivil.collection';
import { NotaAvenimientoCollection } from './notaavenimiento.collection';
import { RolRequirenteCollection } from './rolrequirente.collection';
//#endregion

export interface RequirenteNotaAvenimiento {
  //#region ODataApi Properties
  requirenteId?: number;
  notaAvenimientoId?: number;
  key?: string;
  rolRequirenteId?: number;
  estadoCivilId?: number;
  domicilio?: string;
  hijos?: string;
  abogadoPatrocinante?: string;
  observaciones?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  requirente?: Requirente;
  notaAvenimiento?: NotaAvenimiento;
  estadoCivil?: EstadoCivil;
  rolRequirente?: RolRequirente;
  //#endregion
}