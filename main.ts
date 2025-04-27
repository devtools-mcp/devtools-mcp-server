import { McpServer } from "npm:@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "npm:@modelcontextprotocol/sdk/server/stdio.js";
import { uuidGenerateV4 } from "./tools/uuid-generator/index.ts";
import { textLowerCase } from "./tools/text-case-converter/index.ts";
import { textUpperCase } from "./tools/text-case-converter/index.ts";

// Create an MCP server
const server = new McpServer({
  name: "Demo",
  version: "1.0.0",
});

// Add an addition tool
server.tool(
  uuidGenerateV4.name,
  uuidGenerateV4.description ?? "",
  uuidGenerateV4.cb,
);

server.tool(
  textLowerCase.name,
  textLowerCase.description ?? "",
  textLowerCase.paramsSchemaOrAnnotations,
  textLowerCase.cb,
);

server.tool(
  textUpperCase.name,
  textUpperCase.description ?? "",
  textUpperCase.paramsSchemaOrAnnotations,
  textUpperCase.cb,
);

// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport);
