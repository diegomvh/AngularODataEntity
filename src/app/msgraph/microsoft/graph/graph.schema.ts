import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { RiskLevelConfig } from './risklevel.enum.config';
import { AppliedConditionalAccessPolicyResultConfig } from './appliedconditionalaccesspolicyresult.enum.config';
import { ConditionalAccessStatusConfig } from './conditionalaccessstatus.enum.config';
import { GroupTypeConfig } from './grouptype.enum.config';
import { OperationResultConfig } from './operationresult.enum.config';
import { RiskStateConfig } from './riskstate.enum.config';
import { RiskDetailConfig } from './riskdetail.enum.config';
import { RiskEventTypeConfig } from './riskeventtype.enum.config';
import { PhoneTypeConfig } from './phonetype.enum.config';
import { EducationUserRoleConfig } from './educationuserrole.enum.config';
import { EducationExternalSourceConfig } from './educationexternalsource.enum.config';
import { EducationGenderConfig } from './educationgender.enum.config';
import { WorkbookOperationStatusConfig } from './workbookoperationstatus.enum.config';
import { AttendeeTypeConfig } from './attendeetype.enum.config';
import { ActivityDomainConfig } from './activitydomain.enum.config';
import { FreeBusyStatusConfig } from './freebusystatus.enum.config';
import { LocationTypeConfig } from './locationtype.enum.config';
import { PhysicalAddressTypeConfig } from './physicaladdresstype.enum.config';
import { LocationUniqueIdTypeConfig } from './locationuniqueidtype.enum.config';
import { BookingTypeConfig } from './bookingtype.enum.config';
import { DayOfWeekConfig } from './dayofweek.enum.config';
import { AutomaticRepliesStatusConfig } from './automaticrepliesstatus.enum.config';
import { ExternalAudienceScopeConfig } from './externalaudiencescope.enum.config';
import { DelegateMeetingMessageDeliveryOptionsConfig } from './delegatemeetingmessagedeliveryoptions.enum.config';
import { MailTipsTypeConfig } from './mailtipstype.enum.config';
import { RecipientScopeTypeConfig } from './recipientscopetype.enum.config';
import { ExchangeIdFormatConfig } from './exchangeidformat.enum.config';
import { TimeZoneStandardConfig } from './timezonestandard.enum.config';
import { BodyTypeConfig } from './bodytype.enum.config';
import { ImportanceConfig } from './importance.enum.config';
import { InferenceClassificationTypeConfig } from './inferenceclassificationtype.enum.config';
import { FollowupFlagStatusConfig } from './followupflagstatus.enum.config';
import { CalendarSharingActionImportanceConfig } from './calendarsharingactionimportance.enum.config';
import { CalendarSharingActionTypeConfig } from './calendarsharingactiontype.enum.config';
import { CalendarSharingActionConfig } from './calendarsharingaction.enum.config';
import { MeetingMessageTypeConfig } from './meetingmessagetype.enum.config';
import { EventTypeConfig } from './eventtype.enum.config';
import { RecurrencePatternTypeConfig } from './recurrencepatterntype.enum.config';
import { WeekIndexConfig } from './weekindex.enum.config';
import { RecurrenceRangeTypeConfig } from './recurrencerangetype.enum.config';
import { MeetingRequestTypeConfig } from './meetingrequesttype.enum.config';
import { ResponseTypeConfig } from './responsetype.enum.config';
import { CalendarColorConfig } from './calendarcolor.enum.config';
import { OnlineMeetingProviderTypeConfig } from './onlinemeetingprovidertype.enum.config';
import { CalendarRoleTypeConfig } from './calendarroletype.enum.config';
import { SensitivityConfig } from './sensitivity.enum.config';
import { SelectionLikelihoodInfoConfig } from './selectionlikelihoodinfo.enum.config';
import { WebsiteTypeConfig } from './websitetype.enum.config';
import { CategoryColorConfig } from './categorycolor.enum.config';
import { AttachmentTypeConfig } from './attachmenttype.enum.config';
import { MessageActionFlagConfig } from './messageactionflag.enum.config';
import { ConditionalAccessPolicyStateConfig } from './conditionalaccesspolicystate.enum.config';
import { ConditionalAccessClientAppConfig } from './conditionalaccessclientapp.enum.config';
import { ConditionalAccessGrantControlConfig } from './conditionalaccessgrantcontrol.enum.config';
import { CloudAppSecuritySessionControlTypeConfig } from './cloudappsecuritysessioncontroltype.enum.config';
import { SigninFrequencyTypeConfig } from './signinfrequencytype.enum.config';
import { PersistentBrowserSessionModeConfig } from './persistentbrowsersessionmode.enum.config';
import { ConditionalAccessDevicePlatformConfig } from './conditionalaccessdeviceplatform.enum.config';
import { InstallIntentConfig } from './installintent.enum.config';
import { MobileAppPublishingStateConfig } from './mobileapppublishingstate.enum.config';
import { WindowsArchitectureConfig } from './windowsarchitecture.enum.config';
import { ManagedAppAvailabilityConfig } from './managedappavailability.enum.config';
import { MobileAppContentFileUploadStateConfig } from './mobileappcontentfileuploadstate.enum.config';
import { WindowsDeviceTypeConfig } from './windowsdevicetype.enum.config';
import { VppTokenAccountTypeConfig } from './vpptokenaccounttype.enum.config';
import { MicrosoftStoreForBusinessLicenseTypeConfig } from './microsoftstoreforbusinesslicensetype.enum.config';
import { ComplianceStatusConfig } from './compliancestatus.enum.config';
import { MdmAppConfigKeyTypeConfig } from './mdmappconfigkeytype.enum.config';
import { InstallStateConfig } from './installstate.enum.config';
import { Windows10EditionTypeConfig } from './windows10editiontype.enum.config';
import { AppListTypeConfig } from './applisttype.enum.config';
import { AndroidRequiredPasswordTypeConfig } from './androidrequiredpasswordtype.enum.config';
import { WebBrowserCookieSettingsConfig } from './webbrowsercookiesettings.enum.config';
import { AndroidWorkProfileRequiredPasswordTypeConfig } from './androidworkprofilerequiredpasswordtype.enum.config';
import { AndroidWorkProfileCrossProfileDataSharingTypeConfig } from './androidworkprofilecrossprofiledatasharingtype.enum.config';
import { AndroidWorkProfileDefaultAppPermissionPolicyTypeConfig } from './androidworkprofiledefaultapppermissionpolicytype.enum.config';
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
import { RatingAppsTypeConfig } from './ratingappstype.enum.config';
import { RequiredPasswordTypeConfig } from './requiredpasswordtype.enum.config';
import { IosNotificationAlertTypeConfig } from './iosnotificationalerttype.enum.config';
import { StateManagementSettingConfig } from './statemanagementsetting.enum.config';
import { FirewallPreSharedKeyEncodingMethodTypeConfig } from './firewallpresharedkeyencodingmethodtype.enum.config';
import { FirewallCertificateRevocationListCheckMethodTypeConfig } from './firewallcertificaterevocationlistcheckmethodtype.enum.config';
import { FirewallPacketQueueingMethodTypeConfig } from './firewallpacketqueueingmethodtype.enum.config';
import { AppLockerApplicationControlTypeConfig } from './applockerapplicationcontroltype.enum.config';
import { ApplicationGuardBlockFileTransferTypeConfig } from './applicationguardblockfiletransfertype.enum.config';
import { ApplicationGuardBlockClipboardSharingTypeConfig } from './applicationguardblockclipboardsharingtype.enum.config';
import { BitLockerEncryptionMethodConfig } from './bitlockerencryptionmethod.enum.config';
import { DefenderCloudBlockLevelTypeConfig } from './defendercloudblockleveltype.enum.config';
import { DefenderScanTypeConfig } from './defenderscantype.enum.config';
import { WeeklyScheduleConfig } from './weeklyschedule.enum.config';
import { DefenderThreatActionConfig } from './defenderthreataction.enum.config';
import { DiagnosticDataSubmissionModeConfig } from './diagnosticdatasubmissionmode.enum.config';
import { EdgeCookiePolicyConfig } from './edgecookiepolicy.enum.config';
import { VisibilitySettingConfig } from './visibilitysetting.enum.config';
import { DefenderMonitorFileActivityConfig } from './defendermonitorfileactivity.enum.config';
import { DefenderPromptForSampleSubmissionConfig } from './defenderpromptforsamplesubmission.enum.config';
import { WindowsStartMenuAppListVisibilityTypeConfig } from './windowsstartmenuapplistvisibilitytype.enum.config';
import { WindowsStartMenuModeTypeConfig } from './windowsstartmenumodetype.enum.config';
import { WindowsSpotlightEnablementSettingsConfig } from './windowsspotlightenablementsettings.enum.config';
import { AutomaticUpdateModeConfig } from './automaticupdatemode.enum.config';
import { SafeSearchFilterTypeConfig } from './safesearchfiltertype.enum.config';
import { EdgeSearchEngineTypeConfig } from './edgesearchenginetype.enum.config';
import { PrereleaseFeaturesConfig } from './prereleasefeatures.enum.config';
import { EditionUpgradeLicenseTypeConfig } from './editionupgradelicensetype.enum.config';
import { WindowsDeliveryOptimizationModeConfig } from './windowsdeliveryoptimizationmode.enum.config';
import { SharedPCAccountDeletionPolicyTypeConfig } from './sharedpcaccountdeletionpolicytype.enum.config';
import { SharedPCAllowedAccountTypeConfig } from './sharedpcallowedaccounttype.enum.config';
import { WindowsUpdateTypeConfig } from './windowsupdatetype.enum.config';
import { InternetSiteSecurityLevelConfig } from './internetsitesecuritylevel.enum.config';
import { SiteSecurityLevelConfig } from './sitesecuritylevel.enum.config';
import { WindowsUserAccountControlSettingsConfig } from './windowsuseraccountcontrolsettings.enum.config';
import { MiracastChannelConfig } from './miracastchannel.enum.config';
import { WelcomeScreenMeetingInformationConfig } from './welcomescreenmeetinginformation.enum.config';
import { DeviceComplianceActionTypeConfig } from './devicecomplianceactiontype.enum.config';
import { DeviceThreatProtectionLevelConfig } from './devicethreatprotectionlevel.enum.config';
import { PolicyPlatformTypeConfig } from './policyplatformtype.enum.config';
import { IosUpdatesInstallStatusConfig } from './iosupdatesinstallstatus.enum.config';
import { DeviceManagementExchangeConnectorSyncTypeConfig } from './devicemanagementexchangeconnectorsynctype.enum.config';
import { MdmAuthorityConfig } from './mdmauthority.enum.config';
import { WindowsHelloForBusinessPinUsageConfig } from './windowshelloforbusinesspinusage.enum.config';
import { EnablementConfig } from './enablement.enum.config';
import { VppTokenStateConfig } from './vpptokenstate.enum.config';
import { VppTokenSyncStatusConfig } from './vpptokensyncstatus.enum.config';
import { DeviceManagementExchangeConnectorStatusConfig } from './devicemanagementexchangeconnectorstatus.enum.config';
import { DeviceManagementExchangeConnectorTypeConfig } from './devicemanagementexchangeconnectortype.enum.config';
import { MobileThreatPartnerTenantStateConfig } from './mobilethreatpartnertenantstate.enum.config';
import { DeviceManagementPartnerTenantStateConfig } from './devicemanagementpartnertenantstate.enum.config';
import { DeviceManagementPartnerAppTypeConfig } from './devicemanagementpartnerapptype.enum.config';
import { ActionStateConfig } from './actionstate.enum.config';
import { ManagedDeviceOwnerTypeConfig } from './manageddeviceownertype.enum.config';
import { ComplianceStateConfig } from './compliancestate.enum.config';
import { ManagementAgentTypeConfig } from './managementagenttype.enum.config';
import { DeviceEnrollmentTypeConfig } from './deviceenrollmenttype.enum.config';
import { DeviceRegistrationStateConfig } from './deviceregistrationstate.enum.config';
import { DeviceManagementExchangeAccessStateConfig } from './devicemanagementexchangeaccessstate.enum.config';
import { DeviceManagementExchangeAccessStateReasonConfig } from './devicemanagementexchangeaccessstatereason.enum.config';
import { ManagedDevicePartnerReportedHealthStateConfig } from './manageddevicepartnerreportedhealthstate.enum.config';
import { DeviceManagementSubscriptionStateConfig } from './devicemanagementsubscriptionstate.enum.config';
import { ManagedAppDataStorageLocationConfig } from './managedappdatastoragelocation.enum.config';
import { ManagedAppDataTransferLevelConfig } from './managedappdatatransferlevel.enum.config';
import { ManagedAppClipboardSharingLevelConfig } from './managedappclipboardsharinglevel.enum.config';
import { ManagedAppPinCharacterSetConfig } from './managedapppincharacterset.enum.config';
import { ManagedBrowserTypeConfig } from './managedbrowsertype.enum.config';
import { ManagedAppDataEncryptionTypeConfig } from './managedappdataencryptiontype.enum.config';
import { WindowsInformationProtectionEnforcementLevelConfig } from './windowsinformationprotectionenforcementlevel.enum.config';
import { WindowsInformationProtectionPinCharacterRequirementsConfig } from './windowsinformationprotectionpincharacterrequirements.enum.config';
import { ManagedAppFlaggedReasonConfig } from './managedappflaggedreason.enum.config';
import { NotificationTemplateBrandingOptionsConfig } from './notificationtemplatebrandingoptions.enum.config';
import { RemoteAssistanceOnboardingStatusConfig } from './remoteassistanceonboardingstatus.enum.config';
import { DeviceEnrollmentFailureReasonConfig } from './deviceenrollmentfailurereason.enum.config';
import { ApplicationTypeConfig } from './applicationtype.enum.config';
import { PlannerPreviewTypeConfig } from './plannerpreviewtype.enum.config';
import { OperationStatusConfig } from './operationstatus.enum.config';
import { OnenotePatchInsertPositionConfig } from './onenotepatchinsertposition.enum.config';
import { OnenotePatchActionTypeConfig } from './onenotepatchactiontype.enum.config';
import { OnenoteSourceServiceConfig } from './onenotesourceservice.enum.config';
import { OnenoteUserRoleConfig } from './onenoteuserrole.enum.config';
import { DataPolicyOperationStatusConfig } from './datapolicyoperationstatus.enum.config';
import { StatusConfig } from './status.enum.config';
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
import { ChangeTypeConfig } from './changetype.enum.config';
import { EndpointTypeConfig } from './endpointtype.enum.config';
import { MediaDirectionConfig } from './mediadirection.enum.config';
import { MediaStateConfig } from './mediastate.enum.config';
import { ModalityConfig } from './modality.enum.config';
import { RecordingStatusConfig } from './recordingstatus.enum.config';
import { RejectReasonConfig } from './rejectreason.enum.config';
import { RoutingTypeConfig } from './routingtype.enum.config';
import { ScreenSharingRoleConfig } from './screensharingrole.enum.config';
import { ToneConfig } from './tone.enum.config';
import { TeamVisibilityTypeConfig } from './teamvisibilitytype.enum.config';
import { ClonableTeamPartsConfig } from './clonableteamparts.enum.config';
import { TeamSpecializationConfig } from './teamspecialization.enum.config';
import { GiphyRatingTypeConfig } from './giphyratingtype.enum.config';
import { ChatMessageTypeConfig } from './chatmessagetype.enum.config';
import { ChatMessageImportanceConfig } from './chatmessageimportance.enum.config';
import { ChatMessagePolicyViolationDlpActionTypesConfig } from './chatmessagepolicyviolationdlpactiontypes.enum.config';
import { ChatMessagePolicyViolationUserActionTypesConfig } from './chatmessagepolicyviolationuseractiontypes.enum.config';
import { ChatMessagePolicyViolationVerdictDetailsTypesConfig } from './chatmessagepolicyviolationverdictdetailstypes.enum.config';
import { TeamsAppDistributionMethodConfig } from './teamsappdistributionmethod.enum.config';
import { TeamsAsyncOperationTypeConfig } from './teamsasyncoperationtype.enum.config';
import { TeamsAsyncOperationStatusConfig } from './teamsasyncoperationstatus.enum.config';
import { ScheduleEntityThemeConfig } from './scheduleentitytheme.enum.config';
import { TimeOffReasonIconTypeConfig } from './timeoffreasonicontype.enum.config';
import { ScheduleChangeStateConfig } from './schedulechangestate.enum.config';
import { ScheduleChangeRequestActorConfig } from './schedulechangerequestactor.enum.config';
import { WorkforceIntegrationEncryptionProtocolConfig } from './workforceintegrationencryptionprotocol.enum.config';
import { WorkforceIntegrationSupportedEntitiesConfig } from './workforceintegrationsupportedentities.enum.config';
import { ThreatAssessmentContentTypeConfig } from './threatassessmentcontenttype.enum.config';
import { ThreatExpectedAssessmentConfig } from './threatexpectedassessment.enum.config';
import { ThreatCategoryConfig } from './threatcategory.enum.config';
import { ThreatAssessmentStatusConfig } from './threatassessmentstatus.enum.config';
import { ThreatAssessmentRequestSourceConfig } from './threatassessmentrequestsource.enum.config';
import { ThreatAssessmentResultTypeConfig } from './threatassessmentresulttype.enum.config';
import { MailDestinationRoutingReasonConfig } from './maildestinationroutingreason.enum.config';
import { AuditActivityInitiatorConfig } from './auditactivityinitiator.entity.config';
import { UserIdentityConfig } from './useridentity.entity.config';
import { AppIdentityConfig } from './appidentity.entity.config';
import { TargetResourceConfig } from './targetresource.entity.config';
import { ModifiedPropertyConfig } from './modifiedproperty.entity.config';
import { KeyValueConfig } from './keyvalue.entity.config';
import { SignInStatusConfig } from './signinstatus.entity.config';
import { DeviceDetailConfig } from './devicedetail.entity.config';
import { SignInLocationConfig } from './signinlocation.entity.config';
import { GeoCoordinatesConfig } from './geocoordinates.entity.config';
import { AppliedConditionalAccessPolicyConfig } from './appliedconditionalaccesspolicy.entity.config';
import { InvitedUserMessageInfoConfig } from './invitedusermessageinfo.entity.config';
import { RecipientConfig } from './recipient.entity.config';
import { EmailAddressConfig } from './emailaddress.entity.config';
import { AssignedLicenseConfig } from './assignedlicense.entity.config';
import { AssignedPlanConfig } from './assignedplan.entity.config';
import { ObjectIdentityConfig } from './objectidentity.entity.config';
import { LicenseAssignmentStateConfig } from './licenseassignmentstate.entity.config';
import { OnPremisesExtensionAttributesConfig } from './onpremisesextensionattributes.entity.config';
import { OnPremisesProvisioningErrorConfig } from './onpremisesprovisioningerror.entity.config';
import { PasswordProfileConfig } from './passwordprofile.entity.config';
import { ProvisionedPlanConfig } from './provisionedplan.entity.config';
import { MailboxSettingsConfig } from './mailboxsettings.entity.config';
import { AutomaticRepliesSettingConfig } from './automaticrepliessetting.entity.config';
import { DateTimeTimeZoneConfig } from './datetimetimezone.entity.config';
import { LocaleInfoConfig } from './localeinfo.entity.config';
import { WorkingHoursConfig } from './workinghours.entity.config';
import { TimeZoneBaseConfig } from './timezonebase.entity.config';
import { AddInConfig } from './addin.entity.config';
import { ApiApplicationConfig } from './apiapplication.entity.config';
import { PreAuthorizedApplicationConfig } from './preauthorizedapplication.entity.config';
import { PermissionScopeConfig } from './permissionscope.entity.config';
import { AppRoleConfig } from './approle.entity.config';
import { PublicClientApplicationConfig } from './publicclientapplication.entity.config';
import { InformationalUrlConfig } from './informationalurl.entity.config';
import { KeyCredentialConfig } from './keycredential.entity.config';
import { OptionalClaimsConfig } from './optionalclaims.entity.config';
import { OptionalClaimConfig } from './optionalclaim.entity.config';
import { ParentalControlSettingsConfig } from './parentalcontrolsettings.entity.config';
import { PasswordCredentialConfig } from './passwordcredential.entity.config';
import { RequiredResourceAccessConfig } from './requiredresourceaccess.entity.config';
import { ResourceAccessConfig } from './resourceaccess.entity.config';
import { WebApplicationConfig } from './webapplication.entity.config';
import { ImplicitGrantSettingsConfig } from './implicitgrantsettings.entity.config';
import { CertificateAuthorityConfig } from './certificateauthority.entity.config';
import { PhysicalOfficeAddressConfig } from './physicalofficeaddress.entity.config';
import { PhoneConfig } from './phone.entity.config';
import { AlternativeSecurityIdConfig } from './alternativesecurityid.entity.config';
import { DomainStateConfig } from './domainstate.entity.config';
import { ServicePlanInfoConfig } from './serviceplaninfo.entity.config';
import { AssignedLabelConfig } from './assignedlabel.entity.config';
import { LicenseProcessingStateConfig } from './licenseprocessingstate.entity.config';
import { SamlSingleSignOnSettingsConfig } from './samlsinglesignonsettings.entity.config';
import { LicenseUnitsDetailConfig } from './licenseunitsdetail.entity.config';
import { PrivacyProfileConfig } from './privacyprofile.entity.config';
import { VerifiedDomainConfig } from './verifieddomain.entity.config';
import { SettingValueConfig } from './settingvalue.entity.config';
import { SettingTemplateValueConfig } from './settingtemplatevalue.entity.config';
import { ComplexExtensionValueConfig } from './complexextensionvalue.entity.config';
import { PhysicalAddressConfig } from './physicaladdress.entity.config';
import { IdentityConfig } from './identity.entity.config';
import { IdentitySetConfig } from './identityset.entity.config';
import { EducationStudentConfig } from './educationstudent.entity.config';
import { EducationTeacherConfig } from './educationteacher.entity.config';
import { EducationTermConfig } from './educationterm.entity.config';
import { PublicErrorConfig } from './publicerror.entity.config';
import { PublicErrorDetailConfig } from './publicerrordetail.entity.config';
import { PublicInnerErrorConfig } from './publicinnererror.entity.config';
import { RootConfig } from './root.entity.config';
import { SharepointIdsConfig } from './sharepointids.entity.config';
import { SiteCollectionConfig } from './sitecollection.entity.config';
import { ListInfoConfig } from './listinfo.entity.config';
import { SystemFacetConfig } from './systemfacet.entity.config';
import { QuotaConfig } from './quota.entity.config';
import { StoragePlanInformationConfig } from './storageplaninformation.entity.config';
import { AudioConfig } from './audio.entity.config';
import { DeletedConfig } from './deleted.entity.config';
import { FileConfig } from './file.entity.config';
import { HashesConfig } from './hashes.entity.config';
import { FileSystemInfoConfig } from './filesysteminfo.entity.config';
import { FolderConfig } from './folder.entity.config';
import { FolderViewConfig } from './folderview.entity.config';
import { ImageConfig } from './image.entity.config';
import { PackageConfig } from './package.entity.config';
import { PendingOperationsConfig } from './pendingoperations.entity.config';
import { PendingContentUpdateConfig } from './pendingcontentupdate.entity.config';
import { PhotoConfig } from './photo.entity.config';
import { PublicationFacetConfig } from './publicationfacet.entity.config';
import { RemoteItemConfig } from './remoteitem.entity.config';
import { ItemReferenceConfig } from './itemreference.entity.config';
import { SharedConfig } from './shared.entity.config';
import { SpecialFolderConfig } from './specialfolder.entity.config';
import { VideoConfig } from './video.entity.config';
import { SearchResultConfig } from './searchresult.entity.config';
import { WorkbookSessionInfoConfig } from './workbooksessioninfo.entity.config';
import { JsonConfig } from './json.entity.config';
import { WorkbookOperationErrorConfig } from './workbookoperationerror.entity.config';
import { WorkbookFilterCriteriaConfig } from './workbookfiltercriteria.entity.config';
import { WorkbookIconConfig } from './workbookicon.entity.config';
import { WorkbookSortFieldConfig } from './workbooksortfield.entity.config';
import { WorkbookWorksheetProtectionOptionsConfig } from './workbookworksheetprotectionoptions.entity.config';
import { WorkbookFilterDatetimeConfig } from './workbookfilterdatetime.entity.config';
import { WorkbookRangeReferenceConfig } from './workbookrangereference.entity.config';
import { AttendeeBaseConfig } from './attendeebase.entity.config';
import { LocationConstraintConfig } from './locationconstraint.entity.config';
import { LocationConfig } from './location.entity.config';
import { OutlookGeoCoordinatesConfig } from './outlookgeocoordinates.entity.config';
import { LocationConstraintItemConfig } from './locationconstraintitem.entity.config';
import { MeetingTimeSuggestionsResultConfig } from './meetingtimesuggestionsresult.entity.config';
import { MeetingTimeSuggestionConfig } from './meetingtimesuggestion.entity.config';
import { AttendeeAvailabilityConfig } from './attendeeavailability.entity.config';
import { TimeSlotConfig } from './timeslot.entity.config';
import { TimeConstraintConfig } from './timeconstraint.entity.config';
import { CustomTimeZoneConfig } from './customtimezone.entity.config';
import { StandardTimeZoneOffsetConfig } from './standardtimezoneoffset.entity.config';
import { DaylightTimeZoneOffsetConfig } from './daylighttimezoneoffset.entity.config';
import { ReminderConfig } from './reminder.entity.config';
import { MailTipsConfig } from './mailtips.entity.config';
import { AutomaticRepliesMailTipsConfig } from './automaticrepliesmailtips.entity.config';
import { MailTipsErrorConfig } from './mailtipserror.entity.config';
import { ConvertIdResultConfig } from './convertidresult.entity.config';
import { GenericErrorConfig } from './genericerror.entity.config';
import { TimeZoneInformationConfig } from './timezoneinformation.entity.config';
import { InternetMessageHeaderConfig } from './internetmessageheader.entity.config';
import { ItemBodyConfig } from './itembody.entity.config';
import { FollowupFlagConfig } from './followupflag.entity.config';
import { CalendarSharingMessageActionConfig } from './calendarsharingmessageaction.entity.config';
import { PatternedRecurrenceConfig } from './patternedrecurrence.entity.config';
import { RecurrencePatternConfig } from './recurrencepattern.entity.config';
import { RecurrenceRangeConfig } from './recurrencerange.entity.config';
import { ScheduleInformationConfig } from './scheduleinformation.entity.config';
import { ScheduleItemConfig } from './scheduleitem.entity.config';
import { FreeBusyErrorConfig } from './freebusyerror.entity.config';
import { ResponseStatusConfig } from './responsestatus.entity.config';
import { AttendeeConfig } from './attendee.entity.config';
import { OnlineMeetingInfoConfig } from './onlinemeetinginfo.entity.config';
import { ScoredEmailAddressConfig } from './scoredemailaddress.entity.config';
import { WebsiteConfig } from './website.entity.config';
import { PersonTypeConfig } from './persontype.entity.config';
import { AttachmentItemConfig } from './attachmentitem.entity.config';
import { UploadSessionConfig } from './uploadsession.entity.config';
import { MessageRulePredicatesConfig } from './messagerulepredicates.entity.config';
import { SizeRangeConfig } from './sizerange.entity.config';
import { MessageRuleActionsConfig } from './messageruleactions.entity.config';
import { BooleanColumnConfig } from './booleancolumn.entity.config';
import { CalculatedColumnConfig } from './calculatedcolumn.entity.config';
import { ChoiceColumnConfig } from './choicecolumn.entity.config';
import { CurrencyColumnConfig } from './currencycolumn.entity.config';
import { DateTimeColumnConfig } from './datetimecolumn.entity.config';
import { DefaultColumnValueConfig } from './defaultcolumnvalue.entity.config';
import { GeolocationColumnConfig } from './geolocationcolumn.entity.config';
import { LookupColumnConfig } from './lookupcolumn.entity.config';
import { NumberColumnConfig } from './numbercolumn.entity.config';
import { PersonOrGroupColumnConfig } from './personorgroupcolumn.entity.config';
import { TextColumnConfig } from './textcolumn.entity.config';
import { ContentTypeOrderConfig } from './contenttypeorder.entity.config';
import { AccessActionConfig } from './accessaction.entity.config';
import { ItemActionStatConfig } from './itemactionstat.entity.config';
import { IncompleteDataConfig } from './incompletedata.entity.config';
import { ContentTypeInfoConfig } from './contenttypeinfo.entity.config';
import { SharingInvitationConfig } from './sharinginvitation.entity.config';
import { SharingLinkConfig } from './sharinglink.entity.config';
import { ThumbnailConfig } from './thumbnail.entity.config';
import { DriveItemUploadablePropertiesConfig } from './driveitemuploadableproperties.entity.config';
import { DriveRecipientConfig } from './driverecipient.entity.config';
import { ItemPreviewInfoConfig } from './itempreviewinfo.entity.config';
import { ExtensionSchemaPropertyConfig } from './extensionschemaproperty.entity.config';
import { ConditionalAccessSessionControlConfig } from './conditionalaccesssessioncontrol.entity.config';
import { ApplicationEnforcedRestrictionsSessionControlConfig } from './applicationenforcedrestrictionssessioncontrol.entity.config';
import { CloudAppSecuritySessionControlConfig } from './cloudappsecuritysessioncontrol.entity.config';
import { SignInFrequencySessionControlConfig } from './signinfrequencysessioncontrol.entity.config';
import { PersistentBrowserSessionControlConfig } from './persistentbrowsersessioncontrol.entity.config';
import { ConditionalAccessSessionControlsConfig } from './conditionalaccesssessioncontrols.entity.config';
import { IpRangeConfig } from './iprange.entity.config';
import { IPv4CidrRangeConfig } from './ipv4cidrrange.entity.config';
import { IPv6CidrRangeConfig } from './ipv6cidrrange.entity.config';
import { ConditionalAccessApplicationsConfig } from './conditionalaccessapplications.entity.config';
import { ConditionalAccessUsersConfig } from './conditionalaccessusers.entity.config';
import { ConditionalAccessPlatformsConfig } from './conditionalaccessplatforms.entity.config';
import { ConditionalAccessLocationsConfig } from './conditionalaccesslocations.entity.config';
import { ConditionalAccessConditionSetConfig } from './conditionalaccessconditionset.entity.config';
import { ConditionalAccessGrantControlsConfig } from './conditionalaccessgrantcontrols.entity.config';
import { DeviceAndAppManagementAssignmentTargetConfig } from './deviceandappmanagementassignmenttarget.entity.config';
import { MobileAppAssignmentSettingsConfig } from './mobileappassignmentsettings.entity.config';
import { MimeContentConfig } from './mimecontent.entity.config';
import { FileEncryptionInfoConfig } from './fileencryptioninfo.entity.config';
import { AllLicensedUsersAssignmentTargetConfig } from './alllicensedusersassignmenttarget.entity.config';
import { GroupAssignmentTargetConfig } from './groupassignmenttarget.entity.config';
import { ExclusionGroupAssignmentTargetConfig } from './exclusiongroupassignmenttarget.entity.config';
import { AllDevicesAssignmentTargetConfig } from './alldevicesassignmenttarget.entity.config';
import { IosLobAppAssignmentSettingsConfig } from './ioslobappassignmentsettings.entity.config';
import { IosStoreAppAssignmentSettingsConfig } from './iosstoreappassignmentsettings.entity.config';
import { IosVppAppAssignmentSettingsConfig } from './iosvppappassignmentsettings.entity.config';
import { MicrosoftStoreForBusinessAppAssignmentSettingsConfig } from './microsoftstoreforbusinessappassignmentsettings.entity.config';
import { AndroidMinimumOperatingSystemConfig } from './androidminimumoperatingsystem.entity.config';
import { IosDeviceTypeConfig } from './iosdevicetype.entity.config';
import { IosMinimumOperatingSystemConfig } from './iosminimumoperatingsystem.entity.config';
import { WindowsMinimumOperatingSystemConfig } from './windowsminimumoperatingsystem.entity.config';
import { VppLicensingTypeConfig } from './vpplicensingtype.entity.config';
import { AppConfigurationSettingItemConfig } from './appconfigurationsettingitem.entity.config';
import { DeviceManagementSettingsConfig } from './devicemanagementsettings.entity.config';
import { IntuneBrandConfig } from './intunebrand.entity.config';
import { RgbColorConfig } from './rgbcolor.entity.config';
import { ReportConfig } from './report.entity.config';
import { AppListItemConfig } from './applistitem.entity.config';
import { OmaSettingConfig } from './omasetting.entity.config';
import { OmaSettingIntegerConfig } from './omasettinginteger.entity.config';
import { OmaSettingFloatingPointConfig } from './omasettingfloatingpoint.entity.config';
import { OmaSettingStringConfig } from './omasettingstring.entity.config';
import { OmaSettingDateTimeConfig } from './omasettingdatetime.entity.config';
import { OmaSettingStringXmlConfig } from './omasettingstringxml.entity.config';
import { OmaSettingBooleanConfig } from './omasettingboolean.entity.config';
import { OmaSettingBase64Config } from './omasettingbase64.entity.config';
import { MediaContentRatingAustraliaConfig } from './mediacontentratingaustralia.entity.config';
import { MediaContentRatingCanadaConfig } from './mediacontentratingcanada.entity.config';
import { MediaContentRatingFranceConfig } from './mediacontentratingfrance.entity.config';
import { MediaContentRatingGermanyConfig } from './mediacontentratinggermany.entity.config';
import { MediaContentRatingIrelandConfig } from './mediacontentratingireland.entity.config';
import { MediaContentRatingJapanConfig } from './mediacontentratingjapan.entity.config';
import { MediaContentRatingNewZealandConfig } from './mediacontentratingnewzealand.entity.config';
import { MediaContentRatingUnitedKingdomConfig } from './mediacontentratingunitedkingdom.entity.config';
import { MediaContentRatingUnitedStatesConfig } from './mediacontentratingunitedstates.entity.config';
import { IosNetworkUsageRuleConfig } from './iosnetworkusagerule.entity.config';
import { IosHomeScreenItemConfig } from './ioshomescreenitem.entity.config';
import { IosHomeScreenPageConfig } from './ioshomescreenpage.entity.config';
import { IosNotificationSettingsConfig } from './iosnotificationsettings.entity.config';
import { IosHomeScreenFolderConfig } from './ioshomescreenfolder.entity.config';
import { IosHomeScreenFolderPageConfig } from './ioshomescreenfolderpage.entity.config';
import { IosHomeScreenAppConfig } from './ioshomescreenapp.entity.config';
import { WindowsFirewallNetworkProfileConfig } from './windowsfirewallnetworkprofile.entity.config';
import { BitLockerRemovableDrivePolicyConfig } from './bitlockerremovabledrivepolicy.entity.config';
import { DefenderDetectedMalwareActionsConfig } from './defenderdetectedmalwareactions.entity.config';
import { Windows10NetworkProxyServerConfig } from './windows10networkproxyserver.entity.config';
import { EdgeSearchEngineBaseConfig } from './edgesearchenginebase.entity.config';
import { EdgeSearchEngineCustomConfig } from './edgesearchenginecustom.entity.config';
import { EdgeSearchEngineConfig } from './edgesearchengine.entity.config';
import { SharedPCAccountManagerPolicyConfig } from './sharedpcaccountmanagerpolicy.entity.config';
import { WindowsUpdateInstallScheduleTypeConfig } from './windowsupdateinstallscheduletype.entity.config';
import { WindowsUpdateScheduledInstallConfig } from './windowsupdatescheduledinstall.entity.config';
import { WindowsUpdateActiveHoursInstallConfig } from './windowsupdateactivehoursinstall.entity.config';
import { DeviceActionResultConfig } from './deviceactionresult.entity.config';
import { ConfigurationManagerClientEnabledFeaturesConfig } from './configurationmanagerclientenabledfeatures.entity.config';
import { DeviceHealthAttestationStateConfig } from './devicehealthattestationstate.entity.config';
import { DeviceConfigurationSettingStateConfig } from './deviceconfigurationsettingstate.entity.config';
import { SettingSourceConfig } from './settingsource.entity.config';
import { DeviceCompliancePolicySettingStateConfig } from './devicecompliancepolicysettingstate.entity.config';
import { DeviceEnrollmentPlatformRestrictionConfig } from './deviceenrollmentplatformrestriction.entity.config';
import { ComplianceManagementPartnerAssignmentConfig } from './compliancemanagementpartnerassignment.entity.config';
import { UpdateWindowsDeviceAccountActionParameterConfig } from './updatewindowsdeviceaccountactionparameter.entity.config';
import { WindowsDeviceAccountConfig } from './windowsdeviceaccount.entity.config';
import { WindowsDefenderScanActionResultConfig } from './windowsdefenderscanactionresult.entity.config';
import { DeviceGeoLocationConfig } from './devicegeolocation.entity.config';
import { DeleteUserFromSharedAppleDeviceActionResultConfig } from './deleteuserfromsharedappledeviceactionresult.entity.config';
import { LocateDeviceActionResultConfig } from './locatedeviceactionresult.entity.config';
import { RemoteLockActionResultConfig } from './remotelockactionresult.entity.config';
import { ResetPasscodeActionResultConfig } from './resetpasscodeactionresult.entity.config';
import { DeviceOperatingSystemSummaryConfig } from './deviceoperatingsystemsummary.entity.config';
import { DeviceExchangeAccessStateSummaryConfig } from './deviceexchangeaccessstatesummary.entity.config';
import { WindowsDeviceADAccountConfig } from './windowsdeviceadaccount.entity.config';
import { WindowsDeviceAzureADAccountConfig } from './windowsdeviceazureadaccount.entity.config';
import { MobileAppIdentifierConfig } from './mobileappidentifier.entity.config';
import { ManagedAppDiagnosticStatusConfig } from './managedappdiagnosticstatus.entity.config';
import { KeyValuePairConfig } from './keyvaluepair.entity.config';
import { WindowsInformationProtectionResourceCollectionConfig } from './windowsinformationprotectionresourcecollection.entity.config';
import { WindowsInformationProtectionDataRecoveryCertificateConfig } from './windowsinformationprotectiondatarecoverycertificate.entity.config';
import { WindowsInformationProtectionAppConfig } from './windowsinformationprotectionapp.entity.config';
import { WindowsInformationProtectionProxiedDomainCollectionConfig } from './windowsinformationprotectionproxieddomaincollection.entity.config';
import { ProxiedDomainConfig } from './proxieddomain.entity.config';
import { WindowsInformationProtectionIPRangeCollectionConfig } from './windowsinformationprotectioniprangecollection.entity.config';
import { AndroidMobileAppIdentifierConfig } from './androidmobileappidentifier.entity.config';
import { IosMobileAppIdentifierConfig } from './iosmobileappidentifier.entity.config';
import { ManagedAppPolicyDeploymentSummaryPerAppConfig } from './managedapppolicydeploymentsummaryperapp.entity.config';
import { WindowsInformationProtectionStoreAppConfig } from './windowsinformationprotectionstoreapp.entity.config';
import { WindowsInformationProtectionDesktopAppConfig } from './windowsinformationprotectiondesktopapp.entity.config';
import { IPv6RangeConfig } from './ipv6range.entity.config';
import { IPv4RangeConfig } from './ipv4range.entity.config';
import { RolePermissionConfig } from './rolepermission.entity.config';
import { ResourceActionConfig } from './resourceaction.entity.config';
import { PlannerAppliedCategoriesConfig } from './plannerappliedcategories.entity.config';
import { PlannerAssignmentsConfig } from './plannerassignments.entity.config';
import { PlannerExternalReferenceConfig } from './plannerexternalreference.entity.config';
import { PlannerChecklistItemConfig } from './plannerchecklistitem.entity.config';
import { PlannerAssignmentConfig } from './plannerassignment.entity.config';
import { PlannerExternalReferencesConfig } from './plannerexternalreferences.entity.config';
import { PlannerChecklistItemsConfig } from './plannerchecklistitems.entity.config';
import { PlannerOrderHintsByAssigneeConfig } from './plannerorderhintsbyassignee.entity.config';
import { PlannerUserIdsConfig } from './planneruserids.entity.config';
import { PlannerCategoryDescriptionsConfig } from './plannercategorydescriptions.entity.config';
import { ResourceVisualizationConfig } from './resourcevisualization.entity.config';
import { ResourceReferenceConfig } from './resourcereference.entity.config';
import { SharingDetailConfig } from './sharingdetail.entity.config';
import { InsightIdentityConfig } from './insightidentity.entity.config';
import { UsageDetailsConfig } from './usagedetails.entity.config';
import { NotebookLinksConfig } from './notebooklinks.entity.config';
import { ExternalLinkConfig } from './externallink.entity.config';
import { SectionLinksConfig } from './sectionlinks.entity.config';
import { PageLinksConfig } from './pagelinks.entity.config';
import { OnenoteOperationErrorConfig } from './onenoteoperationerror.entity.config';
import { DiagnosticConfig } from './diagnostic.entity.config';
import { OnenotePatchContentCommandConfig } from './onenotepatchcontentcommand.entity.config';
import { OnenotePagePreviewConfig } from './onenotepagepreview.entity.config';
import { OnenotePagePreviewLinksConfig } from './onenotepagepreviewlinks.entity.config';
import { RecentNotebookConfig } from './recentnotebook.entity.config';
import { RecentNotebookLinksConfig } from './recentnotebooklinks.entity.config';
import { CopyNotebookModelConfig } from './copynotebookmodel.entity.config';
import { ImageInfoConfig } from './imageinfo.entity.config';
import { VisualInfoConfig } from './visualinfo.entity.config';
import { CloudAppSecurityStateConfig } from './cloudappsecuritystate.entity.config';
import { FileSecurityStateConfig } from './filesecuritystate.entity.config';
import { FileHashConfig } from './filehash.entity.config';
import { AlertHistoryStateConfig } from './alerthistorystate.entity.config';
import { HostSecurityStateConfig } from './hostsecuritystate.entity.config';
import { MalwareStateConfig } from './malwarestate.entity.config';
import { NetworkConnectionConfig } from './networkconnection.entity.config';
import { ProcessConfig } from './process.entity.config';
import { RegistryKeyStateConfig } from './registrykeystate.entity.config';
import { SecurityResourceConfig } from './securityresource.entity.config';
import { AlertTriggerConfig } from './alerttrigger.entity.config';
import { UserSecurityStateConfig } from './usersecuritystate.entity.config';
import { SecurityVendorInformationConfig } from './securityvendorinformation.entity.config';
import { VulnerabilityStateConfig } from './vulnerabilitystate.entity.config';
import { AverageComparativeScoreConfig } from './averagecomparativescore.entity.config';
import { ControlScoreConfig } from './controlscore.entity.config';
import { ComplianceInformationConfig } from './complianceinformation.entity.config';
import { CertificationControlConfig } from './certificationcontrol.entity.config';
import { SecureScoreControlStateUpdateConfig } from './securescorecontrolstateupdate.entity.config';
import { CallMediaStateConfig } from './callmediastate.entity.config';
import { ResultInfoConfig } from './resultinfo.entity.config';
import { CallRouteConfig } from './callroute.entity.config';
import { ParticipantInfoConfig } from './participantinfo.entity.config';
import { InvitationParticipantInfoConfig } from './invitationparticipantinfo.entity.config';
import { MediaConfigConfig } from './mediaconfig.entity.config';
import { ChatInfoConfig } from './chatinfo.entity.config';
import { CallOptionsConfig } from './calloptions.entity.config';
import { MeetingInfoConfig } from './meetinginfo.entity.config';
import { ToneInfoConfig } from './toneinfo.entity.config';
import { IncomingContextConfig } from './incomingcontext.entity.config';
import { MeetingParticipantsConfig } from './meetingparticipants.entity.config';
import { MeetingParticipantInfoConfig } from './meetingparticipantinfo.entity.config';
import { AudioConferencingConfig } from './audioconferencing.entity.config';
import { RecordingInfoConfig } from './recordinginfo.entity.config';
import { MediaStreamConfig } from './mediastream.entity.config';
import { OutgoingCallOptionsConfig } from './outgoingcalloptions.entity.config';
import { CommsNotificationConfig } from './commsnotification.entity.config';
import { CommsNotificationsConfig } from './commsnotifications.entity.config';
import { AppHostedMediaConfigConfig } from './apphostedmediaconfig.entity.config';
import { ServiceHostedMediaConfigConfig } from './servicehostedmediaconfig.entity.config';
import { MediaInfoConfig } from './mediainfo.entity.config';
import { OrganizerMeetingInfoConfig } from './organizermeetinginfo.entity.config';
import { TokenMeetingInfoConfig } from './tokenmeetinginfo.entity.config';
import { PromptConfig } from './prompt.entity.config';
import { MediaPromptConfig } from './mediaprompt.entity.config';
import { TeleconferenceDeviceMediaQualityConfig } from './teleconferencedevicemediaquality.entity.config';
import { TeleconferenceDeviceAudioQualityConfig } from './teleconferencedeviceaudioquality.entity.config';
import { TeleconferenceDeviceVideoQualityConfig } from './teleconferencedevicevideoquality.entity.config';
import { TeleconferenceDeviceScreenSharingQualityConfig } from './teleconferencedevicescreensharingquality.entity.config';
import { TeleconferenceDeviceQualityConfig } from './teleconferencedevicequality.entity.config';
import { ChangeNotificationConfig } from './changenotification.entity.config';
import { ResourceDataConfig } from './resourcedata.entity.config';
import { ChangeNotificationCollectionConfig } from './changenotificationcollection.entity.config';
import { TeamClassSettingsConfig } from './teamclasssettings.entity.config';
import { ChatMessageAttachmentConfig } from './chatmessageattachment.entity.config';
import { ChatMessageMentionConfig } from './chatmessagemention.entity.config';
import { TeamsTabConfigurationConfig } from './teamstabconfiguration.entity.config';
import { TeamMemberSettingsConfig } from './teammembersettings.entity.config';
import { TeamGuestSettingsConfig } from './teamguestsettings.entity.config';
import { TeamMessagingSettingsConfig } from './teammessagingsettings.entity.config';
import { TeamFunSettingsConfig } from './teamfunsettings.entity.config';
import { ChatMessagePolicyViolationConfig } from './chatmessagepolicyviolation.entity.config';
import { ChatMessagePolicyViolationPolicyTipConfig } from './chatmessagepolicyviolationpolicytip.entity.config';
import { ChatMessageReactionConfig } from './chatmessagereaction.entity.config';
import { OperationErrorConfig } from './operationerror.entity.config';
import { WorkforceIntegrationEncryptionConfig } from './workforceintegrationencryption.entity.config';
import { ScheduleEntityConfig } from './scheduleentity.entity.config';
import { ShiftActivityConfig } from './shiftactivity.entity.config';
import { ShiftItemConfig } from './shiftitem.entity.config';
import { OpenShiftItemConfig } from './openshiftitem.entity.config';
import { TimeOffItemConfig } from './timeoffitem.entity.config';
import { ShiftAvailabilityConfig } from './shiftavailability.entity.config';
import { TimeRangeConfig } from './timerange.entity.config';
import { EntityConfig } from './entity.entity.config';
import { DirectoryAuditConfig } from './directoryaudit.entity.config';
import { SignInConfig } from './signin.entity.config';
import { RestrictedSignInConfig } from './restrictedsignin.entity.config';
import { AuditLogRootConfig } from './auditlogroot.entity.config';
import { InvitationConfig } from './invitation.entity.config';
import { DirectoryObjectConfig } from './directoryobject.entity.config';
import { UserConfig } from './user.entity.config';
import { AppRoleAssignmentConfig } from './approleassignment.entity.config';
import { OAuth2PermissionGrantConfig } from './oauth2permissiongrant.entity.config';
import { LicenseDetailsConfig } from './licensedetails.entity.config';
import { OutlookUserConfig } from './outlookuser.entity.config';
import { OutlookItemConfig } from './outlookitem.entity.config';
import { MessageConfig } from './message.entity.config';
import { MailFolderConfig } from './mailfolder.entity.config';
import { CalendarConfig } from './calendar.entity.config';
import { CalendarGroupConfig } from './calendargroup.entity.config';
import { EventConfig } from './event.entity.config';
import { PersonConfig } from './person.entity.config';
import { ContactConfig } from './contact.entity.config';
import { ContactFolderConfig } from './contactfolder.entity.config';
import { InferenceClassificationConfig } from './inferenceclassification.entity.config';
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
import { IdentityContainerConfig } from './identitycontainer.entity.config';
import { ConditionalAccessRootConfig } from './conditionalaccessroot.entity.config';
import { IdentityProviderConfig } from './identityprovider.entity.config';
import { AdministrativeUnitConfig } from './administrativeunit.entity.config';
import { ApplicationConfig } from './application.entity.config';
import { ExtensionPropertyConfig } from './extensionproperty.entity.config';
import { PolicyBaseConfig } from './policybase.entity.config';
import { StsPolicyConfig } from './stspolicy.entity.config';
import { HomeRealmDiscoveryPolicyConfig } from './homerealmdiscoverypolicy.entity.config';
import { TokenLifetimePolicyConfig } from './tokenlifetimepolicy.entity.config';
import { TokenIssuancePolicyConfig } from './tokenissuancepolicy.entity.config';
import { DirectoryConfig } from './directory.entity.config';
import { CertificateBasedAuthConfigurationConfig } from './certificatebasedauthconfiguration.entity.config';
import { OrgContactConfig } from './orgcontact.entity.config';
import { DeviceConfig } from './device.entity.config';
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
import { EndpointConfig } from './endpoint.entity.config';
import { GroupConfig } from './group.entity.config';
import { GroupSettingConfig } from './groupsetting.entity.config';
import { ConversationConfig } from './conversation.entity.config';
import { ConversationThreadConfig } from './conversationthread.entity.config';
import { GroupLifecyclePolicyConfig } from './grouplifecyclepolicy.entity.config';
import { PlannerGroupConfig } from './plannergroup.entity.config';
import { PolicyRootConfig } from './policyroot.entity.config';
import { ActivityBasedTimeoutPolicyConfig } from './activitybasedtimeoutpolicy.entity.config';
import { ClaimsMappingPolicyConfig } from './claimsmappingpolicy.entity.config';
import { IdentitySecurityDefaultsEnforcementPolicyConfig } from './identitysecuritydefaultsenforcementpolicy.entity.config';
import { ConditionalAccessPolicyConfig } from './conditionalaccesspolicy.entity.config';
import { ContractConfig } from './contract.entity.config';
import { ServicePrincipalConfig } from './serviceprincipal.entity.config';
import { SubscribedSkuConfig } from './subscribedsku.entity.config';
import { OrganizationConfig } from './organization.entity.config';
import { GroupSettingTemplateConfig } from './groupsettingtemplate.entity.config';
import { EducationRootConfig } from './educationroot.entity.config';
import { EducationClassConfig } from './educationclass.entity.config';
import { EducationOrganizationConfig } from './educationorganization.entity.config';
import { EducationSchoolConfig } from './educationschool.entity.config';
import { EducationUserConfig } from './educationuser.entity.config';
import { ItemAnalyticsConfig } from './itemanalytics.entity.config';
import { ColumnDefinitionConfig } from './columndefinition.entity.config';
import { ContentTypeConfig } from './contenttype.entity.config';
import { ListConfig } from './list.entity.config';
import { ListItemConfig } from './listitem.entity.config';
import { SubscriptionConfig } from './subscription.entity.config';
import { DriveItemConfig } from './driveitem.entity.config';
import { WorkbookConfig } from './workbook.entity.config';
import { PermissionConfig } from './permission.entity.config';
import { ThumbnailSetConfig } from './thumbnailset.entity.config';
import { BaseItemVersionConfig } from './baseitemversion.entity.config';
import { DriveItemVersionConfig } from './driveitemversion.entity.config';
import { WorkbookApplicationConfig } from './workbookapplication.entity.config';
import { WorkbookNamedItemConfig } from './workbooknameditem.entity.config';
import { WorkbookTableConfig } from './workbooktable.entity.config';
import { WorkbookWorksheetConfig } from './workbookworksheet.entity.config';
import { WorkbookCommentConfig } from './workbookcomment.entity.config';
import { WorkbookFunctionsConfig } from './workbookfunctions.entity.config';
import { WorkbookOperationConfig } from './workbookoperation.entity.config';
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
import { OutlookCategoryConfig } from './outlookcategory.entity.config';
import { SingleValueLegacyExtendedPropertyConfig } from './singlevaluelegacyextendedproperty.entity.config';
import { MultiValueLegacyExtendedPropertyConfig } from './multivaluelegacyextendedproperty.entity.config';
import { AttachmentConfig } from './attachment.entity.config';
import { CalendarSharingMessageConfig } from './calendarsharingmessage.entity.config';
import { EventMessageConfig } from './eventmessage.entity.config';
import { EventMessageRequestConfig } from './eventmessagerequest.entity.config';
import { EventMessageResponseConfig } from './eventmessageresponse.entity.config';
import { MessageRuleConfig } from './messagerule.entity.config';
import { MailSearchFolderConfig } from './mailsearchfolder.entity.config';
import { CalendarPermissionConfig } from './calendarpermission.entity.config';
import { InferenceClassificationOverrideConfig } from './inferenceclassificationoverride.entity.config';
import { PostConfig } from './post.entity.config';
import { FileAttachmentConfig } from './fileattachment.entity.config';
import { ItemAttachmentConfig } from './itemattachment.entity.config';
import { ReferenceAttachmentConfig } from './referenceattachment.entity.config';
import { OpenTypeExtensionConfig } from './opentypeextension.entity.config';
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
import { DeviceAppManagementConfig } from './deviceappmanagement.entity.config';
import { ManagedEBookConfig } from './managedebook.entity.config';
import { MobileAppConfig } from './mobileapp.entity.config';
import { MobileAppCategoryConfig } from './mobileappcategory.entity.config';
import { ManagedDeviceMobileAppConfigurationConfig } from './manageddevicemobileappconfiguration.entity.config';
import { VppTokenConfig } from './vpptoken.entity.config';
import { ManagedAppPolicyConfig } from './managedapppolicy.entity.config';
import { ManagedAppProtectionConfig } from './managedappprotection.entity.config';
import { TargetedManagedAppProtectionConfig } from './targetedmanagedappprotection.entity.config';
import { IosManagedAppProtectionConfig } from './iosmanagedappprotection.entity.config';
import { AndroidManagedAppProtectionConfig } from './androidmanagedappprotection.entity.config';
import { DefaultManagedAppProtectionConfig } from './defaultmanagedappprotection.entity.config';
import { ManagedAppConfigurationConfig } from './managedappconfiguration.entity.config';
import { TargetedManagedAppConfigurationConfig } from './targetedmanagedappconfiguration.entity.config';
import { WindowsInformationProtectionConfig } from './windowsinformationprotection.entity.config';
import { MdmWindowsInformationProtectionPolicyConfig } from './mdmwindowsinformationprotectionpolicy.entity.config';
import { WindowsInformationProtectionPolicyConfig } from './windowsinformationprotectionpolicy.entity.config';
import { ManagedAppStatusConfig } from './managedappstatus.entity.config';
import { MobileAppAssignmentConfig } from './mobileappassignment.entity.config';
import { MobileAppContentFileConfig } from './mobileappcontentfile.entity.config';
import { ManagedDeviceMobileAppConfigurationAssignmentConfig } from './manageddevicemobileappconfigurationassignment.entity.config';
import { ManagedDeviceMobileAppConfigurationDeviceStatusConfig } from './manageddevicemobileappconfigurationdevicestatus.entity.config';
import { ManagedDeviceMobileAppConfigurationUserStatusConfig } from './manageddevicemobileappconfigurationuserstatus.entity.config';
import { ManagedDeviceMobileAppConfigurationDeviceSummaryConfig } from './manageddevicemobileappconfigurationdevicesummary.entity.config';
import { ManagedDeviceMobileAppConfigurationUserSummaryConfig } from './manageddevicemobileappconfigurationusersummary.entity.config';
import { MacOSOfficeSuiteAppConfig } from './macosofficesuiteapp.entity.config';
import { ManagedAppConfig } from './managedapp.entity.config';
import { ManagedAndroidStoreAppConfig } from './managedandroidstoreapp.entity.config';
import { ManagedIOSStoreAppConfig } from './managediosstoreapp.entity.config';
import { ManagedMobileLobAppConfig } from './managedmobilelobapp.entity.config';
import { MobileAppContentConfig } from './mobileappcontent.entity.config';
import { ManagedAndroidLobAppConfig } from './managedandroidlobapp.entity.config';
import { ManagedIOSLobAppConfig } from './managedioslobapp.entity.config';
import { MobileLobAppConfig } from './mobilelobapp.entity.config';
import { WindowsMobileMSIConfig } from './windowsmobilemsi.entity.config';
import { WindowsUniversalAppXConfig } from './windowsuniversalappx.entity.config';
import { AndroidLobAppConfig } from './androidlobapp.entity.config';
import { IosLobAppConfig } from './ioslobapp.entity.config';
import { MicrosoftStoreForBusinessAppConfig } from './microsoftstoreforbusinessapp.entity.config';
import { WebAppConfig } from './webapp.entity.config';
import { AndroidStoreAppConfig } from './androidstoreapp.entity.config';
import { IosVppAppConfig } from './iosvppapp.entity.config';
import { IosStoreAppConfig } from './iosstoreapp.entity.config';
import { IosMobileAppConfigurationConfig } from './iosmobileappconfiguration.entity.config';
import { ManagedEBookAssignmentConfig } from './managedebookassignment.entity.config';
import { EBookInstallSummaryConfig } from './ebookinstallsummary.entity.config';
import { DeviceInstallStateConfig } from './deviceinstallstate.entity.config';
import { UserInstallStateSummaryConfig } from './userinstallstatesummary.entity.config';
import { IosVppEBookAssignmentConfig } from './iosvppebookassignment.entity.config';
import { IosVppEBookConfig } from './iosvppebook.entity.config';
import { DeviceManagementConfig } from './devicemanagement.entity.config';
import { TermsAndConditionsConfig } from './termsandconditions.entity.config';
import { DeviceConfigurationConfig } from './deviceconfiguration.entity.config';
import { DeviceCompliancePolicyConfig } from './devicecompliancepolicy.entity.config';
import { SoftwareUpdateStatusSummaryConfig } from './softwareupdatestatussummary.entity.config';
import { DeviceCompliancePolicyDeviceStateSummaryConfig } from './devicecompliancepolicydevicestatesummary.entity.config';
import { DeviceCompliancePolicySettingStateSummaryConfig } from './devicecompliancepolicysettingstatesummary.entity.config';
import { DeviceConfigurationDeviceStateSummaryConfig } from './deviceconfigurationdevicestatesummary.entity.config';
import { IosUpdateDeviceStatusConfig } from './iosupdatedevicestatus.entity.config';
import { DeviceCategoryConfig } from './devicecategory.entity.config';
import { DeviceManagementExchangeConnectorConfig } from './devicemanagementexchangeconnector.entity.config';
import { DeviceEnrollmentConfigurationConfig } from './deviceenrollmentconfiguration.entity.config';
import { OnPremisesConditionalAccessSettingsConfig } from './onpremisesconditionalaccesssettings.entity.config';
import { MobileThreatDefenseConnectorConfig } from './mobilethreatdefenseconnector.entity.config';
import { DeviceManagementPartnerConfig } from './devicemanagementpartner.entity.config';
import { ComplianceManagementPartnerConfig } from './compliancemanagementpartner.entity.config';
import { ApplePushNotificationCertificateConfig } from './applepushnotificationcertificate.entity.config';
import { ManagedDeviceOverviewConfig } from './manageddeviceoverview.entity.config';
import { DetectedAppConfig } from './detectedapp.entity.config';
import { NotificationMessageTemplateConfig } from './notificationmessagetemplate.entity.config';
import { RoleDefinitionConfig } from './roledefinition.entity.config';
import { RoleAssignmentConfig } from './roleassignment.entity.config';
import { DeviceAndAppManagementRoleAssignmentConfig } from './deviceandappmanagementroleassignment.entity.config';
import { ResourceOperationConfig } from './resourceoperation.entity.config';
import { RemoteAssistancePartnerConfig } from './remoteassistancepartner.entity.config';
import { TelecomExpenseManagementPartnerConfig } from './telecomexpensemanagementpartner.entity.config';
import { WindowsInformationProtectionAppLearningSummaryConfig } from './windowsinformationprotectionapplearningsummary.entity.config';
import { WindowsInformationProtectionNetworkLearningSummaryConfig } from './windowsinformationprotectionnetworklearningsummary.entity.config';
import { TermsAndConditionsAssignmentConfig } from './termsandconditionsassignment.entity.config';
import { TermsAndConditionsAcceptanceStatusConfig } from './termsandconditionsacceptancestatus.entity.config';
import { ReportRootConfig } from './reportroot.entity.config';
import { DeviceConfigurationAssignmentConfig } from './deviceconfigurationassignment.entity.config';
import { DeviceConfigurationDeviceStatusConfig } from './deviceconfigurationdevicestatus.entity.config';
import { DeviceConfigurationUserStatusConfig } from './deviceconfigurationuserstatus.entity.config';
import { DeviceConfigurationDeviceOverviewConfig } from './deviceconfigurationdeviceoverview.entity.config';
import { DeviceConfigurationUserOverviewConfig } from './deviceconfigurationuseroverview.entity.config';
import { SettingStateDeviceSummaryConfig } from './settingstatedevicesummary.entity.config';
import { DeviceCompliancePolicyAssignmentConfig } from './devicecompliancepolicyassignment.entity.config';
import { DeviceComplianceScheduledActionForRuleConfig } from './devicecompliancescheduledactionforrule.entity.config';
import { DeviceComplianceDeviceStatusConfig } from './devicecompliancedevicestatus.entity.config';
import { DeviceComplianceUserStatusConfig } from './devicecomplianceuserstatus.entity.config';
import { DeviceComplianceDeviceOverviewConfig } from './devicecompliancedeviceoverview.entity.config';
import { DeviceComplianceUserOverviewConfig } from './devicecomplianceuseroverview.entity.config';
import { DeviceComplianceActionItemConfig } from './devicecomplianceactionitem.entity.config';
import { AndroidCustomConfigurationConfig } from './androidcustomconfiguration.entity.config';
import { AndroidGeneralDeviceConfigurationConfig } from './androidgeneraldeviceconfiguration.entity.config';
import { AndroidWorkProfileCustomConfigurationConfig } from './androidworkprofilecustomconfiguration.entity.config';
import { AndroidWorkProfileGeneralDeviceConfigurationConfig } from './androidworkprofilegeneraldeviceconfiguration.entity.config';
import { IosCertificateProfileConfig } from './ioscertificateprofile.entity.config';
import { IosCustomConfigurationConfig } from './ioscustomconfiguration.entity.config';
import { IosGeneralDeviceConfigurationConfig } from './iosgeneraldeviceconfiguration.entity.config';
import { IosUpdateConfigurationConfig } from './iosupdateconfiguration.entity.config';
import { MacOSCustomConfigurationConfig } from './macoscustomconfiguration.entity.config';
import { MacOSGeneralDeviceConfigurationConfig } from './macosgeneraldeviceconfiguration.entity.config';
import { AppleDeviceFeaturesConfigurationBaseConfig } from './appledevicefeaturesconfigurationbase.entity.config';
import { MacOSDeviceFeaturesConfigurationConfig } from './macosdevicefeaturesconfiguration.entity.config';
import { IosDeviceFeaturesConfigurationConfig } from './iosdevicefeaturesconfiguration.entity.config';
import { Windows10EndpointProtectionConfigurationConfig } from './windows10endpointprotectionconfiguration.entity.config';
import { Windows10GeneralConfigurationConfig } from './windows10generalconfiguration.entity.config';
import { WindowsDefenderAdvancedThreatProtectionConfigurationConfig } from './windowsdefenderadvancedthreatprotectionconfiguration.entity.config';
import { EditionUpgradeConfigurationConfig } from './editionupgradeconfiguration.entity.config';
import { Windows10CustomConfigurationConfig } from './windows10customconfiguration.entity.config';
import { Windows10EnterpriseModernAppManagementConfigurationConfig } from './windows10enterprisemodernappmanagementconfiguration.entity.config';
import { SharedPCConfigurationConfig } from './sharedpcconfiguration.entity.config';
import { Windows10SecureAssessmentConfigurationConfig } from './windows10secureassessmentconfiguration.entity.config';
import { WindowsPhone81CustomConfigurationConfig } from './windowsphone81customconfiguration.entity.config';
import { WindowsUpdateForBusinessConfigurationConfig } from './windowsupdateforbusinessconfiguration.entity.config';
import { Windows81GeneralConfigurationConfig } from './windows81generalconfiguration.entity.config';
import { WindowsPhone81GeneralConfigurationConfig } from './windowsphone81generalconfiguration.entity.config';
import { Windows10TeamGeneralConfigurationConfig } from './windows10teamgeneralconfiguration.entity.config';
import { AndroidCompliancePolicyConfig } from './androidcompliancepolicy.entity.config';
import { AndroidWorkProfileCompliancePolicyConfig } from './androidworkprofilecompliancepolicy.entity.config';
import { IosCompliancePolicyConfig } from './ioscompliancepolicy.entity.config';
import { MacOSCompliancePolicyConfig } from './macoscompliancepolicy.entity.config';
import { Windows10CompliancePolicyConfig } from './windows10compliancepolicy.entity.config';
import { Windows10MobileCompliancePolicyConfig } from './windows10mobilecompliancepolicy.entity.config';
import { Windows81CompliancePolicyConfig } from './windows81compliancepolicy.entity.config';
import { WindowsPhone81CompliancePolicyConfig } from './windowsphone81compliancepolicy.entity.config';
import { DeviceComplianceSettingStateConfig } from './devicecompliancesettingstate.entity.config';
import { DeviceConfigurationStateConfig } from './deviceconfigurationstate.entity.config';
import { DeviceCompliancePolicyStateConfig } from './devicecompliancepolicystate.entity.config';
import { EnrollmentConfigurationAssignmentConfig } from './enrollmentconfigurationassignment.entity.config';
import { DeviceEnrollmentLimitConfigurationConfig } from './deviceenrollmentlimitconfiguration.entity.config';
import { DeviceEnrollmentPlatformRestrictionsConfigurationConfig } from './deviceenrollmentplatformrestrictionsconfiguration.entity.config';
import { DeviceEnrollmentWindowsHelloForBusinessConfigurationConfig } from './deviceenrollmentwindowshelloforbusinessconfiguration.entity.config';
import { ManagedMobileAppConfig } from './managedmobileapp.entity.config';
import { TargetedManagedAppPolicyAssignmentConfig } from './targetedmanagedapppolicyassignment.entity.config';
import { ManagedAppOperationConfig } from './managedappoperation.entity.config';
import { ManagedAppPolicyDeploymentSummaryConfig } from './managedapppolicydeploymentsummary.entity.config';
import { WindowsInformationProtectionAppLockerFileConfig } from './windowsinformationprotectionapplockerfile.entity.config';
import { IosManagedAppRegistrationConfig } from './iosmanagedappregistration.entity.config';
import { AndroidManagedAppRegistrationConfig } from './androidmanagedappregistration.entity.config';
import { ManagedAppStatusRawConfig } from './managedappstatusraw.entity.config';
import { LocalizedNotificationMessageConfig } from './localizednotificationmessage.entity.config';
import { DeviceAndAppManagementRoleDefinitionConfig } from './deviceandappmanagementroledefinition.entity.config';
import { EnrollmentTroubleshootingEventConfig } from './enrollmenttroubleshootingevent.entity.config';
import { PlannerTaskConfig } from './plannertask.entity.config';
import { PlannerPlanConfig } from './plannerplan.entity.config';
import { PlannerConfig } from './planner.entity.config';
import { PlannerBucketConfig } from './plannerbucket.entity.config';
import { PlannerTaskDetailsConfig } from './plannertaskdetails.entity.config';
import { PlannerAssignedToTaskBoardTaskFormatConfig } from './plannerassignedtotaskboardtaskformat.entity.config';
import { PlannerProgressTaskBoardTaskFormatConfig } from './plannerprogresstaskboardtaskformat.entity.config';
import { PlannerBucketTaskBoardTaskFormatConfig } from './plannerbuckettaskboardtaskformat.entity.config';
import { PlannerPlanDetailsConfig } from './plannerplandetails.entity.config';
import { ChangeTrackedEntityConfig } from './changetrackedentity.entity.config';
import { ShiftPreferencesConfig } from './shiftpreferences.entity.config';
import { TrendingConfig } from './trending.entity.config';
import { SharedInsightConfig } from './sharedinsight.entity.config';
import { UsedInsightConfig } from './usedinsight.entity.config';
import { OnenoteEntityBaseModelConfig } from './onenoteentitybasemodel.entity.config';
import { OnenoteEntitySchemaObjectModelConfig } from './onenoteentityschemaobjectmodel.entity.config';
import { OnenoteEntityHierarchyModelConfig } from './onenoteentityhierarchymodel.entity.config';
import { NotebookConfig } from './notebook.entity.config';
import { OnenoteSectionConfig } from './onenotesection.entity.config';
import { SectionGroupConfig } from './sectiongroup.entity.config';
import { OnenotePageConfig } from './onenotepage.entity.config';
import { OnenoteResourceConfig } from './onenoteresource.entity.config';
import { OperationConfig } from './operation.entity.config';
import { OnenoteOperationConfig } from './onenoteoperation.entity.config';
import { DataPolicyOperationConfig } from './datapolicyoperation.entity.config';
import { ActivityHistoryItemConfig } from './activityhistoryitem.entity.config';
import { SecurityConfig } from './security.entity.config';
import { AlertConfig } from './alert.entity.config';
import { SecureScoreControlProfileConfig } from './securescorecontrolprofile.entity.config';
import { SecureScoreConfig } from './securescore.entity.config';
import { ParticipantConfig } from './participant.entity.config';
import { CommsOperationConfig } from './commsoperation.entity.config';
import { InviteParticipantsOperationConfig } from './inviteparticipantsoperation.entity.config';
import { MuteParticipantOperationConfig } from './muteparticipantoperation.entity.config';
import { PlayPromptOperationConfig } from './playpromptoperation.entity.config';
import { RecordOperationConfig } from './recordoperation.entity.config';
import { SubscribeToToneOperationConfig } from './subscribetotoneoperation.entity.config';
import { UnmuteParticipantOperationConfig } from './unmuteparticipantoperation.entity.config';
import { UpdateRecordingStatusOperationConfig } from './updaterecordingstatusoperation.entity.config';
import { TeamworkConfig } from './teamwork.entity.config';
import { WorkforceIntegrationConfig } from './workforceintegration.entity.config';
import { ScheduleConfig } from './schedule.entity.config';
import { TeamsTemplateConfig } from './teamstemplate.entity.config';
import { ConversationMemberConfig } from './conversationmember.entity.config';
import { ChannelConfig } from './channel.entity.config';
import { TeamsAppInstallationConfig } from './teamsappinstallation.entity.config';
import { TeamsAsyncOperationConfig } from './teamsasyncoperation.entity.config';
import { ChatMessageConfig } from './chatmessage.entity.config';
import { ChatMessageHostedContentConfig } from './chatmessagehostedcontent.entity.config';
import { AppCatalogsConfig } from './appcatalogs.entity.config';
import { TeamsAppConfig } from './teamsapp.entity.config';
import { TeamsAppDefinitionConfig } from './teamsappdefinition.entity.config';
import { TeamsTabConfig } from './teamstab.entity.config';
import { AadUserConversationMemberConfig } from './aaduserconversationmember.entity.config';
import { ShiftConfig } from './shift.entity.config';
import { OpenShiftConfig } from './openshift.entity.config';
import { TimeOffConfig } from './timeoff.entity.config';
import { TimeOffReasonConfig } from './timeoffreason.entity.config';
import { SchedulingGroupConfig } from './schedulinggroup.entity.config';
import { ScheduleChangeRequestConfig } from './schedulechangerequest.entity.config';
import { OfferShiftRequestConfig } from './offershiftrequest.entity.config';
import { SwapShiftsChangeRequestConfig } from './swapshiftschangerequest.entity.config';
import { OpenShiftChangeRequestConfig } from './openshiftchangerequest.entity.config';
import { TimeOffRequestConfig } from './timeoffrequest.entity.config';
import { InformationProtectionConfig } from './informationprotection.entity.config';
import { ThreatAssessmentRequestConfig } from './threatassessmentrequest.entity.config';
import { ThreatAssessmentResultConfig } from './threatassessmentresult.entity.config';
import { UrlAssessmentRequestConfig } from './urlassessmentrequest.entity.config';
import { FileAssessmentRequestConfig } from './fileassessmentrequest.entity.config';
import { EmailFileAssessmentRequestConfig } from './emailfileassessmentrequest.entity.config';
import { MailAssessmentRequestConfig } from './mailassessmentrequest.entity.config';
import { GraphServiceContainer } from './graphservice.container';
//#endregion

