import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { CallTypeConfig } from './calltype.enum.config';
import { ClientPlatformConfig } from './clientplatform.enum.config';
import { FailureStageConfig } from './failurestage.enum.config';
import { MediaStreamDirectionConfig } from './mediastreamdirection.enum.config';
import { ModalityConfig } from './modality.enum.config';
import { NetworkConnectionTypeConfig } from './networkconnectiontype.enum.config';
import { ProductFamilyConfig } from './productfamily.enum.config';
import { ServiceRoleConfig } from './servicerole.enum.config';
import { UserFeedbackRatingConfig } from './userfeedbackrating.enum.config';
import { WifiBandConfig } from './wifiband.enum.config';
import { WifiRadioTypeConfig } from './wifiradiotype.enum.config';
import { UserAgentConfig } from './useragent.complex.config';
import { ClientUserAgentConfig } from './clientuseragent.complex.config';
import { DeviceInfoConfig } from './deviceinfo.complex.config';
import { EndpointConfig } from './endpoint.complex.config';
import { FailureInfoConfig } from './failureinfo.complex.config';
import { FeedbackTokenSetConfig } from './feedbacktokenset.complex.config';
import { MediaConfig } from './media.complex.config';
import { NetworkInfoConfig } from './networkinfo.complex.config';
import { MediaStreamConfig } from './mediastream.complex.config';
import { ParticipantEndpointConfig } from './participantendpoint.complex.config';
import { UserFeedbackConfig } from './userfeedback.complex.config';
import { ServiceEndpointConfig } from './serviceendpoint.complex.config';
import { ServiceUserAgentConfig } from './serviceuseragent.complex.config';
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
    ModalityConfig,
    NetworkConnectionTypeConfig,
    ProductFamilyConfig,
    ServiceRoleConfig,
    UserFeedbackRatingConfig,
    WifiBandConfig,
    WifiRadioTypeConfig],
  entities: [UserAgentConfig,
    ClientUserAgentConfig,
    DeviceInfoConfig,
    EndpointConfig,
    FailureInfoConfig,
    FeedbackTokenSetConfig,
    MediaConfig,
    NetworkInfoConfig,
    MediaStreamConfig,
    ParticipantEndpointConfig,
    UserFeedbackConfig,
    ServiceEndpointConfig,
    ServiceUserAgentConfig,
    CallRecordConfig,
    SessionConfig,
    SegmentConfig],
  callables: [],
  containers: []
} as SchemaConfig;