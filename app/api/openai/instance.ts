import { AzureChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { GUIDELINE_PROMPT } from '@/app/api/openai/prompt';

export const llm = new AzureChatOpenAI({
  model: 'gpt-4o',
  temperature: 0,
  maxTokens: undefined,
  maxRetries: 2,
  azureOpenAIApiKey: process.env.NEXT_PUBLIC_AZURE_OPENAI_API_KEY, // In Node.js defaults to process.env.AZURE_OPENAI_API_KEY
  azureOpenAIApiInstanceName:
    process.env.NEXT_PUBLIC_AZURE_OPENAI_API_INSTANCE_NAME, // In Node.js defaults to process.env.AZURE_OPENAI_API_INSTANCE_NAME
  azureOpenAIApiDeploymentName:
    process.env.NEXT_PUBLIC_AZURE_OPENAI_API_DEPLOYMENT_NAME, // In Node.js defaults to process.env.AZURE_OPENAI_API_DEPLOYMENT_NAME
  azureOpenAIApiVersion: process.env.NEXT_PUBLIC_AZURE_OPENAI_API_VERSION, // In Node.js defaults to process.env.AZURE_OPENAI_API_VERSION
});

async function analyzeContract(contractText: string): Promise<string> {
  try {
    const userQuestion = `${contractText}\n이 법률적으로 검토해야 할 계약서 입니다\n`;

    const context = '';

    const promptTemplate = new PromptTemplate({
      inputVariables: ['context', 'userQuestion'],
      template: GUIDELINE_PROMPT,
    });

    const llmSequence = promptTemplate || llm;
    const response = await llmSequence.invoke({
      context: context,
      userQuestion: userQuestion,
    });

    const rawResult = response.value;
    console.log('raw_result:', rawResult);

    return rawResult;
  } catch (e: any) {
    console.error(`Error in analyzeContract: ${e}`);
    return JSON.stringify({ status: 'error', message: e.message });
  }
}
