import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Recurso } from '../Recursos/recurso.entity';
import { Categoria } from '../Metadatos/categoria.entity';
import { Oficina } from '../Lugares/oficina.entity';
import { Empleado } from '../Personas/empleado.entity';
import { CategoriaModel } from '../Metadatos/categoria.model';
import { RecursoModel } from '../Recursos/recurso.model';
import { OficinaModel } from '../Lugares/oficina.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { CategoriaCollection } from '../Metadatos/categoria.collection';
import { RecursoCollection } from '../Recursos/recurso.collection';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
//#endregion

export interface Archivo extends Recurso {
  //#region ODataApi Properties
  tipoId: number;
  autorId: number;
  oficinaId?: number;
  tipo?: Categoria;
  autor?: Empleado;
  oficina?: Oficina;
  //#endregion
}