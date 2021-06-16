//#region AngularOData Imports
import { 
  NgModule 
} from '@angular/core';//#endregion

//#region ODataApi Imports
import { WebAPIService } from './Cbs/OData/webapi.service';
import { TableInfosService } from './Cbs/OData/tableinfos.service';
import { UntypedDataSetService } from './Cbs/OData/untypeddataset.service';
import { TypedDataSetService } from './Cbs/OData/typeddataset.service';
import { DataPropertiesService } from './Cbs/OData/dataproperties.service';
import { CategoryGroupsService } from './Cbs/OData/categorygroups.service';
import { GeslachtService } from './Cbs/OData/geslacht.service';
import { LeeftijdService } from './Cbs/OData/leeftijd.service';
import { PeriodenService } from './Cbs/OData/perioden.service';
//#endregion

@NgModule({
  providers: [
//#region ODataApi Providers
    WebAPIService,
    TableInfosService,
    UntypedDataSetService,
    TypedDataSetService,
    DataPropertiesService,
    CategoryGroupsService,
    GeslachtService,
    LeeftijdService,
    PeriodenService//#endregion
  ]
})
export class 37506wwmModule { }