import { z } from "zod";
import type { MCPTool } from "../../types.ts";

export const caseConverterInputSchema = z.object({
  text: z.string(),
});

type CaseConverterInput = z.infer<typeof caseConverterInputSchema>;

export const textLowerCase: MCPTool = {
  name: "text-case-converter-lower",
  description: "convert text to lower case",
  paramsSchemaOrAnnotations: caseConverterInputSchema.shape,
  cb: ({ text }: CaseConverterInput) => {
    const lower = text.toLowerCase();
    return {
      content: [
        {
          type: "text",
          text: lower,
        },
      ],
    };
  },
};

export const textUpperCase: MCPTool = {
  name: "text-case-converter-upper",
  description: "convert text to upper case",
  paramsSchemaOrAnnotations: caseConverterInputSchema.shape,
  cb: ({ text }: CaseConverterInput) => {
    const upper = text.toUpperCase();
    return {
      content: [
        {
          type: "text",
          text: upper,
        },
      ],
    };
  },
};
