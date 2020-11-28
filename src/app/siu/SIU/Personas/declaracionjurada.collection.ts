import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Oficina } from '../Lugares/oficina.entity';
import { Requirente } from './requirente.entity';
import { Empleado } from './empleado.entity';
import { DeclaracionJurada } from './declaracionjurada.entity';
import { EstadoCivil } from './estadocivil.entity';
import { OficinaModel } from '../Lugares/oficina.model';
import { RequirenteModel } from './requirente.model';
import { EmpleadoModel } from './empleado.model';
import { DeclaracionJuradaModel } from './declaracionjurada.model';
import { EstadoCivilModel } from './estadocivil.model';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { RequirenteCollection } from './requirente.collection';
import { EmpleadoCollection } from './empleado.collection';
import { EstadoCivilCollection } from './estadocivil.collection';
//#endregion

export class DeclaracionJuradaCollection<E extends DeclaracionJurada, M extends DeclaracionJuradaModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}