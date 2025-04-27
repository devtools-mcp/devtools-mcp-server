import type {
  ToolAnnotations,
  ToolCallback,
  ZodRawShape,
} from "@modelcontextprotocol/sdk";

// deno-lint-ignore no-explicit-any
export type MCPTool<T extends ZodRawShape = any> = {
  name: string;
  cb: ToolCallback | ToolCallback<T>;
  description?: string;
  paramsSchema?: T;
  annotations?: ToolAnnotations;
  paramsSchemaOrAnnotations?: T | ToolAnnotations;
};
