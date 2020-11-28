import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RecursoPermisos } from './recursopermisos.enum';
import { Recurso } from './recurso.entity';
import { Oficina } from '../Lugares/oficina.entity';
import { RecursoModel } from './recurso.model';
import { OficinaModel } from '../Lugares/oficina.model';
import { RecursoCollection } from './recurso.collection';
import { OficinaCollection } from '../Lugares/oficina.collection';
//#endregion

export interface RecursoOficina {
  //#region ODataApi Properties
  recursoId?: number;
  oficinaId?: number;
  key?: string;
  fecha: Date;
  permisos: RecursoPermisos;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  recurso?: Recurso;
  oficina?: Oficina;
  //#endregion
}