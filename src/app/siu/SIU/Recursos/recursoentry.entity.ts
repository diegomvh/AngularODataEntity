import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RecursoOpciones } from './recursoopciones.enum';
import { RecursoPermisos } from './recursopermisos.enum';
import { InternalTypes } from '../Utilities/Types/internaltypes.enum';
import { RecursoSource } from './recursosource.entity';
import { RecursoSourceModel } from './recursosource.model';
import { RecursoSourceCollection } from './recursosource.collection';
//#endregion

export interface RecursoEntry {
  //#region ODataApi Properties
  recursoId?: number;
  nombre?: string;
  fecha: Date;
  contentType?: string;
  size: number;
  directory?: string;
  opciones: RecursoOpciones;
  permisos: RecursoPermisos;
  url?: string;
  source?: RecursoSource;
  key?: string;
  extension?: string;
  file?: string;
  path?: string;
  internalType: InternalTypes;
  byteSize?: string;
  //#endregion
}