import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { AppliedConditionalAccessPolicyResultConfig } from './appliedconditionalaccesspolicyresult.enum.config';
import { ConditionalAccessStatusConfig } from './conditionalaccessstatus.enum.config';
import { GroupTypeConfig } from './grouptype.enum.config';
import { OperationResultConfig } from './operationresult.enum.config';
import { RiskDetailConfig } from './riskdetail.enum.config';
import { RiskEventTypeConfig } from './riskeventtype.enum.config';
import { RiskLevelConfig } from './risklevel.enum.config';
import { RiskStateConfig } from './riskstate.enum.config';
import { PermissionClassificationTypeConfig } from './permissionclassificationtype.enum.config';
import { PermissionTypeConfig } from './permissiontype.enum.config';
import { PhoneTypeConfig } from './phonetype.enum.config';
import { EducationExternalSourceConfig } from './educationexternalsource.enum.config';
import { EducationGenderConfig } from './educationgender.enum.config';
import { EducationUserRoleConfig } from './educationuserrole.enum.config';
import { WorkbookOperationStatusConfig } from './workbookoperationstatus.enum.config';
import { ActivityDomainConfig } from './activitydomain.enum.config';
import { AttendeeTypeConfig } from './attendeetype.enum.config';
import { FreeBusyStatusConfig } from './freebusystatus.enum.config';
import { LocationTypeConfig } from './locationtype.enum.config';
import { LocationUniqueIdTypeConfig } from './locationuniqueidtype.enum.config';
import { PhysicalAddressTypeConfig } from './physicaladdresstype.enum.config';
import { BookingTypeConfig } from './bookingtype.enum.config';
import { AttachmentTypeConfig } from './attachmenttype.enum.config';
import { AutomaticRepliesStatusConfig } from './automaticrepliesstatus.enum.config';
import { BodyTypeConfig } from './bodytype.enum.config';
import { CalendarColorConfig } from './calendarcolor.enum.config';
import { CalendarRoleTypeConfig } from './calendarroletype.enum.config';
import { CalendarSharingActionConfig } from './calendarsharingaction.enum.config';
import { CalendarSharingActionImportanceConfig } from './calendarsharingactionimportance.enum.config';
import { CalendarSharingActionTypeConfig } from './calendarsharingactiontype.enum.config';
import { CategoryColorConfig } from './categorycolor.enum.config';
import { DayOfWeekConfig } from './dayofweek.enum.config';
import { DelegateMeetingMessageDeliveryOptionsConfig } from './delegatemeetingmessagedeliveryoptions.enum.config';
import { EventTypeConfig } from './eventtype.enum.config';
import { ExchangeIdFormatConfig } from './exchangeidformat.enum.config';
import { ExternalAudienceScopeConfig } from './externalaudiencescope.enum.config';
import { FollowupFlagStatusConfig } from './followupflagstatus.enum.config';
import { ImportanceConfig } from './importance.enum.config';
import { InferenceClassificationTypeConfig } from './inferenceclassificationtype.enum.config';
import { MailTipsTypeConfig } from './mailtipstype.enum.config';
import { MeetingMessageTypeConfig } from './meetingmessagetype.enum.config';
import { MeetingRequestTypeConfig } from './meetingrequesttype.enum.config';
import { MessageActionFlagConfig } from './messageactionflag.enum.config';
import { OnlineMeetingProviderTypeConfig } from './onlinemeetingprovidertype.enum.config';
import { RecipientScopeTypeConfig } from './recipientscopetype.enum.config';
import { RecurrencePatternTypeConfig } from './recurrencepatterntype.enum.config';
import { RecurrenceRangeTypeConfig } from './recurrencerangetype.enum.config';
import { ResponseTypeConfig } from './responsetype.enum.config';
import { SelectionLikelihoodInfoConfig } from './selectionlikelihoodinfo.enum.config';
import { SensitivityConfig } from './sensitivity.enum.config';
import { TimeZoneStandardConfig } from './timezonestandard.enum.config';
import { WebsiteTypeConfig } from './websitetype.enum.config';
import { WeekIndexConfig } from './weekindex.enum.config';
import { CloudAppSecuritySessionControlTypeConfig } from './cloudappsecuritysessioncontroltype.enum.config';
import { ConditionalAccessClientAppConfig } from './conditionalaccessclientapp.enum.config';
import { ConditionalAccessDevicePlatformConfig } from './conditionalaccessdeviceplatform.enum.config';
import { ConditionalAccessGrantControlConfig } from './conditionalaccessgrantcontrol.enum.config';
import { ConditionalAccessPolicyStateConfig } from './conditionalaccesspolicystate.enum.config';
import { PersistentBrowserSessionModeConfig } from './persistentbrowsersessionmode.enum.config';
import { SigninFrequencyTypeConfig } from './signinfrequencytype.enum.config';
import { ComplianceStatusConfig } from './compliancestatus.enum.config';
import { InstallIntentConfig } from './installintent.enum.config';
import { ManagedAppAvailabilityConfig } from './managedappavailability.enum.config';
import { MdmAppConfigKeyTypeConfig } from './mdmappconfigkeytype.enum.config';
import { MicrosoftStoreForBusinessLicenseTypeConfig } from './microsoftstoreforbusinesslicensetype.enum.config';
import { MobileAppContentFileUploadStateConfig } from './mobileappcontentfileuploadstate.enum.config';
import { MobileAppPublishingStateConfig } from './mobileapppublishingstate.enum.config';
import { RunAsAccountTypeConfig } from './runasaccounttype.enum.config';
import { VppTokenAccountTypeConfig } from './vpptokenaccounttype.enum.config';
import { Win32LobAppFileSystemOperationTypeConfig } from './win32lobappfilesystemoperationtype.enum.config';
import { Win32LobAppMsiPackageTypeConfig } from './win32lobappmsipackagetype.enum.config';
import { Win32LobAppNotificationConfig } from './win32lobappnotification.enum.config';
import { Win32LobAppPowerShellScriptRuleOperationTypeConfig } from './win32lobapppowershellscriptruleoperationtype.enum.config';
import { Win32LobAppRegistryRuleOperationTypeConfig } from './win32lobappregistryruleoperationtype.enum.config';
import { Win32LobAppRestartBehaviorConfig } from './win32lobapprestartbehavior.enum.config';
import { Win32LobAppReturnCodeTypeConfig } from './win32lobappreturncodetype.enum.config';
import { Win32LobAppRuleOperatorConfig } from './win32lobappruleoperator.enum.config';
import { Win32LobAppRuleTypeConfig } from './win32lobappruletype.enum.config';
import { WindowsArchitectureConfig } from './windowsarchitecture.enum.config';
import { WindowsDeviceTypeConfig } from './windowsdevicetype.enum.config';
import { InstallStateConfig } from './installstate.enum.config';
import { AndroidRequiredPasswordTypeConfig } from './androidrequiredpasswordtype.enum.config';
import { AndroidWorkProfileCrossProfileDataSharingTypeConfig } from './androidworkprofilecrossprofiledatasharingtype.enum.config';
import { AndroidWorkProfileDefaultAppPermissionPolicyTypeConfig } from './androidworkprofiledefaultapppermissionpolicytype.enum.config';
import { AndroidWorkProfileRequiredPasswordTypeConfig } from './androidworkprofilerequiredpasswordtype.enum.config';
import { ApplicationGuardBlockClipboardSharingTypeConfig } from './applicationguardblockclipboardsharingtype.enum.config';
import { ApplicationGuardBlockFileTransferTypeConfig } from './applicationguardblockfiletransfertype.enum.config';
import { AppListTypeConfig } from './applisttype.enum.config';
import { AppLockerApplicationControlTypeConfig } from './applockerapplicationcontroltype.enum.config';
import { AutomaticUpdateModeConfig } from './automaticupdatemode.enum.config';
import { BitLockerEncryptionMethodConfig } from './bitlockerencryptionmethod.enum.config';
import { DefenderCloudBlockLevelTypeConfig } from './defendercloudblockleveltype.enum.config';
import { DefenderMonitorFileActivityConfig } from './defendermonitorfileactivity.enum.config';
import { DefenderPromptForSampleSubmissionConfig } from './defenderpromptforsamplesubmission.enum.config';
import { DefenderScanTypeConfig } from './defenderscantype.enum.config';
import { DefenderThreatActionConfig } from './defenderthreataction.enum.config';
import { DeviceComplianceActionTypeConfig } from './devicecomplianceactiontype.enum.config';
import { DeviceThreatProtectionLevelConfig } from './devicethreatprotectionlevel.enum.config';
import { DiagnosticDataSubmissionModeConfig } from './diagnosticdatasubmissionmode.enum.config';
import { EdgeCookiePolicyConfig } from './edgecookiepolicy.enum.config';
import { EdgeSearchEngineTypeConfig } from './edgesearchenginetype.enum.config';
import { EditionUpgradeLicenseTypeConfig } from './editionupgradelicensetype.enum.config';
import { FirewallCertificateRevocationListCheckMethodTypeConfig } from './firewallcertificaterevocationlistcheckmethodtype.enum.config';
import { FirewallPacketQueueingMethodTypeConfig } from './firewallpacketqueueingmethodtype.enum.config';
import { FirewallPreSharedKeyEncodingMethodTypeConfig } from './firewallpresharedkeyencodingmethodtype.enum.config';
import { InternetSiteSecurityLevelConfig } from './internetsitesecuritylevel.enum.config';
import { IosNotificationAlertTypeConfig } from './iosnotificationalerttype.enum.config';
import { IosUpdatesInstallStatusConfig } from './iosupdatesinstallstatus.enum.config';
import { MiracastChannelConfig } from './miracastchannel.enum.config';
import { PolicyPlatformTypeConfig } from './policyplatformtype.enum.config';
import { PrereleaseFeaturesConfig } from './prereleasefeatures.enum.config';
import { RatingAppsTypeConfig } from './ratingappstype.enum.config';
import { RatingAustraliaMoviesTypeConfig } from './ratingaustraliamoviestype.enum.config';
import { RatingAustraliaTelevisionTypeConfig } from './ratingaustraliatelevisiontype.enum.config';
import { RatingCanadaMoviesTypeConfig } from './ratingcanadamoviestype.enum.config';
import { RatingCanadaTelevisionTypeConfig } from './ratingcanadatelevisiontype.enum.config';
import { RatingFranceMoviesTypeConfig } from './ratingfrancemoviestype.enum.config';
import { RatingFranceTelevisionTypeConfig } from './ratingfrancetelevisiontype.enum.config';
import { RatingGermanyMoviesTypeConfig } from './ratinggermanymoviestype.enum.config';
import { RatingGermanyTelevisionTypeConfig } from './ratinggermanytelevisiontype.enum.config';
import { RatingIrelandMoviesTypeConfig } from './ratingirelandmoviestype.enum.config';
import { RatingIrelandTelevisionTypeConfig } from './ratingirelandtelevisiontype.enum.config';
import { RatingJapanMoviesTypeConfig } from './ratingjapanmoviestype.enum.config';
import { RatingJapanTelevisionTypeConfig } from './ratingjapantelevisiontype.enum.config';
import { RatingNewZealandMoviesTypeConfig } from './ratingnewzealandmoviestype.enum.config';
import { RatingNewZealandTelevisionTypeConfig } from './ratingnewzealandtelevisiontype.enum.config';
import { RatingUnitedKingdomMoviesTypeConfig } from './ratingunitedkingdommoviestype.enum.config';
import { RatingUnitedKingdomTelevisionTypeConfig } from './ratingunitedkingdomtelevisiontype.enum.config';
import { RatingUnitedStatesMoviesTypeConfig } from './ratingunitedstatesmoviestype.enum.config';
import { RatingUnitedStatesTelevisionTypeConfig } from './ratingunitedstatestelevisiontype.enum.config';
import { RequiredPasswordTypeConfig } from './requiredpasswordtype.enum.config';
import { SafeSearchFilterTypeConfig } from './safesearchfiltertype.enum.config';
import { SharedPCAccountDeletionPolicyTypeConfig } from './sharedpcaccountdeletionpolicytype.enum.config';
import { SharedPCAllowedAccountTypeConfig } from './sharedpcallowedaccounttype.enum.config';
import { SiteSecurityLevelConfig } from './sitesecuritylevel.enum.config';
import { StateManagementSettingConfig } from './statemanagementsetting.enum.config';
import { VisibilitySettingConfig } from './visibilitysetting.enum.config';
import { WebBrowserCookieSettingsConfig } from './webbrowsercookiesettings.enum.config';
import { WeeklyScheduleConfig } from './weeklyschedule.enum.config';
import { WelcomeScreenMeetingInformationConfig } from './welcomescreenmeetinginformation.enum.config';
import { Windows10EditionTypeConfig } from './windows10editiontype.enum.config';
import { WindowsDeliveryOptimizationModeConfig } from './windowsdeliveryoptimizationmode.enum.config';
import { WindowsSpotlightEnablementSettingsConfig } from './windowsspotlightenablementsettings.enum.config';
import { WindowsStartMenuAppListVisibilityTypeConfig } from './windowsstartmenuapplistvisibilitytype.enum.config';
import { WindowsStartMenuModeTypeConfig } from './windowsstartmenumodetype.enum.config';
import { WindowsUpdateTypeConfig } from './windowsupdatetype.enum.config';
import { WindowsUserAccountControlSettingsConfig } from './windowsuseraccountcontrolsettings.enum.config';
import { DeviceManagementExchangeConnectorStatusConfig } from './devicemanagementexchangeconnectorstatus.enum.config';
import { DeviceManagementExchangeConnectorSyncTypeConfig } from './devicemanagementexchangeconnectorsynctype.enum.config';
import { DeviceManagementExchangeConnectorTypeConfig } from './devicemanagementexchangeconnectortype.enum.config';
import { DeviceManagementPartnerAppTypeConfig } from './devicemanagementpartnerapptype.enum.config';
import { DeviceManagementPartnerTenantStateConfig } from './devicemanagementpartnertenantstate.enum.config';
import { EnablementConfig } from './enablement.enum.config';
import { MdmAuthorityConfig } from './mdmauthority.enum.config';
import { MobileThreatPartnerTenantStateConfig } from './mobilethreatpartnertenantstate.enum.config';
import { VppTokenStateConfig } from './vpptokenstate.enum.config';
import { VppTokenSyncStatusConfig } from './vpptokensyncstatus.enum.config';
import { WindowsHelloForBusinessPinUsageConfig } from './windowshelloforbusinesspinusage.enum.config';
import { ActionStateConfig } from './actionstate.enum.config';
import { ComplianceStateConfig } from './compliancestate.enum.config';
import { DeviceEnrollmentTypeConfig } from './deviceenrollmenttype.enum.config';
import { DeviceManagementExchangeAccessStateConfig } from './devicemanagementexchangeaccessstate.enum.config';
import { DeviceManagementExchangeAccessStateReasonConfig } from './devicemanagementexchangeaccessstatereason.enum.config';
import { DeviceManagementSubscriptionStateConfig } from './devicemanagementsubscriptionstate.enum.config';
import { DeviceRegistrationStateConfig } from './deviceregistrationstate.enum.config';
import { ManagedDeviceOwnerTypeConfig } from './manageddeviceownertype.enum.config';
import { ManagedDevicePartnerReportedHealthStateConfig } from './manageddevicepartnerreportedhealthstate.enum.config';
import { ManagementAgentTypeConfig } from './managementagenttype.enum.config';
import { ManagedAppClipboardSharingLevelConfig } from './managedappclipboardsharinglevel.enum.config';
import { ManagedAppDataEncryptionTypeConfig } from './managedappdataencryptiontype.enum.config';
import { ManagedAppDataStorageLocationConfig } from './managedappdatastoragelocation.enum.config';
import { ManagedAppDataTransferLevelConfig } from './managedappdatatransferlevel.enum.config';
import { ManagedAppFlaggedReasonConfig } from './managedappflaggedreason.enum.config';
import { ManagedAppPinCharacterSetConfig } from './managedapppincharacterset.enum.config';
import { ManagedBrowserTypeConfig } from './managedbrowsertype.enum.config';
import { WindowsInformationProtectionEnforcementLevelConfig } from './windowsinformationprotectionenforcementlevel.enum.config';
import { WindowsInformationProtectionPinCharacterRequirementsConfig } from './windowsinformationprotectionpincharacterrequirements.enum.config';
import { NotificationTemplateBrandingOptionsConfig } from './notificationtemplatebrandingoptions.enum.config';
import { RemoteAssistanceOnboardingStatusConfig } from './remoteassistanceonboardingstatus.enum.config';
import { DeviceEnrollmentFailureReasonConfig } from './deviceenrollmentfailurereason.enum.config';
import { ApplicationTypeConfig } from './applicationtype.enum.config';
import { EntityTypeConfig } from './entitytype.enum.config';
import { PlannerPreviewTypeConfig } from './plannerpreviewtype.enum.config';
import { OnenotePatchActionTypeConfig } from './onenotepatchactiontype.enum.config';
import { OnenotePatchInsertPositionConfig } from './onenotepatchinsertposition.enum.config';
import { OnenoteSourceServiceConfig } from './onenotesourceservice.enum.config';
import { OnenoteUserRoleConfig } from './onenoteuserrole.enum.config';
import { OperationStatusConfig } from './operationstatus.enum.config';
import { StatusConfig } from './status.enum.config';
import { DataPolicyOperationStatusConfig } from './datapolicyoperationstatus.enum.config';
import { AlertFeedbackConfig } from './alertfeedback.enum.config';
import { AlertSeverityConfig } from './alertseverity.enum.config';
import { AlertStatusConfig } from './alertstatus.enum.config';
import { ConnectionDirectionConfig } from './connectiondirection.enum.config';
import { ConnectionStatusConfig } from './connectionstatus.enum.config';
import { EmailRoleConfig } from './emailrole.enum.config';
import { FileHashTypeConfig } from './filehashtype.enum.config';
import { LogonTypeConfig } from './logontype.enum.config';
import { ProcessIntegrityLevelConfig } from './processintegritylevel.enum.config';
import { RegistryHiveConfig } from './registryhive.enum.config';
import { RegistryOperationConfig } from './registryoperation.enum.config';
import { RegistryValueTypeConfig } from './registryvaluetype.enum.config';
import { SecurityNetworkProtocolConfig } from './securitynetworkprotocol.enum.config';
import { SecurityResourceTypeConfig } from './securityresourcetype.enum.config';
import { UserAccountSecurityTypeConfig } from './useraccountsecuritytype.enum.config';
import { CallDirectionConfig } from './calldirection.enum.config';
import { CallStateConfig } from './callstate.enum.config';
import { CallTranscriptionStateConfig } from './calltranscriptionstate.enum.config';
import { ChangeTypeConfig } from './changetype.enum.config';
import { EndpointTypeConfig } from './endpointtype.enum.config';
import { LobbyBypassScopeConfig } from './lobbybypassscope.enum.config';
import { MediaDirectionConfig } from './mediadirection.enum.config';
import { MediaStateConfig } from './mediastate.enum.config';
import { ModalityConfig } from './modality.enum.config';
import { OnlineMeetingPresentersConfig } from './onlinemeetingpresenters.enum.config';
import { OnlineMeetingRoleConfig } from './onlinemeetingrole.enum.config';
import { RecordingStatusConfig } from './recordingstatus.enum.config';
import { RejectReasonConfig } from './rejectreason.enum.config';
import { RoutingTypeConfig } from './routingtype.enum.config';
import { ScreenSharingRoleConfig } from './screensharingrole.enum.config';
import { ToneConfig } from './tone.enum.config';
import { LifecycleEventTypeConfig } from './lifecycleeventtype.enum.config';
import { ChannelMembershipTypeConfig } from './channelmembershiptype.enum.config';
import { ChatMessageImportanceConfig } from './chatmessageimportance.enum.config';
import { ChatMessagePolicyViolationDlpActionTypesConfig } from './chatmessagepolicyviolationdlpactiontypes.enum.config';
import { ChatMessagePolicyViolationUserActionTypesConfig } from './chatmessagepolicyviolationuseractiontypes.enum.config';
import { ChatMessagePolicyViolationVerdictDetailsTypesConfig } from './chatmessagepolicyviolationverdictdetailstypes.enum.config';
import { ChatMessageTypeConfig } from './chatmessagetype.enum.config';
import { ClonableTeamPartsConfig } from './clonableteamparts.enum.config';
import { GiphyRatingTypeConfig } from './giphyratingtype.enum.config';
import { TeamsAppDistributionMethodConfig } from './teamsappdistributionmethod.enum.config';
import { TeamsAsyncOperationStatusConfig } from './teamsasyncoperationstatus.enum.config';
import { TeamsAsyncOperationTypeConfig } from './teamsasyncoperationtype.enum.config';
import { TeamSpecializationConfig } from './teamspecialization.enum.config';
import { TeamVisibilityTypeConfig } from './teamvisibilitytype.enum.config';
import { ScheduleChangeRequestActorConfig } from './schedulechangerequestactor.enum.config';
import { ScheduleChangeStateConfig } from './schedulechangestate.enum.config';
import { ScheduleEntityThemeConfig } from './scheduleentitytheme.enum.config';
import { TimeOffReasonIconTypeConfig } from './timeoffreasonicontype.enum.config';
import { WorkforceIntegrationEncryptionProtocolConfig } from './workforceintegrationencryptionprotocol.enum.config';
import { WorkforceIntegrationSupportedEntitiesConfig } from './workforceintegrationsupportedentities.enum.config';
import { MailDestinationRoutingReasonConfig } from './maildestinationroutingreason.enum.config';
import { ThreatAssessmentContentTypeConfig } from './threatassessmentcontenttype.enum.config';
import { ThreatAssessmentRequestSourceConfig } from './threatassessmentrequestsource.enum.config';
import { ThreatAssessmentResultTypeConfig } from './threatassessmentresulttype.enum.config';
import { ThreatAssessmentStatusConfig } from './threatassessmentstatus.enum.config';
import { ThreatCategoryConfig } from './threatcategory.enum.config';
import { ThreatExpectedAssessmentConfig } from './threatexpectedassessment.enum.config';
import { TaskStatusConfig } from './taskstatus.enum.config';
import { WellknownListNameConfig } from './wellknownlistname.enum.config';
import { AppIdentityConfig } from './appidentity.complex.config';
import { AppliedConditionalAccessPolicyConfig } from './appliedconditionalaccesspolicy.complex.config';
import { AuditActivityInitiatorConfig } from './auditactivityinitiator.complex.config';
import { UserIdentityConfig } from './useridentity.complex.config';
import { DeviceDetailConfig } from './devicedetail.complex.config';
import { GeoCoordinatesConfig } from './geocoordinates.complex.config';
import { KeyValueConfig } from './keyvalue.complex.config';
import { ModifiedPropertyConfig } from './modifiedproperty.complex.config';
import { SignInLocationConfig } from './signinlocation.complex.config';
import { SignInStatusConfig } from './signinstatus.complex.config';
import { TargetResourceConfig } from './targetresource.complex.config';
import { EmailAddressConfig } from './emailaddress.complex.config';
import { InvitedUserMessageInfoConfig } from './invitedusermessageinfo.complex.config';
import { RecipientConfig } from './recipient.complex.config';
import { AssignedLicenseConfig } from './assignedlicense.complex.config';
import { AssignedPlanConfig } from './assignedplan.complex.config';
import { ObjectIdentityConfig } from './objectidentity.complex.config';
import { LicenseAssignmentStateConfig } from './licenseassignmentstate.complex.config';
import { OnPremisesExtensionAttributesConfig } from './onpremisesextensionattributes.complex.config';
import { OnPremisesProvisioningErrorConfig } from './onpremisesprovisioningerror.complex.config';
import { PasswordProfileConfig } from './passwordprofile.complex.config';
import { ProvisionedPlanConfig } from './provisionedplan.complex.config';
import { MailboxSettingsConfig } from './mailboxsettings.complex.config';
import { AutomaticRepliesSettingConfig } from './automaticrepliessetting.complex.config';
import { DateTimeTimeZoneConfig } from './datetimetimezone.complex.config';
import { LocaleInfoConfig } from './localeinfo.complex.config';
import { WorkingHoursConfig } from './workinghours.complex.config';
import { TimeZoneBaseConfig } from './timezonebase.complex.config';
import { AddInConfig } from './addin.complex.config';
import { ApiApplicationConfig } from './apiapplication.complex.config';
import { PermissionScopeConfig } from './permissionscope.complex.config';
import { PreAuthorizedApplicationConfig } from './preauthorizedapplication.complex.config';
import { AppRoleConfig } from './approle.complex.config';
import { InformationalUrlConfig } from './informationalurl.complex.config';
import { KeyCredentialConfig } from './keycredential.complex.config';
import { OptionalClaimsConfig } from './optionalclaims.complex.config';
import { OptionalClaimConfig } from './optionalclaim.complex.config';
import { ParentalControlSettingsConfig } from './parentalcontrolsettings.complex.config';
import { PasswordCredentialConfig } from './passwordcredential.complex.config';
import { PublicClientApplicationConfig } from './publicclientapplication.complex.config';
import { RequiredResourceAccessConfig } from './requiredresourceaccess.complex.config';
import { ResourceAccessConfig } from './resourceaccess.complex.config';
import { WebApplicationConfig } from './webapplication.complex.config';
import { ImplicitGrantSettingsConfig } from './implicitgrantsettings.complex.config';
import { SamlSingleSignOnSettingsConfig } from './samlsinglesignonsettings.complex.config';
import { AlternativeSecurityIdConfig } from './alternativesecurityid.complex.config';
import { AssignedLabelConfig } from './assignedlabel.complex.config';
import { CertificateAuthorityConfig } from './certificateauthority.complex.config';
import { ComplexExtensionValueConfig } from './complexextensionvalue.complex.config';
import { DomainStateConfig } from './domainstate.complex.config';
import { IdentityConfig } from './identity.complex.config';
import { InstanceResourceAccessConfig } from './instanceresourceaccess.complex.config';
import { ResourcePermissionConfig } from './resourcepermission.complex.config';
import { LicenseProcessingStateConfig } from './licenseprocessingstate.complex.config';
import { LicenseUnitsDetailConfig } from './licenseunitsdetail.complex.config';
import { PhoneConfig } from './phone.complex.config';
import { PhysicalOfficeAddressConfig } from './physicalofficeaddress.complex.config';
import { PrivacyProfileConfig } from './privacyprofile.complex.config';
import { ServicePlanInfoConfig } from './serviceplaninfo.complex.config';
import { SettingTemplateValueConfig } from './settingtemplatevalue.complex.config';
import { SettingValueConfig } from './settingvalue.complex.config';
import { VerifiedDomainConfig } from './verifieddomain.complex.config';
import { EducationStudentConfig } from './educationstudent.complex.config';
import { EducationTeacherConfig } from './educationteacher.complex.config';
import { EducationTermConfig } from './educationterm.complex.config';
import { IdentitySetConfig } from './identityset.complex.config';
import { PhysicalAddressConfig } from './physicaladdress.complex.config';
import { JsonConfig } from './json.complex.config';
import { WorkbookFilterCriteriaConfig } from './workbookfiltercriteria.complex.config';
import { WorkbookIconConfig } from './workbookicon.complex.config';
import { WorkbookFilterDatetimeConfig } from './workbookfilterdatetime.complex.config';
import { WorkbookOperationErrorConfig } from './workbookoperationerror.complex.config';
import { WorkbookRangeReferenceConfig } from './workbookrangereference.complex.config';
import { WorkbookSessionInfoConfig } from './workbooksessioninfo.complex.config';
import { WorkbookSortFieldConfig } from './workbooksortfield.complex.config';
import { WorkbookWorksheetProtectionOptionsConfig } from './workbookworksheetprotectionoptions.complex.config';
import { QuotaConfig } from './quota.complex.config';
import { StoragePlanInformationConfig } from './storageplaninformation.complex.config';
import { SharepointIdsConfig } from './sharepointids.complex.config';
import { SystemFacetConfig } from './systemfacet.complex.config';
import { AudioConfig } from './audio.complex.config';
import { DeletedConfig } from './deleted.complex.config';
import { FileConfig } from './file.complex.config';
import { HashesConfig } from './hashes.complex.config';
import { FileSystemInfoConfig } from './filesysteminfo.complex.config';
import { FolderConfig } from './folder.complex.config';
import { FolderViewConfig } from './folderview.complex.config';
import { ImageConfig } from './image.complex.config';
import { PackageConfig } from './package.complex.config';
import { PendingOperationsConfig } from './pendingoperations.complex.config';
import { PendingContentUpdateConfig } from './pendingcontentupdate.complex.config';
import { PhotoConfig } from './photo.complex.config';
import { PublicationFacetConfig } from './publicationfacet.complex.config';
import { RemoteItemConfig } from './remoteitem.complex.config';
import { ItemReferenceConfig } from './itemreference.complex.config';
import { SharedConfig } from './shared.complex.config';
import { SpecialFolderConfig } from './specialfolder.complex.config';
import { VideoConfig } from './video.complex.config';
import { RootConfig } from './root.complex.config';
import { SearchResultConfig } from './searchresult.complex.config';
import { ListInfoConfig } from './listinfo.complex.config';
import { PublicErrorConfig } from './publicerror.complex.config';
import { PublicErrorDetailConfig } from './publicerrordetail.complex.config';
import { PublicInnerErrorConfig } from './publicinnererror.complex.config';
import { SiteCollectionConfig } from './sitecollection.complex.config';
import { AttendeeAvailabilityConfig } from './attendeeavailability.complex.config';
import { AttendeeBaseConfig } from './attendeebase.complex.config';
import { LocationConfig } from './location.complex.config';
import { OutlookGeoCoordinatesConfig } from './outlookgeocoordinates.complex.config';
import { LocationConstraintConfig } from './locationconstraint.complex.config';
import { LocationConstraintItemConfig } from './locationconstraintitem.complex.config';
import { MeetingTimeSuggestionConfig } from './meetingtimesuggestion.complex.config';
import { TimeSlotConfig } from './timeslot.complex.config';
import { MeetingTimeSuggestionsResultConfig } from './meetingtimesuggestionsresult.complex.config';
import { TimeConstraintConfig } from './timeconstraint.complex.config';
import { AttachmentItemConfig } from './attachmentitem.complex.config';
import { AttendeeConfig } from './attendee.complex.config';
import { ResponseStatusConfig } from './responsestatus.complex.config';
import { AutomaticRepliesMailTipsConfig } from './automaticrepliesmailtips.complex.config';
import { CalendarSharingMessageActionConfig } from './calendarsharingmessageaction.complex.config';
import { ConvertIdResultConfig } from './convertidresult.complex.config';
import { GenericErrorConfig } from './genericerror.complex.config';
import { CustomTimeZoneConfig } from './customtimezone.complex.config';
import { StandardTimeZoneOffsetConfig } from './standardtimezoneoffset.complex.config';
import { DaylightTimeZoneOffsetConfig } from './daylighttimezoneoffset.complex.config';
import { FollowupFlagConfig } from './followupflag.complex.config';
import { FreeBusyErrorConfig } from './freebusyerror.complex.config';
import { InternetMessageHeaderConfig } from './internetmessageheader.complex.config';
import { ItemBodyConfig } from './itembody.complex.config';
import { MailTipsConfig } from './mailtips.complex.config';
import { MailTipsErrorConfig } from './mailtipserror.complex.config';
import { MessageRuleActionsConfig } from './messageruleactions.complex.config';
import { MessageRulePredicatesConfig } from './messagerulepredicates.complex.config';
import { SizeRangeConfig } from './sizerange.complex.config';
import { OnlineMeetingInfoConfig } from './onlinemeetinginfo.complex.config';
import { PatternedRecurrenceConfig } from './patternedrecurrence.complex.config';
import { RecurrencePatternConfig } from './recurrencepattern.complex.config';
import { RecurrenceRangeConfig } from './recurrencerange.complex.config';
import { PersonTypeConfig } from './persontype.complex.config';
import { ReminderConfig } from './reminder.complex.config';
import { ScheduleInformationConfig } from './scheduleinformation.complex.config';
import { ScheduleItemConfig } from './scheduleitem.complex.config';
import { ScoredEmailAddressConfig } from './scoredemailaddress.complex.config';
import { TimeZoneInformationConfig } from './timezoneinformation.complex.config';
import { UploadSessionConfig } from './uploadsession.complex.config';
import { WebsiteConfig } from './website.complex.config';
import { AccessActionConfig } from './accessaction.complex.config';
import { BooleanColumnConfig } from './booleancolumn.complex.config';
import { CalculatedColumnConfig } from './calculatedcolumn.complex.config';
import { ChoiceColumnConfig } from './choicecolumn.complex.config';
import { ContentTypeInfoConfig } from './contenttypeinfo.complex.config';
import { ContentTypeOrderConfig } from './contenttypeorder.complex.config';
import { CurrencyColumnConfig } from './currencycolumn.complex.config';
import { DateTimeColumnConfig } from './datetimecolumn.complex.config';
import { DefaultColumnValueConfig } from './defaultcolumnvalue.complex.config';
import { DriveItemUploadablePropertiesConfig } from './driveitemuploadableproperties.complex.config';
import { DriveRecipientConfig } from './driverecipient.complex.config';
import { GeolocationColumnConfig } from './geolocationcolumn.complex.config';
import { IncompleteDataConfig } from './incompletedata.complex.config';
import { ItemActionStatConfig } from './itemactionstat.complex.config';
import { ItemPreviewInfoConfig } from './itempreviewinfo.complex.config';
import { LookupColumnConfig } from './lookupcolumn.complex.config';
import { NumberColumnConfig } from './numbercolumn.complex.config';
import { PersonOrGroupColumnConfig } from './personorgroupcolumn.complex.config';
import { SharingInvitationConfig } from './sharinginvitation.complex.config';
import { SharingLinkConfig } from './sharinglink.complex.config';
import { TextColumnConfig } from './textcolumn.complex.config';
import { ThumbnailConfig } from './thumbnail.complex.config';
import { ExtensionSchemaPropertyConfig } from './extensionschemaproperty.complex.config';
import { ConditionalAccessSessionControlConfig } from './conditionalaccesssessioncontrol.complex.config';
import { ApplicationEnforcedRestrictionsSessionControlConfig } from './applicationenforcedrestrictionssessioncontrol.complex.config';
import { CloudAppSecuritySessionControlConfig } from './cloudappsecuritysessioncontrol.complex.config';
import { ConditionalAccessApplicationsConfig } from './conditionalaccessapplications.complex.config';
import { ConditionalAccessConditionSetConfig } from './conditionalaccessconditionset.complex.config';
import { ConditionalAccessLocationsConfig } from './conditionalaccesslocations.complex.config';
import { ConditionalAccessPlatformsConfig } from './conditionalaccessplatforms.complex.config';
import { ConditionalAccessUsersConfig } from './conditionalaccessusers.complex.config';
import { ConditionalAccessGrantControlsConfig } from './conditionalaccessgrantcontrols.complex.config';
import { ConditionalAccessSessionControlsConfig } from './conditionalaccesssessioncontrols.complex.config';
import { PersistentBrowserSessionControlConfig } from './persistentbrowsersessioncontrol.complex.config';
import { SignInFrequencySessionControlConfig } from './signinfrequencysessioncontrol.complex.config';
import { IpRangeConfig } from './iprange.complex.config';
import { IPv4CidrRangeConfig } from './ipv4cidrrange.complex.config';
import { IPv6CidrRangeConfig } from './ipv6cidrrange.complex.config';
import { DeviceAndAppManagementAssignmentTargetConfig } from './deviceandappmanagementassignmenttarget.complex.config';
import { AllDevicesAssignmentTargetConfig } from './alldevicesassignmenttarget.complex.config';
import { AllLicensedUsersAssignmentTargetConfig } from './alllicensedusersassignmenttarget.complex.config';
import { AndroidMinimumOperatingSystemConfig } from './androidminimumoperatingsystem.complex.config';
import { AppConfigurationSettingItemConfig } from './appconfigurationsettingitem.complex.config';
import { GroupAssignmentTargetConfig } from './groupassignmenttarget.complex.config';
import { ExclusionGroupAssignmentTargetConfig } from './exclusiongroupassignmenttarget.complex.config';
import { FileEncryptionInfoConfig } from './fileencryptioninfo.complex.config';
import { IosDeviceTypeConfig } from './iosdevicetype.complex.config';
import { MobileAppAssignmentSettingsConfig } from './mobileappassignmentsettings.complex.config';
import { IosLobAppAssignmentSettingsConfig } from './ioslobappassignmentsettings.complex.config';
import { IosMinimumOperatingSystemConfig } from './iosminimumoperatingsystem.complex.config';
import { IosStoreAppAssignmentSettingsConfig } from './iosstoreappassignmentsettings.complex.config';
import { IosVppAppAssignmentSettingsConfig } from './iosvppappassignmentsettings.complex.config';
import { MicrosoftStoreForBusinessAppAssignmentSettingsConfig } from './microsoftstoreforbusinessappassignmentsettings.complex.config';
import { MimeContentConfig } from './mimecontent.complex.config';
import { MobileAppInstallTimeSettingsConfig } from './mobileappinstalltimesettings.complex.config';
import { VppLicensingTypeConfig } from './vpplicensingtype.complex.config';
import { Win32LobAppAssignmentSettingsConfig } from './win32lobappassignmentsettings.complex.config';
import { Win32LobAppRestartSettingsConfig } from './win32lobapprestartsettings.complex.config';
import { Win32LobAppRuleConfig } from './win32lobapprule.complex.config';
import { Win32LobAppFileSystemRuleConfig } from './win32lobappfilesystemrule.complex.config';
import { Win32LobAppInstallExperienceConfig } from './win32lobappinstallexperience.complex.config';
import { Win32LobAppMsiInformationConfig } from './win32lobappmsiinformation.complex.config';
import { Win32LobAppPowerShellScriptRuleConfig } from './win32lobapppowershellscriptrule.complex.config';
import { Win32LobAppProductCodeRuleConfig } from './win32lobappproductcoderule.complex.config';
import { Win32LobAppRegistryRuleConfig } from './win32lobappregistryrule.complex.config';
import { Win32LobAppReturnCodeConfig } from './win32lobappreturncode.complex.config';
import { WindowsMinimumOperatingSystemConfig } from './windowsminimumoperatingsystem.complex.config';
import { DeviceManagementSettingsConfig } from './devicemanagementsettings.complex.config';
import { IntuneBrandConfig } from './intunebrand.complex.config';
import { RgbColorConfig } from './rgbcolor.complex.config';
import { AppListItemConfig } from './applistitem.complex.config';
import { BitLockerRemovableDrivePolicyConfig } from './bitlockerremovabledrivepolicy.complex.config';
import { DefenderDetectedMalwareActionsConfig } from './defenderdetectedmalwareactions.complex.config';
import { DeviceCompliancePolicySettingStateConfig } from './devicecompliancepolicysettingstate.complex.config';
import { SettingSourceConfig } from './settingsource.complex.config';
import { DeviceConfigurationSettingStateConfig } from './deviceconfigurationsettingstate.complex.config';
import { EdgeSearchEngineBaseConfig } from './edgesearchenginebase.complex.config';
import { EdgeSearchEngineConfig } from './edgesearchengine.complex.config';
import { EdgeSearchEngineCustomConfig } from './edgesearchenginecustom.complex.config';
import { IosHomeScreenItemConfig } from './ioshomescreenitem.complex.config';
import { IosHomeScreenAppConfig } from './ioshomescreenapp.complex.config';
import { IosHomeScreenFolderConfig } from './ioshomescreenfolder.complex.config';
import { IosHomeScreenFolderPageConfig } from './ioshomescreenfolderpage.complex.config';
import { IosHomeScreenPageConfig } from './ioshomescreenpage.complex.config';
import { IosNetworkUsageRuleConfig } from './iosnetworkusagerule.complex.config';
import { IosNotificationSettingsConfig } from './iosnotificationsettings.complex.config';
import { MediaContentRatingAustraliaConfig } from './mediacontentratingaustralia.complex.config';
import { MediaContentRatingCanadaConfig } from './mediacontentratingcanada.complex.config';
import { MediaContentRatingFranceConfig } from './mediacontentratingfrance.complex.config';
import { MediaContentRatingGermanyConfig } from './mediacontentratinggermany.complex.config';
import { MediaContentRatingIrelandConfig } from './mediacontentratingireland.complex.config';
import { MediaContentRatingJapanConfig } from './mediacontentratingjapan.complex.config';
import { MediaContentRatingNewZealandConfig } from './mediacontentratingnewzealand.complex.config';
import { MediaContentRatingUnitedKingdomConfig } from './mediacontentratingunitedkingdom.complex.config';
import { MediaContentRatingUnitedStatesConfig } from './mediacontentratingunitedstates.complex.config';
import { OmaSettingConfig } from './omasetting.complex.config';
import { OmaSettingBase64Config } from './omasettingbase64.complex.config';
import { OmaSettingBooleanConfig } from './omasettingboolean.complex.config';
import { OmaSettingDateTimeConfig } from './omasettingdatetime.complex.config';
import { OmaSettingFloatingPointConfig } from './omasettingfloatingpoint.complex.config';
import { OmaSettingIntegerConfig } from './omasettinginteger.complex.config';
import { OmaSettingStringConfig } from './omasettingstring.complex.config';
import { OmaSettingStringXmlConfig } from './omasettingstringxml.complex.config';
import { ReportConfig } from './report.complex.config';
import { SharedPCAccountManagerPolicyConfig } from './sharedpcaccountmanagerpolicy.complex.config';
import { Windows10NetworkProxyServerConfig } from './windows10networkproxyserver.complex.config';
import { WindowsFirewallNetworkProfileConfig } from './windowsfirewallnetworkprofile.complex.config';
import { WindowsUpdateInstallScheduleTypeConfig } from './windowsupdateinstallscheduletype.complex.config';
import { WindowsUpdateActiveHoursInstallConfig } from './windowsupdateactivehoursinstall.complex.config';
import { WindowsUpdateScheduledInstallConfig } from './windowsupdatescheduledinstall.complex.config';
import { ConfigurationManagerClientEnabledFeaturesConfig } from './configurationmanagerclientenabledfeatures.complex.config';
import { DeviceActionResultConfig } from './deviceactionresult.complex.config';
import { DeviceHealthAttestationStateConfig } from './devicehealthattestationstate.complex.config';
import { ComplianceManagementPartnerAssignmentConfig } from './compliancemanagementpartnerassignment.complex.config';
import { DeviceEnrollmentPlatformRestrictionConfig } from './deviceenrollmentplatformrestriction.complex.config';
import { DeleteUserFromSharedAppleDeviceActionResultConfig } from './deleteuserfromsharedappledeviceactionresult.complex.config';
import { DeviceExchangeAccessStateSummaryConfig } from './deviceexchangeaccessstatesummary.complex.config';
import { DeviceGeoLocationConfig } from './devicegeolocation.complex.config';
import { DeviceOperatingSystemSummaryConfig } from './deviceoperatingsystemsummary.complex.config';
import { LocateDeviceActionResultConfig } from './locatedeviceactionresult.complex.config';
import { RemoteLockActionResultConfig } from './remotelockactionresult.complex.config';
import { ResetPasscodeActionResultConfig } from './resetpasscodeactionresult.complex.config';
import { UpdateWindowsDeviceAccountActionParameterConfig } from './updatewindowsdeviceaccountactionparameter.complex.config';
import { WindowsDeviceAccountConfig } from './windowsdeviceaccount.complex.config';
import { WindowsDefenderScanActionResultConfig } from './windowsdefenderscanactionresult.complex.config';
import { WindowsDeviceADAccountConfig } from './windowsdeviceadaccount.complex.config';
import { WindowsDeviceAzureADAccountConfig } from './windowsdeviceazureadaccount.complex.config';
import { MobileAppIdentifierConfig } from './mobileappidentifier.complex.config';
import { AndroidMobileAppIdentifierConfig } from './androidmobileappidentifier.complex.config';
import { IosMobileAppIdentifierConfig } from './iosmobileappidentifier.complex.config';
import { IPv4RangeConfig } from './ipv4range.complex.config';
import { IPv6RangeConfig } from './ipv6range.complex.config';
import { KeyValuePairConfig } from './keyvaluepair.complex.config';
import { ManagedAppDiagnosticStatusConfig } from './managedappdiagnosticstatus.complex.config';
import { ManagedAppPolicyDeploymentSummaryPerAppConfig } from './managedapppolicydeploymentsummaryperapp.complex.config';
import { ProxiedDomainConfig } from './proxieddomain.complex.config';
import { WindowsInformationProtectionAppConfig } from './windowsinformationprotectionapp.complex.config';
import { WindowsInformationProtectionDataRecoveryCertificateConfig } from './windowsinformationprotectiondatarecoverycertificate.complex.config';
import { WindowsInformationProtectionDesktopAppConfig } from './windowsinformationprotectiondesktopapp.complex.config';
import { WindowsInformationProtectionIPRangeCollectionConfig } from './windowsinformationprotectioniprangecollection.complex.config';
import { WindowsInformationProtectionProxiedDomainCollectionConfig } from './windowsinformationprotectionproxieddomaincollection.complex.config';
import { WindowsInformationProtectionResourceCollectionConfig } from './windowsinformationprotectionresourcecollection.complex.config';
import { WindowsInformationProtectionStoreAppConfig } from './windowsinformationprotectionstoreapp.complex.config';
import { ResourceActionConfig } from './resourceaction.complex.config';
import { RolePermissionConfig } from './rolepermission.complex.config';
import { SearchHitConfig } from './searchhit.complex.config';
import { SearchHitsContainerConfig } from './searchhitscontainer.complex.config';
import { SearchQueryConfig } from './searchquery.complex.config';
import { SearchRequestConfig } from './searchrequest.complex.config';
import { SearchResponseConfig } from './searchresponse.complex.config';
import { PlannerAppliedCategoriesConfig } from './plannerappliedcategories.complex.config';
import { PlannerAssignmentConfig } from './plannerassignment.complex.config';
import { PlannerAssignmentsConfig } from './plannerassignments.complex.config';
import { PlannerCategoryDescriptionsConfig } from './plannercategorydescriptions.complex.config';
import { PlannerChecklistItemConfig } from './plannerchecklistitem.complex.config';
import { PlannerChecklistItemsConfig } from './plannerchecklistitems.complex.config';
import { PlannerExternalReferenceConfig } from './plannerexternalreference.complex.config';
import { PlannerExternalReferencesConfig } from './plannerexternalreferences.complex.config';
import { PlannerOrderHintsByAssigneeConfig } from './plannerorderhintsbyassignee.complex.config';
import { PlannerUserIdsConfig } from './planneruserids.complex.config';
import { InsightIdentityConfig } from './insightidentity.complex.config';
import { ResourceReferenceConfig } from './resourcereference.complex.config';
import { ResourceVisualizationConfig } from './resourcevisualization.complex.config';
import { SharingDetailConfig } from './sharingdetail.complex.config';
import { UsageDetailsConfig } from './usagedetails.complex.config';
import { CopyNotebookModelConfig } from './copynotebookmodel.complex.config';
import { NotebookLinksConfig } from './notebooklinks.complex.config';
import { ExternalLinkConfig } from './externallink.complex.config';
import { DiagnosticConfig } from './diagnostic.complex.config';
import { OnenoteOperationErrorConfig } from './onenoteoperationerror.complex.config';
import { OnenotePagePreviewConfig } from './onenotepagepreview.complex.config';
import { OnenotePagePreviewLinksConfig } from './onenotepagepreviewlinks.complex.config';
import { OnenotePatchContentCommandConfig } from './onenotepatchcontentcommand.complex.config';
import { PageLinksConfig } from './pagelinks.complex.config';
import { RecentNotebookConfig } from './recentnotebook.complex.config';
import { RecentNotebookLinksConfig } from './recentnotebooklinks.complex.config';
import { SectionLinksConfig } from './sectionlinks.complex.config';
import { ImageInfoConfig } from './imageinfo.complex.config';
import { VisualInfoConfig } from './visualinfo.complex.config';
import { AlertHistoryStateConfig } from './alerthistorystate.complex.config';
import { AlertTriggerConfig } from './alerttrigger.complex.config';
import { AverageComparativeScoreConfig } from './averagecomparativescore.complex.config';
import { CertificationControlConfig } from './certificationcontrol.complex.config';
import { CloudAppSecurityStateConfig } from './cloudappsecuritystate.complex.config';
import { ComplianceInformationConfig } from './complianceinformation.complex.config';
import { ControlScoreConfig } from './controlscore.complex.config';
import { FileHashConfig } from './filehash.complex.config';
import { FileSecurityStateConfig } from './filesecuritystate.complex.config';
import { HostSecurityStateConfig } from './hostsecuritystate.complex.config';
import { MalwareStateConfig } from './malwarestate.complex.config';
import { NetworkConnectionConfig } from './networkconnection.complex.config';
import { ProcessConfig } from './process.complex.config';
import { RegistryKeyStateConfig } from './registrykeystate.complex.config';
import { SecureScoreControlStateUpdateConfig } from './securescorecontrolstateupdate.complex.config';
import { SecurityResourceConfig } from './securityresource.complex.config';
import { SecurityVendorInformationConfig } from './securityvendorinformation.complex.config';
import { UserSecurityStateConfig } from './usersecuritystate.complex.config';
import { VulnerabilityStateConfig } from './vulnerabilitystate.complex.config';
import { MediaConfigConfig } from './mediaconfig.complex.config';
import { AppHostedMediaConfigConfig } from './apphostedmediaconfig.complex.config';
import { AudioConferencingConfig } from './audioconferencing.complex.config';
import { CallMediaStateConfig } from './callmediastate.complex.config';
import { CallOptionsConfig } from './calloptions.complex.config';
import { CallRouteConfig } from './callroute.complex.config';
import { CallTranscriptionInfoConfig } from './calltranscriptioninfo.complex.config';
import { ChatInfoConfig } from './chatinfo.complex.config';
import { CommsNotificationConfig } from './commsnotification.complex.config';
import { CommsNotificationsConfig } from './commsnotifications.complex.config';
import { IncomingContextConfig } from './incomingcontext.complex.config';
import { InvitationParticipantInfoConfig } from './invitationparticipantinfo.complex.config';
import { LobbyBypassSettingsConfig } from './lobbybypasssettings.complex.config';
import { MediaInfoConfig } from './mediainfo.complex.config';
import { PromptConfig } from './prompt.complex.config';
import { MediaPromptConfig } from './mediaprompt.complex.config';
import { MediaStreamConfig } from './mediastream.complex.config';
import { MeetingInfoConfig } from './meetinginfo.complex.config';
import { MeetingParticipantInfoConfig } from './meetingparticipantinfo.complex.config';
import { MeetingParticipantsConfig } from './meetingparticipants.complex.config';
import { OrganizerMeetingInfoConfig } from './organizermeetinginfo.complex.config';
import { OutgoingCallOptionsConfig } from './outgoingcalloptions.complex.config';
import { ParticipantInfoConfig } from './participantinfo.complex.config';
import { RecordingInfoConfig } from './recordinginfo.complex.config';
import { ResultInfoConfig } from './resultinfo.complex.config';
import { ServiceHostedMediaConfigConfig } from './servicehostedmediaconfig.complex.config';
import { TeleconferenceDeviceMediaQualityConfig } from './teleconferencedevicemediaquality.complex.config';
import { TeleconferenceDeviceAudioQualityConfig } from './teleconferencedeviceaudioquality.complex.config';
import { TeleconferenceDeviceQualityConfig } from './teleconferencedevicequality.complex.config';
import { TeleconferenceDeviceVideoQualityConfig } from './teleconferencedevicevideoquality.complex.config';
import { TeleconferenceDeviceScreenSharingQualityConfig } from './teleconferencedevicescreensharingquality.complex.config';
import { TokenMeetingInfoConfig } from './tokenmeetinginfo.complex.config';
import { ToneInfoConfig } from './toneinfo.complex.config';
import { ChangeNotificationConfig } from './changenotification.complex.config';
import { ChangeNotificationEncryptedContentConfig } from './changenotificationencryptedcontent.complex.config';
import { ResourceDataConfig } from './resourcedata.complex.config';
import { ChangeNotificationCollectionConfig } from './changenotificationcollection.complex.config';
import { ChatMessageAttachmentConfig } from './chatmessageattachment.complex.config';
import { ChatMessageMentionConfig } from './chatmessagemention.complex.config';
import { ChatMessagePolicyViolationConfig } from './chatmessagepolicyviolation.complex.config';
import { ChatMessagePolicyViolationPolicyTipConfig } from './chatmessagepolicyviolationpolicytip.complex.config';
import { ChatMessageReactionConfig } from './chatmessagereaction.complex.config';
import { OperationErrorConfig } from './operationerror.complex.config';
import { TeamClassSettingsConfig } from './teamclasssettings.complex.config';
import { TeamFunSettingsConfig } from './teamfunsettings.complex.config';
import { TeamGuestSettingsConfig } from './teamguestsettings.complex.config';
import { TeamMemberSettingsConfig } from './teammembersettings.complex.config';
import { TeamMessagingSettingsConfig } from './teammessagingsettings.complex.config';
import { TeamsTabConfigurationConfig } from './teamstabconfiguration.complex.config';
import { ScheduleEntityConfig } from './scheduleentity.complex.config';
import { ShiftItemConfig } from './shiftitem.complex.config';
import { ShiftActivityConfig } from './shiftactivity.complex.config';
import { OpenShiftItemConfig } from './openshiftitem.complex.config';
import { ShiftAvailabilityConfig } from './shiftavailability.complex.config';
import { TimeRangeConfig } from './timerange.complex.config';
import { TimeOffItemConfig } from './timeoffitem.complex.config';
import { WorkforceIntegrationEncryptionConfig } from './workforceintegrationencryption.complex.config';
import { EntityConfig } from './entity.entity.config';
import { AuditLogRootConfig } from './auditlogroot.entity.config';
import { DirectoryAuditConfig } from './directoryaudit.entity.config';
import { SignInConfig } from './signin.entity.config';
import { RestrictedSignInConfig } from './restrictedsignin.entity.config';
import { InvitationConfig } from './invitation.entity.config';
import { DirectoryObjectConfig } from './directoryobject.entity.config';
import { UserConfig } from './user.entity.config';
import { AppRoleAssignmentConfig } from './approleassignment.entity.config';
import { LicenseDetailsConfig } from './licensedetails.entity.config';
import { OAuth2PermissionGrantConfig } from './oauth2permissiongrant.entity.config';
import { ScopedRoleMembershipConfig } from './scopedrolemembership.entity.config';
import { CalendarConfig } from './calendar.entity.config';
import { CalendarGroupConfig } from './calendargroup.entity.config';
import { OutlookItemConfig } from './outlookitem.entity.config';
import { EventConfig } from './event.entity.config';
import { ContactFolderConfig } from './contactfolder.entity.config';
import { ContactConfig } from './contact.entity.config';
import { InferenceClassificationConfig } from './inferenceclassification.entity.config';
import { MailFolderConfig } from './mailfolder.entity.config';
import { MessageConfig } from './message.entity.config';
import { OutlookUserConfig } from './outlookuser.entity.config';
import { PersonConfig } from './person.entity.config';
import { ProfilePhotoConfig } from './profilephoto.entity.config';
import { BaseItemConfig } from './baseitem.entity.config';
import { DriveConfig } from './drive.entity.config';
import { SiteConfig } from './site.entity.config';
import { ExtensionConfig } from './extension.entity.config';
import { ManagedDeviceConfig } from './manageddevice.entity.config';
import { ManagedAppRegistrationConfig } from './managedappregistration.entity.config';
import { DeviceManagementTroubleshootingEventConfig } from './devicemanagementtroubleshootingevent.entity.config';
import { PlannerUserConfig } from './planneruser.entity.config';
import { OfficeGraphInsightsConfig } from './officegraphinsights.entity.config';
import { UserSettingsConfig } from './usersettings.entity.config';
import { OnenoteConfig } from './onenote.entity.config';
import { UserActivityConfig } from './useractivity.entity.config';
import { OnlineMeetingConfig } from './onlinemeeting.entity.config';
import { TeamConfig } from './team.entity.config';
import { UserTeamworkConfig } from './userteamwork.entity.config';
import { TodoConfig } from './todo.entity.config';
import { ApplicationConfig } from './application.entity.config';
import { ExtensionPropertyConfig } from './extensionproperty.entity.config';
import { PolicyBaseConfig } from './policybase.entity.config';
import { StsPolicyConfig } from './stspolicy.entity.config';
import { HomeRealmDiscoveryPolicyConfig } from './homerealmdiscoverypolicy.entity.config';
import { TokenIssuancePolicyConfig } from './tokenissuancepolicy.entity.config';
import { TokenLifetimePolicyConfig } from './tokenlifetimepolicy.entity.config';
import { ServicePrincipalConfig } from './serviceprincipal.entity.config';
import { ClaimsMappingPolicyConfig } from './claimsmappingpolicy.entity.config';
import { DelegatedPermissionClassificationConfig } from './delegatedpermissionclassification.entity.config';
import { EndpointConfig } from './endpoint.entity.config';
import { IdentityContainerConfig } from './identitycontainer.entity.config';
import { ConditionalAccessRootConfig } from './conditionalaccessroot.entity.config';
import { IdentityProviderConfig } from './identityprovider.entity.config';
import { ActivityBasedTimeoutPolicyConfig } from './activitybasedtimeoutpolicy.entity.config';
import { AdministrativeUnitConfig } from './administrativeunit.entity.config';
import { CertificateBasedAuthConfigurationConfig } from './certificatebasedauthconfiguration.entity.config';
import { ContractConfig } from './contract.entity.config';
import { DeviceConfig } from './device.entity.config';
import { DirectoryConfig } from './directory.entity.config';
import { DirectoryObjectPartnerReferenceConfig } from './directoryobjectpartnerreference.entity.config';
import { DirectoryRoleConfig } from './directoryrole.entity.config';
import { DirectoryRoleTemplateConfig } from './directoryroletemplate.entity.config';
import { DomainConfig } from './domain.entity.config';
import { DomainDnsRecordConfig } from './domaindnsrecord.entity.config';
import { DomainDnsCnameRecordConfig } from './domaindnscnamerecord.entity.config';
import { DomainDnsMxRecordConfig } from './domaindnsmxrecord.entity.config';
import { DomainDnsSrvRecordConfig } from './domaindnssrvrecord.entity.config';
import { DomainDnsTxtRecordConfig } from './domaindnstxtrecord.entity.config';
import { DomainDnsUnavailableRecordConfig } from './domaindnsunavailablerecord.entity.config';
import { GroupConfig } from './group.entity.config';
import { ResourceSpecificPermissionGrantConfig } from './resourcespecificpermissiongrant.entity.config';
import { GroupSettingConfig } from './groupsetting.entity.config';
import { ConversationConfig } from './conversation.entity.config';
import { ConversationThreadConfig } from './conversationthread.entity.config';
import { GroupLifecyclePolicyConfig } from './grouplifecyclepolicy.entity.config';
import { PlannerGroupConfig } from './plannergroup.entity.config';
import { GroupSettingTemplateConfig } from './groupsettingtemplate.entity.config';
import { OrganizationConfig } from './organization.entity.config';
import { OrgContactConfig } from './orgcontact.entity.config';
import { PermissionGrantConditionSetConfig } from './permissiongrantconditionset.entity.config';
import { PermissionGrantPolicyConfig } from './permissiongrantpolicy.entity.config';
import { PolicyRootConfig } from './policyroot.entity.config';
import { ConditionalAccessPolicyConfig } from './conditionalaccesspolicy.entity.config';
import { IdentitySecurityDefaultsEnforcementPolicyConfig } from './identitysecuritydefaultsenforcementpolicy.entity.config';
import { SubscribedSkuConfig } from './subscribedsku.entity.config';
import { EducationClassConfig } from './educationclass.entity.config';
import { EducationUserConfig } from './educationuser.entity.config';
import { EducationOrganizationConfig } from './educationorganization.entity.config';
import { EducationSchoolConfig } from './educationschool.entity.config';
import { EducationRootConfig } from './educationroot.entity.config';
import { DriveItemConfig } from './driveitem.entity.config';
import { ListConfig } from './list.entity.config';
import { WorkbookConfig } from './workbook.entity.config';
import { ItemAnalyticsConfig } from './itemanalytics.entity.config';
import { ListItemConfig } from './listitem.entity.config';
import { PermissionConfig } from './permission.entity.config';
import { SubscriptionConfig } from './subscription.entity.config';
import { ThumbnailSetConfig } from './thumbnailset.entity.config';
import { BaseItemVersionConfig } from './baseitemversion.entity.config';
import { DriveItemVersionConfig } from './driveitemversion.entity.config';
import { ColumnDefinitionConfig } from './columndefinition.entity.config';
import { ContentTypeConfig } from './contenttype.entity.config';
import { WorkbookApplicationConfig } from './workbookapplication.entity.config';
import { WorkbookCommentConfig } from './workbookcomment.entity.config';
import { WorkbookFunctionsConfig } from './workbookfunctions.entity.config';
import { WorkbookNamedItemConfig } from './workbooknameditem.entity.config';
import { WorkbookOperationConfig } from './workbookoperation.entity.config';
import { WorkbookTableConfig } from './workbooktable.entity.config';
import { WorkbookWorksheetConfig } from './workbookworksheet.entity.config';
import { WorkbookChartConfig } from './workbookchart.entity.config';
import { WorkbookChartAxesConfig } from './workbookchartaxes.entity.config';
import { WorkbookChartDataLabelsConfig } from './workbookchartdatalabels.entity.config';
import { WorkbookChartAreaFormatConfig } from './workbookchartareaformat.entity.config';
import { WorkbookChartLegendConfig } from './workbookchartlegend.entity.config';
import { WorkbookChartSeriesConfig } from './workbookchartseries.entity.config';
import { WorkbookChartTitleConfig } from './workbookcharttitle.entity.config';
import { WorkbookChartFillConfig } from './workbookchartfill.entity.config';
import { WorkbookChartFontConfig } from './workbookchartfont.entity.config';
import { WorkbookChartAxisConfig } from './workbookchartaxis.entity.config';
import { WorkbookChartAxisFormatConfig } from './workbookchartaxisformat.entity.config';
import { WorkbookChartGridlinesConfig } from './workbookchartgridlines.entity.config';
import { WorkbookChartAxisTitleConfig } from './workbookchartaxistitle.entity.config';
import { WorkbookChartLineFormatConfig } from './workbookchartlineformat.entity.config';
import { WorkbookChartAxisTitleFormatConfig } from './workbookchartaxistitleformat.entity.config';
import { WorkbookChartDataLabelFormatConfig } from './workbookchartdatalabelformat.entity.config';
import { WorkbookChartGridlinesFormatConfig } from './workbookchartgridlinesformat.entity.config';
import { WorkbookChartLegendFormatConfig } from './workbookchartlegendformat.entity.config';
import { WorkbookChartPointConfig } from './workbookchartpoint.entity.config';
import { WorkbookChartPointFormatConfig } from './workbookchartpointformat.entity.config';
import { WorkbookChartSeriesFormatConfig } from './workbookchartseriesformat.entity.config';
import { WorkbookChartTitleFormatConfig } from './workbookcharttitleformat.entity.config';
import { WorkbookCommentReplyConfig } from './workbookcommentreply.entity.config';
import { WorkbookFilterConfig } from './workbookfilter.entity.config';
import { WorkbookFormatProtectionConfig } from './workbookformatprotection.entity.config';
import { WorkbookFunctionResultConfig } from './workbookfunctionresult.entity.config';
import { WorkbookPivotTableConfig } from './workbookpivottable.entity.config';
import { WorkbookRangeConfig } from './workbookrange.entity.config';
import { WorkbookRangeFormatConfig } from './workbookrangeformat.entity.config';
import { WorkbookRangeSortConfig } from './workbookrangesort.entity.config';
import { WorkbookRangeBorderConfig } from './workbookrangeborder.entity.config';
import { WorkbookRangeFillConfig } from './workbookrangefill.entity.config';
import { WorkbookRangeFontConfig } from './workbookrangefont.entity.config';
import { WorkbookRangeViewConfig } from './workbookrangeview.entity.config';
import { WorkbookTableColumnConfig } from './workbooktablecolumn.entity.config';
import { WorkbookTableRowConfig } from './workbooktablerow.entity.config';
import { WorkbookTableSortConfig } from './workbooktablesort.entity.config';
import { WorkbookWorksheetProtectionConfig } from './workbookworksheetprotection.entity.config';
import { PlaceConfig } from './place.entity.config';
import { RoomConfig } from './room.entity.config';
import { RoomListConfig } from './roomlist.entity.config';
import { AttachmentConfig } from './attachment.entity.config';
import { CalendarPermissionConfig } from './calendarpermission.entity.config';
import { MultiValueLegacyExtendedPropertyConfig } from './multivaluelegacyextendedproperty.entity.config';
import { SingleValueLegacyExtendedPropertyConfig } from './singlevaluelegacyextendedproperty.entity.config';
import { CalendarSharingMessageConfig } from './calendarsharingmessage.entity.config';
import { PostConfig } from './post.entity.config';
import { EventMessageConfig } from './eventmessage.entity.config';
import { EventMessageRequestConfig } from './eventmessagerequest.entity.config';
import { EventMessageResponseConfig } from './eventmessageresponse.entity.config';
import { FileAttachmentConfig } from './fileattachment.entity.config';
import { InferenceClassificationOverrideConfig } from './inferenceclassificationoverride.entity.config';
import { ItemAttachmentConfig } from './itemattachment.entity.config';
import { MessageRuleConfig } from './messagerule.entity.config';
import { MailSearchFolderConfig } from './mailsearchfolder.entity.config';
import { OpenTypeExtensionConfig } from './opentypeextension.entity.config';
import { OutlookCategoryConfig } from './outlookcategory.entity.config';
import { ReferenceAttachmentConfig } from './referenceattachment.entity.config';
import { ColumnLinkConfig } from './columnlink.entity.config';
import { FieldValueSetConfig } from './fieldvalueset.entity.config';
import { ItemActivityConfig } from './itemactivity.entity.config';
import { ItemActivityStatConfig } from './itemactivitystat.entity.config';
import { ListItemVersionConfig } from './listitemversion.entity.config';
import { SharedDriveItemConfig } from './shareddriveitem.entity.config';
import { SchemaExtensionConfig } from './schemaextension.entity.config';
import { CloudCommunicationsConfig } from './cloudcommunications.entity.config';
import { CallConfig } from './call.entity.config';
import { NamedLocationConfig } from './namedlocation.entity.config';
import { CountryNamedLocationConfig } from './countrynamedlocation.entity.config';
import { IpNamedLocationConfig } from './ipnamedlocation.entity.config';
import { MobileAppConfig } from './mobileapp.entity.config';
import { MobileLobAppConfig } from './mobilelobapp.entity.config';
import { AndroidLobAppConfig } from './androidlobapp.entity.config';
import { AndroidStoreAppConfig } from './androidstoreapp.entity.config';
import { DeviceAppManagementConfig } from './deviceappmanagement.entity.config';
import { ManagedEBookConfig } from './managedebook.entity.config';
import { MobileAppCategoryConfig } from './mobileappcategory.entity.config';
import { ManagedDeviceMobileAppConfigurationConfig } from './manageddevicemobileappconfiguration.entity.config';
import { VppTokenConfig } from './vpptoken.entity.config';
import { ManagedAppPolicyConfig } from './managedapppolicy.entity.config';
import { ManagedAppProtectionConfig } from './managedappprotection.entity.config';
import { TargetedManagedAppProtectionConfig } from './targetedmanagedappprotection.entity.config';
import { AndroidManagedAppProtectionConfig } from './androidmanagedappprotection.entity.config';
import { DefaultManagedAppProtectionConfig } from './defaultmanagedappprotection.entity.config';
import { IosManagedAppProtectionConfig } from './iosmanagedappprotection.entity.config';
import { ManagedAppStatusConfig } from './managedappstatus.entity.config';
import { WindowsInformationProtectionConfig } from './windowsinformationprotection.entity.config';
import { MdmWindowsInformationProtectionPolicyConfig } from './mdmwindowsinformationprotectionpolicy.entity.config';
import { ManagedAppConfigurationConfig } from './managedappconfiguration.entity.config';
import { TargetedManagedAppConfigurationConfig } from './targetedmanagedappconfiguration.entity.config';
import { WindowsInformationProtectionPolicyConfig } from './windowsinformationprotectionpolicy.entity.config';
import { IosLobAppConfig } from './ioslobapp.entity.config';
import { IosMobileAppConfigurationConfig } from './iosmobileappconfiguration.entity.config';
import { IosStoreAppConfig } from './iosstoreapp.entity.config';
import { IosVppAppConfig } from './iosvppapp.entity.config';
import { MacOSOfficeSuiteAppConfig } from './macosofficesuiteapp.entity.config';
import { ManagedAppConfig } from './managedapp.entity.config';
import { ManagedMobileLobAppConfig } from './managedmobilelobapp.entity.config';
import { ManagedAndroidLobAppConfig } from './managedandroidlobapp.entity.config';
import { ManagedAndroidStoreAppConfig } from './managedandroidstoreapp.entity.config';
import { ManagedDeviceMobileAppConfigurationAssignmentConfig } from './manageddevicemobileappconfigurationassignment.entity.config';
import { ManagedDeviceMobileAppConfigurationDeviceStatusConfig } from './manageddevicemobileappconfigurationdevicestatus.entity.config';
import { ManagedDeviceMobileAppConfigurationDeviceSummaryConfig } from './manageddevicemobileappconfigurationdevicesummary.entity.config';
import { ManagedDeviceMobileAppConfigurationUserStatusConfig } from './manageddevicemobileappconfigurationuserstatus.entity.config';
import { ManagedDeviceMobileAppConfigurationUserSummaryConfig } from './manageddevicemobileappconfigurationusersummary.entity.config';
import { ManagedIOSLobAppConfig } from './managedioslobapp.entity.config';
import { ManagedIOSStoreAppConfig } from './managediosstoreapp.entity.config';
import { MobileAppContentConfig } from './mobileappcontent.entity.config';
import { MicrosoftStoreForBusinessAppConfig } from './microsoftstoreforbusinessapp.entity.config';
import { MobileAppAssignmentConfig } from './mobileappassignment.entity.config';
import { MobileAppContentFileConfig } from './mobileappcontentfile.entity.config';
import { WebAppConfig } from './webapp.entity.config';
import { Win32LobAppConfig } from './win32lobapp.entity.config';
import { WindowsMobileMSIConfig } from './windowsmobilemsi.entity.config';
import { WindowsUniversalAppXConfig } from './windowsuniversalappx.entity.config';
import { DeviceInstallStateConfig } from './deviceinstallstate.entity.config';
import { EBookInstallSummaryConfig } from './ebookinstallsummary.entity.config';
import { IosVppEBookConfig } from './iosvppebook.entity.config';
import { ManagedEBookAssignmentConfig } from './managedebookassignment.entity.config';
import { IosVppEBookAssignmentConfig } from './iosvppebookassignment.entity.config';
import { UserInstallStateSummaryConfig } from './userinstallstatesummary.entity.config';
import { DeviceManagementConfig } from './devicemanagement.entity.config';
import { TermsAndConditionsConfig } from './termsandconditions.entity.config';
import { DeviceCompliancePolicyConfig } from './devicecompliancepolicy.entity.config';
import { DeviceCompliancePolicyDeviceStateSummaryConfig } from './devicecompliancepolicydevicestatesummary.entity.config';
import { DeviceCompliancePolicySettingStateSummaryConfig } from './devicecompliancepolicysettingstatesummary.entity.config';
import { DeviceConfigurationDeviceStateSummaryConfig } from './deviceconfigurationdevicestatesummary.entity.config';
import { DeviceConfigurationConfig } from './deviceconfiguration.entity.config';
import { IosUpdateDeviceStatusConfig } from './iosupdatedevicestatus.entity.config';
import { SoftwareUpdateStatusSummaryConfig } from './softwareupdatestatussummary.entity.config';
import { ComplianceManagementPartnerConfig } from './compliancemanagementpartner.entity.config';
import { OnPremisesConditionalAccessSettingsConfig } from './onpremisesconditionalaccesssettings.entity.config';
import { DeviceCategoryConfig } from './devicecategory.entity.config';
import { DeviceEnrollmentConfigurationConfig } from './deviceenrollmentconfiguration.entity.config';
import { DeviceManagementPartnerConfig } from './devicemanagementpartner.entity.config';
import { DeviceManagementExchangeConnectorConfig } from './devicemanagementexchangeconnector.entity.config';
import { MobileThreatDefenseConnectorConfig } from './mobilethreatdefenseconnector.entity.config';
import { ApplePushNotificationCertificateConfig } from './applepushnotificationcertificate.entity.config';
import { DetectedAppConfig } from './detectedapp.entity.config';
import { ManagedDeviceOverviewConfig } from './manageddeviceoverview.entity.config';
import { NotificationMessageTemplateConfig } from './notificationmessagetemplate.entity.config';
import { ResourceOperationConfig } from './resourceoperation.entity.config';
import { RoleAssignmentConfig } from './roleassignment.entity.config';
import { DeviceAndAppManagementRoleAssignmentConfig } from './deviceandappmanagementroleassignment.entity.config';
import { RoleDefinitionConfig } from './roledefinition.entity.config';
import { RemoteAssistancePartnerConfig } from './remoteassistancepartner.entity.config';
import { TelecomExpenseManagementPartnerConfig } from './telecomexpensemanagementpartner.entity.config';
import { WindowsInformationProtectionAppLearningSummaryConfig } from './windowsinformationprotectionapplearningsummary.entity.config';
import { WindowsInformationProtectionNetworkLearningSummaryConfig } from './windowsinformationprotectionnetworklearningsummary.entity.config';
import { TermsAndConditionsAcceptanceStatusConfig } from './termsandconditionsacceptancestatus.entity.config';
import { TermsAndConditionsAssignmentConfig } from './termsandconditionsassignment.entity.config';
import { AndroidCompliancePolicyConfig } from './androidcompliancepolicy.entity.config';
import { AndroidCustomConfigurationConfig } from './androidcustomconfiguration.entity.config';
import { AndroidGeneralDeviceConfigurationConfig } from './androidgeneraldeviceconfiguration.entity.config';
import { AndroidWorkProfileCompliancePolicyConfig } from './androidworkprofilecompliancepolicy.entity.config';
import { AndroidWorkProfileCustomConfigurationConfig } from './androidworkprofilecustomconfiguration.entity.config';
import { AndroidWorkProfileGeneralDeviceConfigurationConfig } from './androidworkprofilegeneraldeviceconfiguration.entity.config';
import { AppleDeviceFeaturesConfigurationBaseConfig } from './appledevicefeaturesconfigurationbase.entity.config';
import { DeviceComplianceActionItemConfig } from './devicecomplianceactionitem.entity.config';
import { DeviceComplianceDeviceOverviewConfig } from './devicecompliancedeviceoverview.entity.config';
import { DeviceComplianceDeviceStatusConfig } from './devicecompliancedevicestatus.entity.config';
import { DeviceCompliancePolicyAssignmentConfig } from './devicecompliancepolicyassignment.entity.config';
import { SettingStateDeviceSummaryConfig } from './settingstatedevicesummary.entity.config';
import { DeviceComplianceScheduledActionForRuleConfig } from './devicecompliancescheduledactionforrule.entity.config';
import { DeviceComplianceUserStatusConfig } from './devicecomplianceuserstatus.entity.config';
import { DeviceComplianceUserOverviewConfig } from './devicecomplianceuseroverview.entity.config';
import { DeviceComplianceSettingStateConfig } from './devicecompliancesettingstate.entity.config';
import { DeviceCompliancePolicyStateConfig } from './devicecompliancepolicystate.entity.config';
import { DeviceConfigurationAssignmentConfig } from './deviceconfigurationassignment.entity.config';
import { DeviceConfigurationDeviceStatusConfig } from './deviceconfigurationdevicestatus.entity.config';
import { DeviceConfigurationDeviceOverviewConfig } from './deviceconfigurationdeviceoverview.entity.config';
import { DeviceConfigurationUserStatusConfig } from './deviceconfigurationuserstatus.entity.config';
import { DeviceConfigurationUserOverviewConfig } from './deviceconfigurationuseroverview.entity.config';
import { DeviceConfigurationStateConfig } from './deviceconfigurationstate.entity.config';
import { EditionUpgradeConfigurationConfig } from './editionupgradeconfiguration.entity.config';
import { IosCertificateProfileConfig } from './ioscertificateprofile.entity.config';
import { IosCompliancePolicyConfig } from './ioscompliancepolicy.entity.config';
import { IosCustomConfigurationConfig } from './ioscustomconfiguration.entity.config';
import { IosDeviceFeaturesConfigurationConfig } from './iosdevicefeaturesconfiguration.entity.config';
import { IosGeneralDeviceConfigurationConfig } from './iosgeneraldeviceconfiguration.entity.config';
import { IosUpdateConfigurationConfig } from './iosupdateconfiguration.entity.config';
import { MacOSCompliancePolicyConfig } from './macoscompliancepolicy.entity.config';
import { MacOSCustomConfigurationConfig } from './macoscustomconfiguration.entity.config';
import { MacOSDeviceFeaturesConfigurationConfig } from './macosdevicefeaturesconfiguration.entity.config';
import { MacOSGeneralDeviceConfigurationConfig } from './macosgeneraldeviceconfiguration.entity.config';
import { ReportRootConfig } from './reportroot.entity.config';
import { SharedPCConfigurationConfig } from './sharedpcconfiguration.entity.config';
import { Windows10CompliancePolicyConfig } from './windows10compliancepolicy.entity.config';
import { Windows10CustomConfigurationConfig } from './windows10customconfiguration.entity.config';
import { Windows10EndpointProtectionConfigurationConfig } from './windows10endpointprotectionconfiguration.entity.config';
import { Windows10EnterpriseModernAppManagementConfigurationConfig } from './windows10enterprisemodernappmanagementconfiguration.entity.config';
import { Windows10GeneralConfigurationConfig } from './windows10generalconfiguration.entity.config';
import { Windows10MobileCompliancePolicyConfig } from './windows10mobilecompliancepolicy.entity.config';
import { Windows10SecureAssessmentConfigurationConfig } from './windows10secureassessmentconfiguration.entity.config';
import { Windows10TeamGeneralConfigurationConfig } from './windows10teamgeneralconfiguration.entity.config';
import { Windows81CompliancePolicyConfig } from './windows81compliancepolicy.entity.config';
import { Windows81GeneralConfigurationConfig } from './windows81generalconfiguration.entity.config';
import { WindowsDefenderAdvancedThreatProtectionConfigurationConfig } from './windowsdefenderadvancedthreatprotectionconfiguration.entity.config';
import { WindowsPhone81CompliancePolicyConfig } from './windowsphone81compliancepolicy.entity.config';
import { WindowsPhone81CustomConfigurationConfig } from './windowsphone81customconfiguration.entity.config';
import { WindowsPhone81GeneralConfigurationConfig } from './windowsphone81generalconfiguration.entity.config';
import { WindowsUpdateForBusinessConfigurationConfig } from './windowsupdateforbusinessconfiguration.entity.config';
import { EnrollmentConfigurationAssignmentConfig } from './enrollmentconfigurationassignment.entity.config';
import { DeviceEnrollmentLimitConfigurationConfig } from './deviceenrollmentlimitconfiguration.entity.config';
import { DeviceEnrollmentPlatformRestrictionsConfigurationConfig } from './deviceenrollmentplatformrestrictionsconfiguration.entity.config';
import { DeviceEnrollmentWindowsHelloForBusinessConfigurationConfig } from './deviceenrollmentwindowshelloforbusinessconfiguration.entity.config';
import { ManagedMobileAppConfig } from './managedmobileapp.entity.config';
import { ManagedAppPolicyDeploymentSummaryConfig } from './managedapppolicydeploymentsummary.entity.config';
import { AndroidManagedAppRegistrationConfig } from './androidmanagedappregistration.entity.config';
import { IosManagedAppRegistrationConfig } from './iosmanagedappregistration.entity.config';
import { ManagedAppOperationConfig } from './managedappoperation.entity.config';
import { ManagedAppStatusRawConfig } from './managedappstatusraw.entity.config';
import { TargetedManagedAppPolicyAssignmentConfig } from './targetedmanagedapppolicyassignment.entity.config';
import { WindowsInformationProtectionAppLockerFileConfig } from './windowsinformationprotectionapplockerfile.entity.config';
import { LocalizedNotificationMessageConfig } from './localizednotificationmessage.entity.config';
import { DeviceAndAppManagementRoleDefinitionConfig } from './deviceandappmanagementroledefinition.entity.config';
import { EnrollmentTroubleshootingEventConfig } from './enrollmenttroubleshootingevent.entity.config';
import { SearchEntityConfig } from './searchentity.entity.config';
import { PlannerConfig } from './planner.entity.config';
import { PlannerBucketConfig } from './plannerbucket.entity.config';
import { PlannerPlanConfig } from './plannerplan.entity.config';
import { PlannerTaskConfig } from './plannertask.entity.config';
import { PlannerAssignedToTaskBoardTaskFormatConfig } from './plannerassignedtotaskboardtaskformat.entity.config';
import { PlannerBucketTaskBoardTaskFormatConfig } from './plannerbuckettaskboardtaskformat.entity.config';
import { PlannerPlanDetailsConfig } from './plannerplandetails.entity.config';
import { PlannerProgressTaskBoardTaskFormatConfig } from './plannerprogresstaskboardtaskformat.entity.config';
import { PlannerTaskDetailsConfig } from './plannertaskdetails.entity.config';
import { SharedInsightConfig } from './sharedinsight.entity.config';
import { TrendingConfig } from './trending.entity.config';
import { UsedInsightConfig } from './usedinsight.entity.config';
import { ChangeTrackedEntityConfig } from './changetrackedentity.entity.config';
import { ShiftPreferencesConfig } from './shiftpreferences.entity.config';
import { OnenoteEntityBaseModelConfig } from './onenoteentitybasemodel.entity.config';
import { OnenoteEntitySchemaObjectModelConfig } from './onenoteentityschemaobjectmodel.entity.config';
import { OnenoteEntityHierarchyModelConfig } from './onenoteentityhierarchymodel.entity.config';
import { NotebookConfig } from './notebook.entity.config';
import { SectionGroupConfig } from './sectiongroup.entity.config';
import { OnenoteSectionConfig } from './onenotesection.entity.config';
import { OperationConfig } from './operation.entity.config';
import { OnenoteOperationConfig } from './onenoteoperation.entity.config';
import { OnenotePageConfig } from './onenotepage.entity.config';
import { OnenoteResourceConfig } from './onenoteresource.entity.config';
import { ActivityHistoryItemConfig } from './activityhistoryitem.entity.config';
import { DataPolicyOperationConfig } from './datapolicyoperation.entity.config';
import { AlertConfig } from './alert.entity.config';
import { SecureScoreConfig } from './securescore.entity.config';
import { SecureScoreControlProfileConfig } from './securescorecontrolprofile.entity.config';
import { SecurityConfig } from './security.entity.config';
import { CommsOperationConfig } from './commsoperation.entity.config';
import { ParticipantConfig } from './participant.entity.config';
import { CancelMediaProcessingOperationConfig } from './cancelmediaprocessingoperation.entity.config';
import { InviteParticipantsOperationConfig } from './inviteparticipantsoperation.entity.config';
import { MuteParticipantOperationConfig } from './muteparticipantoperation.entity.config';
import { PlayPromptOperationConfig } from './playpromptoperation.entity.config';
import { RecordOperationConfig } from './recordoperation.entity.config';
import { SubscribeToToneOperationConfig } from './subscribetotoneoperation.entity.config';
import { UnmuteParticipantOperationConfig } from './unmuteparticipantoperation.entity.config';
import { UpdateRecordingStatusOperationConfig } from './updaterecordingstatusoperation.entity.config';
import { ConversationMemberConfig } from './conversationmember.entity.config';
import { AadUserConversationMemberConfig } from './aaduserconversationmember.entity.config';
import { AppCatalogsConfig } from './appcatalogs.entity.config';
import { TeamsAppConfig } from './teamsapp.entity.config';
import { ChannelConfig } from './channel.entity.config';
import { ChatMessageConfig } from './chatmessage.entity.config';
import { TeamsTabConfig } from './teamstab.entity.config';
import { ChatConfig } from './chat.entity.config';
import { ChatMessageHostedContentConfig } from './chatmessagehostedcontent.entity.config';
import { ScheduleConfig } from './schedule.entity.config';
import { TeamsAppInstallationConfig } from './teamsappinstallation.entity.config';
import { TeamsAsyncOperationConfig } from './teamsasyncoperation.entity.config';
import { TeamsTemplateConfig } from './teamstemplate.entity.config';
import { TeamsAppDefinitionConfig } from './teamsappdefinition.entity.config';
import { TeamworkConfig } from './teamwork.entity.config';
import { WorkforceIntegrationConfig } from './workforceintegration.entity.config';
import { UserScopeTeamsAppInstallationConfig } from './userscopeteamsappinstallation.entity.config';
import { ScheduleChangeRequestConfig } from './schedulechangerequest.entity.config';
import { OfferShiftRequestConfig } from './offershiftrequest.entity.config';
import { OpenShiftConfig } from './openshift.entity.config';
import { OpenShiftChangeRequestConfig } from './openshiftchangerequest.entity.config';
import { SchedulingGroupConfig } from './schedulinggroup.entity.config';
import { ShiftConfig } from './shift.entity.config';
import { SwapShiftsChangeRequestConfig } from './swapshiftschangerequest.entity.config';
import { TimeOffReasonConfig } from './timeoffreason.entity.config';
import { TimeOffRequestConfig } from './timeoffrequest.entity.config';
import { TimeOffConfig } from './timeoff.entity.config';
import { ThreatAssessmentRequestConfig } from './threatassessmentrequest.entity.config';
import { EmailFileAssessmentRequestConfig } from './emailfileassessmentrequest.entity.config';
import { FileAssessmentRequestConfig } from './fileassessmentrequest.entity.config';
import { InformationProtectionConfig } from './informationprotection.entity.config';
import { MailAssessmentRequestConfig } from './mailassessmentrequest.entity.config';
import { ThreatAssessmentResultConfig } from './threatassessmentresult.entity.config';
import { UrlAssessmentRequestConfig } from './urlassessmentrequest.entity.config';
import { LinkedResourceConfig } from './linkedresource.entity.config';
import { TodoTaskListConfig } from './todotasklist.entity.config';
import { TodoTaskConfig } from './todotask.entity.config';
import { GraphServiceContainer } from './graphservice.container';
//#endregion

