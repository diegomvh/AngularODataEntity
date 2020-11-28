import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RecursoOpciones } from './recursoopciones.enum';
import { RecursoEntry } from './recursoentry.entity';
import { RecursoMetadata } from './recursometadata.entity';
import { RecursoUsuario } from './recursousuario.entity';
import { RecursoOficina } from './recursooficina.entity';
import { RecursoEstado } from './recursoestado.entity';
import { Requirente } from '../Personas/requirente.entity';
import { Intervencion } from '../Tramites/intervencion.entity';
import { Escrito } from '../Tramites/escrito.entity';
import { RecursoEntryModel } from './recursoentry.model';
import { RecursoMetadataModel } from './recursometadata.model';
import { RecursoUsuarioModel } from './recursousuario.model';
import { RecursoOficinaModel } from './recursooficina.model';
import { RecursoEstadoModel } from './recursoestado.model';
import { RequirenteModel } from '../Personas/requirente.model';
import { IntervencionModel } from '../Tramites/intervencion.model';
import { EscritoModel } from '../Tramites/escrito.model';
import { RecursoEntryCollection } from './recursoentry.collection';
import { RecursoMetadataCollection } from './recursometadata.collection';
import { RecursoUsuarioCollection } from './recursousuario.collection';
import { RecursoOficinaCollection } from './recursooficina.collection';
import { RecursoEstadoCollection } from './recursoestado.collection';
import { RequirenteCollection } from '../Personas/requirente.collection';
import { IntervencionCollection } from '../Tramites/intervencion.collection';
import { EscritoCollection } from '../Tramites/escrito.collection';
//#endregion

export interface Recurso {
  //#region ODataApi Properties
  guid?: string;
  fecha: Date;
  nombre: string;
  descripcion?: string;
  url: string;
  directory: string;
  size: number;
  contentType?: string;
  opciones: RecursoOpciones;
  metadata?: RecursoMetadata;
  pKey?: string;
  gKey?: string;
  publico: boolean;
  entry?: RecursoEntry;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  escritos?: Escrito[];
  intervenciones?: Intervencion[];
  requirentes?: Requirente[];
  usuarios?: RecursoUsuario[];
  oficinas?: RecursoOficina[];
  estados?: RecursoEstado[];
  //#endregion
}