// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace osconfig_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | GoogleAuth;

    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Cloud OS Config API
   *
   * OS management tools that can be used for patch management, patch compliance, and configuration management on VM instances.
   *
   * @example
   * const {google} = require('googleapis');
   * const osconfig = google.osconfig('v1');
   *
   * @namespace osconfig
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Osconfig
   */
  export class Osconfig {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Apt patching is completed by executing `apt-get update &amp;&amp; apt-get upgrade`. Additional options can be set to control how this is executed.
   */
  export interface Schema$AptSettings {
    /**
     * List of packages to exclude from update. These packages will be excluded
     */
    excludes?: string[] | null;
    /**
     * An exclusive list of packages to be updated. These are the only packages that will be updated. If these packages are not installed, they will be ignored. This field cannot be specified with any other patch configuration fields.
     */
    exclusivePackages?: string[] | null;
    /**
     * By changing the type to DIST, the patching is performed using `apt-get dist-upgrade` instead.
     */
    type?: string | null;
  }
  /**
   * Message for canceling a patch job.
   */
  export interface Schema$CancelPatchJobRequest {}
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * A resource that contains custom validation and enforcement steps.
   */
  export interface Schema$ExecResource {
    /**
     * What to run to bring this resource into the desired state. Optional if policy is in validate only mode.
     */
    enforce?: Schema$ExecResourceExec;
    /**
     * What to run to validate this resource is in the desired state. A successful exit code indicates resource is in the desired state.
     */
    validate?: Schema$ExecResourceExec;
  }
  /**
   * A file or script to execute.
   */
  export interface Schema$ExecResourceExec {
    /**
     * Exit codes that indicate success.
     */
    allowedSuccessCodes?: number[] | null;
    /**
     * Arguments to use.
     */
    args?: string[] | null;
    /**
     * A remote or local file.
     */
    file?: Schema$File;
    /**
     * The script interpreter to use.
     */
    interpreter?: string | null;
    /**
     * An inline script.
     */
    script?: string | null;
  }
  /**
   * A step that runs an executable for a PatchJob.
   */
  export interface Schema$ExecStep {
    /**
     * The ExecStepConfig for all Linux VMs targeted by the PatchJob.
     */
    linuxExecStepConfig?: Schema$ExecStepConfig;
    /**
     * The ExecStepConfig for all Windows VMs targeted by the PatchJob.
     */
    windowsExecStepConfig?: Schema$ExecStepConfig;
  }
  /**
   * Common configurations for an ExecStep.
   */
  export interface Schema$ExecStepConfig {
    /**
     * Defaults to [0]. A list of possible return values that the execution can return to indicate a success.
     */
    allowedSuccessCodes?: number[] | null;
    /**
     * A Cloud Storage object containing the executable.
     */
    gcsObject?: Schema$GcsObject;
    /**
     * The script interpreter to use to run the script. If no interpreter is specified the script will be executed directly, which will likely only succeed for scripts with [shebang lines] (https://en.wikipedia.org/wiki/Shebang_\(Unix\)).
     */
    interpreter?: string | null;
    /**
     * An absolute path to the executable on the VM.
     */
    localPath?: string | null;
  }
  /**
   * A request message to initiate patching across Compute Engine instances.
   */
  export interface Schema$ExecutePatchJobRequest {
    /**
     * Description of the patch job. Length of the description is limited to 1024 characters.
     */
    description?: string | null;
    /**
     * Display name for this patch job. This does not have to be unique.
     */
    displayName?: string | null;
    /**
     * If this patch is a dry-run only, instances are contacted but will do nothing.
     */
    dryRun?: boolean | null;
    /**
     * Duration of the patch job. After the duration ends, the patch job times out.
     */
    duration?: string | null;
    /**
     * Required. Instances to patch, either explicitly or filtered by some criteria such as zone or labels.
     */
    instanceFilter?: Schema$PatchInstanceFilter;
    /**
     * Patch configuration being applied. If omitted, instances are patched using the default configurations.
     */
    patchConfig?: Schema$PatchConfig;
    /**
     * Rollout strategy of the patch job.
     */
    rollout?: Schema$PatchRollout;
  }
  /**
   * A resource that extracts an archive
   */
  export interface Schema$ExtractArchiveResource {
    /**
     * Local file path that signals this resource is in the desired state. The absence of this file will indicate whether the archive needs to be extracted.
     */
    creates?: string | null;
    /**
     * Directory to extract archive to.
     */
    destination?: string | null;
    /**
     * Whether to overwrite existing files during extraction. If this is set to true, any existing files in the destination location will be overwritten by the extraction.
     */
    overwrite?: boolean | null;
    /**
     * The source archive to extract.
     */
    source?: Schema$File;
    /**
     * The type of the archive to extract.
     */
    type?: string | null;
  }
  /**
   * A remote or local file.
   */
  export interface Schema$File {
    /**
     * Defaults to false. When false, files will be subject to validations based on the file type:  Remote: A checksum must be specified. GCS:    An object generation number must be specified.
     */
    allowInsecure?: boolean | null;
    /**
     * A GCS object.
     */
    gcs?: Schema$FileGcs;
    /**
     * A local path to use.
     */
    localPath?: string | null;
    /**
     * A generic remote file.
     */
    remote?: Schema$FileRemote;
  }
  /**
   * Specifies a file available as a GCS Object.
   */
  export interface Schema$FileGcs {
    /**
     * Bucket of the GCS object.
     */
    bucket?: string | null;
    /**
     * Generation number of the GCS object.
     */
    generation?: string | null;
    /**
     * Name of the GCS object.
     */
    object?: string | null;
  }
  /**
   * Specifies a file available via some URI.
   */
  export interface Schema$FileRemote {
    /**
     * SHA256 checksum of the remote file.
     */
    sha256Checksum?: string | null;
    /**
     * URI from which to fetch the object. It should contain both the protocol and path following the format {protocol}://{location}.
     */
    uri?: string | null;
  }
  /**
   * A resource that manages the state of a file.
   */
  export interface Schema$FileResource {
    /**
     * A a file with this content.
     */
    content?: string | null;
    /**
     * A remote or local source.
     */
    file?: Schema$File;
    /**
     * The absolute path of the file.
     */
    path?: string | null;
    /**
     * Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users for the file (similarly to the numeric mode used in the linux chmod utility). Each digit represents a three bit number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one bit corresponds to the execute permission. Default behavior is 755.  Below are some examples of permissions and their associated values: read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4
     */
    permissions?: string | null;
    /**
     * Desired state of the file.
     */
    state?: string | null;
  }
  /**
   * Message encapsulating a value that can be either absolute (&quot;fixed&quot;) or relative (&quot;percent&quot;) to a value.
   */
  export interface Schema$FixedOrPercent {
    /**
     * Specifies a fixed value.
     */
    fixed?: number | null;
    /**
     * Specifies the relative value defined as a percentage, which will be multiplied by a reference value.
     */
    percent?: number | null;
  }
  /**
   * Cloud Storage object representation.
   */
  export interface Schema$GcsObject {
    /**
     * Required. Bucket of the Cloud Storage object.
     */
    bucket?: string | null;
    /**
     * Required. Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.
     */
    generationNumber?: string | null;
    /**
     * Required. Name of the Cloud Storage object.
     */
    object?: string | null;
  }
  /**
   * Googet patching is performed by running `googet update`.
   */
  export interface Schema$GooSettings {}
  /**
   * A response message for listing patch deployments.
   */
  export interface Schema$ListPatchDeploymentsResponse {
    /**
     * A pagination token that can be used to get the next page of patch deployments.
     */
    nextPageToken?: string | null;
    /**
     * The list of patch deployments.
     */
    patchDeployments?: Schema$PatchDeployment[];
  }
  /**
   * A response message for listing the instances details for a patch job.
   */
  export interface Schema$ListPatchJobInstanceDetailsResponse {
    /**
     * A pagination token that can be used to get the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * A list of instance status.
     */
    patchJobInstanceDetails?: Schema$PatchJobInstanceDetails[];
  }
  /**
   * A response message for listing patch jobs.
   */
  export interface Schema$ListPatchJobsResponse {
    /**
     * A pagination token that can be used to get the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The list of patch jobs.
     */
    patchJobs?: Schema$PatchJob[];
  }
  /**
   * Represents a monthly schedule. An example of a valid monthly schedule is &quot;on the third Tuesday of the month&quot; or &quot;on the 15th of the month&quot;.
   */
  export interface Schema$MonthlySchedule {
    /**
     * Required. One day of the month. 1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month. Months without the target day will be skipped. For example, a schedule to run &quot;every month on the 31st&quot; will not run in February, April, June, etc.
     */
    monthDay?: number | null;
    /**
     * Required. Week day in a month.
     */
    weekDayOfMonth?: Schema$WeekDayOfMonth;
  }
  /**
   * Sets the time for a one time patch deployment. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
   */
  export interface Schema$OneTimeSchedule {
    /**
     * Required. The desired patch job execution time.
     */
    executeTime?: string | null;
  }
  /**
   * A resource that manages a system package.
   */
  export interface Schema$PackageResource {
    /**
     * A package managed by Apt.
     */
    apt?: Schema$PackageResourceAPT;
    /**
     * A deb package file.
     */
    deb?: Schema$PackageResourceDeb;
    /**
     * The desired_state the agent should maintain for this package. The default is to ensure the package is installed.
     */
    desiredState?: string | null;
    /**
     * A package managed by GooGet.
     */
    googet?: Schema$PackageResourceGooGet;
    /**
     * An MSI package.
     */
    msi?: Schema$PackageResourceMSI;
    /**
     * An rpm package file.
     */
    rpm?: Schema$PackageResourceRPM;
    /**
     * A package managed by YUM.
     */
    yum?: Schema$PackageResourceYUM;
    /**
     * A package managed by Zypper.
     */
    zypper?: Schema$PackageResourceZypper;
  }
  /**
   * A package managed by APT. install: `apt-get update &amp;&amp; apt-get -y install [name]` remove: `apt-get -y remove [name]`
   */
  export interface Schema$PackageResourceAPT {
    /**
     * Package name.
     */
    name?: string | null;
  }
  /**
   * A deb package file. dpkg packages only support INSTALLED state.
   */
  export interface Schema$PackageResourceDeb {
    /**
     * Whether dependencies should also be installed. install when false: `dpkg -i package` install when true: `apt-get update &amp;&amp; apt-get -y install package.deb`
     */
    pullDeps?: boolean | null;
    /**
     * A deb package.
     */
    source?: Schema$File;
  }
  /**
   * A package managed by GooGet. install: `googet -noconfirm install package` remove: `googet -noconfirm remove package`
   */
  export interface Schema$PackageResourceGooGet {
    /**
     * Package name.
     */
    name?: string | null;
  }
  /**
   * An MSI package. MSI packages only support INSTALLED state. Install msiexec /i /qn /norestart
   */
  export interface Schema$PackageResourceMSI {
    /**
     * Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]
     */
    allowedSuccessCodes?: number[] | null;
    /**
     * Flags to use during package install. Appended to the defalts of &quot;/i /qn /norestart&quot;
     */
    flags?: string[] | null;
    /**
     * The MSI package.
     */
    source?: Schema$File;
  }
  /**
   * An RPM package file. RPM packages only support INSTALLED state.
   */
  export interface Schema$PackageResourceRPM {
    /**
     * Whether dependencies should also be installed. install when false: `rpm --upgrade --replacepkgs package.rpm` install when true: `yum -y install package.rpm` or `zypper -y install package.rpm`
     */
    pullDeps?: boolean | null;
    /**
     * An rpm package.
     */
    source?: Schema$File;
  }
  /**
   * A package managed by YUM. install: `yum -y install package` remove: `yum -y remove package`
   */
  export interface Schema$PackageResourceYUM {
    /**
     * Package name.
     */
    name?: string | null;
  }
  /**
   * A package managed by Zypper. install: `zypper -y install package` remove: `zypper -y rm package`
   */
  export interface Schema$PackageResourceZypper {
    /**
     * Package name.
     */
    name?: string | null;
  }
  /**
   * Patch configuration specifications. Contains details on how to apply the patch(es) to a VM instance.
   */
  export interface Schema$PatchConfig {
    /**
     * Apt update settings. Use this setting to override the default `apt` patch rules.
     */
    apt?: Schema$AptSettings;
    /**
     * Goo update settings. Use this setting to override the default `goo` patch rules.
     */
    goo?: Schema$GooSettings;
    /**
     * The `ExecStep` to run after the patch update.
     */
    postStep?: Schema$ExecStep;
    /**
     * The `ExecStep` to run before the patch update.
     */
    preStep?: Schema$ExecStep;
    /**
     * Post-patch reboot settings.
     */
    rebootConfig?: string | null;
    /**
     * Windows update settings. Use this override the default windows patch rules.
     */
    windowsUpdate?: Schema$WindowsUpdateSettings;
    /**
     * Yum update settings. Use this setting to override the default `yum` patch rules.
     */
    yum?: Schema$YumSettings;
    /**
     * Zypper update settings. Use this setting to override the default `zypper` patch rules.
     */
    zypper?: Schema$ZypperSettings;
  }
  /**
   * Patch deployments are configurations that individual patch jobs use to complete a patch. These configurations include instance filter, package repository settings, and a schedule. For more information about creating and managing patch deployments, see [Scheduling patch jobs](https://cloud.google.com/compute/docs/os-patch-management/schedule-patch-jobs).
   */
  export interface Schema$PatchDeployment {
    /**
     * Output only. Time the patch deployment was created. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    createTime?: string | null;
    /**
     * Optional. Description of the patch deployment. Length of the description is limited to 1024 characters.
     */
    description?: string | null;
    /**
     * Optional. Duration of the patch. After the duration ends, the patch times out.
     */
    duration?: string | null;
    /**
     * Required. VM instances to patch.
     */
    instanceFilter?: Schema$PatchInstanceFilter;
    /**
     * Output only. The last time a patch job was started by this deployment. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    lastExecuteTime?: string | null;
    /**
     * Unique name for the patch deployment resource in a project. The patch deployment name is in the form: `projects/{project_id}/patchDeployments/{patch_deployment_id}`. This field is ignored when you create a new patch deployment.
     */
    name?: string | null;
    /**
     * Required. Schedule a one-time execution.
     */
    oneTimeSchedule?: Schema$OneTimeSchedule;
    /**
     * Optional. Patch configuration that is applied.
     */
    patchConfig?: Schema$PatchConfig;
    /**
     * Required. Schedule recurring executions.
     */
    recurringSchedule?: Schema$RecurringSchedule;
    /**
     * Optional. Rollout strategy of the patch job.
     */
    rollout?: Schema$PatchRollout;
    /**
     * Output only. Time the patch deployment was last updated. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    updateTime?: string | null;
  }
  /**
   * A filter to target VM instances for patching. The targeted VMs must meet all criteria specified. So if both labels and zones are specified, the patch job targets only VMs with those labels and in those zones.
   */
  export interface Schema$PatchInstanceFilter {
    /**
     * Target all VM instances in the project. If true, no other criteria is permitted.
     */
    all?: boolean | null;
    /**
     * Targets VM instances matching ANY of these GroupLabels. This allows targeting of disparate groups of VM instances.
     */
    groupLabels?: Schema$PatchInstanceFilterGroupLabel[];
    /**
     * Targets VMs whose name starts with one of these prefixes. Similar to labels, this is another way to group VMs when targeting configs, for example prefix=&quot;prod-&quot;.
     */
    instanceNamePrefixes?: string[] | null;
    /**
     * Targets any of the VM instances specified. Instances are specified by their URI in the form `zones/[ZONE]/instances/[INSTANCE_NAME]`, `projects/[PROJECT_ID]/zones/[ZONE]/instances/[INSTANCE_NAME]`, or `https://www.googleapis.com/compute/v1/projects/[PROJECT_ID]/zones/[ZONE]/instances/[INSTANCE_NAME]`
     */
    instances?: string[] | null;
    /**
     * Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone.
     */
    zones?: string[] | null;
  }
  /**
   * Targets a group of VM instances by using their [assigned labels](https://cloud.google.com/compute/docs/labeling-resources). Labels are key-value pairs. A `GroupLabel` is a combination of labels that is used to target VMs for a patch job.  For example, a patch job can target VMs that have the following `GroupLabel`: `{&quot;env&quot;:&quot;test&quot;, &quot;app&quot;:&quot;web&quot;}`. This means that the patch job is applied to VMs that have both the labels `env=test` and `app=web`.
   */
  export interface Schema$PatchInstanceFilterGroupLabel {
    /**
     * Compute Engine instance labels that must be present for a VM instance to be targeted by this filter.
     */
    labels?: {[key: string]: string} | null;
  }
  /**
   * A high level representation of a patch job that is either in progress or has completed.  Instance details are not included in the job. To paginate through instance details, use ListPatchJobInstanceDetails.  For more information about patch jobs, see [Creating patch jobs](https://cloud.google.com/compute/docs/os-patch-management/create-patch-job).
   */
  export interface Schema$PatchJob {
    /**
     * Time this patch job was created.
     */
    createTime?: string | null;
    /**
     * Description of the patch job. Length of the description is limited to 1024 characters.
     */
    description?: string | null;
    /**
     * Display name for this patch job. This is not a unique identifier.
     */
    displayName?: string | null;
    /**
     * If this patch job is a dry run, the agent reports that it has finished without running any updates on the VM instance.
     */
    dryRun?: boolean | null;
    /**
     * Duration of the patch job. After the duration ends, the patch job times out.
     */
    duration?: string | null;
    /**
     * If this patch job failed, this message provides information about the failure.
     */
    errorMessage?: string | null;
    /**
     * Summary of instance details.
     */
    instanceDetailsSummary?: Schema$PatchJobInstanceDetailsSummary;
    /**
     * Instances to patch.
     */
    instanceFilter?: Schema$PatchInstanceFilter;
    /**
     * Unique identifier for this patch job in the form `projects/x/patchJobs/x
     */
    name?: string | null;
    /**
     * Patch configuration being applied.
     */
    patchConfig?: Schema$PatchConfig;
    /**
     * Output only. Name of the patch deployment that created this patch job.
     */
    patchDeployment?: string | null;
    /**
     * Reflects the overall progress of the patch job in the range of 0.0 being no progress to 100.0 being complete.
     */
    percentComplete?: number | null;
    /**
     * Rollout strategy being applied.
     */
    rollout?: Schema$PatchRollout;
    /**
     * The current state of the PatchJob.
     */
    state?: string | null;
    /**
     * Last time this patch job was updated.
     */
    updateTime?: string | null;
  }
  /**
   * Patch details for a VM instance. For more information about reviewing VM instance details, see [Listing all VM instance details for a specific patch job](https://cloud.google.com/compute/docs/os-patch-management/manage-patch-jobs#list-instance-details).
   */
  export interface Schema$PatchJobInstanceDetails {
    /**
     * The number of times the agent that the agent attempts to apply the patch.
     */
    attemptCount?: string | null;
    /**
     * If the patch fails, this field provides the reason.
     */
    failureReason?: string | null;
    /**
     * The unique identifier for the instance. This identifier is defined by the server.
     */
    instanceSystemId?: string | null;
    /**
     * The instance name in the form `projects/x/zones/x/instances/x
     */
    name?: string | null;
    /**
     * Current state of instance patch.
     */
    state?: string | null;
  }
  /**
   * A summary of the current patch state across all instances that this patch job affects. Contains counts of instances in different states. These states map to `InstancePatchState`. List patch job instance details to see the specific states of each instance.
   */
  export interface Schema$PatchJobInstanceDetailsSummary {
    /**
     * Number of instances that have acked and will start shortly.
     */
    ackedInstanceCount?: string | null;
    /**
     * Number of instances that are applying patches.
     */
    applyingPatchesInstanceCount?: string | null;
    /**
     * Number of instances that are downloading patches.
     */
    downloadingPatchesInstanceCount?: string | null;
    /**
     * Number of instances that failed.
     */
    failedInstanceCount?: string | null;
    /**
     * Number of instances that are inactive.
     */
    inactiveInstanceCount?: string | null;
    /**
     * Number of instances that do not appear to be running the agent. Check to ensure that the agent is installed, running, and able to communicate with the service.
     */
    noAgentDetectedInstanceCount?: string | null;
    /**
     * Number of instances notified about patch job.
     */
    notifiedInstanceCount?: string | null;
    /**
     * Number of instances pending patch job.
     */
    pendingInstanceCount?: string | null;
    /**
     * Number of instances that are running the post-patch step.
     */
    postPatchStepInstanceCount?: string | null;
    /**
     * Number of instances that are running the pre-patch step.
     */
    prePatchStepInstanceCount?: string | null;
    /**
     * Number of instances rebooting.
     */
    rebootingInstanceCount?: string | null;
    /**
     * Number of instances that have started.
     */
    startedInstanceCount?: string | null;
    /**
     * Number of instances that have completed successfully.
     */
    succeededInstanceCount?: string | null;
    /**
     * Number of instances that require reboot.
     */
    succeededRebootRequiredInstanceCount?: string | null;
    /**
     * Number of instances that exceeded the time out while applying the patch.
     */
    timedOutInstanceCount?: string | null;
  }
  /**
   * Patch rollout configuration specifications. Contains details on the concurrency control when applying patch(es) to all targeted VMs.
   */
  export interface Schema$PatchRollout {
    /**
     * The maximum number (or percentage) of VMs per zone to disrupt at any given moment. The number of VMs calculated from multiplying the percentage by the total number of VMs in a zone is rounded up.  During patching, a VM is considered disrupted from the time the agent is notified to begin until patching has completed. This disruption time includes the time to complete reboot and any post-patch steps.  A VM contributes to the disruption budget if its patching operation fails either when applying the patches, running pre or post patch steps, or if it fails to respond with a success notification before timing out. VMs that are not running or do not have an active agent do not count toward this disruption budget.  For zone-by-zone rollouts, if the disruption budget in a zone is exceeded, the patch job stops, because continuing to the next zone requires completion of the patch process in the previous zone.  For example, if the disruption budget has a fixed value of `10`, and 8 VMs fail to patch in the current zone, the patch job continues to patch 2 VMs at a time until the zone is completed. When that zone is completed successfully, patching begins with 10 VMs at a time in the next zone. If 10 VMs in the next zone fail to patch, the patch job stops.
     */
    disruptionBudget?: Schema$FixedOrPercent;
    /**
     * Mode of the patch rollout.
     */
    mode?: string | null;
  }
  /**
   * Sets the time for recurring patch deployments.
   */
  export interface Schema$RecurringSchedule {
    /**
     * Optional. The end time at which a recurring patch deployment schedule is no longer active.
     */
    endTime?: string | null;
    /**
     * Required. The frequency unit of this recurring schedule.
     */
    frequency?: string | null;
    /**
     * Output only. The time the last patch job ran successfully.
     */
    lastExecuteTime?: string | null;
    /**
     * Required. Schedule with monthly executions.
     */
    monthly?: Schema$MonthlySchedule;
    /**
     * Output only. The time the next patch job is scheduled to run.
     */
    nextExecuteTime?: string | null;
    /**
     * Optional. The time that the recurring schedule becomes effective. Defaults to `create_time` of the patch deployment.
     */
    startTime?: string | null;
    /**
     * Required. Time of the day to run a recurring deployment.
     */
    timeOfDay?: Schema$TimeOfDay;
    /**
     * Required. Defines the time zone that `time_of_day` is relative to. The rules for daylight saving time are determined by the chosen time zone.
     */
    timeZone?: Schema$TimeZone;
    /**
     * Required. Schedule with weekly executions.
     */
    weekly?: Schema$WeeklySchedule;
  }
  /**
   * A resource that manages a package repository.
   */
  export interface Schema$RepositoryResource {
    /**
     * An Apt Repository.
     */
    apt?: Schema$RepositoryResourceAptRepository;
    /**
     * A Goo Repository.
     */
    goo?: Schema$RepositoryResourceGooRepository;
    /**
     * A Yum Repository.
     */
    yum?: Schema$RepositoryResourceYumRepository;
    /**
     * A Zypper Repository.
     */
    zypper?: Schema$RepositoryResourceZypperRepository;
  }
  /**
   * Represents a single apt package repository. These will be added to a repo file that will be managed at /etc/apt/sources.list.d/google_osconfig.list.
   */
  export interface Schema$RepositoryResourceAptRepository {
    /**
     * Type of archive files in this repository. The default behavior is DEB.
     */
    archiveType?: string | null;
    /**
     * List of components for this repository. Must contain at least one item.
     */
    components?: string[] | null;
    /**
     * Distribution of this repository.
     */
    distribution?: string | null;
    /**
     * URI of the key file for this repository. The agent will maintain a keyring at /etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg.
     */
    gpgKey?: string | null;
    /**
     * URI for this repository.
     */
    uri?: string | null;
  }
  /**
   * Represents a Goo package repository. These will be added to a repo file that will be managed at C:/ProgramData/GooGet/repos/google_osconfig.repo.
   */
  export interface Schema$RepositoryResourceGooRepository {
    /**
     * The name of the repository.
     */
    name?: string | null;
    /**
     * The url of the repository.
     */
    url?: string | null;
  }
  /**
   * Represents a single yum package repository. These will be added to a repo file that will be managed at /etc/yum.repos.d/google_osconfig.repo.
   */
  export interface Schema$RepositoryResourceYumRepository {
    /**
     * The location of the repository directory.
     */
    baseUrl?: string | null;
    /**
     * The display name of the repository.
     */
    displayName?: string | null;
    /**
     * URIs of GPG keys.
     */
    gpgKeys?: string[] | null;
    /**
     * A one word, unique name for this repository. This will be the `repo id` in the yum config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for resource conflicts.
     */
    id?: string | null;
  }
  /**
   * Represents a single zypper package repository. These will be added to a repo file that will be managed at /etc/zypp/repos.d/google_osconfig.repo.
   */
  export interface Schema$RepositoryResourceZypperRepository {
    /**
     * The location of the repository directory.
     */
    baseUrl?: string | null;
    /**
     * The display name of the repository.
     */
    displayName?: string | null;
    /**
     * URIs of GPG keys.
     */
    gpgKeys?: string[] | null;
    /**
     * A one word, unique name for this repository. This will be the `repo id` in the zypper config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for GuestPolicy conflicts.
     */
    id?: string | null;
  }
  /**
   * A resource that manages a system service.
   */
  export interface Schema$ServiceResource {}
  /**
   * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
   */
  export interface Schema$TimeOfDay {
    /**
     * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value &quot;24:00:00&quot; for scenarios like business closing time.
     */
    hours?: number | null;
    /**
     * Minutes of hour of day. Must be from 0 to 59.
     */
    minutes?: number | null;
    /**
     * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
     */
    nanos?: number | null;
    /**
     * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
     */
    seconds?: number | null;
  }
  /**
   * Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
   */
  export interface Schema$TimeZone {
    /**
     * IANA Time Zone Database time zone, e.g. &quot;America/New_York&quot;.
     */
    id?: string | null;
    /**
     * Optional. IANA Time Zone Database version number, e.g. &quot;2019a&quot;.
     */
    version?: string | null;
  }
  /**
   * Represents one week day in a month. An example is &quot;the 4th Sunday&quot;.
   */
  export interface Schema$WeekDayOfMonth {
    /**
     * Required. A day of the week.
     */
    dayOfWeek?: string | null;
    /**
     * Required. Week number in a month. 1-4 indicates the 1st to 4th week of the month. -1 indicates the last week of the month.
     */
    weekOrdinal?: number | null;
  }
  /**
   * Represents a weekly schedule.
   */
  export interface Schema$WeeklySchedule {
    /**
     * Required. Day of the week.
     */
    dayOfWeek?: string | null;
  }
  /**
   * Windows patching is performed using the Windows Update Agent.
   */
  export interface Schema$WindowsUpdateSettings {
    /**
     * Only apply updates of these windows update classifications. If empty, all updates are applied.
     */
    classifications?: string[] | null;
    /**
     * List of KBs to exclude from update.
     */
    excludes?: string[] | null;
    /**
     * An exclusive list of kbs to be updated. These are the only patches that will be updated. This field must not be used with other patch configurations.
     */
    exclusivePatches?: string[] | null;
  }
  /**
   * Yum patching is performed by executing `yum update`. Additional options can be set to control how this is executed.  Note that not all settings are supported on all platforms.
   */
  export interface Schema$YumSettings {
    /**
     * List of packages to exclude from update. These packages are excluded by using the yum `--exclude` flag.
     */
    excludes?: string[] | null;
    /**
     * An exclusive list of packages to be updated. These are the only packages that will be updated. If these packages are not installed, they will be ignored. This field must not be specified with any other patch configuration fields.
     */
    exclusivePackages?: string[] | null;
    /**
     * Will cause patch to run `yum update-minimal` instead.
     */
    minimal?: boolean | null;
    /**
     * Adds the `--security` flag to `yum update`. Not supported on all platforms.
     */
    security?: boolean | null;
  }
  /**
   * Zypper patching is performed by running `zypper patch`. See also https://en.opensuse.org/SDB:Zypper_manual.
   */
  export interface Schema$ZypperSettings {
    /**
     * Install only patches with these categories. Common categories include security, recommended, and feature.
     */
    categories?: string[] | null;
    /**
     * List of patches to exclude from update.
     */
    excludes?: string[] | null;
    /**
     * An exclusive list of patches to be updated. These are the only patches that will be installed using &#39;zypper patch patch:&lt;patch_name&gt;&#39; command. This field must not be used with any other patch configuration fields.
     */
    exclusivePatches?: string[] | null;
    /**
     * Install only patches with these severities. Common severities include critical, important, moderate, and low.
     */
    severities?: string[] | null;
    /**
     * Adds the `--with-optional` flag to `zypper patch`.
     */
    withOptional?: boolean | null;
    /**
     * Adds the `--with-update` flag, to `zypper patch`.
     */
    withUpdate?: boolean | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    patchDeployments: Resource$Projects$Patchdeployments;
    patchJobs: Resource$Projects$Patchjobs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.patchDeployments = new Resource$Projects$Patchdeployments(
        this.context
      );
      this.patchJobs = new Resource$Projects$Patchjobs(this.context);
    }
  }

  export class Resource$Projects$Patchdeployments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * osconfig.projects.patchDeployments.create
     * @desc Create an OS Config patch deployment.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await osconfig.projects.patchDeployments.create({
     *     // Required. The project to apply this patch deployment to in the form `projects/x`.
     *     parent: 'projects/my-project',
     *     // Required. A name for the patch deployment in the project. When creating a name
     *     // the following rules apply:
     *     // * Must contain only lowercase letters, numbers, and hyphens.
     *     // * Must start with a letter.
     *     // * Must be between 1-63 characters.
     *     // * Must end with a number or a letter.
     *     // * Must be unique within the project.
     *     patchDeploymentId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "duration": "my_duration",
     *       //   "instanceFilter": {},
     *       //   "lastExecuteTime": "my_lastExecuteTime",
     *       //   "name": "my_name",
     *       //   "oneTimeSchedule": {},
     *       //   "patchConfig": {},
     *       //   "recurringSchedule": {},
     *       //   "rollout": {},
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "duration": "my_duration",
     *   //   "instanceFilter": {},
     *   //   "lastExecuteTime": "my_lastExecuteTime",
     *   //   "name": "my_name",
     *   //   "oneTimeSchedule": {},
     *   //   "patchConfig": {},
     *   //   "recurringSchedule": {},
     *   //   "rollout": {},
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias osconfig.projects.patchDeployments.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The project to apply this patch deployment to in the form `projects/x`.
     * @param {string=} params.patchDeploymentId Required. A name for the patch deployment in the project. When creating a name the following rules apply: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project.
     * @param {().PatchDeployment} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Projects$Patchdeployments$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Patchdeployments$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PatchDeployment>;
    create(
      params: Params$Resource$Projects$Patchdeployments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Patchdeployments$Create,
      options: MethodOptions | BodyResponseCallback<Schema$PatchDeployment>,
      callback: BodyResponseCallback<Schema$PatchDeployment>
    ): void;
    create(
      params: Params$Resource$Projects$Patchdeployments$Create,
      callback: BodyResponseCallback<Schema$PatchDeployment>
    ): void;
    create(callback: BodyResponseCallback<Schema$PatchDeployment>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchdeployments$Create
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PatchDeployment> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchdeployments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchdeployments$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/patchDeployments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PatchDeployment>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$PatchDeployment>(parameters);
      }
    }

    /**
     * osconfig.projects.patchDeployments.delete
     * @desc Delete an OS Config patch deployment.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await osconfig.projects.patchDeployments.delete({
     *     // Required. The resource name of the patch deployment in the form
     *     // `projects/x/patchDeployments/x`.
     *     name: 'projects/my-project/patchDeployments/my-patchDeployment',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias osconfig.projects.patchDeployments.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the patch deployment in the form `projects/x/patchDeployments/x`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Projects$Patchdeployments$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Patchdeployments$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Patchdeployments$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Patchdeployments$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Patchdeployments$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchdeployments$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchdeployments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchdeployments$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * osconfig.projects.patchDeployments.get
     * @desc Get an OS Config patch deployment.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await osconfig.projects.patchDeployments.get({
     *     // Required. The resource name of the patch deployment in the form
     *     // `projects/x/patchDeployments/x`.
     *     name: 'projects/my-project/patchDeployments/my-patchDeployment',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "duration": "my_duration",
     *   //   "instanceFilter": {},
     *   //   "lastExecuteTime": "my_lastExecuteTime",
     *   //   "name": "my_name",
     *   //   "oneTimeSchedule": {},
     *   //   "patchConfig": {},
     *   //   "recurringSchedule": {},
     *   //   "rollout": {},
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias osconfig.projects.patchDeployments.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the patch deployment in the form `projects/x/patchDeployments/x`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Projects$Patchdeployments$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Patchdeployments$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PatchDeployment>;
    get(
      params: Params$Resource$Projects$Patchdeployments$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Patchdeployments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PatchDeployment>,
      callback: BodyResponseCallback<Schema$PatchDeployment>
    ): void;
    get(
      params: Params$Resource$Projects$Patchdeployments$Get,
      callback: BodyResponseCallback<Schema$PatchDeployment>
    ): void;
    get(callback: BodyResponseCallback<Schema$PatchDeployment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchdeployments$Get
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PatchDeployment> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchdeployments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchdeployments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PatchDeployment>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$PatchDeployment>(parameters);
      }
    }

    /**
     * osconfig.projects.patchDeployments.list
     * @desc Get a page of OS Config patch deployments.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await osconfig.projects.patchDeployments.list({
     *     // Optional. The maximum number of patch deployments to return. Default is 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. A pagination token returned from a previous call to ListPatchDeployments
     *     // that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the parent in the form `projects/x`.
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "patchDeployments": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias osconfig.projects.patchDeployments.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of patch deployments to return. Default is 100.
     * @param {string=} params.pageToken Optional. A pagination token returned from a previous call to ListPatchDeployments that indicates where this listing should continue from.
     * @param {string} params.parent Required. The resource name of the parent in the form `projects/x`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Patchdeployments$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Patchdeployments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListPatchDeploymentsResponse>;
    list(
      params: Params$Resource$Projects$Patchdeployments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Patchdeployments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPatchDeploymentsResponse>,
      callback: BodyResponseCallback<Schema$ListPatchDeploymentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Patchdeployments$List,
      callback: BodyResponseCallback<Schema$ListPatchDeploymentsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPatchDeploymentsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchdeployments$List
        | BodyResponseCallback<Schema$ListPatchDeploymentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPatchDeploymentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPatchDeploymentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListPatchDeploymentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchdeployments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchdeployments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/patchDeployments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListPatchDeploymentsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListPatchDeploymentsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Patchdeployments$Create
    extends StandardParameters {
    /**
     * Required. The project to apply this patch deployment to in the form `projects/x`.
     */
    parent?: string;
    /**
     * Required. A name for the patch deployment in the project. When creating a name the following rules apply: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project.
     */
    patchDeploymentId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PatchDeployment;
  }
  export interface Params$Resource$Projects$Patchdeployments$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the patch deployment in the form `projects/x/patchDeployments/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Patchdeployments$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the patch deployment in the form `projects/x/patchDeployments/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Patchdeployments$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of patch deployments to return. Default is 100.
     */
    pageSize?: number;
    /**
     * Optional. A pagination token returned from a previous call to ListPatchDeployments that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the parent in the form `projects/x`.
     */
    parent?: string;
  }

  export class Resource$Projects$Patchjobs {
    context: APIRequestContext;
    instanceDetails: Resource$Projects$Patchjobs$Instancedetails;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.instanceDetails = new Resource$Projects$Patchjobs$Instancedetails(
        this.context
      );
    }

    /**
     * osconfig.projects.patchJobs.cancel
     * @desc Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await osconfig.projects.patchJobs.cancel({
     *     // Required. Name of the patch in the form `projects/x/patchJobs/x`
     *     name: 'projects/my-project/patchJobs/my-patchJob',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "dryRun": false,
     *   //   "duration": "my_duration",
     *   //   "errorMessage": "my_errorMessage",
     *   //   "instanceDetailsSummary": {},
     *   //   "instanceFilter": {},
     *   //   "name": "my_name",
     *   //   "patchConfig": {},
     *   //   "patchDeployment": "my_patchDeployment",
     *   //   "percentComplete": {},
     *   //   "rollout": {},
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias osconfig.projects.patchJobs.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Name of the patch in the form `projects/x/patchJobs/x`
     * @param {().CancelPatchJobRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
      params: Params$Resource$Projects$Patchjobs$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Patchjobs$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PatchJob>;
    cancel(
      params: Params$Resource$Projects$Patchjobs$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Patchjobs$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$PatchJob>,
      callback: BodyResponseCallback<Schema$PatchJob>
    ): void;
    cancel(
      params: Params$Resource$Projects$Patchjobs$Cancel,
      callback: BodyResponseCallback<Schema$PatchJob>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$PatchJob>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchjobs$Cancel
        | BodyResponseCallback<Schema$PatchJob>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PatchJob>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PatchJob>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PatchJob> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchjobs$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchjobs$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PatchJob>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$PatchJob>(parameters);
      }
    }

    /**
     * osconfig.projects.patchJobs.execute
     * @desc Patch VM instances by creating and running a patch job.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await osconfig.projects.patchJobs.execute({
     *     // Required. The project in which to run this patch in the form `projects/x`
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "dryRun": false,
     *       //   "duration": "my_duration",
     *       //   "instanceFilter": {},
     *       //   "patchConfig": {},
     *       //   "rollout": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "dryRun": false,
     *   //   "duration": "my_duration",
     *   //   "errorMessage": "my_errorMessage",
     *   //   "instanceDetailsSummary": {},
     *   //   "instanceFilter": {},
     *   //   "name": "my_name",
     *   //   "patchConfig": {},
     *   //   "patchDeployment": "my_patchDeployment",
     *   //   "percentComplete": {},
     *   //   "rollout": {},
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias osconfig.projects.patchJobs.execute
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The project in which to run this patch in the form `projects/x`
     * @param {().ExecutePatchJobRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    execute(
      params: Params$Resource$Projects$Patchjobs$Execute,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    execute(
      params?: Params$Resource$Projects$Patchjobs$Execute,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PatchJob>;
    execute(
      params: Params$Resource$Projects$Patchjobs$Execute,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    execute(
      params: Params$Resource$Projects$Patchjobs$Execute,
      options: MethodOptions | BodyResponseCallback<Schema$PatchJob>,
      callback: BodyResponseCallback<Schema$PatchJob>
    ): void;
    execute(
      params: Params$Resource$Projects$Patchjobs$Execute,
      callback: BodyResponseCallback<Schema$PatchJob>
    ): void;
    execute(callback: BodyResponseCallback<Schema$PatchJob>): void;
    execute(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchjobs$Execute
        | BodyResponseCallback<Schema$PatchJob>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PatchJob>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PatchJob>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PatchJob> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchjobs$Execute;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchjobs$Execute;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/patchJobs:execute').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PatchJob>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$PatchJob>(parameters);
      }
    }

    /**
     * osconfig.projects.patchJobs.get
     * @desc Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await osconfig.projects.patchJobs.get({
     *     // Required. Name of the patch in the form `projects/x/patchJobs/x`
     *     name: 'projects/my-project/patchJobs/my-patchJob',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "dryRun": false,
     *   //   "duration": "my_duration",
     *   //   "errorMessage": "my_errorMessage",
     *   //   "instanceDetailsSummary": {},
     *   //   "instanceFilter": {},
     *   //   "name": "my_name",
     *   //   "patchConfig": {},
     *   //   "patchDeployment": "my_patchDeployment",
     *   //   "percentComplete": {},
     *   //   "rollout": {},
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias osconfig.projects.patchJobs.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Name of the patch in the form `projects/x/patchJobs/x`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Projects$Patchjobs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Patchjobs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PatchJob>;
    get(
      params: Params$Resource$Projects$Patchjobs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Patchjobs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PatchJob>,
      callback: BodyResponseCallback<Schema$PatchJob>
    ): void;
    get(
      params: Params$Resource$Projects$Patchjobs$Get,
      callback: BodyResponseCallback<Schema$PatchJob>
    ): void;
    get(callback: BodyResponseCallback<Schema$PatchJob>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchjobs$Get
        | BodyResponseCallback<Schema$PatchJob>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PatchJob>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PatchJob>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PatchJob> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchjobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchjobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PatchJob>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$PatchJob>(parameters);
      }
    }

    /**
     * osconfig.projects.patchJobs.list
     * @desc Get a list of patch jobs.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await osconfig.projects.patchJobs.list({
     *     // If provided, this field specifies the criteria that must be met by patch
     *     // jobs to be included in the response.
     *     // Currently, filtering is only available on the patch_deployment field.
     *     filter: 'placeholder-value',
     *     // The maximum number of instance status to return.
     *     pageSize: 'placeholder-value',
     *     // A pagination token returned from a previous call
     *     // that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *     // Required. In the form of `projects/x`
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "patchJobs": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias osconfig.projects.patchJobs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter If provided, this field specifies the criteria that must be met by patch jobs to be included in the response. Currently, filtering is only available on the patch_deployment field.
     * @param {integer=} params.pageSize The maximum number of instance status to return.
     * @param {string=} params.pageToken A pagination token returned from a previous call that indicates where this listing should continue from.
     * @param {string} params.parent Required. In the form of `projects/x`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Patchjobs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Patchjobs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListPatchJobsResponse>;
    list(
      params: Params$Resource$Projects$Patchjobs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Patchjobs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPatchJobsResponse>,
      callback: BodyResponseCallback<Schema$ListPatchJobsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Patchjobs$List,
      callback: BodyResponseCallback<Schema$ListPatchJobsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListPatchJobsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchjobs$List
        | BodyResponseCallback<Schema$ListPatchJobsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPatchJobsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPatchJobsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListPatchJobsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchjobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchjobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/patchJobs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListPatchJobsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListPatchJobsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Patchjobs$Cancel
    extends StandardParameters {
    /**
     * Required. Name of the patch in the form `projects/x/patchJobs/x`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelPatchJobRequest;
  }
  export interface Params$Resource$Projects$Patchjobs$Execute
    extends StandardParameters {
    /**
     * Required. The project in which to run this patch in the form `projects/x`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExecutePatchJobRequest;
  }
  export interface Params$Resource$Projects$Patchjobs$Get
    extends StandardParameters {
    /**
     * Required. Name of the patch in the form `projects/x/patchJobs/x`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Patchjobs$List
    extends StandardParameters {
    /**
     * If provided, this field specifies the criteria that must be met by patch jobs to be included in the response. Currently, filtering is only available on the patch_deployment field.
     */
    filter?: string;
    /**
     * The maximum number of instance status to return.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. In the form of `projects/x`
     */
    parent?: string;
  }

  export class Resource$Projects$Patchjobs$Instancedetails {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * osconfig.projects.patchJobs.instanceDetails.list
     * @desc Get a list of instance details for a given patch job.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await osconfig.projects.patchJobs.instanceDetails.list({
     *     // A filter expression that filters results listed in the response. This
     *     // field supports filtering results by instance zone, name, state, or
     *     // `failure_reason`.
     *     filter: 'placeholder-value',
     *     // The maximum number of instance details records to return.  Default is 100.
     *     pageSize: 'placeholder-value',
     *     // A pagination token returned from a previous call
     *     // that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent for the instances are in the form of `projects/x/patchJobs/x`.
     *     parent: 'projects/my-project/patchJobs/my-patchJob',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "patchJobInstanceDetails": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias osconfig.projects.patchJobs.instanceDetails.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter A filter expression that filters results listed in the response. This field supports filtering results by instance zone, name, state, or `failure_reason`.
     * @param {integer=} params.pageSize The maximum number of instance details records to return.  Default is 100.
     * @param {string=} params.pageToken A pagination token returned from a previous call that indicates where this listing should continue from.
     * @param {string} params.parent Required. The parent for the instances are in the form of `projects/x/patchJobs/x`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Patchjobs$Instancedetails$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Patchjobs$Instancedetails$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListPatchJobInstanceDetailsResponse>;
    list(
      params: Params$Resource$Projects$Patchjobs$Instancedetails$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Patchjobs$Instancedetails$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPatchJobInstanceDetailsResponse>,
      callback: BodyResponseCallback<Schema$ListPatchJobInstanceDetailsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Patchjobs$Instancedetails$List,
      callback: BodyResponseCallback<Schema$ListPatchJobInstanceDetailsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPatchJobInstanceDetailsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchjobs$Instancedetails$List
        | BodyResponseCallback<Schema$ListPatchJobInstanceDetailsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPatchJobInstanceDetailsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPatchJobInstanceDetailsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListPatchJobInstanceDetailsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchjobs$Instancedetails$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchjobs$Instancedetails$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/instanceDetails').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListPatchJobInstanceDetailsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListPatchJobInstanceDetailsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Patchjobs$Instancedetails$List
    extends StandardParameters {
    /**
     * A filter expression that filters results listed in the response. This field supports filtering results by instance zone, name, state, or `failure_reason`.
     */
    filter?: string;
    /**
     * The maximum number of instance details records to return.  Default is 100.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The parent for the instances are in the form of `projects/x/patchJobs/x`.
     */
    parent?: string;
  }
}
