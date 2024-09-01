import { ChatOllama } from "@langchain/ollama";
import { ChatPromptTemplate } from "@langchain/core/prompts";

export default async function Home() {
	async function getResponse() {
		const model = new ChatOllama({
			model: "llama3",
			temperature: 1.5,
			baseUrl: "http://127.0.0.1:11434/",
		});

		const converter = ChatPromptTemplate.fromMessages([
			[
				"system",
				"You’re a basketball buddy. Answer in your own slang and style, using 20 words",
			],
			["user", "Tell me about {input}"],
		]).pipe(model);

		try {
			const res = await converter.invoke({
				input: "what is hyderabad dao",
			});
			console.log({ res });
		} catch (e) {
			console.log(e);
		}
	}

	getResponse();

	return (
		<div className="flex min-h-screen flex-col items-center justify-between p-24">
			hello
		</div>
	);
}
