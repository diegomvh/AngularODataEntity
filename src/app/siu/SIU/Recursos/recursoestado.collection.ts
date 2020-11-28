import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoTipoEstado } from './recursotipoestado.enum';
import { RecursoEstadoMetadata } from './recursoestadometadata.entity';
import { Recurso } from './recurso.entity';
import { RecursoEstado } from './recursoestado.entity';
import { Empleado } from '../Personas/empleado.entity';
import { RecursoEstadoMetadataModel } from './recursoestadometadata.model';
import { RecursoModel } from './recurso.model';
import { RecursoEstadoModel } from './recursoestado.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { RecursoEstadoMetadataCollection } from './recursoestadometadata.collection';
import { RecursoCollection } from './recurso.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
//#endregion

export class RecursoEstadoCollection<E extends RecursoEstado, M extends RecursoEstadoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}