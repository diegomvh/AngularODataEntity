import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Oficina } from '../Lugares/oficina.entity';
import { Requirente } from '../Personas/requirente.entity';
import { Empleado } from '../Personas/empleado.entity';
import { RequirenteExpediente } from './requirenteexpediente.entity';
import { Expediente } from './expediente.entity';
import { RolRequirenteExpediente } from './rolrequirenteexpediente.entity';
import { SubRolRequirenteExpediente } from './subrolrequirenteexpediente.entity';
import { OficinaModel } from '../Lugares/oficina.model';
import { RequirenteModel } from '../Personas/requirente.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { RequirenteExpedienteModel } from './requirenteexpediente.model';
import { ExpedienteModel } from './expediente.model';
import { RolRequirenteExpedienteModel } from './rolrequirenteexpediente.model';
import { SubRolRequirenteExpedienteModel } from './subrolrequirenteexpediente.model';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { RequirenteCollection } from '../Personas/requirente.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { ExpedienteCollection } from './expediente.collection';
import { RolRequirenteExpedienteCollection } from './rolrequirenteexpediente.collection';
import { SubRolRequirenteExpedienteCollection } from './subrolrequirenteexpediente.collection';
//#endregion

export class RequirenteExpedienteCollection<E extends RequirenteExpediente, M extends RequirenteExpedienteModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}