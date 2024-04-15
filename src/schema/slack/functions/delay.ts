/** This file was autogenerated. Follow the steps in src/schema/slack/functions/_scripts/README.md to rebuild **/
import { DefineFunction } from "../../../functions/mod.ts";
import SchemaTypes from "../../schema_types.ts";

export default DefineFunction({
  callback_id: "slack#/functions/delay",
  source_file: "",
  title: "Delay this workflow",
  description: "Pauses the workflow at this step",
  input_parameters: {
    properties: {
      minutes_to_delay: {
        type: SchemaTypes.integer,
        description: "Enter number of minutes",
        title: "Delay",
      },
    },
    required: ["minutes_to_delay"],
  },
  output_parameters: { properties: {}, required: [] },
});
