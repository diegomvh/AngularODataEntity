import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Recurso } from '../Recursos/recurso.entity';
import { Documento } from '../Documentos/documento.entity';
import { Oficina } from '../Lugares/oficina.entity';
import { Juzgado } from '../Lugares/juzgado.entity';
import { Secretaria } from '../Lugares/secretaria.entity';
import { Empleado } from '../Personas/empleado.entity';
import { Asesor } from '../Personas/asesor.entity';
import { Fiscal } from '../Personas/fiscal.entity';
import { RequirenteExpediente } from './requirenteexpediente.entity';
import { Expediente } from './expediente.entity';
import { Escrito } from './escrito.entity';
import { EstadoExpediente } from './estadoexpediente.entity';
import { CasoJudiciable } from './casojudiciable.entity';
import { CategoriaExpediente } from './categoriaexpediente.entity';
import { MovimientoExpediente } from './movimientoexpediente.entity';
import { Cita } from '../Agenda/cita.entity';
import { RecursoModel } from '../Recursos/recurso.model';
import { DocumentoModel } from '../Documentos/documento.model';
import { OficinaModel } from '../Lugares/oficina.model';
import { JuzgadoModel } from '../Lugares/juzgado.model';
import { SecretariaModel } from '../Lugares/secretaria.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { AsesorModel } from '../Personas/asesor.model';
import { FiscalModel } from '../Personas/fiscal.model';
import { RequirenteExpedienteModel } from './requirenteexpediente.model';
import { ExpedienteModel } from './expediente.model';
import { EscritoModel } from './escrito.model';
import { EstadoExpedienteModel } from './estadoexpediente.model';
import { CasoJudiciableModel } from './casojudiciable.model';
import { CategoriaExpedienteModel } from './categoriaexpediente.model';
import { MovimientoExpedienteModel } from './movimientoexpediente.model';
import { CitaModel } from '../Agenda/cita.model';
import { RecursoCollection } from '../Recursos/recurso.collection';
import { DocumentoCollection } from '../Documentos/documento.collection';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { JuzgadoCollection } from '../Lugares/juzgado.collection';
import { SecretariaCollection } from '../Lugares/secretaria.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { AsesorCollection } from '../Personas/asesor.collection';
import { FiscalCollection } from '../Personas/fiscal.collection';
import { RequirenteExpedienteCollection } from './requirenteexpediente.collection';
import { EscritoCollection } from './escrito.collection';
import { EstadoExpedienteCollection } from './estadoexpediente.collection';
import { CasoJudiciableCollection } from './casojudiciable.collection';
import { CategoriaExpedienteCollection } from './categoriaexpediente.collection';
import { MovimientoExpedienteCollection } from './movimientoexpediente.collection';
import { CitaCollection } from '../Agenda/cita.collection';
//#endregion

export class ExpedienteCollection<E extends Expediente, M extends ExpedienteModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}