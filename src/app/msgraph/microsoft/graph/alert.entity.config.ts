import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Alert } from './alert.entity';
import { AlertModel } from './alert.model';
import { AlertCollection } from './alert.collection';
//#endregion

export const AlertConfig = {
  name: "alert",
  base: "microsoft.graph.entity",
  open: true,
  model: AlertModel,
  collection: AlertCollection,
  annotations: [],
  fields: {
    activityGroupName: {type: 'Edm.String'},
    assignedTo: {type: 'Edm.String'},
    azureSubscriptionId: {type: 'Edm.String'},
    azureTenantId: {type: 'Edm.String', nullable: false},
    category: {type: 'Edm.String'},
    closedDateTime: {type: 'Edm.DateTimeOffset'},
    cloudAppStates: {type: 'graph.cloudAppSecurityState', collection: true},
    comments: {type: 'Edm.String', collection: true},
    confidence: {type: 'Edm.Int32'},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    description: {type: 'Edm.String'},
    detectionIds: {type: 'Edm.String', collection: true},
    eventDateTime: {type: 'Edm.DateTimeOffset'},
    feedback: {type: 'graph.alertFeedback'},
    fileStates: {type: 'graph.fileSecurityState', collection: true},
    historyStates: {type: 'graph.alertHistoryState', collection: true},
    hostStates: {type: 'graph.hostSecurityState', collection: true},
    incidentIds: {type: 'Edm.String', collection: true},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    malwareStates: {type: 'graph.malwareState', collection: true},
    networkConnections: {type: 'graph.networkConnection', collection: true},
    processes: {type: 'graph.process', collection: true},
    recommendedActions: {type: 'Edm.String', collection: true},
    registryKeyStates: {type: 'graph.registryKeyState', collection: true},
    securityResources: {type: 'graph.securityResource', collection: true},
    severity: {type: 'graph.alertSeverity', nullable: false},
    sourceMaterials: {type: 'Edm.String', collection: true},
    status: {type: 'graph.alertStatus', nullable: false},
    tags: {type: 'Edm.String', collection: true},
    title: {type: 'Edm.String'},
    triggers: {type: 'graph.alertTrigger', collection: true},
    userStates: {type: 'graph.userSecurityState', collection: true},
    vendorInformation: {type: 'graph.securityVendorInformation'},
    vulnerabilityStates: {type: 'graph.vulnerabilityState', collection: true}
  }
} as EntityConfig<Alert>;