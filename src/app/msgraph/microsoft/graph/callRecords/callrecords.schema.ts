import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { CallTypeConfig } from './calltype.enum.config';
import { ClientPlatformConfig } from './clientplatform.enum.config';
import { FailureStageConfig } from './failurestage.enum.config';
import { MediaStreamDirectionConfig } from './mediastreamdirection.enum.config';
import { NetworkConnectionTypeConfig } from './networkconnectiontype.enum.config';
import { ProductFamilyConfig } from './productfamily.enum.config';
import { ServiceRoleConfig } from './servicerole.enum.config';
import { UserFeedbackRatingConfig } from './userfeedbackrating.enum.config';
import { WifiBandConfig } from './wifiband.enum.config';
import { WifiRadioTypeConfig } from './wifiradiotype.enum.config';
import { ModalityConfig } from './modality.enum.config';
import { EndpointConfig } from './endpoint.entity.config';
import { UserAgentConfig } from './useragent.entity.config';
import { FailureInfoConfig } from './failureinfo.entity.config';
import { MediaConfig } from './media.entity.config';
import { NetworkInfoConfig } from './networkinfo.entity.config';
import { DeviceInfoConfig } from './deviceinfo.entity.config';
import { MediaStreamConfig } from './mediastream.entity.config';
import { ParticipantEndpointConfig } from './participantendpoint.entity.config';
import { UserFeedbackConfig } from './userfeedback.entity.config';
import { FeedbackTokenSetConfig } from './feedbacktokenset.entity.config';
import { ServiceEndpointConfig } from './serviceendpoint.entity.config';
import { ClientUserAgentConfig } from './clientuseragent.entity.config';
import { ServiceUserAgentConfig } from './serviceuseragent.entity.config';
import { CallRecordConfig } from './callrecord.entity.config';
import { SessionConfig } from './session.entity.config';
import { SegmentConfig } from './segment.entity.config';
//#endregion

export const CallRecordsSchema = {
  namespace: "microsoft.graph.callRecords",
  enums: [CallTypeConfig,
    ClientPlatformConfig,
    FailureStageConfig,
    MediaStreamDirectionConfig,
    NetworkConnectionTypeConfig,
    ProductFamilyConfig,
    ServiceRoleConfig,
    UserFeedbackRatingConfig,
    WifiBandConfig,
    WifiRadioTypeConfig,
    ModalityConfig],
  entities: [EndpointConfig,
    UserAgentConfig,
    FailureInfoConfig,
    MediaConfig,
    NetworkInfoConfig,
    DeviceInfoConfig,
    MediaStreamConfig,
    ParticipantEndpointConfig,
    UserFeedbackConfig,
    FeedbackTokenSetConfig,
    ServiceEndpointConfig,
    ClientUserAgentConfig,
    ServiceUserAgentConfig,
    CallRecordConfig,
    SessionConfig,
    SegmentConfig],
  callables: [],
  containers: []
} as SchemaConfig;