export const GraphSchema = {
  namespace: "microsoft.graph",
  alias: "graph",
  enums: [AppliedConditionalAccessPolicyResultConfig,
    ConditionalAccessStatusConfig,
    GroupTypeConfig,
    OperationResultConfig,
    RiskDetailConfig,
    RiskEventTypeConfig,
    RiskLevelConfig,
    RiskStateConfig,
    PermissionClassificationTypeConfig,
    PermissionTypeConfig,
    PhoneTypeConfig,
    EducationExternalSourceConfig,
    EducationGenderConfig,
    EducationUserRoleConfig,
    WorkbookOperationStatusConfig,
    ActivityDomainConfig,
    AttendeeTypeConfig,
    FreeBusyStatusConfig,
    LocationTypeConfig,
    LocationUniqueIdTypeConfig,
    PhysicalAddressTypeConfig,
    BookingTypeConfig,
    AttachmentTypeConfig,
    AutomaticRepliesStatusConfig,
    BodyTypeConfig,
    CalendarColorConfig,
    CalendarRoleTypeConfig,
    CalendarSharingActionConfig,
    CalendarSharingActionImportanceConfig,
    CalendarSharingActionTypeConfig,
    CategoryColorConfig,
    DayOfWeekConfig,
    DelegateMeetingMessageDeliveryOptionsConfig,
    EventTypeConfig,
    ExchangeIdFormatConfig,
    ExternalAudienceScopeConfig,
    FollowupFlagStatusConfig,
    ImportanceConfig,
    InferenceClassificationTypeConfig,
    MailTipsTypeConfig,
    MeetingMessageTypeConfig,
    MeetingRequestTypeConfig,
    MessageActionFlagConfig,
    OnlineMeetingProviderTypeConfig,
    RecipientScopeTypeConfig,
    RecurrencePatternTypeConfig,
    RecurrenceRangeTypeConfig,
    ResponseTypeConfig,
    SelectionLikelihoodInfoConfig,
    SensitivityConfig,
    TimeZoneStandardConfig,
    WebsiteTypeConfig,
    WeekIndexConfig,
    CloudAppSecuritySessionControlTypeConfig,
    ConditionalAccessClientAppConfig,
    ConditionalAccessDevicePlatformConfig,
    ConditionalAccessGrantControlConfig,
    ConditionalAccessPolicyStateConfig,
    PersistentBrowserSessionModeConfig,
    SigninFrequencyTypeConfig,
    ComplianceStatusConfig,
    InstallIntentConfig,
    ManagedAppAvailabilityConfig,
    MdmAppConfigKeyTypeConfig,
    MicrosoftStoreForBusinessLicenseTypeConfig,
    MobileAppContentFileUploadStateConfig,
    MobileAppPublishingStateConfig,
    RunAsAccountTypeConfig,
    VppTokenAccountTypeConfig,
    Win32LobAppFileSystemOperationTypeConfig,
    Win32LobAppMsiPackageTypeConfig,
    Win32LobAppNotificationConfig,
    Win32LobAppPowerShellScriptRuleOperationTypeConfig,
    Win32LobAppRegistryRuleOperationTypeConfig,
    Win32LobAppRestartBehaviorConfig,
    Win32LobAppReturnCodeTypeConfig,
    Win32LobAppRuleOperatorConfig,
    Win32LobAppRuleTypeConfig,
    WindowsArchitectureConfig,
    WindowsDeviceTypeConfig,
    InstallStateConfig,
    AndroidRequiredPasswordTypeConfig,
    AndroidWorkProfileCrossProfileDataSharingTypeConfig,
    AndroidWorkProfileDefaultAppPermissionPolicyTypeConfig,
    AndroidWorkProfileRequiredPasswordTypeConfig,
    ApplicationGuardBlockClipboardSharingTypeConfig,
    ApplicationGuardBlockFileTransferTypeConfig,
    AppListTypeConfig,
    AppLockerApplicationControlTypeConfig,
    AutomaticUpdateModeConfig,
    BitLockerEncryptionMethodConfig,
    DefenderCloudBlockLevelTypeConfig,
    DefenderMonitorFileActivityConfig,
    DefenderPromptForSampleSubmissionConfig,
    DefenderScanTypeConfig,
    DefenderThreatActionConfig,
    DeviceComplianceActionTypeConfig,
    DeviceThreatProtectionLevelConfig,
    DiagnosticDataSubmissionModeConfig,
    EdgeCookiePolicyConfig,
    EdgeSearchEngineTypeConfig,
    EditionUpgradeLicenseTypeConfig,
    FirewallCertificateRevocationListCheckMethodTypeConfig,
    FirewallPacketQueueingMethodTypeConfig,
    FirewallPreSharedKeyEncodingMethodTypeConfig,
    InternetSiteSecurityLevelConfig,
    IosNotificationAlertTypeConfig,
    IosUpdatesInstallStatusConfig,
    MiracastChannelConfig,
    PolicyPlatformTypeConfig,
    PrereleaseFeaturesConfig,
    RatingAppsTypeConfig,
    RatingAustraliaMoviesTypeConfig,
    RatingAustraliaTelevisionTypeConfig,
    RatingCanadaMoviesTypeConfig,
    RatingCanadaTelevisionTypeConfig,
    RatingFranceMoviesTypeConfig,
    RatingFranceTelevisionTypeConfig,
    RatingGermanyMoviesTypeConfig,
    RatingGermanyTelevisionTypeConfig,
    RatingIrelandMoviesTypeConfig,
    RatingIrelandTelevisionTypeConfig,
    RatingJapanMoviesTypeConfig,
    RatingJapanTelevisionTypeConfig,
    RatingNewZealandMoviesTypeConfig,
    RatingNewZealandTelevisionTypeConfig,
    RatingUnitedKingdomMoviesTypeConfig,
    RatingUnitedKingdomTelevisionTypeConfig,
    RatingUnitedStatesMoviesTypeConfig,
    RatingUnitedStatesTelevisionTypeConfig,
    RequiredPasswordTypeConfig,
    SafeSearchFilterTypeConfig,
    SharedPCAccountDeletionPolicyTypeConfig,
    SharedPCAllowedAccountTypeConfig,
    SiteSecurityLevelConfig,
    StateManagementSettingConfig,
    VisibilitySettingConfig,
    WebBrowserCookieSettingsConfig,
    WeeklyScheduleConfig,
    WelcomeScreenMeetingInformationConfig,
    Windows10EditionTypeConfig,
    WindowsDeliveryOptimizationModeConfig,
    WindowsSpotlightEnablementSettingsConfig,
    WindowsStartMenuAppListVisibilityTypeConfig,
    WindowsStartMenuModeTypeConfig,
    WindowsUpdateTypeConfig,
    WindowsUserAccountControlSettingsConfig,
    DeviceManagementExchangeConnectorStatusConfig,
    DeviceManagementExchangeConnectorSyncTypeConfig,
    DeviceManagementExchangeConnectorTypeConfig,
    DeviceManagementPartnerAppTypeConfig,
    DeviceManagementPartnerTenantStateConfig,
    EnablementConfig,
    MdmAuthorityConfig,
    MobileThreatPartnerTenantStateConfig,
    VppTokenStateConfig,
    VppTokenSyncStatusConfig,
    WindowsHelloForBusinessPinUsageConfig,
    ActionStateConfig,
    ComplianceStateConfig,
    DeviceEnrollmentTypeConfig,
    DeviceManagementExchangeAccessStateConfig,
    DeviceManagementExchangeAccessStateReasonConfig,
    DeviceManagementSubscriptionStateConfig,
    DeviceRegistrationStateConfig,
    ManagedDeviceOwnerTypeConfig,
    ManagedDevicePartnerReportedHealthStateConfig,
    ManagementAgentTypeConfig,
    ManagedAppClipboardSharingLevelConfig,
    ManagedAppDataEncryptionTypeConfig,
    ManagedAppDataStorageLocationConfig,
    ManagedAppDataTransferLevelConfig,
    ManagedAppFlaggedReasonConfig,
    ManagedAppPinCharacterSetConfig,
    ManagedBrowserTypeConfig,
    WindowsInformationProtectionEnforcementLevelConfig,
    WindowsInformationProtectionPinCharacterRequirementsConfig,
    NotificationTemplateBrandingOptionsConfig,
    RemoteAssistanceOnboardingStatusConfig,
    DeviceEnrollmentFailureReasonConfig,
    ApplicationTypeConfig,
    EntityTypeConfig,
    PlannerPreviewTypeConfig,
    OnenotePatchActionTypeConfig,
    OnenotePatchInsertPositionConfig,
    OnenoteSourceServiceConfig,
    OnenoteUserRoleConfig,
    OperationStatusConfig,
    StatusConfig,
    DataPolicyOperationStatusConfig,
    AlertFeedbackConfig,
    AlertSeverityConfig,
    AlertStatusConfig,
    ConnectionDirectionConfig,
    ConnectionStatusConfig,
    EmailRoleConfig,
    FileHashTypeConfig,
    LogonTypeConfig,
    ProcessIntegrityLevelConfig,
    RegistryHiveConfig,
    RegistryOperationConfig,
    RegistryValueTypeConfig,
    SecurityNetworkProtocolConfig,
    SecurityResourceTypeConfig,
    UserAccountSecurityTypeConfig,
    CallDirectionConfig,
    CallStateConfig,
    CallTranscriptionStateConfig,
    ChangeTypeConfig,
    EndpointTypeConfig,
    LobbyBypassScopeConfig,
    MediaDirectionConfig,
    MediaStateConfig,
    ModalityConfig,
    OnlineMeetingPresentersConfig,
    OnlineMeetingRoleConfig,
    RecordingStatusConfig,
    RejectReasonConfig,
    RoutingTypeConfig,
    ScreenSharingRoleConfig,
    ToneConfig,
    LifecycleEventTypeConfig,
    ChannelMembershipTypeConfig,
    ChatMessageImportanceConfig,
    ChatMessagePolicyViolationDlpActionTypesConfig,
    ChatMessagePolicyViolationUserActionTypesConfig,
    ChatMessagePolicyViolationVerdictDetailsTypesConfig,
    ChatMessageTypeConfig,
    ClonableTeamPartsConfig,
    GiphyRatingTypeConfig,
    TeamsAppDistributionMethodConfig,
    TeamsAsyncOperationStatusConfig,
    TeamsAsyncOperationTypeConfig,
    TeamSpecializationConfig,
    TeamVisibilityTypeConfig,
    ScheduleChangeRequestActorConfig,
    ScheduleChangeStateConfig,
    ScheduleEntityThemeConfig,
    TimeOffReasonIconTypeConfig,
    WorkforceIntegrationEncryptionProtocolConfig,
    WorkforceIntegrationSupportedEntitiesConfig,
    MailDestinationRoutingReasonConfig,
    ThreatAssessmentContentTypeConfig,
    ThreatAssessmentRequestSourceConfig,
    ThreatAssessmentResultTypeConfig,
    ThreatAssessmentStatusConfig,
    ThreatCategoryConfig,
    ThreatExpectedAssessmentConfig,
    TaskStatusConfig,
    WellknownListNameConfig],
  entities: [AppIdentityConfig,
    AppliedConditionalAccessPolicyConfig,
    AuditActivityInitiatorConfig,
    UserIdentityConfig,
    DeviceDetailConfig,
    GeoCoordinatesConfig,
    KeyValueConfig,
    ModifiedPropertyConfig,
    SignInLocationConfig,
    SignInStatusConfig,
    TargetResourceConfig,
    EmailAddressConfig,
    InvitedUserMessageInfoConfig,
    RecipientConfig,
    AssignedLicenseConfig,
    AssignedPlanConfig,
    ObjectIdentityConfig,
    LicenseAssignmentStateConfig,
    OnPremisesExtensionAttributesConfig,
    OnPremisesProvisioningErrorConfig,
    PasswordProfileConfig,
    ProvisionedPlanConfig,
    MailboxSettingsConfig,
    AutomaticRepliesSettingConfig,
    DateTimeTimeZoneConfig,
    LocaleInfoConfig,
    WorkingHoursConfig,
    TimeZoneBaseConfig,
    AddInConfig,
    ApiApplicationConfig,
    PermissionScopeConfig,
    PreAuthorizedApplicationConfig,
    AppRoleConfig,
    InformationalUrlConfig,
    KeyCredentialConfig,
    OptionalClaimsConfig,
    OptionalClaimConfig,
    ParentalControlSettingsConfig,
    PasswordCredentialConfig,
    PublicClientApplicationConfig,
    RequiredResourceAccessConfig,
    ResourceAccessConfig,
    WebApplicationConfig,
    ImplicitGrantSettingsConfig,
    SamlSingleSignOnSettingsConfig,
    AlternativeSecurityIdConfig,
    AssignedLabelConfig,
    CertificateAuthorityConfig,
    ComplexExtensionValueConfig,
    DomainStateConfig,
    IdentityConfig,
    InstanceResourceAccessConfig,
    ResourcePermissionConfig,
    LicenseProcessingStateConfig,
    LicenseUnitsDetailConfig,
    PhoneConfig,
    PhysicalOfficeAddressConfig,
    PrivacyProfileConfig,
    ServicePlanInfoConfig,
    SettingTemplateValueConfig,
    SettingValueConfig,
    VerifiedDomainConfig,
    EducationStudentConfig,
    EducationTeacherConfig,
    EducationTermConfig,
    IdentitySetConfig,
    PhysicalAddressConfig,
    JsonConfig,
    WorkbookFilterCriteriaConfig,
    WorkbookIconConfig,
    WorkbookFilterDatetimeConfig,
    WorkbookOperationErrorConfig,
    WorkbookRangeReferenceConfig,
    WorkbookSessionInfoConfig,
    WorkbookSortFieldConfig,
    WorkbookWorksheetProtectionOptionsConfig,
    QuotaConfig,
    StoragePlanInformationConfig,
    SharepointIdsConfig,
    SystemFacetConfig,
    AudioConfig,
    DeletedConfig,
    FileConfig,
    HashesConfig,
    FileSystemInfoConfig,
    FolderConfig,
    FolderViewConfig,
    ImageConfig,
    PackageConfig,
    PendingOperationsConfig,
    PendingContentUpdateConfig,
    PhotoConfig,
    PublicationFacetConfig,
    RemoteItemConfig,
    ItemReferenceConfig,
    SharedConfig,
    SpecialFolderConfig,
    VideoConfig,
    RootConfig,
    SearchResultConfig,
    ListInfoConfig,
    PublicErrorConfig,
    PublicErrorDetailConfig,
    PublicInnerErrorConfig,
    SiteCollectionConfig,
    AttendeeAvailabilityConfig,
    AttendeeBaseConfig,
    LocationConfig,
    OutlookGeoCoordinatesConfig,
    LocationConstraintConfig,
    LocationConstraintItemConfig,
    MeetingTimeSuggestionConfig,
    TimeSlotConfig,
    MeetingTimeSuggestionsResultConfig,
    TimeConstraintConfig,
    AttachmentItemConfig,
    AttendeeConfig,
    ResponseStatusConfig,
    AutomaticRepliesMailTipsConfig,
    CalendarSharingMessageActionConfig,
    ConvertIdResultConfig,
    GenericErrorConfig,
    CustomTimeZoneConfig,
    StandardTimeZoneOffsetConfig,
    DaylightTimeZoneOffsetConfig,
    FollowupFlagConfig,
    FreeBusyErrorConfig,
    InternetMessageHeaderConfig,
    ItemBodyConfig,
    MailTipsConfig,
    MailTipsErrorConfig,
    MessageRuleActionsConfig,
    MessageRulePredicatesConfig,
    SizeRangeConfig,
    OnlineMeetingInfoConfig,
    PatternedRecurrenceConfig,
    RecurrencePatternConfig,
    RecurrenceRangeConfig,
    PersonTypeConfig,
    ReminderConfig,
    ScheduleInformationConfig,
    ScheduleItemConfig,
    ScoredEmailAddressConfig,
    TimeZoneInformationConfig,
    UploadSessionConfig,
    WebsiteConfig,
    AccessActionConfig,
    BooleanColumnConfig,
    CalculatedColumnConfig,
    ChoiceColumnConfig,
    ContentTypeInfoConfig,
    ContentTypeOrderConfig,
    CurrencyColumnConfig,
    DateTimeColumnConfig,
    DefaultColumnValueConfig,
    DriveItemUploadablePropertiesConfig,
    DriveRecipientConfig,
    GeolocationColumnConfig,
    IncompleteDataConfig,
    ItemActionStatConfig,
    ItemPreviewInfoConfig,
    LookupColumnConfig,
    NumberColumnConfig,
    PersonOrGroupColumnConfig,
    SharingInvitationConfig,
    SharingLinkConfig,
    TextColumnConfig,
    ThumbnailConfig,
    ExtensionSchemaPropertyConfig,
    ConditionalAccessSessionControlConfig,
    ApplicationEnforcedRestrictionsSessionControlConfig,
    CloudAppSecuritySessionControlConfig,
    ConditionalAccessApplicationsConfig,
    ConditionalAccessConditionSetConfig,
    ConditionalAccessLocationsConfig,
    ConditionalAccessPlatformsConfig,
    ConditionalAccessUsersConfig,
    ConditionalAccessGrantControlsConfig,
    ConditionalAccessSessionControlsConfig,
    PersistentBrowserSessionControlConfig,
    SignInFrequencySessionControlConfig,
    IpRangeConfig,
    IPv4CidrRangeConfig,
    IPv6CidrRangeConfig,
    DeviceAndAppManagementAssignmentTargetConfig,
    AllDevicesAssignmentTargetConfig,
    AllLicensedUsersAssignmentTargetConfig,
    AndroidMinimumOperatingSystemConfig,
    AppConfigurationSettingItemConfig,
    GroupAssignmentTargetConfig,
    ExclusionGroupAssignmentTargetConfig,
    FileEncryptionInfoConfig,
    IosDeviceTypeConfig,
    MobileAppAssignmentSettingsConfig,
    IosLobAppAssignmentSettingsConfig,
    IosMinimumOperatingSystemConfig,
    IosStoreAppAssignmentSettingsConfig,
    IosVppAppAssignmentSettingsConfig,
    MicrosoftStoreForBusinessAppAssignmentSettingsConfig,
    MimeContentConfig,
    MobileAppInstallTimeSettingsConfig,
    VppLicensingTypeConfig,
    Win32LobAppAssignmentSettingsConfig,
    Win32LobAppRestartSettingsConfig,
    Win32LobAppRuleConfig,
    Win32LobAppFileSystemRuleConfig,
    Win32LobAppInstallExperienceConfig,
    Win32LobAppMsiInformationConfig,
    Win32LobAppPowerShellScriptRuleConfig,
    Win32LobAppProductCodeRuleConfig,
    Win32LobAppRegistryRuleConfig,
    Win32LobAppReturnCodeConfig,
    WindowsMinimumOperatingSystemConfig,
    DeviceManagementSettingsConfig,
    IntuneBrandConfig,
    RgbColorConfig,
    AppListItemConfig,
    BitLockerRemovableDrivePolicyConfig,
    DefenderDetectedMalwareActionsConfig,
    DeviceCompliancePolicySettingStateConfig,
    SettingSourceConfig,
    DeviceConfigurationSettingStateConfig,
    EdgeSearchEngineBaseConfig,
    EdgeSearchEngineConfig,
    EdgeSearchEngineCustomConfig,
    IosHomeScreenItemConfig,
    IosHomeScreenAppConfig,
    IosHomeScreenFolderConfig,
    IosHomeScreenFolderPageConfig,
    IosHomeScreenPageConfig,
    IosNetworkUsageRuleConfig,
    IosNotificationSettingsConfig,
    MediaContentRatingAustraliaConfig,
    MediaContentRatingCanadaConfig,
    MediaContentRatingFranceConfig,
    MediaContentRatingGermanyConfig,
    MediaContentRatingIrelandConfig,
    MediaContentRatingJapanConfig,
    MediaContentRatingNewZealandConfig,
    MediaContentRatingUnitedKingdomConfig,
    MediaContentRatingUnitedStatesConfig,
    OmaSettingConfig,
    OmaSettingBase64Config,
    OmaSettingBooleanConfig,
    OmaSettingDateTimeConfig,
    OmaSettingFloatingPointConfig,
    OmaSettingIntegerConfig,
    OmaSettingStringConfig,
    OmaSettingStringXmlConfig,
    ReportConfig,
    SharedPCAccountManagerPolicyConfig,
    Windows10NetworkProxyServerConfig,
    WindowsFirewallNetworkProfileConfig,
    WindowsUpdateInstallScheduleTypeConfig,
    WindowsUpdateActiveHoursInstallConfig,
    WindowsUpdateScheduledInstallConfig,
    ConfigurationManagerClientEnabledFeaturesConfig,
    DeviceActionResultConfig,
    DeviceHealthAttestationStateConfig,
    ComplianceManagementPartnerAssignmentConfig,
    DeviceEnrollmentPlatformRestrictionConfig,
    DeleteUserFromSharedAppleDeviceActionResultConfig,
    DeviceExchangeAccessStateSummaryConfig,
    DeviceGeoLocationConfig,
    DeviceOperatingSystemSummaryConfig,
    LocateDeviceActionResultConfig,
    RemoteLockActionResultConfig,
    ResetPasscodeActionResultConfig,
    UpdateWindowsDeviceAccountActionParameterConfig,
    WindowsDeviceAccountConfig,
    WindowsDefenderScanActionResultConfig,
    WindowsDeviceADAccountConfig,
    WindowsDeviceAzureADAccountConfig,
    MobileAppIdentifierConfig,
    AndroidMobileAppIdentifierConfig,
    IosMobileAppIdentifierConfig,
    IPv4RangeConfig,
    IPv6RangeConfig,
    KeyValuePairConfig,
    ManagedAppDiagnosticStatusConfig,
    ManagedAppPolicyDeploymentSummaryPerAppConfig,
    ProxiedDomainConfig,
    WindowsInformationProtectionAppConfig,
    WindowsInformationProtectionDataRecoveryCertificateConfig,
    WindowsInformationProtectionDesktopAppConfig,
    WindowsInformationProtectionIPRangeCollectionConfig,
    WindowsInformationProtectionProxiedDomainCollectionConfig,
    WindowsInformationProtectionResourceCollectionConfig,
    WindowsInformationProtectionStoreAppConfig,
    ResourceActionConfig,
    RolePermissionConfig,
    SearchHitConfig,
    SearchHitsContainerConfig,
    SearchQueryConfig,
    SearchRequestConfig,
    SearchResponseConfig,
    PlannerAppliedCategoriesConfig,
    PlannerAssignmentConfig,
    PlannerAssignmentsConfig,
    PlannerCategoryDescriptionsConfig,
    PlannerChecklistItemConfig,
    PlannerChecklistItemsConfig,
    PlannerExternalReferenceConfig,
    PlannerExternalReferencesConfig,
    PlannerOrderHintsByAssigneeConfig,
    PlannerUserIdsConfig,
    InsightIdentityConfig,
    ResourceReferenceConfig,
    ResourceVisualizationConfig,
    SharingDetailConfig,
    UsageDetailsConfig,
    CopyNotebookModelConfig,
    NotebookLinksConfig,
    ExternalLinkConfig,
    DiagnosticConfig,
    OnenoteOperationErrorConfig,
    OnenotePagePreviewConfig,
    OnenotePagePreviewLinksConfig,
    OnenotePatchContentCommandConfig,
    PageLinksConfig,
    RecentNotebookConfig,
    RecentNotebookLinksConfig,
    SectionLinksConfig,
    ImageInfoConfig,
    VisualInfoConfig,
    AlertHistoryStateConfig,
    AlertTriggerConfig,
    AverageComparativeScoreConfig,
    CertificationControlConfig,
    CloudAppSecurityStateConfig,
    ComplianceInformationConfig,
    ControlScoreConfig,
    FileHashConfig,
    FileSecurityStateConfig,
    HostSecurityStateConfig,
    MalwareStateConfig,
    NetworkConnectionConfig,
    ProcessConfig,
    RegistryKeyStateConfig,
    SecureScoreControlStateUpdateConfig,
    SecurityResourceConfig,
    SecurityVendorInformationConfig,
    UserSecurityStateConfig,
    VulnerabilityStateConfig,
    MediaConfigConfig,
    AppHostedMediaConfigConfig,
    AudioConferencingConfig,
    CallMediaStateConfig,
    CallOptionsConfig,
    CallRouteConfig,
    CallTranscriptionInfoConfig,
    ChatInfoConfig,
    CommsNotificationConfig,
    CommsNotificationsConfig,
    IncomingContextConfig,
    InvitationParticipantInfoConfig,
    LobbyBypassSettingsConfig,
    MediaInfoConfig,
    PromptConfig,
    MediaPromptConfig,
    MediaStreamConfig,
    MeetingInfoConfig,
    MeetingParticipantInfoConfig,
    MeetingParticipantsConfig,
    OrganizerMeetingInfoConfig,
    OutgoingCallOptionsConfig,
    ParticipantInfoConfig,
    RecordingInfoConfig,
    ResultInfoConfig,
    ServiceHostedMediaConfigConfig,
    TeleconferenceDeviceMediaQualityConfig,
    TeleconferenceDeviceAudioQualityConfig,
    TeleconferenceDeviceQualityConfig,
    TeleconferenceDeviceVideoQualityConfig,
    TeleconferenceDeviceScreenSharingQualityConfig,
    TokenMeetingInfoConfig,
    ToneInfoConfig,
    ChangeNotificationConfig,
    ChangeNotificationEncryptedContentConfig,
    ResourceDataConfig,
    ChangeNotificationCollectionConfig,
    ChatMessageAttachmentConfig,
    ChatMessageMentionConfig,
    ChatMessagePolicyViolationConfig,
    ChatMessagePolicyViolationPolicyTipConfig,
    ChatMessageReactionConfig,
    OperationErrorConfig,
    TeamClassSettingsConfig,
    TeamFunSettingsConfig,
    TeamGuestSettingsConfig,
    TeamMemberSettingsConfig,
    TeamMessagingSettingsConfig,
    TeamsTabConfigurationConfig,
    ScheduleEntityConfig,
    ShiftItemConfig,
    ShiftActivityConfig,
    OpenShiftItemConfig,
    ShiftAvailabilityConfig,
    TimeRangeConfig,
    TimeOffItemConfig,
    WorkforceIntegrationEncryptionConfig,
    EntityConfig,
    AuditLogRootConfig,
    DirectoryAuditConfig,
    SignInConfig,
    RestrictedSignInConfig,
    InvitationConfig,
    DirectoryObjectConfig,
    UserConfig,
    AppRoleAssignmentConfig,
    LicenseDetailsConfig,
    OAuth2PermissionGrantConfig,
    ScopedRoleMembershipConfig,
    CalendarConfig,
    CalendarGroupConfig,
    OutlookItemConfig,
    EventConfig,
    ContactFolderConfig,
    ContactConfig,
    InferenceClassificationConfig,
    MailFolderConfig,
    MessageConfig,
    OutlookUserConfig,
    PersonConfig,
    ProfilePhotoConfig,
    BaseItemConfig,
    DriveConfig,
    SiteConfig,
    ExtensionConfig,
    ManagedDeviceConfig,
    ManagedAppRegistrationConfig,
    DeviceManagementTroubleshootingEventConfig,
    PlannerUserConfig,
    OfficeGraphInsightsConfig,
    UserSettingsConfig,
    OnenoteConfig,
    UserActivityConfig,
    OnlineMeetingConfig,
    TeamConfig,
    UserTeamworkConfig,
    TodoConfig,
    ApplicationConfig,
    ExtensionPropertyConfig,
    PolicyBaseConfig,
    StsPolicyConfig,
    HomeRealmDiscoveryPolicyConfig,
    TokenIssuancePolicyConfig,
    TokenLifetimePolicyConfig,
    ServicePrincipalConfig,
    ClaimsMappingPolicyConfig,
    DelegatedPermissionClassificationConfig,
    EndpointConfig,
    IdentityContainerConfig,
    ConditionalAccessRootConfig,
    IdentityProviderConfig,
    ActivityBasedTimeoutPolicyConfig,
    AdministrativeUnitConfig,
    CertificateBasedAuthConfigurationConfig,
    ContractConfig,
    DeviceConfig,
    DirectoryConfig,
    DirectoryObjectPartnerReferenceConfig,
    DirectoryRoleConfig,
    DirectoryRoleTemplateConfig,
    DomainConfig,
    DomainDnsRecordConfig,
    DomainDnsCnameRecordConfig,
    DomainDnsMxRecordConfig,
    DomainDnsSrvRecordConfig,
    DomainDnsTxtRecordConfig,
    DomainDnsUnavailableRecordConfig,
    GroupConfig,
    ResourceSpecificPermissionGrantConfig,
    GroupSettingConfig,
    ConversationConfig,
    ConversationThreadConfig,
    GroupLifecyclePolicyConfig,
    PlannerGroupConfig,
    GroupSettingTemplateConfig,
    OrganizationConfig,
    OrgContactConfig,
    PermissionGrantConditionSetConfig,
    PermissionGrantPolicyConfig,
    PolicyRootConfig,
    ConditionalAccessPolicyConfig,
    IdentitySecurityDefaultsEnforcementPolicyConfig,
    SubscribedSkuConfig,
    EducationClassConfig,
    EducationUserConfig,
    EducationOrganizationConfig,
    EducationSchoolConfig,
    EducationRootConfig,
    DriveItemConfig,
    ListConfig,
    WorkbookConfig,
    ItemAnalyticsConfig,
    ListItemConfig,
    PermissionConfig,
    SubscriptionConfig,
    ThumbnailSetConfig,
    BaseItemVersionConfig,
    DriveItemVersionConfig,
    ColumnDefinitionConfig,
    ContentTypeConfig,
    WorkbookApplicationConfig,
    WorkbookCommentConfig,
    WorkbookFunctionsConfig,
    WorkbookNamedItemConfig,
    WorkbookOperationConfig,
    WorkbookTableConfig,
    WorkbookWorksheetConfig,
    WorkbookChartConfig,
    WorkbookChartAxesConfig,
    WorkbookChartDataLabelsConfig,
    WorkbookChartAreaFormatConfig,
    WorkbookChartLegendConfig,
    WorkbookChartSeriesConfig,
    WorkbookChartTitleConfig,
    WorkbookChartFillConfig,
    WorkbookChartFontConfig,
    WorkbookChartAxisConfig,
    WorkbookChartAxisFormatConfig,
    WorkbookChartGridlinesConfig,
    WorkbookChartAxisTitleConfig,
    WorkbookChartLineFormatConfig,
    WorkbookChartAxisTitleFormatConfig,
    WorkbookChartDataLabelFormatConfig,
    WorkbookChartGridlinesFormatConfig,
    WorkbookChartLegendFormatConfig,
    WorkbookChartPointConfig,
    WorkbookChartPointFormatConfig,
    WorkbookChartSeriesFormatConfig,
    WorkbookChartTitleFormatConfig,
    WorkbookCommentReplyConfig,
    WorkbookFilterConfig,
    WorkbookFormatProtectionConfig,
    WorkbookFunctionResultConfig,
    WorkbookPivotTableConfig,
    WorkbookRangeConfig,
    WorkbookRangeFormatConfig,
    WorkbookRangeSortConfig,
    WorkbookRangeBorderConfig,
    WorkbookRangeFillConfig,
    WorkbookRangeFontConfig,
    WorkbookRangeViewConfig,
    WorkbookTableColumnConfig,
    WorkbookTableRowConfig,
    WorkbookTableSortConfig,
    WorkbookWorksheetProtectionConfig,
    PlaceConfig,
    RoomConfig,
    RoomListConfig,
    AttachmentConfig,
    CalendarPermissionConfig,
    MultiValueLegacyExtendedPropertyConfig,
    SingleValueLegacyExtendedPropertyConfig,
    CalendarSharingMessageConfig,
    PostConfig,
    EventMessageConfig,
    EventMessageRequestConfig,
    EventMessageResponseConfig,
    FileAttachmentConfig,
    InferenceClassificationOverrideConfig,
    ItemAttachmentConfig,
    MessageRuleConfig,
    MailSearchFolderConfig,
    OpenTypeExtensionConfig,
    OutlookCategoryConfig,
    ReferenceAttachmentConfig,
    ColumnLinkConfig,
    FieldValueSetConfig,
    ItemActivityConfig,
    ItemActivityStatConfig,
    ListItemVersionConfig,
    SharedDriveItemConfig,
    SchemaExtensionConfig,
    CloudCommunicationsConfig,
    CallConfig,
    NamedLocationConfig,
    CountryNamedLocationConfig,
    IpNamedLocationConfig,
    MobileAppConfig,
    MobileLobAppConfig,
    AndroidLobAppConfig,
    AndroidStoreAppConfig,
    DeviceAppManagementConfig,
    ManagedEBookConfig,
    MobileAppCategoryConfig,
    ManagedDeviceMobileAppConfigurationConfig,
    VppTokenConfig,
    ManagedAppPolicyConfig,
    ManagedAppProtectionConfig,
    TargetedManagedAppProtectionConfig,
    AndroidManagedAppProtectionConfig,
    DefaultManagedAppProtectionConfig,
    IosManagedAppProtectionConfig,
    ManagedAppStatusConfig,
    WindowsInformationProtectionConfig,
    MdmWindowsInformationProtectionPolicyConfig,
    ManagedAppConfigurationConfig,
    TargetedManagedAppConfigurationConfig,
    WindowsInformationProtectionPolicyConfig,
    IosLobAppConfig,
    IosMobileAppConfigurationConfig,
    IosStoreAppConfig,
    IosVppAppConfig,
    MacOSOfficeSuiteAppConfig,
    ManagedAppConfig,
    ManagedMobileLobAppConfig,
    ManagedAndroidLobAppConfig,
    ManagedAndroidStoreAppConfig,
    ManagedDeviceMobileAppConfigurationAssignmentConfig,
    ManagedDeviceMobileAppConfigurationDeviceStatusConfig,
    ManagedDeviceMobileAppConfigurationDeviceSummaryConfig,
    ManagedDeviceMobileAppConfigurationUserStatusConfig,
    ManagedDeviceMobileAppConfigurationUserSummaryConfig,
    ManagedIOSLobAppConfig,
    ManagedIOSStoreAppConfig,
    MobileAppContentConfig,
    MicrosoftStoreForBusinessAppConfig,
    MobileAppAssignmentConfig,
    MobileAppContentFileConfig,
    WebAppConfig,
    Win32LobAppConfig,
    WindowsMobileMSIConfig,
    WindowsUniversalAppXConfig,
    DeviceInstallStateConfig,
    EBookInstallSummaryConfig,
    IosVppEBookConfig,
    ManagedEBookAssignmentConfig,
    IosVppEBookAssignmentConfig,
    UserInstallStateSummaryConfig,
    DeviceManagementConfig,
    TermsAndConditionsConfig,
    DeviceCompliancePolicyConfig,
    DeviceCompliancePolicyDeviceStateSummaryConfig,
    DeviceCompliancePolicySettingStateSummaryConfig,
    DeviceConfigurationDeviceStateSummaryConfig,
    DeviceConfigurationConfig,
    IosUpdateDeviceStatusConfig,
    SoftwareUpdateStatusSummaryConfig,
    ComplianceManagementPartnerConfig,
    OnPremisesConditionalAccessSettingsConfig,
    DeviceCategoryConfig,
    DeviceEnrollmentConfigurationConfig,
    DeviceManagementPartnerConfig,
    DeviceManagementExchangeConnectorConfig,
    MobileThreatDefenseConnectorConfig,
    ApplePushNotificationCertificateConfig,
    DetectedAppConfig,
    ManagedDeviceOverviewConfig,
    NotificationMessageTemplateConfig,
    ResourceOperationConfig,
    RoleAssignmentConfig,
    DeviceAndAppManagementRoleAssignmentConfig,
    RoleDefinitionConfig,
    RemoteAssistancePartnerConfig,
    TelecomExpenseManagementPartnerConfig,
    WindowsInformationProtectionAppLearningSummaryConfig,
    WindowsInformationProtectionNetworkLearningSummaryConfig,
    TermsAndConditionsAcceptanceStatusConfig,
    TermsAndConditionsAssignmentConfig,
    AndroidCompliancePolicyConfig,
    AndroidCustomConfigurationConfig,
    AndroidGeneralDeviceConfigurationConfig,
    AndroidWorkProfileCompliancePolicyConfig,
    AndroidWorkProfileCustomConfigurationConfig,
    AndroidWorkProfileGeneralDeviceConfigurationConfig,
    AppleDeviceFeaturesConfigurationBaseConfig,
    DeviceComplianceActionItemConfig,
    DeviceComplianceDeviceOverviewConfig,
    DeviceComplianceDeviceStatusConfig,
    DeviceCompliancePolicyAssignmentConfig,
    SettingStateDeviceSummaryConfig,
    DeviceComplianceScheduledActionForRuleConfig,
    DeviceComplianceUserStatusConfig,
    DeviceComplianceUserOverviewConfig,
    DeviceComplianceSettingStateConfig,
    DeviceCompliancePolicyStateConfig,
    DeviceConfigurationAssignmentConfig,
    DeviceConfigurationDeviceStatusConfig,
    DeviceConfigurationDeviceOverviewConfig,
    DeviceConfigurationUserStatusConfig,
    DeviceConfigurationUserOverviewConfig,
    DeviceConfigurationStateConfig,
    EditionUpgradeConfigurationConfig,
    IosCertificateProfileConfig,
    IosCompliancePolicyConfig,
    IosCustomConfigurationConfig,
    IosDeviceFeaturesConfigurationConfig,
    IosGeneralDeviceConfigurationConfig,
    IosUpdateConfigurationConfig,
    MacOSCompliancePolicyConfig,
    MacOSCustomConfigurationConfig,
    MacOSDeviceFeaturesConfigurationConfig,
    MacOSGeneralDeviceConfigurationConfig,
    ReportRootConfig,
    SharedPCConfigurationConfig,
    Windows10CompliancePolicyConfig,
    Windows10CustomConfigurationConfig,
    Windows10EndpointProtectionConfigurationConfig,
    Windows10EnterpriseModernAppManagementConfigurationConfig,
    Windows10GeneralConfigurationConfig,
    Windows10MobileCompliancePolicyConfig,
    Windows10SecureAssessmentConfigurationConfig,
    Windows10TeamGeneralConfigurationConfig,
    Windows81CompliancePolicyConfig,
    Windows81GeneralConfigurationConfig,
    WindowsDefenderAdvancedThreatProtectionConfigurationConfig,
    WindowsPhone81CompliancePolicyConfig,
    WindowsPhone81CustomConfigurationConfig,
    WindowsPhone81GeneralConfigurationConfig,
    WindowsUpdateForBusinessConfigurationConfig,
    EnrollmentConfigurationAssignmentConfig,
    DeviceEnrollmentLimitConfigurationConfig,
    DeviceEnrollmentPlatformRestrictionsConfigurationConfig,
    DeviceEnrollmentWindowsHelloForBusinessConfigurationConfig,
    ManagedMobileAppConfig,
    ManagedAppPolicyDeploymentSummaryConfig,
    AndroidManagedAppRegistrationConfig,
    IosManagedAppRegistrationConfig,
    ManagedAppOperationConfig,
    ManagedAppStatusRawConfig,
    TargetedManagedAppPolicyAssignmentConfig,
    WindowsInformationProtectionAppLockerFileConfig,
    LocalizedNotificationMessageConfig,
    DeviceAndAppManagementRoleDefinitionConfig,
    EnrollmentTroubleshootingEventConfig,
    SearchEntityConfig,
    PlannerConfig,
    PlannerBucketConfig,
    PlannerPlanConfig,
    PlannerTaskConfig,
    PlannerAssignedToTaskBoardTaskFormatConfig,
    PlannerBucketTaskBoardTaskFormatConfig,
    PlannerPlanDetailsConfig,
    PlannerProgressTaskBoardTaskFormatConfig,
    PlannerTaskDetailsConfig,
    SharedInsightConfig,
    TrendingConfig,
    UsedInsightConfig,
    ChangeTrackedEntityConfig,
    ShiftPreferencesConfig,
    OnenoteEntityBaseModelConfig,
    OnenoteEntitySchemaObjectModelConfig,
    OnenoteEntityHierarchyModelConfig,
    NotebookConfig,
    SectionGroupConfig,
    OnenoteSectionConfig,
    OperationConfig,
    OnenoteOperationConfig,
    OnenotePageConfig,
    OnenoteResourceConfig,
    ActivityHistoryItemConfig,
    DataPolicyOperationConfig,
    AlertConfig,
    SecureScoreConfig,
    SecureScoreControlProfileConfig,
    SecurityConfig,
    CommsOperationConfig,
    ParticipantConfig,
    CancelMediaProcessingOperationConfig,
    InviteParticipantsOperationConfig,
    MuteParticipantOperationConfig,
    PlayPromptOperationConfig,
    RecordOperationConfig,
    SubscribeToToneOperationConfig,
    UnmuteParticipantOperationConfig,
    UpdateRecordingStatusOperationConfig,
    ConversationMemberConfig,
    AadUserConversationMemberConfig,
    AppCatalogsConfig,
    TeamsAppConfig,
    ChannelConfig,
    ChatMessageConfig,
    TeamsTabConfig,
    ChatConfig,
    ChatMessageHostedContentConfig,
    ScheduleConfig,
    TeamsAppInstallationConfig,
    TeamsAsyncOperationConfig,
    TeamsTemplateConfig,
    TeamsAppDefinitionConfig,
    TeamworkConfig,
    WorkforceIntegrationConfig,
    UserScopeTeamsAppInstallationConfig,
    ScheduleChangeRequestConfig,
    OfferShiftRequestConfig,
    OpenShiftConfig,
    OpenShiftChangeRequestConfig,
    SchedulingGroupConfig,
    ShiftConfig,
    SwapShiftsChangeRequestConfig,
    TimeOffReasonConfig,
    TimeOffRequestConfig,
    TimeOffConfig,
    ThreatAssessmentRequestConfig,
    EmailFileAssessmentRequestConfig,
    FileAssessmentRequestConfig,
    InformationProtectionConfig,
    MailAssessmentRequestConfig,
    ThreatAssessmentResultConfig,
    UrlAssessmentRequestConfig,
    LinkedResourceConfig,
    TodoTaskListConfig,
    TodoTaskConfig],
  callables: [{
    name: 'reminderView',
    bound: true,
    composable: false,
    parameters: { bindingparameter: {type: 'graph.user'}, StartDateTime: {type: 'Edm.String', nullable: false}, EndDateTime: {type: 'Edm.String'} },
    return: "graph.reminder"
  }, {
    name: 'getManagedAppDiagnosticStatuses',
    bound: true,
    composable: false,
    return: "graph.managedAppDiagnosticStatus"
  }, {
    name: 'getManagedAppPolicies',
    bound: true,
    composable: false,
    return: "graph.managedAppPolicy"
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    return: "graph.administrativeUnit"
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    return: "graph.application"
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    return: "graph.directoryRole"
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    return: "graph.group"
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    return: "graph.oAuth2PermissionGrant"
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    return: "graph.orgContact"
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    return: "graph.servicePrincipal"
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    return: "graph.user"
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    parameters: { bindingparameter: {type: 'graph.contact', collection: true, nullable: false} },
    return: "graph.contact"
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    parameters: { bindingparameter: {type: 'graph.contactFolder', collection: true, nullable: false} },
    return: "graph.contactFolder"
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    parameters: { bindingparameter: {type: 'graph.event', collection: true, nullable: false} },
    return: "graph.event"
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    parameters: { bindingparameter: {type: 'graph.mailFolder', collection: true, nullable: false} },
    return: "graph.mailFolder"
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    parameters: { bindingparameter: {type: 'graph.message', collection: true, nullable: false} },
    return: "graph.message"
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    return: "graph.driveItem"
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    parameters: { token: {type: 'Edm.String'} },
    return: "graph.driveItem"
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    return: "graph.todoTask"
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    return: "graph.todoTaskList"
  }, {
    name: 'count',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChart', collection: true} },
    return: "Edm.Int32"
  }, {
    name: 'count',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTable', collection: true} },
    return: "Edm.Int32"
  }, {
    name: 'count',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTableColumn', collection: true} },
    return: "Edm.Int32"
  }, {
    name: 'count',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTableRow', collection: true} },
    return: "Edm.Int32"
  }, {
    name: 'count',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChartPoint', collection: true} },
    return: "Edm.Int32"
  }, {
    name: 'count',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChartSeries', collection: true} },
    return: "Edm.Int32"
  }, {
    name: 'count',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookRangeBorder', collection: true} },
    return: "Edm.Int32"
  }, {
    name: 'item',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookChart', collection: true}, name: {type: 'Edm.String'} },
    return: "graph.workbookChart"
  }, {
    name: 'itemAt',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookChart', collection: true}, index: {type: 'Edm.Int32', nullable: false} },
    return: "graph.workbookChart"
  }, {
    name: 'itemAt',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTable', collection: true}, index: {type: 'Edm.Int32', nullable: false} },
    return: "graph.workbookTable"
  }, {
    name: 'itemAt',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTableColumn', collection: true}, index: {type: 'Edm.Int32', nullable: false} },
    return: "graph.workbookTableColumn"
  }, {
    name: 'itemAt',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTableRow', collection: true}, index: {type: 'Edm.Int32', nullable: false} },
    return: "graph.workbookTableRow"
  }, {
    name: 'itemAt',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookChartPoint', collection: true}, index: {type: 'Edm.Int32', nullable: false} },
    return: "graph.workbookChartPoint"
  }, {
    name: 'itemAt',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookChartSeries', collection: true}, index: {type: 'Edm.Int32', nullable: false} },
    return: "graph.workbookChartSeries"
  }, {
    name: 'itemAt',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRangeBorder', collection: true}, index: {type: 'Edm.Int32', nullable: false} },
    return: "graph.workbookRangeBorder"
  }, {
    name: 'itemAt',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRangeView', collection: true}, index: {type: 'Edm.Int32', nullable: false} },
    return: "graph.workbookRangeView"
  }, {
    name: 'boundingRect',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, anotherRange: {type: 'Edm.String'} },
    return: "graph.workbookRange"
  }, {
    name: 'cell',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, row: {type: 'Edm.Int32', nullable: false}, column: {type: 'Edm.Int32', nullable: false} },
    return: "graph.workbookRange"
  }, {
    name: 'cell',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookWorksheet'}, row: {type: 'Edm.Int32', nullable: false}, column: {type: 'Edm.Int32', nullable: false} },
    return: "graph.workbookRange"
  }, {
    name: 'column',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, column: {type: 'Edm.Int32', nullable: false} },
    return: "graph.workbookRange"
  }, {
    name: 'columnsAfter',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'} },
    return: "graph.workbookRange"
  }, {
    name: 'columnsAfter',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, count: {type: 'Edm.Int32'} },
    return: "graph.workbookRange"
  }, {
    name: 'columnsBefore',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'} },
    return: "graph.workbookRange"
  }, {
    name: 'columnsBefore',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, count: {type: 'Edm.Int32'} },
    return: "graph.workbookRange"
  }, {
    name: 'entireColumn',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'} },
    return: "graph.workbookRange"
  }, {
    name: 'entireRow',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'} },
    return: "graph.workbookRange"
  }, {
    name: 'intersection',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, anotherRange: {type: 'Edm.String'} },
    return: "graph.workbookRange"
  }, {
    name: 'lastCell',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'} },
    return: "graph.workbookRange"
  }, {
    name: 'lastColumn',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'} },
    return: "graph.workbookRange"
  }, {
    name: 'lastRow',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'} },
    return: "graph.workbookRange"
  }, {
    name: 'offsetRange',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, rowOffset: {type: 'Edm.Int32', nullable: false}, columnOffset: {type: 'Edm.Int32', nullable: false} },
    return: "graph.workbookRange"
  }, {
    name: 'resizedRange',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, deltaRows: {type: 'Edm.Int32', nullable: false}, deltaColumns: {type: 'Edm.Int32', nullable: false} },
    return: "graph.workbookRange"
  }, {
    name: 'row',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, row: {type: 'Edm.Int32', nullable: false} },
    return: "graph.workbookRange"
  }, {
    name: 'rowsAbove',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'} },
    return: "graph.workbookRange"
  }, {
    name: 'rowsAbove',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, count: {type: 'Edm.Int32'} },
    return: "graph.workbookRange"
  }, {
    name: 'rowsBelow',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'} },
    return: "graph.workbookRange"
  }, {
    name: 'rowsBelow',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, count: {type: 'Edm.Int32'} },
    return: "graph.workbookRange"
  }, {
    name: 'usedRange',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'} },
    return: "graph.workbookRange"
  }, {
    name: 'usedRange',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, valuesOnly: {type: 'Edm.Boolean', nullable: false} },
    return: "graph.workbookRange"
  }, {
    name: 'usedRange',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookWorksheet'} },
    return: "graph.workbookRange"
  }, {
    name: 'usedRange',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookWorksheet'}, valuesOnly: {type: 'Edm.Boolean', nullable: false} },
    return: "graph.workbookRange"
  }, {
    name: 'visibleView',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'} },
    return: "graph.workbookRangeView"
  }, {
    name: 'dataBodyRange',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTable'} },
    return: "graph.workbookRange"
  }, {
    name: 'dataBodyRange',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTableColumn'} },
    return: "graph.workbookRange"
  }, {
    name: 'headerRowRange',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTable'} },
    return: "graph.workbookRange"
  }, {
    name: 'headerRowRange',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTableColumn'} },
    return: "graph.workbookRange"
  }, {
    name: 'range',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTable'} },
    return: "graph.workbookRange"
  }, {
    name: 'range',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookWorksheet'} },
    return: "graph.workbookRange"
  }, {
    name: 'range',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookWorksheet'}, address: {type: 'Edm.String'} },
    return: "graph.workbookRange"
  }, {
    name: 'range',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTableColumn'} },
    return: "graph.workbookRange"
  }, {
    name: 'range',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookNamedItem'} },
    return: "graph.workbookRange"
  }, {
    name: 'range',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRangeView'} },
    return: "graph.workbookRange"
  }, {
    name: 'range',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTableRow'} },
    return: "graph.workbookRange"
  }, {
    name: 'totalRowRange',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTable'} },
    return: "graph.workbookRange"
  }, {
    name: 'totalRowRange',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTableColumn'} },
    return: "graph.workbookRange"
  }, {
    name: 'sessionInfoResource',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbook'}, key: {type: 'Edm.String', nullable: false} },
    return: "graph.workbookSessionInfo"
  }, {
    name: 'image',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChart'} },
    return: "Edm.String"
  }, {
    name: 'image',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChart'}, width: {type: 'Edm.Int32', nullable: false} },
    return: "Edm.String"
  }, {
    name: 'image',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChart'}, width: {type: 'Edm.Int32', nullable: false}, height: {type: 'Edm.Int32', nullable: false} },
    return: "Edm.String"
  }, {
    name: 'image',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChart'}, width: {type: 'Edm.Int32', nullable: false}, height: {type: 'Edm.Int32', nullable: false}, fittingMode: {type: 'Edm.String', nullable: false} },
    return: "Edm.String"
  }, {
    name: 'allowedCalendarSharingRoles',
    bound: true,
    composable: false,
    parameters: { bindingparameter: {type: 'graph.calendar'}, User: {type: 'Edm.String', nullable: false} },
    return: "graph.calendarRoleType"
  }, {
    name: 'supportedLanguages',
    bound: true,
    composable: false,
    parameters: { bindingparameter: {type: 'graph.outlookUser'} },
    return: "graph.localeInfo"
  }, {
    name: 'supportedTimeZones',
    bound: true,
    composable: false,
    parameters: { bindingparameter: {type: 'graph.outlookUser'} },
    return: "graph.timeZoneInformation"
  }, {
    name: 'supportedTimeZones',
    bound: true,
    composable: false,
    parameters: { bindingparameter: {type: 'graph.outlookUser'}, TimeZoneStandard: {type: 'graph.timeZoneStandard', nullable: false} },
    return: "graph.timeZoneInformation"
  }, {
    name: 'preview',
    bound: true,
    composable: false,
    return: "graph.onenotePagePreview"
  }, {
    name: 'getActivitiesByInterval',
    bound: true,
    composable: false,
    return: "graph.itemActivityStat"
  }, {
    name: 'getActivitiesByInterval',
    bound: true,
    composable: false,
    parameters: { startDateTime: {type: 'Edm.String'}, endDateTime: {type: 'Edm.String'}, interval: {type: 'Edm.String'} },
    return: "graph.itemActivityStat"
  }, {
    name: 'getActivitiesByInterval',
    bound: true,
    composable: false,
    return: "graph.itemActivityStat"
  }, {
    name: 'getActivitiesByInterval',
    bound: true,
    composable: false,
    parameters: { startDateTime: {type: 'Edm.String'}, endDateTime: {type: 'Edm.String'}, interval: {type: 'Edm.String'} },
    return: "graph.itemActivityStat"
  }, {
    name: 'getActivitiesByInterval',
    bound: true,
    composable: false,
    return: "graph.itemActivityStat"
  }, {
    name: 'getActivitiesByInterval',
    bound: true,
    composable: false,
    parameters: { startDateTime: {type: 'Edm.String'}, endDateTime: {type: 'Edm.String'}, interval: {type: 'Edm.String'} },
    return: "graph.itemActivityStat"
  }, {
    name: 'search',
    bound: true,
    composable: false,
    parameters: { q: {type: 'Edm.String'} },
    return: "graph.driveItem"
  }, {
    name: 'search',
    bound: true,
    composable: false,
    parameters: { q: {type: 'Edm.String'} },
    return: "graph.driveItem"
  }, {
    name: 'getByPath',
    bound: true,
    composable: true,
    parameters: { path: {type: 'Edm.String'} },
    return: "graph.site"
  }, {
    name: 'recent',
    bound: true,
    composable: false,
    return: "graph.driveItem"
  }, {
    name: 'recent',
    path: "activities",
    bound: true,
    composable: false,
    parameters: { activities: {type: 'graph.userActivity', collection: true} },
    return: "graph.userActivity"
  }, {
    name: 'sharedWithMe',
    bound: true,
    composable: false,
    return: "graph.driveItem"
  }, {
    name: 'deviceConfigurationDeviceActivity',
    bound: true,
    composable: true,
    return: "graph.report"
  }, {
    name: 'deviceConfigurationUserActivity',
    bound: true,
    composable: true,
    return: "graph.report"
  }, {
    name: 'managedDeviceEnrollmentFailureDetails',
    bound: true,
    composable: false,
    return: "graph.report"
  }, {
    name: 'managedDeviceEnrollmentFailureDetails',
    bound: true,
    composable: true,
    parameters: { skip: {type: 'Edm.Int32'}, top: {type: 'Edm.Int32'}, filter: {type: 'Edm.String'}, skipToken: {type: 'Edm.String'} },
    return: "graph.report"
  }, {
    name: 'managedDeviceEnrollmentTopFailures',
    bound: true,
    composable: false,
    return: "graph.report"
  }, {
    name: 'managedDeviceEnrollmentTopFailures',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String'} },
    return: "graph.report"
  }, {
    name: 'getEmailActivityCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getEmailActivityUserCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getEmailActivityUserDetail',
    bound: true,
    composable: true,
    parameters: { date: {type: 'Edm.Date', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getEmailActivityUserDetail',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getEmailAppUsageAppsUserCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getEmailAppUsageUserCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getEmailAppUsageUserDetail',
    bound: true,
    composable: true,
    parameters: { date: {type: 'Edm.Date', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getEmailAppUsageUserDetail',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getEmailAppUsageVersionsUserCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getMailboxUsageDetail',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getMailboxUsageMailboxCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getMailboxUsageQuotaStatusMailboxCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getMailboxUsageStorage',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getOffice365ActivationCounts',
    bound: true,
    composable: true,
    return: "graph.report"
  }, {
    name: 'getOffice365ActivationsUserCounts',
    bound: true,
    composable: true,
    return: "graph.report"
  }, {
    name: 'getOffice365ActivationsUserDetail',
    bound: true,
    composable: true,
    return: "graph.report"
  }, {
    name: 'getOffice365ActiveUserCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getOffice365ActiveUserDetail',
    bound: true,
    composable: true,
    parameters: { date: {type: 'Edm.Date', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getOffice365ActiveUserDetail',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getOffice365GroupsActivityCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getOffice365GroupsActivityDetail',
    bound: true,
    composable: true,
    parameters: { date: {type: 'Edm.Date', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getOffice365GroupsActivityDetail',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getOffice365GroupsActivityFileCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getOffice365GroupsActivityGroupCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getOffice365GroupsActivityStorage',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getOffice365ServicesUserCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getOneDriveActivityFileCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getOneDriveActivityUserCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getOneDriveActivityUserDetail',
    bound: true,
    composable: true,
    parameters: { date: {type: 'Edm.Date', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getOneDriveActivityUserDetail',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getOneDriveUsageAccountCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getOneDriveUsageAccountDetail',
    bound: true,
    composable: true,
    parameters: { date: {type: 'Edm.Date', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getOneDriveUsageAccountDetail',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getOneDriveUsageFileCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getOneDriveUsageStorage',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getSharePointActivityFileCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getSharePointActivityPages',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getSharePointActivityUserCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getSharePointActivityUserDetail',
    bound: true,
    composable: true,
    parameters: { date: {type: 'Edm.Date', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getSharePointActivityUserDetail',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getSharePointSiteUsageDetail',
    bound: true,
    composable: true,
    parameters: { date: {type: 'Edm.Date', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getSharePointSiteUsageDetail',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getSharePointSiteUsageFileCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getSharePointSiteUsagePages',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getSharePointSiteUsageSiteCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getSharePointSiteUsageStorage',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getSkypeForBusinessActivityCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getSkypeForBusinessActivityUserCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getSkypeForBusinessActivityUserDetail',
    bound: true,
    composable: true,
    parameters: { date: {type: 'Edm.Date', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getSkypeForBusinessActivityUserDetail',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getSkypeForBusinessDeviceUsageDistributionUserCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getSkypeForBusinessDeviceUsageUserCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getSkypeForBusinessDeviceUsageUserDetail',
    bound: true,
    composable: true,
    parameters: { date: {type: 'Edm.Date', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getSkypeForBusinessDeviceUsageUserDetail',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getSkypeForBusinessOrganizerActivityCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getSkypeForBusinessOrganizerActivityMinuteCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getSkypeForBusinessOrganizerActivityUserCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getSkypeForBusinessParticipantActivityCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getSkypeForBusinessParticipantActivityMinuteCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getSkypeForBusinessParticipantActivityUserCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getSkypeForBusinessPeerToPeerActivityCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getSkypeForBusinessPeerToPeerActivityMinuteCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getSkypeForBusinessPeerToPeerActivityUserCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getTeamsDeviceUsageDistributionUserCounts',
    bound: true,
    composable: true,
    parameters: { reportRoot: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getTeamsDeviceUsageUserCounts',
    bound: true,
    composable: true,
    parameters: { reportRoot: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getTeamsDeviceUsageUserDetail',
    bound: true,
    composable: true,
    parameters: { reportRoot: {type: 'graph.reportRoot'}, date: {type: 'Edm.Date', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getTeamsDeviceUsageUserDetail',
    bound: true,
    composable: true,
    parameters: { reportRoot: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getTeamsUserActivityCounts',
    bound: true,
    composable: true,
    parameters: { reportRoot: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getTeamsUserActivityUserCounts',
    bound: true,
    composable: true,
    parameters: { reportRoot: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getTeamsUserActivityUserDetail',
    bound: true,
    composable: true,
    parameters: { reportRoot: {type: 'graph.reportRoot'}, date: {type: 'Edm.Date', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getTeamsUserActivityUserDetail',
    bound: true,
    composable: true,
    parameters: { reportRoot: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getYammerActivityCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getYammerActivityUserCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getYammerActivityUserDetail',
    bound: true,
    composable: true,
    parameters: { date: {type: 'Edm.Date', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getYammerActivityUserDetail',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getYammerDeviceUsageDistributionUserCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getYammerDeviceUsageUserCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getYammerDeviceUsageUserDetail',
    bound: true,
    composable: true,
    parameters: { date: {type: 'Edm.Date', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getYammerDeviceUsageUserDetail',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getYammerGroupsActivityCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getYammerGroupsActivityDetail',
    bound: true,
    composable: true,
    parameters: { date: {type: 'Edm.Date', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getYammerGroupsActivityDetail',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getYammerGroupsActivityGroupCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'verifyWindowsEnrollmentAutoDiscovery',
    bound: true,
    composable: false,
    parameters: { domainName: {type: 'Edm.String'} },
    return: "Edm.Boolean"
  }, {
    name: 'getEffectivePermissions',
    bound: true,
    composable: false,
    parameters: { scope: {type: 'Edm.String'} },
    return: "graph.rolePermission"
  }, {
    name: 'downloadApplePushNotificationCertificateSigningRequest',
    bound: true,
    composable: false,
    return: "Edm.String"
  }, {
    name: 'getUserIdsWithFlaggedAppRegistration',
    bound: true,
    composable: false,
    return: "Edm.String"
  }, {
    name: 'getRecentNotebooks',
    bound: true,
    composable: false,
    parameters: { includePersonalNotebooks: {type: 'Edm.Boolean', nullable: false} },
    return: "graph.recentNotebook"
  }, {
    name: 'getAllMessages',
    bound: true,
    composable: false,
    parameters: { chats: {type: 'graph.chat', collection: true} },
    return: "graph.chatMessage"
  }, {
    name: 'getAllMessages',
    bound: true,
    composable: false,
    parameters: { teams: {type: 'graph.team', collection: true} },
    return: "graph.chatMessage"
  }, {
    name: 'addKey',
    bound: true,
    composable: false,
    parameters: { keyCredential: {type: 'graph.keyCredential', nullable: false}, passwordCredential: {type: 'graph.passwordCredential'}, proof: {type: 'Edm.String', nullable: false} },
    return: "graph.keyCredential"
  }, {
    name: 'addKey',
    bound: true,
    composable: false,
    parameters: { keyCredential: {type: 'graph.keyCredential', nullable: false}, passwordCredential: {type: 'graph.passwordCredential'}, proof: {type: 'Edm.String', nullable: false} },
    return: "graph.keyCredential"
  }, {
    name: 'addPassword',
    bound: true,
    composable: false,
    parameters: { passwordCredential: {type: 'graph.passwordCredential'} },
    return: "graph.passwordCredential"
  }, {
    name: 'addPassword',
    bound: true,
    composable: false,
    parameters: { passwordCredential: {type: 'graph.passwordCredential'} },
    return: "graph.passwordCredential"
  }, {
    name: 'removeKey',
    bound: true,
    composable: false,
    parameters: { keyId: {type: 'Edm.Guid', nullable: false}, proof: {type: 'Edm.String', nullable: false} },
  }, {
    name: 'removeKey',
    bound: true,
    composable: false,
    parameters: { keyId: {type: 'Edm.Guid', nullable: false}, proof: {type: 'Edm.String', nullable: false} },
  }, {
    name: 'removePassword',
    bound: true,
    composable: false,
    parameters: { keyId: {type: 'Edm.Guid', nullable: false} },
  }, {
    name: 'removePassword',
    bound: true,
    composable: false,
    parameters: { keyId: {type: 'Edm.Guid', nullable: false} },
  }, {
    name: 'assignLicense',
    bound: true,
    composable: false,
    parameters: { addLicenses: {type: 'graph.assignedLicense', collection: true, nullable: false}, removeLicenses: {type: 'Edm.Guid', collection: true, nullable: false} },
    return: "graph.group"
  }, {
    name: 'assignLicense',
    bound: true,
    composable: false,
    parameters: { addLicenses: {type: 'graph.assignedLicense', collection: true, nullable: false}, removeLicenses: {type: 'Edm.Guid', collection: true, nullable: false} },
    return: "graph.user"
  }, {
    name: 'checkGrantedPermissionsForApp',
    bound: true,
    composable: false,
    return: "graph.resourceSpecificPermissionGrant"
  }, {
    name: 'validateProperties',
    bound: true,
    composable: false,
    parameters: { displayName: {type: 'Edm.String'}, mailNickname: {type: 'Edm.String'}, onBehalfOfUserId: {type: 'Edm.Guid'} },
  }, {
    name: 'validateProperties',
    path: "bindingParameter",
    bound: true,
    composable: false,
    parameters: { entityType: {type: 'Edm.String'}, displayName: {type: 'Edm.String'}, mailNickname: {type: 'Edm.String'}, onBehalfOfUserId: {type: 'Edm.Guid'} },
  }, {
    name: 'addFavorite',
    bound: true,
    composable: false,
  }, {
    name: 'removeFavorite',
    bound: true,
    composable: false,
  }, {
    name: 'resetUnseenCount',
    bound: true,
    composable: false,
  }, {
    name: 'subscribeByMail',
    bound: true,
    composable: false,
  }, {
    name: 'unsubscribeByMail',
    bound: true,
    composable: false,
  }, {
    name: 'renew',
    bound: true,
    composable: false,
  }, {
    name: 'changePassword',
    bound: true,
    composable: false,
    parameters: { currentPassword: {type: 'Edm.String'}, newPassword: {type: 'Edm.String'} },
  }, {
    name: 'reprocessLicenseAssignment',
    bound: true,
    composable: false,
    return: "graph.user"
  }, {
    name: 'revokeSignInSessions',
    bound: true,
    composable: false,
    return: "Edm.Boolean"
  }, {
    name: 'findMeetingTimes',
    bound: true,
    composable: false,
    parameters: { attendees: {type: 'graph.attendeeBase', collection: true}, locationConstraint: {type: 'graph.locationConstraint'}, timeConstraint: {type: 'graph.timeConstraint'}, meetingDuration: {type: 'Edm.Duration'}, maxCandidates: {type: 'Edm.Int32'}, isOrganizerOptional: {type: 'Edm.Boolean'}, returnSuggestionReasons: {type: 'Edm.Boolean'}, minimumAttendeePercentage: {type: 'Edm.Double'} },
    return: "graph.meetingTimeSuggestionsResult"
  }, {
    name: 'getMailTips',
    bound: true,
    composable: false,
    parameters: { EmailAddresses: {type: 'Edm.String', collection: true, nullable: false}, MailTipsOptions: {type: 'graph.mailTipsType'} },
    return: "graph.mailTips"
  }, {
    name: 'sendMail',
    bound: true,
    composable: false,
    parameters: { Message: {type: 'graph.message', nullable: false}, SaveToSentItems: {type: 'Edm.Boolean'} },
  }, {
    name: 'translateExchangeIds',
    bound: true,
    composable: false,
    parameters: { InputIds: {type: 'Edm.String', collection: true, nullable: false}, TargetIdType: {type: 'graph.exchangeIdFormat', nullable: false}, SourceIdType: {type: 'graph.exchangeIdFormat', nullable: false} },
    return: "graph.convertIdResult"
  }, {
    name: 'removeAllDevicesFromManagement',
    bound: true,
    composable: false,
  }, {
    name: 'wipeManagedAppRegistrationsByDeviceTag',
    bound: true,
    composable: false,
    parameters: { deviceTag: {type: 'Edm.String'} },
  }, {
    name: 'exportPersonalData',
    bound: true,
    composable: false,
    parameters: { storageLocation: {type: 'Edm.String'} },
  }, {
    name: 'checkMemberGroups',
    bound: true,
    composable: false,
    parameters: { groupIds: {type: 'Edm.String', collection: true, nullable: false} },
    return: "Edm.String"
  }, {
    name: 'checkMemberObjects',
    bound: true,
    composable: false,
    parameters: { ids: {type: 'Edm.String', collection: true, nullable: false} },
    return: "Edm.String"
  }, {
    name: 'getMemberGroups',
    bound: true,
    composable: false,
    parameters: { securityEnabledOnly: {type: 'Edm.Boolean'} },
    return: "Edm.String"
  }, {
    name: 'getMemberObjects',
    bound: true,
    composable: false,
    parameters: { securityEnabledOnly: {type: 'Edm.Boolean'} },
    return: "Edm.String"
  }, {
    name: 'restore',
    bound: true,
    composable: false,
    return: "graph.directoryObject"
  }, {
    name: 'restore',
    bound: true,
    composable: false,
    parameters: { parentReference: {type: 'graph.itemReference'}, name: {type: 'Edm.String'} },
    return: "graph.driveItem"
  }, {
    name: 'forceDelete',
    bound: true,
    composable: false,
    parameters: { disableUserAccounts: {type: 'Edm.Boolean'} },
  }, {
    name: 'verify',
    path: "bindingParameter",
    bound: true,
    composable: false,
    return: "graph.domain"
  }, {
    name: 'getAvailableExtensionProperties',
    path: "bindingParameter",
    bound: true,
    composable: false,
    parameters: { isSyncedFromOnPremises: {type: 'Edm.Boolean'} },
    return: "graph.extensionProperty"
  }, {
    name: 'getByIds',
    path: "bindingParameter",
    bound: true,
    composable: false,
    parameters: { ids: {type: 'Edm.String', collection: true, nullable: false}, types: {type: 'Edm.String', collection: true} },
    return: "graph.directoryObject"
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number1: {type: 'graph.Json'}, number2: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'abs',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'accrInt',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, issue: {type: 'graph.Json'}, firstInterest: {type: 'graph.Json'}, settlement: {type: 'graph.Json'}, rate: {type: 'graph.Json'}, par: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'}, calcMethod: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'accrIntM',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, issue: {type: 'graph.Json'}, settlement: {type: 'graph.Json'}, rate: {type: 'graph.Json'}, par: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'acos',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'acosh',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'acot',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'acoth',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'amorDegrc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, cost: {type: 'graph.Json'}, datePurchased: {type: 'graph.Json'}, firstPeriod: {type: 'graph.Json'}, salvage: {type: 'graph.Json'}, period: {type: 'graph.Json'}, rate: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'amorLinc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, cost: {type: 'graph.Json'}, datePurchased: {type: 'graph.Json'}, firstPeriod: {type: 'graph.Json'}, salvage: {type: 'graph.Json'}, period: {type: 'graph.Json'}, rate: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'and',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'arabic',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'areas',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, reference: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'asc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'asin',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'asinh',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'atan',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'atan2',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, xNum: {type: 'graph.Json'}, yNum: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'atanh',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'aveDev',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'average',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'averageA',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'averageIf',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, range: {type: 'graph.Json'}, criteria: {type: 'graph.Json'}, averageRange: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'averageIfs',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, averageRange: {type: 'graph.Json'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'bahtText',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'base',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, radix: {type: 'graph.Json'}, minLength: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'besselI',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, n: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'besselJ',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, n: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'besselK',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, n: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'besselY',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, n: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'beta_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, alpha: {type: 'graph.Json'}, beta: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'}, A: {type: 'graph.Json'}, B: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'beta_Inv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, probability: {type: 'graph.Json'}, alpha: {type: 'graph.Json'}, beta: {type: 'graph.Json'}, A: {type: 'graph.Json'}, B: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'bin2Dec',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'bin2Hex',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, places: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'bin2Oct',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, places: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'binom_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, numberS: {type: 'graph.Json'}, trials: {type: 'graph.Json'}, probabilityS: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'binom_Dist_Range',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, trials: {type: 'graph.Json'}, probabilityS: {type: 'graph.Json'}, numberS: {type: 'graph.Json'}, numberS2: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'binom_Inv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, trials: {type: 'graph.Json'}, probabilityS: {type: 'graph.Json'}, alpha: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'bitand',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number1: {type: 'graph.Json'}, number2: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'bitlshift',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, shiftAmount: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'bitor',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number1: {type: 'graph.Json'}, number2: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'bitrshift',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, shiftAmount: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'bitxor',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number1: {type: 'graph.Json'}, number2: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'ceiling_Math',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, significance: {type: 'graph.Json'}, mode: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'ceiling_Precise',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, significance: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'char',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'chiSq_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, degFreedom: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'chiSq_Dist_RT',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, degFreedom: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'chiSq_Inv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, probability: {type: 'graph.Json'}, degFreedom: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'chiSq_Inv_RT',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, probability: {type: 'graph.Json'}, degFreedom: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'choose',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, indexNum: {type: 'graph.Json'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'clean',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'code',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'columns',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, array: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'combin',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, numberChosen: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'combina',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, numberChosen: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'complex',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, realNum: {type: 'graph.Json'}, iNum: {type: 'graph.Json'}, suffix: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'concatenate',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'confidence_Norm',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, alpha: {type: 'graph.Json'}, standardDev: {type: 'graph.Json'}, size: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'confidence_T',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, alpha: {type: 'graph.Json'}, standardDev: {type: 'graph.Json'}, size: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'convert',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, fromUnit: {type: 'graph.Json'}, toUnit: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'cos',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'cosh',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'cot',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'coth',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'count',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'countA',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'countBlank',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, range: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'countIf',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, range: {type: 'graph.Json'}, criteria: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'countIfs',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'coupDayBs',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'coupDays',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'coupDaysNc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'coupNcd',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'coupNum',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'coupPcd',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'csc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'csch',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'cumIPmt',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, rate: {type: 'graph.Json'}, nper: {type: 'graph.Json'}, pv: {type: 'graph.Json'}, startPeriod: {type: 'graph.Json'}, endPeriod: {type: 'graph.Json'}, type: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'cumPrinc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, rate: {type: 'graph.Json'}, nper: {type: 'graph.Json'}, pv: {type: 'graph.Json'}, startPeriod: {type: 'graph.Json'}, endPeriod: {type: 'graph.Json'}, type: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'date',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, year: {type: 'graph.Json'}, month: {type: 'graph.Json'}, day: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'datevalue',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, dateText: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'daverage',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, database: {type: 'graph.Json'}, field: {type: 'graph.Json'}, criteria: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'day',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, serialNumber: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'days',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, endDate: {type: 'graph.Json'}, startDate: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'days360',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, startDate: {type: 'graph.Json'}, endDate: {type: 'graph.Json'}, method: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'db',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, cost: {type: 'graph.Json'}, salvage: {type: 'graph.Json'}, life: {type: 'graph.Json'}, period: {type: 'graph.Json'}, month: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'dbcs',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'dcount',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, database: {type: 'graph.Json'}, field: {type: 'graph.Json'}, criteria: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'dcountA',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, database: {type: 'graph.Json'}, field: {type: 'graph.Json'}, criteria: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'ddb',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, cost: {type: 'graph.Json'}, salvage: {type: 'graph.Json'}, life: {type: 'graph.Json'}, period: {type: 'graph.Json'}, factor: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'dec2Bin',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, places: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'dec2Hex',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, places: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'dec2Oct',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, places: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'decimal',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, radix: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'degrees',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, angle: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'devSq',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'dget',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, database: {type: 'graph.Json'}, field: {type: 'graph.Json'}, criteria: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'disc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, pr: {type: 'graph.Json'}, redemption: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'dmax',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, database: {type: 'graph.Json'}, field: {type: 'graph.Json'}, criteria: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'dmin',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, database: {type: 'graph.Json'}, field: {type: 'graph.Json'}, criteria: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'dollar',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, decimals: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'dollarDe',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, fractionalDollar: {type: 'graph.Json'}, fraction: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'dollarFr',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, decimalDollar: {type: 'graph.Json'}, fraction: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'dproduct',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, database: {type: 'graph.Json'}, field: {type: 'graph.Json'}, criteria: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'dstDev',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, database: {type: 'graph.Json'}, field: {type: 'graph.Json'}, criteria: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'dstDevP',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, database: {type: 'graph.Json'}, field: {type: 'graph.Json'}, criteria: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'dsum',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, database: {type: 'graph.Json'}, field: {type: 'graph.Json'}, criteria: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'duration',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, coupon: {type: 'graph.Json'}, yld: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'dvar',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, database: {type: 'graph.Json'}, field: {type: 'graph.Json'}, criteria: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'dvarP',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, database: {type: 'graph.Json'}, field: {type: 'graph.Json'}, criteria: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'ecma_Ceiling',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, significance: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'edate',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, startDate: {type: 'graph.Json'}, months: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'effect',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, nominalRate: {type: 'graph.Json'}, npery: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'eoMonth',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, startDate: {type: 'graph.Json'}, months: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'erf',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, lowerLimit: {type: 'graph.Json'}, upperLimit: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'erf_Precise',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, X: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'erfC',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'erfC_Precise',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, X: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'error_Type',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, errorVal: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'even',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'exact',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text1: {type: 'graph.Json'}, text2: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'exp',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'expon_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, lambda: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'f_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, degFreedom1: {type: 'graph.Json'}, degFreedom2: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'f_Dist_RT',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, degFreedom1: {type: 'graph.Json'}, degFreedom2: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'f_Inv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, probability: {type: 'graph.Json'}, degFreedom1: {type: 'graph.Json'}, degFreedom2: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'f_Inv_RT',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, probability: {type: 'graph.Json'}, degFreedom1: {type: 'graph.Json'}, degFreedom2: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'fact',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'factDouble',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'false',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'find',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, findText: {type: 'graph.Json'}, withinText: {type: 'graph.Json'}, startNum: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'findB',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, findText: {type: 'graph.Json'}, withinText: {type: 'graph.Json'}, startNum: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'fisher',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'fisherInv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, y: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'fixed',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, decimals: {type: 'graph.Json'}, noCommas: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'floor_Math',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, significance: {type: 'graph.Json'}, mode: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'floor_Precise',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, significance: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'fv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, rate: {type: 'graph.Json'}, nper: {type: 'graph.Json'}, pmt: {type: 'graph.Json'}, pv: {type: 'graph.Json'}, type: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'fvschedule',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, principal: {type: 'graph.Json'}, schedule: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'gamma',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'gamma_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, alpha: {type: 'graph.Json'}, beta: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'gamma_Inv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, probability: {type: 'graph.Json'}, alpha: {type: 'graph.Json'}, beta: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'gammaLn',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'gammaLn_Precise',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'gauss',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'gcd',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'geoMean',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'geStep',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, step: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'harMean',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'hex2Bin',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, places: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'hex2Dec',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'hex2Oct',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, places: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'hlookup',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, lookupValue: {type: 'graph.Json'}, tableArray: {type: 'graph.Json'}, rowIndexNum: {type: 'graph.Json'}, rangeLookup: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'hour',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, serialNumber: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'hyperlink',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, linkLocation: {type: 'graph.Json'}, friendlyName: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'hypGeom_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, sampleS: {type: 'graph.Json'}, numberSample: {type: 'graph.Json'}, populationS: {type: 'graph.Json'}, numberPop: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'if',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, logicalTest: {type: 'graph.Json'}, valueIfTrue: {type: 'graph.Json'}, valueIfFalse: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'imAbs',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'imaginary',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'imArgument',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'imConjugate',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'imCos',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'imCosh',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'imCot',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'imCsc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'imCsch',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'imDiv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber1: {type: 'graph.Json'}, inumber2: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'imExp',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'imLn',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'imLog10',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'imLog2',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'imPower',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'imProduct',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'imReal',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'imSec',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'imSech',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'imSin',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'imSinh',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'imSqrt',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'imSub',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber1: {type: 'graph.Json'}, inumber2: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'imSum',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'imTan',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'int',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'intRate',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, investment: {type: 'graph.Json'}, redemption: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'ipmt',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, rate: {type: 'graph.Json'}, per: {type: 'graph.Json'}, nper: {type: 'graph.Json'}, pv: {type: 'graph.Json'}, fv: {type: 'graph.Json'}, type: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'irr',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'}, guess: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'isErr',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, value: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'isError',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, value: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'isEven',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'isFormula',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, reference: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'isLogical',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, value: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'isNA',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, value: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'isNonText',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, value: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'isNumber',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, value: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'iso_Ceiling',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, significance: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'isOdd',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'isoWeekNum',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, date: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'ispmt',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, rate: {type: 'graph.Json'}, per: {type: 'graph.Json'}, nper: {type: 'graph.Json'}, pv: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'isref',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, value: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'isText',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, value: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'kurt',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'large',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, array: {type: 'graph.Json'}, k: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'lcm',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'left',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'}, numChars: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'leftb',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'}, numBytes: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'len',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'lenb',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'ln',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'log',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, base: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'log10',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'logNorm_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, mean: {type: 'graph.Json'}, standardDev: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'logNorm_Inv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, probability: {type: 'graph.Json'}, mean: {type: 'graph.Json'}, standardDev: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'lookup',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, lookupValue: {type: 'graph.Json'}, lookupVector: {type: 'graph.Json'}, resultVector: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'lower',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'match',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, lookupValue: {type: 'graph.Json'}, lookupArray: {type: 'graph.Json'}, matchType: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'max',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'maxA',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'mduration',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, coupon: {type: 'graph.Json'}, yld: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'median',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'mid',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'}, startNum: {type: 'graph.Json'}, numChars: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'midb',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'}, startNum: {type: 'graph.Json'}, numBytes: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'min',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'minA',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'minute',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, serialNumber: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'mirr',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'}, financeRate: {type: 'graph.Json'}, reinvestRate: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'mod',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, divisor: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'month',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, serialNumber: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'mround',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, multiple: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'multiNomial',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'n',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, value: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'na',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'negBinom_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, numberF: {type: 'graph.Json'}, numberS: {type: 'graph.Json'}, probabilityS: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'networkDays',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, startDate: {type: 'graph.Json'}, endDate: {type: 'graph.Json'}, holidays: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'networkDays_Intl',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, startDate: {type: 'graph.Json'}, endDate: {type: 'graph.Json'}, weekend: {type: 'graph.Json'}, holidays: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'nominal',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, effectRate: {type: 'graph.Json'}, npery: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'norm_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, mean: {type: 'graph.Json'}, standardDev: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'norm_Inv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, probability: {type: 'graph.Json'}, mean: {type: 'graph.Json'}, standardDev: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'norm_S_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, z: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'norm_S_Inv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, probability: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'not',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, logical: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'now',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'nper',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, rate: {type: 'graph.Json'}, pmt: {type: 'graph.Json'}, pv: {type: 'graph.Json'}, fv: {type: 'graph.Json'}, type: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'npv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, rate: {type: 'graph.Json'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'numberValue',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'}, decimalSeparator: {type: 'graph.Json'}, groupSeparator: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'oct2Bin',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, places: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'oct2Dec',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'oct2Hex',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, places: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'odd',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'oddFPrice',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, issue: {type: 'graph.Json'}, firstCoupon: {type: 'graph.Json'}, rate: {type: 'graph.Json'}, yld: {type: 'graph.Json'}, redemption: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'oddFYield',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, issue: {type: 'graph.Json'}, firstCoupon: {type: 'graph.Json'}, rate: {type: 'graph.Json'}, pr: {type: 'graph.Json'}, redemption: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'oddLPrice',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, lastInterest: {type: 'graph.Json'}, rate: {type: 'graph.Json'}, yld: {type: 'graph.Json'}, redemption: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'oddLYield',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, lastInterest: {type: 'graph.Json'}, rate: {type: 'graph.Json'}, pr: {type: 'graph.Json'}, redemption: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'or',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'pduration',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, rate: {type: 'graph.Json'}, pv: {type: 'graph.Json'}, fv: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'percentile_Exc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, array: {type: 'graph.Json'}, k: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'percentile_Inc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, array: {type: 'graph.Json'}, k: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'percentRank_Exc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, array: {type: 'graph.Json'}, x: {type: 'graph.Json'}, significance: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'percentRank_Inc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, array: {type: 'graph.Json'}, x: {type: 'graph.Json'}, significance: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'permut',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, numberChosen: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'permutationa',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, numberChosen: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'phi',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'pi',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'pmt',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, rate: {type: 'graph.Json'}, nper: {type: 'graph.Json'}, pv: {type: 'graph.Json'}, fv: {type: 'graph.Json'}, type: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'poisson_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, mean: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'power',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, power: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'ppmt',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, rate: {type: 'graph.Json'}, per: {type: 'graph.Json'}, nper: {type: 'graph.Json'}, pv: {type: 'graph.Json'}, fv: {type: 'graph.Json'}, type: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'price',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, rate: {type: 'graph.Json'}, yld: {type: 'graph.Json'}, redemption: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'priceDisc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, discount: {type: 'graph.Json'}, redemption: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'priceMat',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, issue: {type: 'graph.Json'}, rate: {type: 'graph.Json'}, yld: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'product',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'proper',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'pv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, rate: {type: 'graph.Json'}, nper: {type: 'graph.Json'}, pmt: {type: 'graph.Json'}, fv: {type: 'graph.Json'}, type: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'quartile_Exc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, array: {type: 'graph.Json'}, quart: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'quartile_Inc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, array: {type: 'graph.Json'}, quart: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'quotient',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, numerator: {type: 'graph.Json'}, denominator: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'radians',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, angle: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'rand',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'randBetween',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, bottom: {type: 'graph.Json'}, top: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'rank_Avg',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, ref: {type: 'graph.Json'}, order: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'rank_Eq',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, ref: {type: 'graph.Json'}, order: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'rate',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, nper: {type: 'graph.Json'}, pmt: {type: 'graph.Json'}, pv: {type: 'graph.Json'}, fv: {type: 'graph.Json'}, type: {type: 'graph.Json'}, guess: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'received',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, investment: {type: 'graph.Json'}, discount: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'replace',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, oldText: {type: 'graph.Json'}, startNum: {type: 'graph.Json'}, numChars: {type: 'graph.Json'}, newText: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'replaceB',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, oldText: {type: 'graph.Json'}, startNum: {type: 'graph.Json'}, numBytes: {type: 'graph.Json'}, newText: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'rept',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'}, numberTimes: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'right',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'}, numChars: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'rightb',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'}, numBytes: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'roman',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, form: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'round',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, numDigits: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'roundDown',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, numDigits: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'roundUp',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, numDigits: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'rows',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, array: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'rri',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, nper: {type: 'graph.Json'}, pv: {type: 'graph.Json'}, fv: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'sec',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'sech',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'second',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, serialNumber: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'seriesSum',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, n: {type: 'graph.Json'}, m: {type: 'graph.Json'}, coefficients: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'sheet',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, value: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'sheets',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, reference: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'sign',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'sin',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'sinh',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'skew',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'skew_p',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'sln',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, cost: {type: 'graph.Json'}, salvage: {type: 'graph.Json'}, life: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'small',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, array: {type: 'graph.Json'}, k: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'sqrt',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'sqrtPi',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'standardize',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, mean: {type: 'graph.Json'}, standardDev: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'stDev_P',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'stDev_S',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'stDevA',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'stDevPA',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'substitute',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'}, oldText: {type: 'graph.Json'}, newText: {type: 'graph.Json'}, instanceNum: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'subtotal',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, functionNum: {type: 'graph.Json'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'sum',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'sumIf',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, range: {type: 'graph.Json'}, criteria: {type: 'graph.Json'}, sumRange: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'sumIfs',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, sumRange: {type: 'graph.Json'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'sumSq',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'syd',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, cost: {type: 'graph.Json'}, salvage: {type: 'graph.Json'}, life: {type: 'graph.Json'}, per: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 't',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, value: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 't_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, degFreedom: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 't_Dist_2T',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, degFreedom: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 't_Dist_RT',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, degFreedom: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 't_Inv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, probability: {type: 'graph.Json'}, degFreedom: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 't_Inv_2T',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, probability: {type: 'graph.Json'}, degFreedom: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'tan',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'tanh',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'tbillEq',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, discount: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'tbillPrice',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, discount: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'tbillYield',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, pr: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'text',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, value: {type: 'graph.Json'}, formatText: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'time',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, hour: {type: 'graph.Json'}, minute: {type: 'graph.Json'}, second: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'timevalue',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, timeText: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'today',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'trim',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'trimMean',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, array: {type: 'graph.Json'}, percent: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'true',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'trunc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, numDigits: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'type',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, value: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'unichar',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'unicode',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'upper',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'usdollar',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, decimals: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'value',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'var_P',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'var_S',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'varA',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'varPA',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'vdb',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, cost: {type: 'graph.Json'}, salvage: {type: 'graph.Json'}, life: {type: 'graph.Json'}, startPeriod: {type: 'graph.Json'}, endPeriod: {type: 'graph.Json'}, factor: {type: 'graph.Json'}, noSwitch: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'vlookup',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, lookupValue: {type: 'graph.Json'}, tableArray: {type: 'graph.Json'}, colIndexNum: {type: 'graph.Json'}, rangeLookup: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'weekday',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, serialNumber: {type: 'graph.Json'}, returnType: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'weekNum',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, serialNumber: {type: 'graph.Json'}, returnType: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'weibull_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, alpha: {type: 'graph.Json'}, beta: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'workDay',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, startDate: {type: 'graph.Json'}, days: {type: 'graph.Json'}, holidays: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'workDay_Intl',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, startDate: {type: 'graph.Json'}, days: {type: 'graph.Json'}, weekend: {type: 'graph.Json'}, holidays: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'xirr',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'}, dates: {type: 'graph.Json'}, guess: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'xnpv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, rate: {type: 'graph.Json'}, values: {type: 'graph.Json'}, dates: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'xor',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'year',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, serialNumber: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'yearFrac',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, startDate: {type: 'graph.Json'}, endDate: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'yield',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, rate: {type: 'graph.Json'}, pr: {type: 'graph.Json'}, redemption: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'yieldDisc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, pr: {type: 'graph.Json'}, redemption: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'yieldMat',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, issue: {type: 'graph.Json'}, rate: {type: 'graph.Json'}, pr: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'z_Test',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, array: {type: 'graph.Json'}, x: {type: 'graph.Json'}, sigma: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'add',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChart', collection: true}, type: {type: 'Edm.String', nullable: false}, sourceData: {type: 'graph.Json'}, seriesBy: {type: 'Edm.String', nullable: false} },
    return: "graph.workbookChart"
  }, {
    name: 'add',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookNamedItem', collection: true}, name: {type: 'Edm.String'}, reference: {type: 'graph.Json'}, comment: {type: 'Edm.String'} },
    return: "graph.workbookNamedItem"
  }, {
    name: 'add',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTable', collection: true}, address: {type: 'Edm.String'}, hasHeaders: {type: 'Edm.Boolean', nullable: false} },
    return: "graph.workbookTable"
  }, {
    name: 'add',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTableColumn', collection: true}, index: {type: 'Edm.Int32'}, values: {type: 'graph.Json'}, name: {type: 'Edm.String'} },
    return: "graph.workbookTableColumn"
  }, {
    name: 'add',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTableRow', collection: true}, index: {type: 'Edm.Int32'}, values: {type: 'graph.Json'} },
    return: "graph.workbookTableRow"
  }, {
    name: 'add',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookWorksheet', collection: true}, name: {type: 'Edm.String'} },
    return: "graph.workbookWorksheet"
  }, {
    name: 'add',
    bound: true,
    composable: false,
    parameters: { value: {type: 'graph.site', collection: true} },
    return: "graph.site"
  }, {
    name: 'addFormulaLocal',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookNamedItem', collection: true}, name: {type: 'Edm.String'}, formula: {type: 'Edm.String'}, comment: {type: 'Edm.String'} },
    return: "graph.workbookNamedItem"
  }, {
    name: 'apply',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFilter'}, criteria: {type: 'graph.workbookFilterCriteria'} },
  }, {
    name: 'apply',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookRangeSort'}, fields: {type: 'graph.workbookSortField', collection: true}, matchCase: {type: 'Edm.Boolean', nullable: false}, hasHeaders: {type: 'Edm.Boolean', nullable: false}, orientation: {type: 'Edm.String', nullable: false}, method: {type: 'Edm.String', nullable: false} },
  }, {
    name: 'apply',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTableSort'}, fields: {type: 'graph.workbookSortField', collection: true}, matchCase: {type: 'Edm.Boolean', nullable: false}, method: {type: 'Edm.String', nullable: false} },
  }, {
    name: 'applyBottomItemsFilter',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFilter'}, count: {type: 'Edm.Int32', nullable: false} },
  }, {
    name: 'applyBottomPercentFilter',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFilter'}, percent: {type: 'Edm.Int32', nullable: false} },
  }, {
    name: 'applyCellColorFilter',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFilter'}, color: {type: 'Edm.String'} },
  }, {
    name: 'applyCustomFilter',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFilter'}, criteria1: {type: 'Edm.String'}, criteria2: {type: 'Edm.String'}, oper: {type: 'Edm.String', nullable: false} },
  }, {
    name: 'applyDynamicFilter',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFilter'}, criteria: {type: 'Edm.String', nullable: false} },
  }, {
    name: 'applyFontColorFilter',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFilter'}, color: {type: 'Edm.String'} },
  }, {
    name: 'applyIconFilter',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFilter'}, icon: {type: 'graph.workbookIcon'} },
  }, {
    name: 'applyTopItemsFilter',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFilter'}, count: {type: 'Edm.Int32', nullable: false} },
  }, {
    name: 'applyTopPercentFilter',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFilter'}, percent: {type: 'Edm.Int32', nullable: false} },
  }, {
    name: 'applyValuesFilter',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFilter'}, values: {type: 'graph.Json'} },
  }, {
    name: 'clear',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFilter'} },
  }, {
    name: 'clear',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTableSort'} },
  }, {
    name: 'clear',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChartFill'} },
  }, {
    name: 'clear',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChartLineFormat'} },
  }, {
    name: 'clear',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, applyTo: {type: 'Edm.String', nullable: false} },
  }, {
    name: 'clear',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookRangeFill'} },
  }, {
    name: 'reapply',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTableSort'} },
  }, {
    name: 'autofitColumns',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookRangeFormat'} },
  }, {
    name: 'autofitRows',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookRangeFormat'} },
  }, {
    name: 'calculate',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookApplication'}, calculationType: {type: 'Edm.String', nullable: false} },
  }, {
    name: 'setSolidColor',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChartFill'}, color: {type: 'Edm.String'} },
  }, {
    name: 'delete',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, shift: {type: 'Edm.String', nullable: false} },
  }, {
    name: 'insert',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, shift: {type: 'Edm.String', nullable: false} },
    return: "graph.workbookRange"
  }, {
    name: 'merge',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, across: {type: 'Edm.Boolean', nullable: false} },
  }, {
    name: 'unmerge',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookRange'} },
  }, {
    name: 'clearFilters',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTable'} },
  }, {
    name: 'convertToRange',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTable'} },
    return: "graph.workbookRange"
  }, {
    name: 'reapplyFilters',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTable'} },
  }, {
    name: 'closeSession',
    bound: true,
    composable: false,
    parameters: { this: {type: 'graph.workbook'} },
  }, {
    name: 'createSession',
    bound: true,
    composable: false,
    parameters: { this: {type: 'graph.workbook'}, persistChanges: {type: 'Edm.Boolean', nullable: false} },
    return: "graph.workbookSessionInfo"
  }, {
    name: 'refreshSession',
    bound: true,
    composable: false,
    parameters: { this: {type: 'graph.workbook'} },
  }, {
    name: 'protect',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookWorksheetProtection'}, options: {type: 'graph.workbookWorksheetProtectionOptions'} },
  }, {
    name: 'unprotect',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookWorksheetProtection'} },
  }, {
    name: 'refresh',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookPivotTable'} },
  }, {
    name: 'refreshAll',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookPivotTable', collection: true} },
  }, {
    name: 'setData',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChart'}, sourceData: {type: 'graph.Json'}, seriesBy: {type: 'Edm.String', nullable: false} },
  }, {
    name: 'setPosition',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChart'}, startCell: {type: 'graph.Json'}, endCell: {type: 'graph.Json'} },
  }, {
    name: 'accept',
    bound: true,
    composable: false,
    return: "graph.calendar"
  }, {
    name: 'accept',
    bound: true,
    composable: false,
    parameters: { SendResponse: {type: 'Edm.Boolean'}, Comment: {type: 'Edm.String'} },
  }, {
    name: 'cancel',
    bound: true,
    composable: false,
    parameters: { Comment: {type: 'Edm.String'} },
  }, {
    name: 'decline',
    bound: true,
    composable: false,
    parameters: { ProposedNewTime: {type: 'graph.timeSlot'}, SendResponse: {type: 'Edm.Boolean'}, Comment: {type: 'Edm.String'} },
  }, {
    name: 'decline',
    bound: true,
    composable: false,
    parameters: { message: {type: 'Edm.String'} },
  }, {
    name: 'dismissReminder',
    bound: true,
    composable: false,
  }, {
    name: 'forward',
    bound: true,
    composable: false,
    parameters: { ToRecipients: {type: 'graph.recipient', collection: true}, Comment: {type: 'Edm.String'} },
  }, {
    name: 'forward',
    bound: true,
    composable: false,
    parameters: { ToRecipients: {type: 'graph.recipient', collection: true}, Message: {type: 'graph.message'}, Comment: {type: 'Edm.String'} },
  }, {
    name: 'forward',
    bound: true,
    composable: false,
    parameters: { Comment: {type: 'Edm.String'}, ToRecipients: {type: 'graph.recipient', collection: true, nullable: false} },
  }, {
    name: 'snoozeReminder',
    bound: true,
    composable: false,
    parameters: { NewReminderTime: {type: 'graph.dateTimeTimeZone', nullable: false} },
  }, {
    name: 'tentativelyAccept',
    bound: true,
    composable: false,
    parameters: { ProposedNewTime: {type: 'graph.timeSlot'}, SendResponse: {type: 'Edm.Boolean'}, Comment: {type: 'Edm.String'} },
  }, {
    name: 'copy',
    path: "bindingParameter",
    bound: true,
    composable: false,
    parameters: { DestinationId: {type: 'Edm.String', nullable: false} },
    return: "graph.mailFolder"
  }, {
    name: 'copy',
    path: "bindingParameter",
    bound: true,
    composable: false,
    parameters: { DestinationId: {type: 'Edm.String', nullable: false} },
    return: "graph.message"
  }, {
    name: 'copy',
    bound: true,
    composable: false,
    parameters: { name: {type: 'Edm.String'}, parentReference: {type: 'graph.itemReference'} },
    return: "graph.driveItem"
  }, {
    name: 'move',
    path: "bindingParameter",
    bound: true,
    composable: false,
    parameters: { DestinationId: {type: 'Edm.String', nullable: false} },
    return: "graph.mailFolder"
  }, {
    name: 'move',
    path: "bindingParameter",
    bound: true,
    composable: false,
    parameters: { DestinationId: {type: 'Edm.String', nullable: false} },
    return: "graph.message"
  }, {
    name: 'createForward',
    path: "bindingParameter",
    bound: true,
    composable: false,
    parameters: { ToRecipients: {type: 'graph.recipient', collection: true}, Message: {type: 'graph.message'}, Comment: {type: 'Edm.String'} },
    return: "graph.message"
  }, {
    name: 'createReply',
    path: "bindingParameter",
    bound: true,
    composable: false,
    parameters: { Message: {type: 'graph.message'}, Comment: {type: 'Edm.String'} },
    return: "graph.message"
  }, {
    name: 'createReplyAll',
    path: "bindingParameter",
    bound: true,
    composable: false,
    parameters: { Message: {type: 'graph.message'}, Comment: {type: 'Edm.String'} },
    return: "graph.message"
  }, {
    name: 'reply',
    bound: true,
    composable: false,
    parameters: { Message: {type: 'graph.message'}, Comment: {type: 'Edm.String'} },
  }, {
    name: 'reply',
    bound: true,
    composable: false,
    parameters: { Post: {type: 'graph.post', nullable: false} },
  }, {
    name: 'reply',
    bound: true,
    composable: false,
    parameters: { Post: {type: 'graph.post', nullable: false} },
  }, {
    name: 'replyAll',
    bound: true,
    composable: false,
    parameters: { Message: {type: 'graph.message'}, Comment: {type: 'Edm.String'} },
  }, {
    name: 'send',
    bound: true,
    composable: false,
  }, {
    name: 'createUploadSession',
    bound: true,
    composable: false,
    parameters: { AttachmentItem: {type: 'graph.attachmentItem', nullable: false} },
    return: "graph.uploadSession"
  }, {
    name: 'createUploadSession',
    bound: true,
    composable: false,
    parameters: { item: {type: 'graph.driveItemUploadableProperties'}, deferCommit: {type: 'Edm.Boolean'} },
    return: "graph.uploadSession"
  }, {
    name: 'getSchedule',
    bound: true,
    composable: false,
    parameters: { Schedules: {type: 'Edm.String', collection: true}, EndTime: {type: 'graph.dateTimeTimeZone'}, StartTime: {type: 'graph.dateTimeTimeZone'}, AvailabilityViewInterval: {type: 'Edm.Int32'} },
    return: "graph.scheduleInformation"
  }, {
    name: 'remove',
    bound: true,
    composable: false,
    parameters: { value: {type: 'graph.site', collection: true} },
    return: "graph.site"
  }, {
    name: 'checkin',
    bound: true,
    composable: false,
    parameters: { checkInAs: {type: 'Edm.String'}, comment: {type: 'Edm.String'} },
  }, {
    name: 'checkout',
    bound: true,
    composable: false,
  }, {
    name: 'createLink',
    bound: true,
    composable: false,
    parameters: { type: {type: 'Edm.String', nullable: false}, scope: {type: 'Edm.String'}, expirationDateTime: {type: 'Edm.DateTimeOffset'}, password: {type: 'Edm.String'}, message: {type: 'Edm.String'} },
    return: "graph.permission"
  }, {
    name: 'follow',
    bound: true,
    composable: false,
    return: "graph.driveItem"
  }, {
    name: 'invite',
    bound: true,
    composable: false,
    parameters: { requireSignIn: {type: 'Edm.Boolean'}, roles: {type: 'Edm.String', collection: true}, sendInvitation: {type: 'Edm.Boolean'}, message: {type: 'Edm.String'}, recipients: {type: 'graph.driveRecipient', collection: true, nullable: false}, expirationDateTime: {type: 'Edm.String'}, password: {type: 'Edm.String'} },
    return: "graph.permission"
  }, {
    name: 'invite',
    bound: true,
    composable: false,
    parameters: { participants: {type: 'graph.invitationParticipantInfo', collection: true, nullable: false}, clientContext: {type: 'Edm.String'} },
    return: "graph.inviteParticipantsOperation"
  }, {
    name: 'preview',
    bound: true,
    composable: false,
    parameters: { page: {type: 'Edm.String'}, zoom: {type: 'Edm.Double'} },
    return: "graph.itemPreviewInfo"
  }, {
    name: 'unfollow',
    bound: true,
    composable: false,
  }, {
    name: 'validatePermission',
    bound: true,
    composable: false,
    parameters: { challengeToken: {type: 'Edm.String'}, password: {type: 'Edm.String', nullable: false} },
  }, {
    name: 'grant',
    bound: true,
    composable: false,
    parameters: { roles: {type: 'Edm.String', collection: true}, recipients: {type: 'graph.driveRecipient', collection: true} },
    return: "graph.permission"
  }, {
    name: 'restoreVersion',
    bound: true,
    composable: false,
  }, {
    name: 'restoreVersion',
    bound: true,
    composable: false,
  }, {
    name: 'addGroup',
    bound: true,
    composable: false,
    parameters: { groupId: {type: 'Edm.String', nullable: false} },
    return: "Edm.Boolean"
  }, {
    name: 'removeGroup',
    bound: true,
    composable: false,
    parameters: { groupId: {type: 'Edm.String', nullable: false} },
    return: "Edm.Boolean"
  }, {
    name: 'assign',
    bound: true,
    composable: false,
    parameters: { assignments: {type: 'graph.managedDeviceMobileAppConfigurationAssignment', collection: true} },
  }, {
    name: 'assign',
    bound: true,
    composable: false,
    parameters: { mobileAppAssignments: {type: 'graph.mobileAppAssignment', collection: true} },
  }, {
    name: 'assign',
    bound: true,
    composable: false,
    parameters: { managedEBookAssignments: {type: 'graph.managedEBookAssignment', collection: true} },
  }, {
    name: 'assign',
    bound: true,
    composable: false,
    parameters: { assignments: {type: 'graph.deviceCompliancePolicyAssignment', collection: true} },
    return: "graph.deviceCompliancePolicyAssignment"
  }, {
    name: 'assign',
    bound: true,
    composable: false,
    parameters: { assignments: {type: 'graph.deviceConfigurationAssignment', collection: true} },
    return: "graph.deviceConfigurationAssignment"
  }, {
    name: 'assign',
    bound: true,
    composable: false,
    parameters: { enrollmentConfigurationAssignments: {type: 'graph.enrollmentConfigurationAssignment', collection: true} },
  }, {
    name: 'assign',
    bound: true,
    composable: false,
    parameters: { assignments: {type: 'graph.targetedManagedAppPolicyAssignment', collection: true} },
  }, {
    name: 'assign',
    bound: true,
    composable: false,
    parameters: { assignments: {type: 'graph.targetedManagedAppPolicyAssignment', collection: true} },
  }, {
    name: 'assign',
    bound: true,
    composable: false,
    parameters: { assignments: {type: 'graph.targetedManagedAppPolicyAssignment', collection: true} },
  }, {
    name: 'commit',
    bound: true,
    composable: false,
    parameters: { fileEncryptionInfo: {type: 'graph.fileEncryptionInfo'} },
  }, {
    name: 'renewUpload',
    bound: true,
    composable: false,
  }, {
    name: 'scheduleActionsForRules',
    bound: true,
    composable: false,
    parameters: { deviceComplianceScheduledActionForRules: {type: 'graph.deviceComplianceScheduledActionForRule', collection: true} },
  }, {
    name: 'setPriority',
    bound: true,
    composable: false,
    parameters: { priority: {type: 'Edm.Int32', nullable: false} },
  }, {
    name: 'setMobileDeviceManagementAuthority',
    bound: true,
    composable: false,
    return: "Edm.Int32"
  }, {
    name: 'sync',
    bound: true,
    composable: false,
    parameters: { syncType: {type: 'graph.deviceManagementExchangeConnectorSyncType', nullable: false} },
  }, {
    name: 'syncLicenses',
    bound: true,
    composable: false,
    return: "graph.vppToken"
  }, {
    name: 'syncMicrosoftStoreForBusinessApps',
    bound: true,
    composable: false,
  }, {
    name: 'bypassActivationLock',
    bound: true,
    composable: false,
  }, {
    name: 'cleanWindowsDevice',
    bound: true,
    composable: false,
    parameters: { keepUserData: {type: 'Edm.Boolean', nullable: false} },
  }, {
    name: 'deleteUserFromSharedAppleDevice',
    bound: true,
    composable: false,
    parameters: { userPrincipalName: {type: 'Edm.String'} },
  }, {
    name: 'disableLostMode',
    bound: true,
    composable: false,
  }, {
    name: 'locateDevice',
    bound: true,
    composable: false,
  }, {
    name: 'logoutSharedAppleDeviceActiveUser',
    bound: true,
    composable: false,
  }, {
    name: 'rebootNow',
    bound: true,
    composable: false,
  }, {
    name: 'recoverPasscode',
    bound: true,
    composable: false,
  }, {
    name: 'remoteLock',
    bound: true,
    composable: false,
  }, {
    name: 'requestRemoteAssistance',
    bound: true,
    composable: false,
  }, {
    name: 'resetPasscode',
    bound: true,
    composable: false,
  }, {
    name: 'retire',
    bound: true,
    composable: false,
  }, {
    name: 'shutDown',
    bound: true,
    composable: false,
  }, {
    name: 'syncDevice',
    bound: true,
    composable: false,
  }, {
    name: 'updateWindowsDeviceAccount',
    bound: true,
    composable: false,
    parameters: { updateWindowsDeviceAccountActionParameter: {type: 'graph.updateWindowsDeviceAccountActionParameter'} },
  }, {
    name: 'windowsDefenderScan',
    bound: true,
    composable: false,
    parameters: { quickScan: {type: 'Edm.Boolean', nullable: false} },
  }, {
    name: 'windowsDefenderUpdateSignatures',
    bound: true,
    composable: false,
  }, {
    name: 'wipe',
    bound: true,
    composable: false,
    parameters: { keepEnrollmentData: {type: 'Edm.Boolean'}, keepUserData: {type: 'Edm.Boolean'}, macOsUnlockCode: {type: 'Edm.String'} },
  }, {
    name: 'targetApps',
    bound: true,
    composable: false,
    parameters: { apps: {type: 'graph.managedMobileApp', collection: true} },
  }, {
    name: 'targetApps',
    bound: true,
    composable: false,
    parameters: { apps: {type: 'graph.managedMobileApp', collection: true} },
  }, {
    name: 'targetApps',
    bound: true,
    composable: false,
    parameters: { apps: {type: 'graph.managedMobileApp', collection: true} },
  }, {
    name: 'sendTestMessage',
    bound: true,
    composable: false,
  }, {
    name: 'beginOnboarding',
    bound: true,
    composable: false,
  }, {
    name: 'disconnect',
    bound: true,
    composable: false,
  }, {
    name: 'query',
    bound: true,
    composable: false,
    parameters: { requests: {type: 'graph.searchRequest', collection: true, nullable: false} },
    return: "graph.searchResponse"
  }, {
    name: 'copyNotebook',
    bound: true,
    composable: false,
    parameters: { groupId: {type: 'Edm.String'}, renameAs: {type: 'Edm.String'}, notebookFolder: {type: 'Edm.String'}, siteCollectionId: {type: 'Edm.String'}, siteId: {type: 'Edm.String'} },
    return: "graph.onenoteOperation"
  }, {
    name: 'copyToNotebook',
    bound: true,
    composable: false,
    parameters: { id: {type: 'Edm.String'}, groupId: {type: 'Edm.String'}, renameAs: {type: 'Edm.String'}, siteCollectionId: {type: 'Edm.String'}, siteId: {type: 'Edm.String'} },
    return: "graph.onenoteOperation"
  }, {
    name: 'copyToSectionGroup',
    bound: true,
    composable: false,
    parameters: { id: {type: 'Edm.String'}, groupId: {type: 'Edm.String'}, renameAs: {type: 'Edm.String'}, siteCollectionId: {type: 'Edm.String'}, siteId: {type: 'Edm.String'} },
    return: "graph.onenoteOperation"
  }, {
    name: 'copyToSection',
    bound: true,
    composable: false,
    parameters: { id: {type: 'Edm.String'}, groupId: {type: 'Edm.String'}, siteCollectionId: {type: 'Edm.String'}, siteId: {type: 'Edm.String'} },
    return: "graph.onenoteOperation"
  }, {
    name: 'onenotePatchContent',
    bound: true,
    composable: false,
    parameters: { commands: {type: 'graph.onenotePatchContentCommand', collection: true} },
  }, {
    name: 'getNotebookFromWebUrl',
    bound: true,
    composable: false,
    parameters: { webUrl: {type: 'Edm.String'} },
    return: "graph.CopyNotebookModel"
  }, {
    name: 'answer',
    bound: true,
    composable: false,
    parameters: { callbackUri: {type: 'Edm.String', nullable: false}, mediaConfig: {type: 'graph.mediaConfig', nullable: false}, acceptedModalities: {type: 'graph.modality', collection: true} },
  }, {
    name: 'cancelMediaProcessing',
    bound: true,
    composable: false,
    parameters: { clientContext: {type: 'Edm.String'} },
    return: "graph.cancelMediaProcessingOperation"
  }, {
    name: 'changeScreenSharingRole',
    bound: true,
    composable: false,
    parameters: { role: {type: 'graph.screenSharingRole', nullable: false} },
  }, {
    name: 'keepAlive',
    bound: true,
    composable: false,
  }, {
    name: 'mute',
    bound: true,
    composable: false,
    parameters: { clientContext: {type: 'Edm.String'} },
    return: "graph.muteParticipantOperation"
  }, {
    name: 'mute',
    bound: true,
    composable: false,
    parameters: { clientContext: {type: 'Edm.String'} },
    return: "graph.muteParticipantOperation"
  }, {
    name: 'playPrompt',
    bound: true,
    composable: false,
    parameters: { prompts: {type: 'graph.prompt', collection: true, nullable: false}, clientContext: {type: 'Edm.String'} },
    return: "graph.playPromptOperation"
  }, {
    name: 'recordResponse',
    bound: true,
    composable: false,
    parameters: { prompts: {type: 'graph.prompt', collection: true}, bargeInAllowed: {type: 'Edm.Boolean'}, initialSilenceTimeoutInSeconds: {type: 'Edm.Int32'}, maxSilenceTimeoutInSeconds: {type: 'Edm.Int32'}, maxRecordDurationInSeconds: {type: 'Edm.Int32'}, playBeep: {type: 'Edm.Boolean'}, stopTones: {type: 'Edm.String', collection: true}, clientContext: {type: 'Edm.String'} },
    return: "graph.recordOperation"
  }, {
    name: 'redirect',
    bound: true,
    composable: false,
    parameters: { targets: {type: 'graph.invitationParticipantInfo', collection: true, nullable: false}, timeout: {type: 'Edm.Int32'}, callbackUri: {type: 'Edm.String'} },
  }, {
    name: 'reject',
    bound: true,
    composable: false,
    parameters: { reason: {type: 'graph.rejectReason'}, callbackUri: {type: 'Edm.String'} },
  }, {
    name: 'subscribeToTone',
    bound: true,
    composable: false,
    parameters: { clientContext: {type: 'Edm.String'} },
    return: "graph.subscribeToToneOperation"
  }, {
    name: 'transfer',
    bound: true,
    composable: false,
    parameters: { transferTarget: {type: 'graph.invitationParticipantInfo', nullable: false} },
  }, {
    name: 'unmute',
    bound: true,
    composable: false,
    parameters: { clientContext: {type: 'Edm.String'} },
    return: "graph.unmuteParticipantOperation"
  }, {
    name: 'updateRecordingStatus',
    bound: true,
    composable: false,
    parameters: { status: {type: 'graph.recordingStatus', nullable: false}, clientContext: {type: 'Edm.String'} },
    return: "graph.updateRecordingStatusOperation"
  }, {
    name: 'createOrGet',
    bound: true,
    composable: false,
    parameters: { chatInfo: {type: 'graph.chatInfo'}, endDateTime: {type: 'Edm.DateTimeOffset'}, externalId: {type: 'Edm.String', nullable: false}, participants: {type: 'graph.meetingParticipants'}, startDateTime: {type: 'Edm.DateTimeOffset'}, subject: {type: 'Edm.String'} },
    return: "graph.onlineMeeting"
  }, {
    name: 'logTeleconferenceDeviceQuality',
    bound: true,
    composable: false,
    parameters: { quality: {type: 'graph.teleconferenceDeviceQuality', nullable: false} },
  }, {
    name: 'archive',
    bound: true,
    composable: false,
    parameters: { shouldSetSpoSiteReadOnlyForMembers: {type: 'Edm.Boolean'} },
  }, {
    name: 'clone',
    bound: true,
    composable: false,
    parameters: { displayName: {type: 'Edm.String'}, description: {type: 'Edm.String'}, mailNickname: {type: 'Edm.String'}, classification: {type: 'Edm.String'}, visibility: {type: 'graph.teamVisibilityType', nullable: false}, partsToClone: {type: 'graph.clonableTeamParts', nullable: false} },
  }, {
    name: 'unarchive',
    bound: true,
    composable: false,
  }, {
    name: 'upgrade',
    bound: true,
    composable: false,
  }, {
    name: 'approve',
    bound: true,
    composable: false,
    parameters: { message: {type: 'Edm.String'} },
  }, {
    name: 'share',
    bound: true,
    composable: false,
    parameters: { notifyTeam: {type: 'Edm.Boolean'}, startDateTime: {type: 'Edm.DateTimeOffset'}, endDateTime: {type: 'Edm.DateTimeOffset'} },
  }],
  containers: [GraphServiceContainer]
} as SchemaConfig;