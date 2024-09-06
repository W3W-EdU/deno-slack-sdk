/** This file was autogenerated. Follow the steps in src/schema/slack/functions/_scripts/README.md to rebuild **/
import { assertEquals, assertNotStrictEquals } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../workflows/mod.ts";
import { ManifestFunctionSchema } from "../../../manifest/manifest_schema.ts";
import SchemaTypes from "../../schema_types.ts";
import SlackTypes from "../schema_types.ts";
import DeleteListRecord from "./delete_list_record.ts";

Deno.test("DeleteListRecord generates valid FunctionManifest", () => {
  assertEquals(
    DeleteListRecord.definition.callback_id,
    "slack#/functions/delete_list_record",
  );
  const expected: ManifestFunctionSchema = {
    source_file: "",
    title: "Delete a list item",
    input_parameters: {
      properties: {
        list_id: {
          type: SlackTypes.list_id,
          description: "Select a list",
          title: "Select a list",
        },
        record_id: {
          type: SchemaTypes.string,
          description: "Item ID",
          title: "Item ID",
        },
      },
      required: ["list_id"],
    },
    output_parameters: { properties: {}, required: [] },
  };
  const actual = DeleteListRecord.export();

  assertNotStrictEquals(actual, expected);
});

Deno.test("DeleteListRecord can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_DeleteListRecord_slack_function",
    title: "Test DeleteListRecord",
    description: "This is a generated test to test DeleteListRecord",
  });
  testWorkflow.addStep(DeleteListRecord, { list_id: "test" });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "slack#/functions/delete_list_record");
  assertEquals(actual.inputs, { list_id: "test" });
});