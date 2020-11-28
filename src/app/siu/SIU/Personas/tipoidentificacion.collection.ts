import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Requirente } from './requirente.entity';
import { Empleado } from './empleado.entity';
import { TipoIdentificacion } from './tipoidentificacion.entity';
import { RequirenteModel } from './requirente.model';
import { EmpleadoModel } from './empleado.model';
import { TipoIdentificacionModel } from './tipoidentificacion.model';
import { RequirenteCollection } from './requirente.collection';
import { EmpleadoCollection } from './empleado.collection';
//#endregion

export class TipoIdentificacionCollection<E extends TipoIdentificacion, M extends TipoIdentificacionModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}