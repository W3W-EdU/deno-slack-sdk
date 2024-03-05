import { ISlackFunctionDefinition } from "../functions/types.ts";
import type { ManifestWidgetSchema } from "../manifest/manifest_schema.ts";
import {
  ParameterPropertiesDefinition,
  ParameterSetDefinition,
  PossibleParameterKeys,
} from "../parameters/types.ts";

export interface ISlackWidget {
  id: string;
  export: () => ManifestWidgetSchema;
}

export enum SlackWidgetDataMode {
  PER_INSTALLER = "PER_INSTALLER",
  PER_USER = "PER_USER",
}

export interface SlackWidgetCache {
  ttl_secs: number;
}

export interface SlackWidgetDependency {
  name: string;
  function:
    | string
    | ISlackFunctionDefinition<
      ParameterSetDefinition,
      ParameterSetDefinition,
      PossibleParameterKeys<ParameterSetDefinition>,
      PossibleParameterKeys<ParameterSetDefinition>
    >;
  inputs?: {
    [k: string]: string;
  };
}

export interface SlackWidgetViewData {
  label: string;
  value: string;
}

export interface SlackWidgetViewAction {
  name: string;
  type: "link";
  url?: string;
}

export interface SlackWidgetView {
  type: string;
  title: string;
  blocks: object[];
}

export type SlackWidgetDefinition<Definition> = Definition extends
  SlackWidgetDefinitionArgs<
    infer I,
    infer T,
    infer D,
    infer DM,
    infer WFID,
    infer PIIP,
    infer PUIP,
    infer C,
    infer IP,
    infer OP,
    infer RI,
    infer RO,
    infer WV
  > ? SlackWidgetDefinitionArgs<
    I,
    T,
    D,
    DM,
    WFID,
    PIIP,
    PUIP,
    C,
    IP,
    OP,
    RI,
    RO,
    WV
  >
  : never;

export type SlackWidgetDefinitionArgs<
  CallbackID extends string,
  Title extends string,
  Description extends string,
  DataMode extends SlackWidgetDataMode,
  WorkflowCallbackID extends string,
  PerInstallerInputParameters extends string[],
  PerUserInputParameters extends string[],
  Cache extends SlackWidgetCache,
  InputParameters extends ParameterSetDefinition,
  OutputParameters extends ParameterSetDefinition,
  RequiredInputs extends PossibleParameterKeys<InputParameters>,
  RequiredOutputs extends PossibleParameterKeys<OutputParameters>,
  View extends SlackWidgetView,
> = {
  callback_id: CallbackID;
  title: Title;
  description: Description;
  data_mode: DataMode;
  workflow_callback_id?: WorkflowCallbackID;
  per_installer_input_parameters?: PerInstallerInputParameters;
  per_user_input_parameters?: PerUserInputParameters;
  cache?: Cache;
  "input_parameters"?: ParameterPropertiesDefinition<
    InputParameters,
    RequiredInputs
  >;
  "output_parameters"?: ParameterPropertiesDefinition<
    OutputParameters,
    RequiredOutputs
  >;
  dependencies?: SlackWidgetDependency[];
  view?: View;
};