export const GraphSchema = {
  namespace: "microsoft.graph",
  alias: "graph",
  enums: [RiskLevelConfig,
    AppliedConditionalAccessPolicyResultConfig,
    ConditionalAccessStatusConfig,
    GroupTypeConfig,
    OperationResultConfig,
    RiskStateConfig,
    RiskDetailConfig,
    RiskEventTypeConfig,
    PhoneTypeConfig,
    EducationUserRoleConfig,
    EducationExternalSourceConfig,
    EducationGenderConfig,
    WorkbookOperationStatusConfig,
    AttendeeTypeConfig,
    ActivityDomainConfig,
    FreeBusyStatusConfig,
    LocationTypeConfig,
    PhysicalAddressTypeConfig,
    LocationUniqueIdTypeConfig,
    BookingTypeConfig,
    DayOfWeekConfig,
    AutomaticRepliesStatusConfig,
    ExternalAudienceScopeConfig,
    DelegateMeetingMessageDeliveryOptionsConfig,
    MailTipsTypeConfig,
    RecipientScopeTypeConfig,
    ExchangeIdFormatConfig,
    TimeZoneStandardConfig,
    BodyTypeConfig,
    ImportanceConfig,
    InferenceClassificationTypeConfig,
    FollowupFlagStatusConfig,
    CalendarSharingActionImportanceConfig,
    CalendarSharingActionTypeConfig,
    CalendarSharingActionConfig,
    MeetingMessageTypeConfig,
    EventTypeConfig,
    RecurrencePatternTypeConfig,
    WeekIndexConfig,
    RecurrenceRangeTypeConfig,
    MeetingRequestTypeConfig,
    ResponseTypeConfig,
    CalendarColorConfig,
    OnlineMeetingProviderTypeConfig,
    CalendarRoleTypeConfig,
    SensitivityConfig,
    SelectionLikelihoodInfoConfig,
    WebsiteTypeConfig,
    CategoryColorConfig,
    AttachmentTypeConfig,
    MessageActionFlagConfig,
    ConditionalAccessPolicyStateConfig,
    ConditionalAccessClientAppConfig,
    ConditionalAccessGrantControlConfig,
    CloudAppSecuritySessionControlTypeConfig,
    SigninFrequencyTypeConfig,
    PersistentBrowserSessionModeConfig,
    ConditionalAccessDevicePlatformConfig,
    InstallIntentConfig,
    MobileAppPublishingStateConfig,
    WindowsArchitectureConfig,
    ManagedAppAvailabilityConfig,
    MobileAppContentFileUploadStateConfig,
    WindowsDeviceTypeConfig,
    VppTokenAccountTypeConfig,
    MicrosoftStoreForBusinessLicenseTypeConfig,
    ComplianceStatusConfig,
    MdmAppConfigKeyTypeConfig,
    InstallStateConfig,
    Windows10EditionTypeConfig,
    AppListTypeConfig,
    AndroidRequiredPasswordTypeConfig,
    WebBrowserCookieSettingsConfig,
    AndroidWorkProfileRequiredPasswordTypeConfig,
    AndroidWorkProfileCrossProfileDataSharingTypeConfig,
    AndroidWorkProfileDefaultAppPermissionPolicyTypeConfig,
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
    RatingAppsTypeConfig,
    RequiredPasswordTypeConfig,
    IosNotificationAlertTypeConfig,
    StateManagementSettingConfig,
    FirewallPreSharedKeyEncodingMethodTypeConfig,
    FirewallCertificateRevocationListCheckMethodTypeConfig,
    FirewallPacketQueueingMethodTypeConfig,
    AppLockerApplicationControlTypeConfig,
    ApplicationGuardBlockFileTransferTypeConfig,
    ApplicationGuardBlockClipboardSharingTypeConfig,
    BitLockerEncryptionMethodConfig,
    DefenderCloudBlockLevelTypeConfig,
    DefenderScanTypeConfig,
    WeeklyScheduleConfig,
    DefenderThreatActionConfig,
    DiagnosticDataSubmissionModeConfig,
    EdgeCookiePolicyConfig,
    VisibilitySettingConfig,
    DefenderMonitorFileActivityConfig,
    DefenderPromptForSampleSubmissionConfig,
    WindowsStartMenuAppListVisibilityTypeConfig,
    WindowsStartMenuModeTypeConfig,
    WindowsSpotlightEnablementSettingsConfig,
    AutomaticUpdateModeConfig,
    SafeSearchFilterTypeConfig,
    EdgeSearchEngineTypeConfig,
    PrereleaseFeaturesConfig,
    EditionUpgradeLicenseTypeConfig,
    WindowsDeliveryOptimizationModeConfig,
    SharedPCAccountDeletionPolicyTypeConfig,
    SharedPCAllowedAccountTypeConfig,
    WindowsUpdateTypeConfig,
    InternetSiteSecurityLevelConfig,
    SiteSecurityLevelConfig,
    WindowsUserAccountControlSettingsConfig,
    MiracastChannelConfig,
    WelcomeScreenMeetingInformationConfig,
    DeviceComplianceActionTypeConfig,
    DeviceThreatProtectionLevelConfig,
    PolicyPlatformTypeConfig,
    IosUpdatesInstallStatusConfig,
    DeviceManagementExchangeConnectorSyncTypeConfig,
    MdmAuthorityConfig,
    WindowsHelloForBusinessPinUsageConfig,
    EnablementConfig,
    VppTokenStateConfig,
    VppTokenSyncStatusConfig,
    DeviceManagementExchangeConnectorStatusConfig,
    DeviceManagementExchangeConnectorTypeConfig,
    MobileThreatPartnerTenantStateConfig,
    DeviceManagementPartnerTenantStateConfig,
    DeviceManagementPartnerAppTypeConfig,
    ActionStateConfig,
    ManagedDeviceOwnerTypeConfig,
    ComplianceStateConfig,
    ManagementAgentTypeConfig,
    DeviceEnrollmentTypeConfig,
    DeviceRegistrationStateConfig,
    DeviceManagementExchangeAccessStateConfig,
    DeviceManagementExchangeAccessStateReasonConfig,
    ManagedDevicePartnerReportedHealthStateConfig,
    DeviceManagementSubscriptionStateConfig,
    ManagedAppDataStorageLocationConfig,
    ManagedAppDataTransferLevelConfig,
    ManagedAppClipboardSharingLevelConfig,
    ManagedAppPinCharacterSetConfig,
    ManagedBrowserTypeConfig,
    ManagedAppDataEncryptionTypeConfig,
    WindowsInformationProtectionEnforcementLevelConfig,
    WindowsInformationProtectionPinCharacterRequirementsConfig,
    ManagedAppFlaggedReasonConfig,
    NotificationTemplateBrandingOptionsConfig,
    RemoteAssistanceOnboardingStatusConfig,
    DeviceEnrollmentFailureReasonConfig,
    ApplicationTypeConfig,
    PlannerPreviewTypeConfig,
    OperationStatusConfig,
    OnenotePatchInsertPositionConfig,
    OnenotePatchActionTypeConfig,
    OnenoteSourceServiceConfig,
    OnenoteUserRoleConfig,
    DataPolicyOperationStatusConfig,
    StatusConfig,
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
    ChangeTypeConfig,
    EndpointTypeConfig,
    MediaDirectionConfig,
    MediaStateConfig,
    ModalityConfig,
    RecordingStatusConfig,
    RejectReasonConfig,
    RoutingTypeConfig,
    ScreenSharingRoleConfig,
    ToneConfig,
    TeamVisibilityTypeConfig,
    ClonableTeamPartsConfig,
    TeamSpecializationConfig,
    GiphyRatingTypeConfig,
    ChatMessageTypeConfig,
    ChatMessageImportanceConfig,
    ChatMessagePolicyViolationDlpActionTypesConfig,
    ChatMessagePolicyViolationUserActionTypesConfig,
    ChatMessagePolicyViolationVerdictDetailsTypesConfig,
    TeamsAppDistributionMethodConfig,
    TeamsAsyncOperationTypeConfig,
    TeamsAsyncOperationStatusConfig,
    ScheduleEntityThemeConfig,
    TimeOffReasonIconTypeConfig,
    ScheduleChangeStateConfig,
    ScheduleChangeRequestActorConfig,
    WorkforceIntegrationEncryptionProtocolConfig,
    WorkforceIntegrationSupportedEntitiesConfig,
    ThreatAssessmentContentTypeConfig,
    ThreatExpectedAssessmentConfig,
    ThreatCategoryConfig,
    ThreatAssessmentStatusConfig,
    ThreatAssessmentRequestSourceConfig,
    ThreatAssessmentResultTypeConfig,
    MailDestinationRoutingReasonConfig],
  entities: [AuditActivityInitiatorConfig,
    UserIdentityConfig,
    AppIdentityConfig,
    TargetResourceConfig,
    ModifiedPropertyConfig,
    KeyValueConfig,
    SignInStatusConfig,
    DeviceDetailConfig,
    SignInLocationConfig,
    GeoCoordinatesConfig,
    AppliedConditionalAccessPolicyConfig,
    InvitedUserMessageInfoConfig,
    RecipientConfig,
    EmailAddressConfig,
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
    PreAuthorizedApplicationConfig,
    PermissionScopeConfig,
    AppRoleConfig,
    PublicClientApplicationConfig,
    InformationalUrlConfig,
    KeyCredentialConfig,
    OptionalClaimsConfig,
    OptionalClaimConfig,
    ParentalControlSettingsConfig,
    PasswordCredentialConfig,
    RequiredResourceAccessConfig,
    ResourceAccessConfig,
    WebApplicationConfig,
    ImplicitGrantSettingsConfig,
    CertificateAuthorityConfig,
    PhysicalOfficeAddressConfig,
    PhoneConfig,
    AlternativeSecurityIdConfig,
    DomainStateConfig,
    ServicePlanInfoConfig,
    AssignedLabelConfig,
    LicenseProcessingStateConfig,
    SamlSingleSignOnSettingsConfig,
    LicenseUnitsDetailConfig,
    PrivacyProfileConfig,
    VerifiedDomainConfig,
    SettingValueConfig,
    SettingTemplateValueConfig,
    ComplexExtensionValueConfig,
    PhysicalAddressConfig,
    IdentityConfig,
    IdentitySetConfig,
    EducationStudentConfig,
    EducationTeacherConfig,
    EducationTermConfig,
    PublicErrorConfig,
    PublicErrorDetailConfig,
    PublicInnerErrorConfig,
    RootConfig,
    SharepointIdsConfig,
    SiteCollectionConfig,
    ListInfoConfig,
    SystemFacetConfig,
    QuotaConfig,
    StoragePlanInformationConfig,
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
    SearchResultConfig,
    WorkbookSessionInfoConfig,
    JsonConfig,
    WorkbookOperationErrorConfig,
    WorkbookFilterCriteriaConfig,
    WorkbookIconConfig,
    WorkbookSortFieldConfig,
    WorkbookWorksheetProtectionOptionsConfig,
    WorkbookFilterDatetimeConfig,
    WorkbookRangeReferenceConfig,
    AttendeeBaseConfig,
    LocationConstraintConfig,
    LocationConfig,
    OutlookGeoCoordinatesConfig,
    LocationConstraintItemConfig,
    MeetingTimeSuggestionsResultConfig,
    MeetingTimeSuggestionConfig,
    AttendeeAvailabilityConfig,
    TimeSlotConfig,
    TimeConstraintConfig,
    CustomTimeZoneConfig,
    StandardTimeZoneOffsetConfig,
    DaylightTimeZoneOffsetConfig,
    ReminderConfig,
    MailTipsConfig,
    AutomaticRepliesMailTipsConfig,
    MailTipsErrorConfig,
    ConvertIdResultConfig,
    GenericErrorConfig,
    TimeZoneInformationConfig,
    InternetMessageHeaderConfig,
    ItemBodyConfig,
    FollowupFlagConfig,
    CalendarSharingMessageActionConfig,
    PatternedRecurrenceConfig,
    RecurrencePatternConfig,
    RecurrenceRangeConfig,
    ScheduleInformationConfig,
    ScheduleItemConfig,
    FreeBusyErrorConfig,
    ResponseStatusConfig,
    AttendeeConfig,
    OnlineMeetingInfoConfig,
    ScoredEmailAddressConfig,
    WebsiteConfig,
    PersonTypeConfig,
    AttachmentItemConfig,
    UploadSessionConfig,
    MessageRulePredicatesConfig,
    SizeRangeConfig,
    MessageRuleActionsConfig,
    BooleanColumnConfig,
    CalculatedColumnConfig,
    ChoiceColumnConfig,
    CurrencyColumnConfig,
    DateTimeColumnConfig,
    DefaultColumnValueConfig,
    GeolocationColumnConfig,
    LookupColumnConfig,
    NumberColumnConfig,
    PersonOrGroupColumnConfig,
    TextColumnConfig,
    ContentTypeOrderConfig,
    AccessActionConfig,
    ItemActionStatConfig,
    IncompleteDataConfig,
    ContentTypeInfoConfig,
    SharingInvitationConfig,
    SharingLinkConfig,
    ThumbnailConfig,
    DriveItemUploadablePropertiesConfig,
    DriveRecipientConfig,
    ItemPreviewInfoConfig,
    ExtensionSchemaPropertyConfig,
    ConditionalAccessSessionControlConfig,
    ApplicationEnforcedRestrictionsSessionControlConfig,
    CloudAppSecuritySessionControlConfig,
    SignInFrequencySessionControlConfig,
    PersistentBrowserSessionControlConfig,
    ConditionalAccessSessionControlsConfig,
    IpRangeConfig,
    IPv4CidrRangeConfig,
    IPv6CidrRangeConfig,
    ConditionalAccessApplicationsConfig,
    ConditionalAccessUsersConfig,
    ConditionalAccessPlatformsConfig,
    ConditionalAccessLocationsConfig,
    ConditionalAccessConditionSetConfig,
    ConditionalAccessGrantControlsConfig,
    DeviceAndAppManagementAssignmentTargetConfig,
    MobileAppAssignmentSettingsConfig,
    MimeContentConfig,
    FileEncryptionInfoConfig,
    AllLicensedUsersAssignmentTargetConfig,
    GroupAssignmentTargetConfig,
    ExclusionGroupAssignmentTargetConfig,
    AllDevicesAssignmentTargetConfig,
    IosLobAppAssignmentSettingsConfig,
    IosStoreAppAssignmentSettingsConfig,
    IosVppAppAssignmentSettingsConfig,
    MicrosoftStoreForBusinessAppAssignmentSettingsConfig,
    AndroidMinimumOperatingSystemConfig,
    IosDeviceTypeConfig,
    IosMinimumOperatingSystemConfig,
    WindowsMinimumOperatingSystemConfig,
    VppLicensingTypeConfig,
    AppConfigurationSettingItemConfig,
    DeviceManagementSettingsConfig,
    IntuneBrandConfig,
    RgbColorConfig,
    ReportConfig,
    AppListItemConfig,
    OmaSettingConfig,
    OmaSettingIntegerConfig,
    OmaSettingFloatingPointConfig,
    OmaSettingStringConfig,
    OmaSettingDateTimeConfig,
    OmaSettingStringXmlConfig,
    OmaSettingBooleanConfig,
    OmaSettingBase64Config,
    MediaContentRatingAustraliaConfig,
    MediaContentRatingCanadaConfig,
    MediaContentRatingFranceConfig,
    MediaContentRatingGermanyConfig,
    MediaContentRatingIrelandConfig,
    MediaContentRatingJapanConfig,
    MediaContentRatingNewZealandConfig,
    MediaContentRatingUnitedKingdomConfig,
    MediaContentRatingUnitedStatesConfig,
    IosNetworkUsageRuleConfig,
    IosHomeScreenItemConfig,
    IosHomeScreenPageConfig,
    IosNotificationSettingsConfig,
    IosHomeScreenFolderConfig,
    IosHomeScreenFolderPageConfig,
    IosHomeScreenAppConfig,
    WindowsFirewallNetworkProfileConfig,
    BitLockerRemovableDrivePolicyConfig,
    DefenderDetectedMalwareActionsConfig,
    Windows10NetworkProxyServerConfig,
    EdgeSearchEngineBaseConfig,
    EdgeSearchEngineCustomConfig,
    EdgeSearchEngineConfig,
    SharedPCAccountManagerPolicyConfig,
    WindowsUpdateInstallScheduleTypeConfig,
    WindowsUpdateScheduledInstallConfig,
    WindowsUpdateActiveHoursInstallConfig,
    DeviceActionResultConfig,
    ConfigurationManagerClientEnabledFeaturesConfig,
    DeviceHealthAttestationStateConfig,
    DeviceConfigurationSettingStateConfig,
    SettingSourceConfig,
    DeviceCompliancePolicySettingStateConfig,
    DeviceEnrollmentPlatformRestrictionConfig,
    ComplianceManagementPartnerAssignmentConfig,
    UpdateWindowsDeviceAccountActionParameterConfig,
    WindowsDeviceAccountConfig,
    WindowsDefenderScanActionResultConfig,
    DeviceGeoLocationConfig,
    DeleteUserFromSharedAppleDeviceActionResultConfig,
    LocateDeviceActionResultConfig,
    RemoteLockActionResultConfig,
    ResetPasscodeActionResultConfig,
    DeviceOperatingSystemSummaryConfig,
    DeviceExchangeAccessStateSummaryConfig,
    WindowsDeviceADAccountConfig,
    WindowsDeviceAzureADAccountConfig,
    MobileAppIdentifierConfig,
    ManagedAppDiagnosticStatusConfig,
    KeyValuePairConfig,
    WindowsInformationProtectionResourceCollectionConfig,
    WindowsInformationProtectionDataRecoveryCertificateConfig,
    WindowsInformationProtectionAppConfig,
    WindowsInformationProtectionProxiedDomainCollectionConfig,
    ProxiedDomainConfig,
    WindowsInformationProtectionIPRangeCollectionConfig,
    AndroidMobileAppIdentifierConfig,
    IosMobileAppIdentifierConfig,
    ManagedAppPolicyDeploymentSummaryPerAppConfig,
    WindowsInformationProtectionStoreAppConfig,
    WindowsInformationProtectionDesktopAppConfig,
    IPv6RangeConfig,
    IPv4RangeConfig,
    RolePermissionConfig,
    ResourceActionConfig,
    PlannerAppliedCategoriesConfig,
    PlannerAssignmentsConfig,
    PlannerExternalReferenceConfig,
    PlannerChecklistItemConfig,
    PlannerAssignmentConfig,
    PlannerExternalReferencesConfig,
    PlannerChecklistItemsConfig,
    PlannerOrderHintsByAssigneeConfig,
    PlannerUserIdsConfig,
    PlannerCategoryDescriptionsConfig,
    ResourceVisualizationConfig,
    ResourceReferenceConfig,
    SharingDetailConfig,
    InsightIdentityConfig,
    UsageDetailsConfig,
    NotebookLinksConfig,
    ExternalLinkConfig,
    SectionLinksConfig,
    PageLinksConfig,
    OnenoteOperationErrorConfig,
    DiagnosticConfig,
    OnenotePatchContentCommandConfig,
    OnenotePagePreviewConfig,
    OnenotePagePreviewLinksConfig,
    RecentNotebookConfig,
    RecentNotebookLinksConfig,
    CopyNotebookModelConfig,
    ImageInfoConfig,
    VisualInfoConfig,
    CloudAppSecurityStateConfig,
    FileSecurityStateConfig,
    FileHashConfig,
    AlertHistoryStateConfig,
    HostSecurityStateConfig,
    MalwareStateConfig,
    NetworkConnectionConfig,
    ProcessConfig,
    RegistryKeyStateConfig,
    SecurityResourceConfig,
    AlertTriggerConfig,
    UserSecurityStateConfig,
    SecurityVendorInformationConfig,
    VulnerabilityStateConfig,
    AverageComparativeScoreConfig,
    ControlScoreConfig,
    ComplianceInformationConfig,
    CertificationControlConfig,
    SecureScoreControlStateUpdateConfig,
    CallMediaStateConfig,
    ResultInfoConfig,
    CallRouteConfig,
    ParticipantInfoConfig,
    InvitationParticipantInfoConfig,
    MediaConfigConfig,
    ChatInfoConfig,
    CallOptionsConfig,
    MeetingInfoConfig,
    ToneInfoConfig,
    IncomingContextConfig,
    MeetingParticipantsConfig,
    MeetingParticipantInfoConfig,
    AudioConferencingConfig,
    RecordingInfoConfig,
    MediaStreamConfig,
    OutgoingCallOptionsConfig,
    CommsNotificationConfig,
    CommsNotificationsConfig,
    AppHostedMediaConfigConfig,
    ServiceHostedMediaConfigConfig,
    MediaInfoConfig,
    OrganizerMeetingInfoConfig,
    TokenMeetingInfoConfig,
    PromptConfig,
    MediaPromptConfig,
    TeleconferenceDeviceMediaQualityConfig,
    TeleconferenceDeviceAudioQualityConfig,
    TeleconferenceDeviceVideoQualityConfig,
    TeleconferenceDeviceScreenSharingQualityConfig,
    TeleconferenceDeviceQualityConfig,
    ChangeNotificationConfig,
    ResourceDataConfig,
    ChangeNotificationCollectionConfig,
    TeamClassSettingsConfig,
    ChatMessageAttachmentConfig,
    ChatMessageMentionConfig,
    TeamsTabConfigurationConfig,
    TeamMemberSettingsConfig,
    TeamGuestSettingsConfig,
    TeamMessagingSettingsConfig,
    TeamFunSettingsConfig,
    ChatMessagePolicyViolationConfig,
    ChatMessagePolicyViolationPolicyTipConfig,
    ChatMessageReactionConfig,
    OperationErrorConfig,
    WorkforceIntegrationEncryptionConfig,
    ScheduleEntityConfig,
    ShiftActivityConfig,
    ShiftItemConfig,
    OpenShiftItemConfig,
    TimeOffItemConfig,
    ShiftAvailabilityConfig,
    TimeRangeConfig,
    EntityConfig,
    DirectoryAuditConfig,
    SignInConfig,
    RestrictedSignInConfig,
    AuditLogRootConfig,
    InvitationConfig,
    DirectoryObjectConfig,
    UserConfig,
    AppRoleAssignmentConfig,
    OAuth2PermissionGrantConfig,
    LicenseDetailsConfig,
    OutlookUserConfig,
    OutlookItemConfig,
    MessageConfig,
    MailFolderConfig,
    CalendarConfig,
    CalendarGroupConfig,
    EventConfig,
    PersonConfig,
    ContactConfig,
    ContactFolderConfig,
    InferenceClassificationConfig,
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
    IdentityContainerConfig,
    ConditionalAccessRootConfig,
    IdentityProviderConfig,
    AdministrativeUnitConfig,
    ApplicationConfig,
    ExtensionPropertyConfig,
    PolicyBaseConfig,
    StsPolicyConfig,
    HomeRealmDiscoveryPolicyConfig,
    TokenLifetimePolicyConfig,
    TokenIssuancePolicyConfig,
    DirectoryConfig,
    CertificateBasedAuthConfigurationConfig,
    OrgContactConfig,
    DeviceConfig,
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
    EndpointConfig,
    GroupConfig,
    GroupSettingConfig,
    ConversationConfig,
    ConversationThreadConfig,
    GroupLifecyclePolicyConfig,
    PlannerGroupConfig,
    PolicyRootConfig,
    ActivityBasedTimeoutPolicyConfig,
    ClaimsMappingPolicyConfig,
    IdentitySecurityDefaultsEnforcementPolicyConfig,
    ConditionalAccessPolicyConfig,
    ContractConfig,
    ServicePrincipalConfig,
    SubscribedSkuConfig,
    OrganizationConfig,
    GroupSettingTemplateConfig,
    EducationRootConfig,
    EducationClassConfig,
    EducationOrganizationConfig,
    EducationSchoolConfig,
    EducationUserConfig,
    ItemAnalyticsConfig,
    ColumnDefinitionConfig,
    ContentTypeConfig,
    ListConfig,
    ListItemConfig,
    SubscriptionConfig,
    DriveItemConfig,
    WorkbookConfig,
    PermissionConfig,
    ThumbnailSetConfig,
    BaseItemVersionConfig,
    DriveItemVersionConfig,
    WorkbookApplicationConfig,
    WorkbookNamedItemConfig,
    WorkbookTableConfig,
    WorkbookWorksheetConfig,
    WorkbookCommentConfig,
    WorkbookFunctionsConfig,
    WorkbookOperationConfig,
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
    OutlookCategoryConfig,
    SingleValueLegacyExtendedPropertyConfig,
    MultiValueLegacyExtendedPropertyConfig,
    AttachmentConfig,
    CalendarSharingMessageConfig,
    EventMessageConfig,
    EventMessageRequestConfig,
    EventMessageResponseConfig,
    MessageRuleConfig,
    MailSearchFolderConfig,
    CalendarPermissionConfig,
    InferenceClassificationOverrideConfig,
    PostConfig,
    FileAttachmentConfig,
    ItemAttachmentConfig,
    ReferenceAttachmentConfig,
    OpenTypeExtensionConfig,
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
    DeviceAppManagementConfig,
    ManagedEBookConfig,
    MobileAppConfig,
    MobileAppCategoryConfig,
    ManagedDeviceMobileAppConfigurationConfig,
    VppTokenConfig,
    ManagedAppPolicyConfig,
    ManagedAppProtectionConfig,
    TargetedManagedAppProtectionConfig,
    IosManagedAppProtectionConfig,
    AndroidManagedAppProtectionConfig,
    DefaultManagedAppProtectionConfig,
    ManagedAppConfigurationConfig,
    TargetedManagedAppConfigurationConfig,
    WindowsInformationProtectionConfig,
    MdmWindowsInformationProtectionPolicyConfig,
    WindowsInformationProtectionPolicyConfig,
    ManagedAppStatusConfig,
    MobileAppAssignmentConfig,
    MobileAppContentFileConfig,
    ManagedDeviceMobileAppConfigurationAssignmentConfig,
    ManagedDeviceMobileAppConfigurationDeviceStatusConfig,
    ManagedDeviceMobileAppConfigurationUserStatusConfig,
    ManagedDeviceMobileAppConfigurationDeviceSummaryConfig,
    ManagedDeviceMobileAppConfigurationUserSummaryConfig,
    MacOSOfficeSuiteAppConfig,
    ManagedAppConfig,
    ManagedAndroidStoreAppConfig,
    ManagedIOSStoreAppConfig,
    ManagedMobileLobAppConfig,
    MobileAppContentConfig,
    ManagedAndroidLobAppConfig,
    ManagedIOSLobAppConfig,
    MobileLobAppConfig,
    WindowsMobileMSIConfig,
    WindowsUniversalAppXConfig,
    AndroidLobAppConfig,
    IosLobAppConfig,
    MicrosoftStoreForBusinessAppConfig,
    WebAppConfig,
    AndroidStoreAppConfig,
    IosVppAppConfig,
    IosStoreAppConfig,
    IosMobileAppConfigurationConfig,
    ManagedEBookAssignmentConfig,
    EBookInstallSummaryConfig,
    DeviceInstallStateConfig,
    UserInstallStateSummaryConfig,
    IosVppEBookAssignmentConfig,
    IosVppEBookConfig,
    DeviceManagementConfig,
    TermsAndConditionsConfig,
    DeviceConfigurationConfig,
    DeviceCompliancePolicyConfig,
    SoftwareUpdateStatusSummaryConfig,
    DeviceCompliancePolicyDeviceStateSummaryConfig,
    DeviceCompliancePolicySettingStateSummaryConfig,
    DeviceConfigurationDeviceStateSummaryConfig,
    IosUpdateDeviceStatusConfig,
    DeviceCategoryConfig,
    DeviceManagementExchangeConnectorConfig,
    DeviceEnrollmentConfigurationConfig,
    OnPremisesConditionalAccessSettingsConfig,
    MobileThreatDefenseConnectorConfig,
    DeviceManagementPartnerConfig,
    ComplianceManagementPartnerConfig,
    ApplePushNotificationCertificateConfig,
    ManagedDeviceOverviewConfig,
    DetectedAppConfig,
    NotificationMessageTemplateConfig,
    RoleDefinitionConfig,
    RoleAssignmentConfig,
    DeviceAndAppManagementRoleAssignmentConfig,
    ResourceOperationConfig,
    RemoteAssistancePartnerConfig,
    TelecomExpenseManagementPartnerConfig,
    WindowsInformationProtectionAppLearningSummaryConfig,
    WindowsInformationProtectionNetworkLearningSummaryConfig,
    TermsAndConditionsAssignmentConfig,
    TermsAndConditionsAcceptanceStatusConfig,
    ReportRootConfig,
    DeviceConfigurationAssignmentConfig,
    DeviceConfigurationDeviceStatusConfig,
    DeviceConfigurationUserStatusConfig,
    DeviceConfigurationDeviceOverviewConfig,
    DeviceConfigurationUserOverviewConfig,
    SettingStateDeviceSummaryConfig,
    DeviceCompliancePolicyAssignmentConfig,
    DeviceComplianceScheduledActionForRuleConfig,
    DeviceComplianceDeviceStatusConfig,
    DeviceComplianceUserStatusConfig,
    DeviceComplianceDeviceOverviewConfig,
    DeviceComplianceUserOverviewConfig,
    DeviceComplianceActionItemConfig,
    AndroidCustomConfigurationConfig,
    AndroidGeneralDeviceConfigurationConfig,
    AndroidWorkProfileCustomConfigurationConfig,
    AndroidWorkProfileGeneralDeviceConfigurationConfig,
    IosCertificateProfileConfig,
    IosCustomConfigurationConfig,
    IosGeneralDeviceConfigurationConfig,
    IosUpdateConfigurationConfig,
    MacOSCustomConfigurationConfig,
    MacOSGeneralDeviceConfigurationConfig,
    AppleDeviceFeaturesConfigurationBaseConfig,
    MacOSDeviceFeaturesConfigurationConfig,
    IosDeviceFeaturesConfigurationConfig,
    Windows10EndpointProtectionConfigurationConfig,
    Windows10GeneralConfigurationConfig,
    WindowsDefenderAdvancedThreatProtectionConfigurationConfig,
    EditionUpgradeConfigurationConfig,
    Windows10CustomConfigurationConfig,
    Windows10EnterpriseModernAppManagementConfigurationConfig,
    SharedPCConfigurationConfig,
    Windows10SecureAssessmentConfigurationConfig,
    WindowsPhone81CustomConfigurationConfig,
    WindowsUpdateForBusinessConfigurationConfig,
    Windows81GeneralConfigurationConfig,
    WindowsPhone81GeneralConfigurationConfig,
    Windows10TeamGeneralConfigurationConfig,
    AndroidCompliancePolicyConfig,
    AndroidWorkProfileCompliancePolicyConfig,
    IosCompliancePolicyConfig,
    MacOSCompliancePolicyConfig,
    Windows10CompliancePolicyConfig,
    Windows10MobileCompliancePolicyConfig,
    Windows81CompliancePolicyConfig,
    WindowsPhone81CompliancePolicyConfig,
    DeviceComplianceSettingStateConfig,
    DeviceConfigurationStateConfig,
    DeviceCompliancePolicyStateConfig,
    EnrollmentConfigurationAssignmentConfig,
    DeviceEnrollmentLimitConfigurationConfig,
    DeviceEnrollmentPlatformRestrictionsConfigurationConfig,
    DeviceEnrollmentWindowsHelloForBusinessConfigurationConfig,
    ManagedMobileAppConfig,
    TargetedManagedAppPolicyAssignmentConfig,
    ManagedAppOperationConfig,
    ManagedAppPolicyDeploymentSummaryConfig,
    WindowsInformationProtectionAppLockerFileConfig,
    IosManagedAppRegistrationConfig,
    AndroidManagedAppRegistrationConfig,
    ManagedAppStatusRawConfig,
    LocalizedNotificationMessageConfig,
    DeviceAndAppManagementRoleDefinitionConfig,
    EnrollmentTroubleshootingEventConfig,
    PlannerTaskConfig,
    PlannerPlanConfig,
    PlannerConfig,
    PlannerBucketConfig,
    PlannerTaskDetailsConfig,
    PlannerAssignedToTaskBoardTaskFormatConfig,
    PlannerProgressTaskBoardTaskFormatConfig,
    PlannerBucketTaskBoardTaskFormatConfig,
    PlannerPlanDetailsConfig,
    ChangeTrackedEntityConfig,
    ShiftPreferencesConfig,
    TrendingConfig,
    SharedInsightConfig,
    UsedInsightConfig,
    OnenoteEntityBaseModelConfig,
    OnenoteEntitySchemaObjectModelConfig,
    OnenoteEntityHierarchyModelConfig,
    NotebookConfig,
    OnenoteSectionConfig,
    SectionGroupConfig,
    OnenotePageConfig,
    OnenoteResourceConfig,
    OperationConfig,
    OnenoteOperationConfig,
    DataPolicyOperationConfig,
    ActivityHistoryItemConfig,
    SecurityConfig,
    AlertConfig,
    SecureScoreControlProfileConfig,
    SecureScoreConfig,
    ParticipantConfig,
    CommsOperationConfig,
    InviteParticipantsOperationConfig,
    MuteParticipantOperationConfig,
    PlayPromptOperationConfig,
    RecordOperationConfig,
    SubscribeToToneOperationConfig,
    UnmuteParticipantOperationConfig,
    UpdateRecordingStatusOperationConfig,
    TeamworkConfig,
    WorkforceIntegrationConfig,
    ScheduleConfig,
    TeamsTemplateConfig,
    ConversationMemberConfig,
    ChannelConfig,
    TeamsAppInstallationConfig,
    TeamsAsyncOperationConfig,
    ChatMessageConfig,
    ChatMessageHostedContentConfig,
    AppCatalogsConfig,
    TeamsAppConfig,
    TeamsAppDefinitionConfig,
    TeamsTabConfig,
    AadUserConversationMemberConfig,
    ShiftConfig,
    OpenShiftConfig,
    TimeOffConfig,
    TimeOffReasonConfig,
    SchedulingGroupConfig,
    ScheduleChangeRequestConfig,
    OfferShiftRequestConfig,
    SwapShiftsChangeRequestConfig,
    OpenShiftChangeRequestConfig,
    TimeOffRequestConfig,
    InformationProtectionConfig,
    ThreatAssessmentRequestConfig,
    ThreatAssessmentResultConfig,
    UrlAssessmentRequestConfig,
    FileAssessmentRequestConfig,
    EmailFileAssessmentRequestConfig,
    MailAssessmentRequestConfig],
  callables: [{
    name: 'delta',
    bound: true,
    composable: false,
    return: "graph.application"
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    return: "graph.user"
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    return: "graph.group"
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    return: "graph.administrativeUnit"
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
    return: "graph.directoryRole"
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    return: "graph.oAuth2PermissionGrant"
  }, {
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
    name: 'count',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChart', collection: true} },
    return: "Edm.Int32"
  }, {
    name: 'itemAt',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookChartPoint', collection: true}, index: {type: 'Edm.Int32', nullable: false} },
    return: "graph.workbookChartPoint"
  }, {
    name: 'count',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChartPoint', collection: true} },
    return: "Edm.Int32"
  }, {
    name: 'itemAt',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookChartSeries', collection: true}, index: {type: 'Edm.Int32', nullable: false} },
    return: "graph.workbookChartSeries"
  }, {
    name: 'count',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChartSeries', collection: true} },
    return: "Edm.Int32"
  }, {
    name: 'range',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookNamedItem'} },
    return: "graph.workbookRange"
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
    name: 'visibleView',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'} },
    return: "graph.workbookRangeView"
  }, {
    name: 'itemAt',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRangeBorder', collection: true}, index: {type: 'Edm.Int32', nullable: false} },
    return: "graph.workbookRangeBorder"
  }, {
    name: 'count',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookRangeBorder', collection: true} },
    return: "Edm.Int32"
  }, {
    name: 'range',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRangeView'} },
    return: "graph.workbookRange"
  }, {
    name: 'itemAt',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRangeView', collection: true}, index: {type: 'Edm.Int32', nullable: false} },
    return: "graph.workbookRangeView"
  }, {
    name: 'dataBodyRange',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTable'} },
    return: "graph.workbookRange"
  }, {
    name: 'headerRowRange',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTable'} },
    return: "graph.workbookRange"
  }, {
    name: 'range',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTable'} },
    return: "graph.workbookRange"
  }, {
    name: 'totalRowRange',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTable'} },
    return: "graph.workbookRange"
  }, {
    name: 'itemAt',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTable', collection: true}, index: {type: 'Edm.Int32', nullable: false} },
    return: "graph.workbookTable"
  }, {
    name: 'count',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTable', collection: true} },
    return: "Edm.Int32"
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
    parameters: { bindparameter: {type: 'graph.workbookTableColumn'} },
    return: "graph.workbookRange"
  }, {
    name: 'range',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTableColumn'} },
    return: "graph.workbookRange"
  }, {
    name: 'totalRowRange',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTableColumn'} },
    return: "graph.workbookRange"
  }, {
    name: 'itemAt',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTableColumn', collection: true}, index: {type: 'Edm.Int32', nullable: false} },
    return: "graph.workbookTableColumn"
  }, {
    name: 'count',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTableColumn', collection: true} },
    return: "Edm.Int32"
  }, {
    name: 'range',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTableRow'} },
    return: "graph.workbookRange"
  }, {
    name: 'itemAt',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTableRow', collection: true}, index: {type: 'Edm.Int32', nullable: false} },
    return: "graph.workbookTableRow"
  }, {
    name: 'count',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTableRow', collection: true} },
    return: "Edm.Int32"
  }, {
    name: 'cell',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookWorksheet'}, row: {type: 'Edm.Int32', nullable: false}, column: {type: 'Edm.Int32', nullable: false} },
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
    name: 'delta',
    bound: true,
    composable: false,
    parameters: { bindingparameter: {type: 'graph.mailFolder', collection: true, nullable: false} },
    return: "graph.mailFolder"
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
    parameters: { bindingparameter: {type: 'graph.contact', collection: true, nullable: false} },
    return: "graph.contact"
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    parameters: { bindingparameter: {type: 'graph.contactFolder', collection: true, nullable: false} },
    return: "graph.contactFolder"
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
    name: 'delta',
    bound: true,
    composable: false,
    parameters: { bindingparameter: {type: 'graph.message', collection: true, nullable: false} },
    return: "graph.message"
  }, {
    name: 'allowedCalendarSharingRoles',
    bound: true,
    composable: false,
    parameters: { bindingparameter: {type: 'graph.calendar'}, User: {type: 'Edm.String', nullable: false} },
    return: "graph.calendarRoleType"
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
    return: "graph.driveItem"
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
    name: 'search',
    bound: true,
    composable: false,
    parameters: { q: {type: 'Edm.String'} },
    return: "graph.driveItem"
  }, {
    name: 'sharedWithMe',
    bound: true,
    composable: false,
    return: "graph.driveItem"
  }, {
    name: 'deviceConfigurationUserActivity',
    bound: true,
    composable: true,
    return: "graph.report"
  }, {
    name: 'deviceConfigurationDeviceActivity',
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
    name: 'getOffice365ActivationsUserDetail',
    bound: true,
    composable: true,
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
    name: 'getOffice365ServicesUserCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getOffice365ActiveUserCounts',
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
    name: 'getOffice365GroupsActivityCounts',
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
    name: 'getOffice365GroupsActivityFileCounts',
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
    name: 'getOneDriveActivityUserCounts',
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
    name: 'getOneDriveUsageAccountCounts',
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
    name: 'getSharePointActivityFileCounts',
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
    name: 'getSharePointActivityPages',
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
    name: 'getSharePointSiteUsagePages',
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
    name: 'getSkypeForBusinessPeerToPeerActivityCounts',
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
    name: 'getSkypeForBusinessPeerToPeerActivityMinuteCounts',
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
    name: 'getSkypeForBusinessOrganizerActivityUserCounts',
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
    name: 'getSkypeForBusinessParticipantActivityCounts',
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
    name: 'getSkypeForBusinessParticipantActivityMinuteCounts',
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
    name: 'getYammerGroupsActivityCounts',
    bound: true,
    composable: true,
    parameters: { period: {type: 'Edm.String', nullable: false} },
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
    name: 'getTeamsDeviceUsageUserCounts',
    bound: true,
    composable: true,
    parameters: { reportRoot: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: "graph.report"
  }, {
    name: 'getTeamsDeviceUsageDistributionUserCounts',
    bound: true,
    composable: true,
    parameters: { reportRoot: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
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
    name: 'preview',
    bound: true,
    composable: false,
    return: "graph.onenotePagePreview"
  }, {
    name: 'getRecentNotebooks',
    bound: true,
    composable: false,
    parameters: { includePersonalNotebooks: {type: 'Edm.Boolean', nullable: false} },
    return: "graph.recentNotebook"
  }, {
    name: 'recent',
    path: "activities",
    bound: true,
    composable: false,
    parameters: { activities: {type: 'graph.userActivity', collection: true} },
    return: "graph.userActivity"
  }, {
    name: 'getByIds',
    path: "bindingParameter",
    bound: true,
    composable: false,
    parameters: { ids: {type: 'Edm.String', collection: true, nullable: false}, types: {type: 'Edm.String', collection: true} },
    return: "graph.directoryObject"
  }, {
    name: 'getAvailableExtensionProperties',
    path: "bindingParameter",
    bound: true,
    composable: false,
    parameters: { isSyncedFromOnPremises: {type: 'Edm.Boolean'} },
    return: "graph.extensionProperty"
  }, {
    name: 'validateProperties',
    path: "bindingParameter",
    bound: true,
    composable: false,
    parameters: { entityType: {type: 'Edm.String'}, displayName: {type: 'Edm.String'}, mailNickname: {type: 'Edm.String'}, onBehalfOfUserId: {type: 'Edm.Guid'} },
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
    name: 'assignLicense',
    bound: true,
    composable: false,
    parameters: { addLicenses: {type: 'graph.assignedLicense', collection: true, nullable: false}, removeLicenses: {type: 'Edm.Guid', collection: true, nullable: false} },
    return: "graph.user"
  }, {
    name: 'changePassword',
    bound: true,
    composable: false,
    parameters: { currentPassword: {type: 'Edm.String'}, newPassword: {type: 'Edm.String'} },
  }, {
    name: 'revokeSignInSessions',
    bound: true,
    composable: false,
    return: "Edm.Boolean"
  }, {
    name: 'reprocessLicenseAssignment',
    bound: true,
    composable: false,
    return: "graph.user"
  }, {
    name: 'findMeetingTimes',
    bound: true,
    composable: false,
    parameters: { attendees: {type: 'graph.attendeeBase', collection: true}, locationConstraint: {type: 'graph.locationConstraint'}, timeConstraint: {type: 'graph.timeConstraint'}, meetingDuration: {type: 'Edm.Duration'}, maxCandidates: {type: 'Edm.Int32'}, isOrganizerOptional: {type: 'Edm.Boolean'}, returnSuggestionReasons: {type: 'Edm.Boolean'}, minimumAttendeePercentage: {type: 'Edm.Double'} },
    return: "graph.meetingTimeSuggestionsResult"
  }, {
    name: 'sendMail',
    bound: true,
    composable: false,
    parameters: { Message: {type: 'graph.message', nullable: false}, SaveToSentItems: {type: 'Edm.Boolean'} },
  }, {
    name: 'getMailTips',
    bound: true,
    composable: false,
    parameters: { EmailAddresses: {type: 'Edm.String', collection: true, nullable: false}, MailTipsOptions: {type: 'graph.mailTipsType'} },
    return: "graph.mailTips"
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
    name: 'assignLicense',
    bound: true,
    composable: false,
    parameters: { addLicenses: {type: 'graph.assignedLicense', collection: true, nullable: false}, removeLicenses: {type: 'Edm.Guid', collection: true, nullable: false} },
    return: "graph.group"
  }, {
    name: 'validateProperties',
    bound: true,
    composable: false,
    parameters: { displayName: {type: 'Edm.String'}, mailNickname: {type: 'Edm.String'}, onBehalfOfUserId: {type: 'Edm.Guid'} },
  }, {
    name: 'subscribeByMail',
    bound: true,
    composable: false,
  }, {
    name: 'unsubscribeByMail',
    bound: true,
    composable: false,
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
    name: 'renew',
    bound: true,
    composable: false,
  }, {
    name: 'createSession',
    bound: true,
    composable: false,
    parameters: { this: {type: 'graph.workbook'}, persistChanges: {type: 'Edm.Boolean', nullable: false} },
    return: "graph.workbookSessionInfo"
  }, {
    name: 'closeSession',
    bound: true,
    composable: false,
    parameters: { this: {type: 'graph.workbook'} },
  }, {
    name: 'refreshSession',
    bound: true,
    composable: false,
    parameters: { this: {type: 'graph.workbook'} },
  }, {
    name: 'calculate',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookApplication'}, calculationType: {type: 'Edm.String', nullable: false} },
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
    name: 'add',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChart', collection: true}, type: {type: 'Edm.String', nullable: false}, sourceData: {type: 'graph.Json'}, seriesBy: {type: 'Edm.String', nullable: false} },
    return: "graph.workbookChart"
  }, {
    name: 'clear',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChartFill'} },
  }, {
    name: 'setSolidColor',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChartFill'}, color: {type: 'Edm.String'} },
  }, {
    name: 'clear',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChartLineFormat'} },
  }, {
    name: 'apply',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFilter'}, criteria: {type: 'graph.workbookFilterCriteria'} },
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
    name: 'daverage',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, database: {type: 'graph.Json'}, field: {type: 'graph.Json'}, criteria: {type: 'graph.Json'} },
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
    name: 'dget',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, database: {type: 'graph.Json'}, field: {type: 'graph.Json'}, criteria: {type: 'graph.Json'} },
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
    name: 'delta',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number1: {type: 'graph.Json'}, number2: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'devSq',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'disc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, pr: {type: 'graph.Json'}, redemption: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
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
    name: 'duration',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, coupon: {type: 'graph.Json'}, yld: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
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
    name: 'erf_Precise',
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
    name: 'fvschedule',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, principal: {type: 'graph.Json'}, schedule: {type: 'graph.Json'} },
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
    name: 'gamma',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'} },
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
    name: 'geStep',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, step: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'geoMean',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'hlookup',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, lookupValue: {type: 'graph.Json'}, tableArray: {type: 'graph.Json'}, rowIndexNum: {type: 'graph.Json'}, rangeLookup: {type: 'graph.Json'} },
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
    name: 'hour',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, serialNumber: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'hypGeom_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, sampleS: {type: 'graph.Json'}, numberSample: {type: 'graph.Json'}, populationS: {type: 'graph.Json'}, numberPop: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'hyperlink',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, linkLocation: {type: 'graph.Json'}, friendlyName: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'iso_Ceiling',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, significance: {type: 'graph.Json'} },
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
    name: 'imaginary',
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
    name: 'isOdd',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'isText',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, value: {type: 'graph.Json'} },
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
    name: 'mduration',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, coupon: {type: 'graph.Json'}, yld: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'mirr',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'}, financeRate: {type: 'graph.Json'}, reinvestRate: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'mround',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, multiple: {type: 'graph.Json'} },
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
    name: 'nper',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, rate: {type: 'graph.Json'}, pmt: {type: 'graph.Json'}, pv: {type: 'graph.Json'}, fv: {type: 'graph.Json'}, type: {type: 'graph.Json'} },
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
    name: 'standardize',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, mean: {type: 'graph.Json'}, standardDev: {type: 'graph.Json'} },
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
    name: 'usdollar',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, decimals: {type: 'graph.Json'} },
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
    name: 'vlookup',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, lookupValue: {type: 'graph.Json'}, tableArray: {type: 'graph.Json'}, colIndexNum: {type: 'graph.Json'}, rangeLookup: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'value',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'} },
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
    name: 'vdb',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, cost: {type: 'graph.Json'}, salvage: {type: 'graph.Json'}, life: {type: 'graph.Json'}, startPeriod: {type: 'graph.Json'}, endPeriod: {type: 'graph.Json'}, factor: {type: 'graph.Json'}, noSwitch: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'weekNum',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, serialNumber: {type: 'graph.Json'}, returnType: {type: 'graph.Json'} },
    return: "graph.workbookFunctionResult"
  }, {
    name: 'weekday',
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
    parameters: { bindparameter: {type: 'graph.workbookNamedItem', collection: true}, name: {type: 'Edm.String'}, reference: {type: 'graph.Json'}, comment: {type: 'Edm.String'} },
    return: "graph.workbookNamedItem"
  }, {
    name: 'addFormulaLocal',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookNamedItem', collection: true}, name: {type: 'Edm.String'}, formula: {type: 'Edm.String'}, comment: {type: 'Edm.String'} },
    return: "graph.workbookNamedItem"
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
    name: 'clear',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, applyTo: {type: 'Edm.String', nullable: false} },
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
    name: 'clear',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookRangeFill'} },
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
    name: 'apply',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookRangeSort'}, fields: {type: 'graph.workbookSortField', collection: true}, matchCase: {type: 'Edm.Boolean', nullable: false}, hasHeaders: {type: 'Edm.Boolean', nullable: false}, orientation: {type: 'Edm.String', nullable: false}, method: {type: 'Edm.String', nullable: false} },
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
    name: 'apply',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTableSort'}, fields: {type: 'graph.workbookSortField', collection: true}, matchCase: {type: 'Edm.Boolean', nullable: false}, method: {type: 'Edm.String', nullable: false} },
  }, {
    name: 'clear',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTableSort'} },
  }, {
    name: 'reapply',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTableSort'} },
  }, {
    name: 'add',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookWorksheet', collection: true}, name: {type: 'Edm.String'} },
    return: "graph.workbookWorksheet"
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
    name: 'createForward',
    path: "bindingParameter",
    bound: true,
    composable: false,
    parameters: { ToRecipients: {type: 'graph.recipient', collection: true}, Message: {type: 'graph.message'}, Comment: {type: 'Edm.String'} },
    return: "graph.message"
  }, {
    name: 'send',
    bound: true,
    composable: false,
  }, {
    name: 'copy',
    path: "bindingParameter",
    bound: true,
    composable: false,
    parameters: { DestinationId: {type: 'Edm.String', nullable: false} },
    return: "graph.message"
  }, {
    name: 'move',
    path: "bindingParameter",
    bound: true,
    composable: false,
    parameters: { DestinationId: {type: 'Edm.String', nullable: false} },
    return: "graph.message"
  }, {
    name: 'reply',
    bound: true,
    composable: false,
    parameters: { Message: {type: 'graph.message'}, Comment: {type: 'Edm.String'} },
  }, {
    name: 'replyAll',
    bound: true,
    composable: false,
    parameters: { Message: {type: 'graph.message'}, Comment: {type: 'Edm.String'} },
  }, {
    name: 'forward',
    bound: true,
    composable: false,
    parameters: { ToRecipients: {type: 'graph.recipient', collection: true}, Message: {type: 'graph.message'}, Comment: {type: 'Edm.String'} },
  }, {
    name: 'accept',
    bound: true,
    composable: false,
    return: "graph.calendar"
  }, {
    name: 'copy',
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
    return: "graph.mailFolder"
  }, {
    name: 'getSchedule',
    bound: true,
    composable: false,
    parameters: { Schedules: {type: 'Edm.String', collection: true}, EndTime: {type: 'graph.dateTimeTimeZone'}, StartTime: {type: 'graph.dateTimeTimeZone'}, AvailabilityViewInterval: {type: 'Edm.Int32'} },
    return: "graph.scheduleInformation"
  }, {
    name: 'dismissReminder',
    bound: true,
    composable: false,
  }, {
    name: 'snoozeReminder',
    bound: true,
    composable: false,
    parameters: { NewReminderTime: {type: 'graph.dateTimeTimeZone', nullable: false} },
  }, {
    name: 'accept',
    bound: true,
    composable: false,
    parameters: { SendResponse: {type: 'Edm.Boolean'}, Comment: {type: 'Edm.String'} },
  }, {
    name: 'decline',
    bound: true,
    composable: false,
    parameters: { ProposedNewTime: {type: 'graph.timeSlot'}, SendResponse: {type: 'Edm.Boolean'}, Comment: {type: 'Edm.String'} },
  }, {
    name: 'tentativelyAccept',
    bound: true,
    composable: false,
    parameters: { ProposedNewTime: {type: 'graph.timeSlot'}, SendResponse: {type: 'Edm.Boolean'}, Comment: {type: 'Edm.String'} },
  }, {
    name: 'reply',
    bound: true,
    composable: false,
    parameters: { Post: {type: 'graph.post', nullable: false} },
  }, {
    name: 'createUploadSession',
    bound: true,
    composable: false,
    parameters: { AttachmentItem: {type: 'graph.attachmentItem', nullable: false} },
    return: "graph.uploadSession"
  }, {
    name: 'reply',
    bound: true,
    composable: false,
    parameters: { Post: {type: 'graph.post', nullable: false} },
  }, {
    name: 'forward',
    bound: true,
    composable: false,
    parameters: { Comment: {type: 'Edm.String'}, ToRecipients: {type: 'graph.recipient', collection: true, nullable: false} },
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
    name: 'copy',
    bound: true,
    composable: false,
    parameters: { name: {type: 'Edm.String'}, parentReference: {type: 'graph.itemReference'} },
    return: "graph.driveItem"
  }, {
    name: 'createLink',
    bound: true,
    composable: false,
    parameters: { type: {type: 'Edm.String', nullable: false}, scope: {type: 'Edm.String'}, expirationDateTime: {type: 'Edm.DateTimeOffset'}, password: {type: 'Edm.String'}, message: {type: 'Edm.String'} },
    return: "graph.permission"
  }, {
    name: 'createUploadSession',
    bound: true,
    composable: false,
    parameters: { item: {type: 'graph.driveItemUploadableProperties'}, deferCommit: {type: 'Edm.Boolean'} },
    return: "graph.uploadSession"
  }, {
    name: 'follow',
    bound: true,
    composable: false,
    return: "graph.driveItem"
  }, {
    name: 'unfollow',
    bound: true,
    composable: false,
  }, {
    name: 'invite',
    bound: true,
    composable: false,
    parameters: { requireSignIn: {type: 'Edm.Boolean'}, roles: {type: 'Edm.String', collection: true}, sendInvitation: {type: 'Edm.Boolean'}, message: {type: 'Edm.String'}, recipients: {type: 'graph.driveRecipient', collection: true, nullable: false}, expirationDateTime: {type: 'Edm.String'}, password: {type: 'Edm.String'} },
    return: "graph.permission"
  }, {
    name: 'preview',
    bound: true,
    composable: false,
    parameters: { page: {type: 'Edm.String'}, zoom: {type: 'Edm.Double'} },
    return: "graph.itemPreviewInfo"
  }, {
    name: 'restore',
    bound: true,
    composable: false,
    parameters: { parentReference: {type: 'graph.itemReference'}, name: {type: 'Edm.String'} },
    return: "graph.driveItem"
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
    name: 'add',
    bound: true,
    composable: false,
    parameters: { value: {type: 'graph.site', collection: true} },
    return: "graph.site"
  }, {
    name: 'remove',
    bound: true,
    composable: false,
    parameters: { value: {type: 'graph.site', collection: true} },
    return: "graph.site"
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
    parameters: { mobileAppAssignments: {type: 'graph.mobileAppAssignment', collection: true} },
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
    name: 'assign',
    bound: true,
    composable: false,
    parameters: { assignments: {type: 'graph.managedDeviceMobileAppConfigurationAssignment', collection: true} },
  }, {
    name: 'assign',
    bound: true,
    composable: false,
    parameters: { managedEBookAssignments: {type: 'graph.managedEBookAssignment', collection: true} },
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
    parameters: { assignments: {type: 'graph.deviceCompliancePolicyAssignment', collection: true} },
    return: "graph.deviceCompliancePolicyAssignment"
  }, {
    name: 'scheduleActionsForRules',
    bound: true,
    composable: false,
    parameters: { deviceComplianceScheduledActionForRules: {type: 'graph.deviceComplianceScheduledActionForRule', collection: true} },
  }, {
    name: 'setMobileDeviceManagementAuthority',
    bound: true,
    composable: false,
    return: "Edm.Int32"
  }, {
    name: 'syncMicrosoftStoreForBusinessApps',
    bound: true,
    composable: false,
  }, {
    name: 'syncLicenses',
    bound: true,
    composable: false,
    return: "graph.vppToken"
  }, {
    name: 'sync',
    bound: true,
    composable: false,
    parameters: { syncType: {type: 'graph.deviceManagementExchangeConnectorSyncType', nullable: false} },
  }, {
    name: 'setPriority',
    bound: true,
    composable: false,
    parameters: { priority: {type: 'Edm.Int32', nullable: false} },
  }, {
    name: 'assign',
    bound: true,
    composable: false,
    parameters: { enrollmentConfigurationAssignments: {type: 'graph.enrollmentConfigurationAssignment', collection: true} },
  }, {
    name: 'retire',
    bound: true,
    composable: false,
  }, {
    name: 'wipe',
    bound: true,
    composable: false,
    parameters: { keepEnrollmentData: {type: 'Edm.Boolean'}, keepUserData: {type: 'Edm.Boolean'}, macOsUnlockCode: {type: 'Edm.String'} },
  }, {
    name: 'resetPasscode',
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
    name: 'disableLostMode',
    bound: true,
    composable: false,
  }, {
    name: 'locateDevice',
    bound: true,
    composable: false,
  }, {
    name: 'bypassActivationLock',
    bound: true,
    composable: false,
  }, {
    name: 'rebootNow',
    bound: true,
    composable: false,
  }, {
    name: 'shutDown',
    bound: true,
    composable: false,
  }, {
    name: 'recoverPasscode',
    bound: true,
    composable: false,
  }, {
    name: 'cleanWindowsDevice',
    bound: true,
    composable: false,
    parameters: { keepUserData: {type: 'Edm.Boolean', nullable: false} },
  }, {
    name: 'logoutSharedAppleDeviceActiveUser',
    bound: true,
    composable: false,
  }, {
    name: 'deleteUserFromSharedAppleDevice',
    bound: true,
    composable: false,
    parameters: { userPrincipalName: {type: 'Edm.String'} },
  }, {
    name: 'syncDevice',
    bound: true,
    composable: false,
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
    name: 'updateWindowsDeviceAccount',
    bound: true,
    composable: false,
    parameters: { updateWindowsDeviceAccountActionParameter: {type: 'graph.updateWindowsDeviceAccountActionParameter'} },
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
    name: 'targetApps',
    bound: true,
    composable: false,
    parameters: { apps: {type: 'graph.managedMobileApp', collection: true} },
  }, {
    name: 'assign',
    bound: true,
    composable: false,
    parameters: { assignments: {type: 'graph.targetedManagedAppPolicyAssignment', collection: true} },
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
    name: 'onenotePatchContent',
    bound: true,
    composable: false,
    parameters: { commands: {type: 'graph.onenotePatchContentCommand', collection: true} },
  }, {
    name: 'copyToSection',
    bound: true,
    composable: false,
    parameters: { id: {type: 'Edm.String'}, groupId: {type: 'Edm.String'}, siteCollectionId: {type: 'Edm.String'}, siteId: {type: 'Edm.String'} },
    return: "graph.onenoteOperation"
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
    name: 'getNotebookFromWebUrl',
    bound: true,
    composable: false,
    parameters: { webUrl: {type: 'Edm.String'} },
    return: "graph.CopyNotebookModel"
  }, {
    name: 'logTeleconferenceDeviceQuality',
    bound: true,
    composable: false,
    parameters: { quality: {type: 'graph.teleconferenceDeviceQuality', nullable: false} },
  }, {
    name: 'answer',
    bound: true,
    composable: false,
    parameters: { callbackUri: {type: 'Edm.String', nullable: false}, mediaConfig: {type: 'graph.mediaConfig', nullable: false}, acceptedModalities: {type: 'graph.modality', collection: true} },
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
    name: 'invite',
    bound: true,
    composable: false,
    parameters: { participants: {type: 'graph.invitationParticipantInfo', collection: true, nullable: false}, clientContext: {type: 'Edm.String'} },
    return: "graph.inviteParticipantsOperation"
  }, {
    name: 'mute',
    bound: true,
    composable: false,
    parameters: { clientContext: {type: 'Edm.String'} },
    return: "graph.muteParticipantOperation"
  }, {
    name: 'upgrade',
    bound: true,
    composable: false,
  }, {
    name: 'clone',
    bound: true,
    composable: false,
    parameters: { displayName: {type: 'Edm.String'}, description: {type: 'Edm.String'}, mailNickname: {type: 'Edm.String'}, classification: {type: 'Edm.String'}, visibility: {type: 'graph.teamVisibilityType', nullable: false}, partsToClone: {type: 'graph.clonableTeamParts', nullable: false} },
  }, {
    name: 'archive',
    bound: true,
    composable: false,
    parameters: { shouldSetSpoSiteReadOnlyForMembers: {type: 'Edm.Boolean'} },
  }, {
    name: 'unarchive',
    bound: true,
    composable: false,
  }, {
    name: 'approve',
    bound: true,
    composable: false,
    parameters: { message: {type: 'Edm.String'} },
  }, {
    name: 'decline',
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