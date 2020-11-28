import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Oficina } from '../Lugares/oficina.entity';
import { Localidad } from '../Lugares/localidad.entity';
import { Requirente } from './requirente.entity';
import { Empleado } from './empleado.entity';
import { RequirenteOficina } from './requirenteoficina.entity';
import { OficinaModel } from '../Lugares/oficina.model';
import { LocalidadModel } from '../Lugares/localidad.model';
import { RequirenteModel } from './requirente.model';
import { EmpleadoModel } from './empleado.model';
import { RequirenteOficinaModel } from './requirenteoficina.model';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { LocalidadCollection } from '../Lugares/localidad.collection';
import { RequirenteCollection } from './requirente.collection';
import { EmpleadoCollection } from './empleado.collection';
//#endregion

export class RequirenteOficinaCollection<E extends RequirenteOficina, M extends RequirenteOficinaModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}