import type { MCPTool } from "../../types.ts";

export const uuidGenerateV4: MCPTool = {
  name: "uuid-generate-v4",
  description: "generate a v4 UUID",
  cb: () => {
    const id = crypto.randomUUID();
    return {
      content: [
        {
          type: "text",
          text: id,
        },
      ],
    };
  },
};
