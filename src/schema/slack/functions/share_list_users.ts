/** This file was autogenerated. Follow the steps in src/schema/slack/functions/_scripts/README.md to rebuild **/
import { DefineFunction } from "../../../functions/mod.ts";
import SchemaTypes from "../../schema_types.ts";
import SlackTypes from "../schema_types.ts";

export default DefineFunction({
  callback_id: "slack#/functions/share_list_users",
  source_file: "",
  title: "Share a list with people",
  description: "Share a list with users",
  input_parameters: {
    properties: {
      file_id: {
        type: SlackTypes.list_id,
        description: "Search all list",
        title: "Select a List",
      },
      user_ids: {
        type: SchemaTypes.array,
        description: "Search all people",
        title: "Select member(s)",
        items: { type: SlackTypes.user_id },
      },
      user_access_level: {
        type: SchemaTypes.string,
        description: "Selects an access level for sharing",
        title: "Select access level",
      },
      message: {
        type: SlackTypes.rich_text,
        description: "Add a message",
        title: "Add a message",
      },
    },
    required: ["file_id", "user_ids", "user_access_level"],
  },
  output_parameters: {
    properties: {
      file_id: {
        type: SlackTypes.list_id,
        description: "List title",
        title: "List title",
      },
    },
    required: [],
  },
});