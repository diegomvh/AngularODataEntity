import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoModel } from '../Recursos/recurso.model';
import { Categoria } from '../Metadatos/categoria.entity';
import { RecursoUsuario } from '../Recursos/recursousuario.entity';
import { RecursoOficina } from '../Recursos/recursooficina.entity';
import { Archivo } from './archivo.entity';
import { Oficina } from '../Lugares/oficina.entity';
import { Empleado } from '../Personas/empleado.entity';
import { Intervencion } from '../Tramites/intervencion.entity';
import { Escrito } from '../Tramites/escrito.entity';
import { CategoriaModel } from '../Metadatos/categoria.model';
import { RecursoUsuarioModel } from '../Recursos/recursousuario.model';
import { RecursoOficinaModel } from '../Recursos/recursooficina.model';
import { OficinaModel } from '../Lugares/oficina.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { IntervencionModel } from '../Tramites/intervencion.model';
import { EscritoModel } from '../Tramites/escrito.model';
import { CategoriaCollection } from '../Metadatos/categoria.collection';
import { RecursoUsuarioCollection } from '../Recursos/recursousuario.collection';
import { RecursoOficinaCollection } from '../Recursos/recursooficina.collection';
import { ArchivoCollection } from './archivo.collection';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { IntervencionCollection } from '../Tramites/intervencion.collection';
import { EscritoCollection } from '../Tramites/escrito.collection';
//#endregion

export class ArchivoModel<E extends Archivo> extends RecursoModel<E> {
  //#region ODataApi Properties
  tipoId: number;
  autorId: number;
  oficinaId?: number;
  tipo?: CategoriaModel<Categoria>;
  autor?: EmpleadoModel<Empleado>;
  oficina?: OficinaModel<Oficina>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}