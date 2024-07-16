//#region ODataApiGen ODataImports
import {
  SchemaConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AddressComplexConfig } from './address.complex.config';
import { ProductEntityConfig } from './product.entity.config';
import { CategoryEntityConfig } from './category.entity.config';
import { SupplierEntityConfig } from './supplier.entity.config';
import { DemoServiceEntityContainerConfig } from './demo-service.entitycontainer.config';
//#endregion

//#region ODataApiGen SchemaConfig
export const ODataDemoSchemaConfig = {
  namespace: 'ODataDemo',
  enums: [],
  entities: [AddressComplexConfig,
    ProductEntityConfig,
    CategoryEntityConfig,
    SupplierEntityConfig],
  callables: [],
  containers: [DemoServiceEntityContainerConfig]
} as SchemaConfig;
//#endregion