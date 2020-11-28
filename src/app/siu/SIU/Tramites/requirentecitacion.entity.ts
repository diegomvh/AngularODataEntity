import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Requirente } from '../Personas/requirente.entity';
import { Citacion } from './citacion.entity';
import { RolRequirente } from './rolrequirente.entity';
import { RequirenteModel } from '../Personas/requirente.model';
import { CitacionModel } from './citacion.model';
import { RolRequirenteModel } from './rolrequirente.model';
import { RequirenteCollection } from '../Personas/requirente.collection';
import { CitacionCollection } from './citacion.collection';
import { RolRequirenteCollection } from './rolrequirente.collection';
//#endregion

export interface RequirenteCitacion {
  //#region ODataApi Properties
  requirenteId?: number;
  citacionId?: number;
  key?: string;
  rolRequirenteId?: number;
  domicilio?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  requirente?: Requirente;
  citacion?: Citacion;
  rolRequirente?: RolRequirente;
  //#endregion
}