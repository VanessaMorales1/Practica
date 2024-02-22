import { OpenAI } from "langchain";
import { RetrievalQAChain } from "langchain/chains";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";


import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";


export const new_process = async (filename: string | undefined, question: string) => {
    const model = new OpenAI({ modelName: 'gpt-3.5-turbo' });
   
    const directoryLoader = new DirectoryLoader(
        `/Users/vlmor/Documents/10mo/dispositivos/proyectos/mobil-2-main/backend/uploads`,
        {
          ".pdf": (path: string) => new PDFLoader(path),
        }
      );
   
    const doc = await directoryLoader.load();
    const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 200, chunkOverlap: 100 });
    const splitDocs = await textSplitter.splitDocuments(doc)
    const vectorStore = await MemoryVectorStore.fromDocuments(splitDocs, new OpenAIEmbeddings())
    const vectorStoreRetriever = vectorStore.asRetriever()
    const chain = RetrievalQAChain.fromLLM(model, vectorStoreRetriever);

    return await chain.call({
        query: question,
    })
}
