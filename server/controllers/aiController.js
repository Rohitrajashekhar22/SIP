import axios from "axios";

const SYSTEM_PROMPT = `You are a helpful assistant.

Style:
- Be concise, friendly, and practical.
- Explain concepts in simple language.
- Prefer short examples or step-by-step answers.
- If the user input is vague, incomplete, or too short, answer with the most likely interpretation and offer one brief follow-up option instead of refusing.

Answer the user's question directly. If they ask for code, provide code. If they ask for an explanation, give a clear explanation. If they ask for examples, include examples.`;

const RAPIDAPI_HOST = "ai-chatbot.p.rapidapi.com";
const RAPIDAPI_URL = "https://ai-chatbot.p.rapidapi.com/chat/free";

const buildPrompt = (messages) => {
    const recentMessages = messages.slice(-6);
    const conversation = recentMessages
        .map((message) => `${message.role === "user" ? "User" : "Assistant"}: ${message.content}`)
        .join("\n");

    return `${SYSTEM_PROMPT}\n\nConversation so far:\n${conversation}\n\nRespond as the assistant.`;
};

const normalizeText = (value) => value.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();

const getFallbackResponse = (query) => {
    const text = normalizeText(query);
    const wantsCode =
        text.includes("code") ||
        text.includes("program") ||
        text.includes("implementation") ||
        text.includes("write") ||
        text.includes("show me") ||
        text.includes("example code") ||
        text.includes("java") ||
        text.includes("javascript") ||
        text.includes("python");
    const wantsJavaScript = text.includes("javascript") || text.includes("js");
    const wantsPython = text.includes("python") || text.includes("py");
    const wantsJava = text.includes("java") && !text.includes("javascript");
    const looksLikeRecursion =
        text.includes("recursion") ||
        text.includes("recusion") ||
        text.includes("recurtion") ||
        text.includes("reccursion");
    const looksLikeSystemDesign =
        (text.includes("system") && (text.includes("design") || text.includes("desgn"))) ||
        text.includes("system design") ||
        text.includes("system desgn") ||
        text.includes("sytem desging") ||
        text.includes("system desging") ||
        text.includes("system desing");
    const looksLikeDataStructures =
        text.includes("data structure") ||
        text.includes("data structures") ||
        text.includes("datastructure") ||
        text.includes("data structre") ||
        text.includes("ds a") ||
        text.includes("dsa");
    const looksLikeFactorial = text.includes("factorial");

    if (text === "example" || text === "examples" || text === "explain" || text === "help") {
        return "Example of what topic? I can give examples for recursion, arrays, trees, stacks, queues, system design, or coding patterns.";
    }

    if (text.includes("array") && wantsCode) {
        if (wantsJavaScript) {
            return [
                "Here is a JavaScript example of an array:",
                "",
                "```javascript",
                "const numbers = [10, 20, 30, 40, 50];",
                "",
                "for (let i = 0; i < numbers.length; i++) {",
                "  console.log(`Element at index ${i} = ${numbers[i]}`);",
                "}",
                "```",
            ].join("\n");
        }

        if (wantsPython) {
            return [
                "Here is a Python example of an array-like list:",
                "",
                "```python",
                "numbers = [10, 20, 30, 40, 50]",
                "",
                "for i in range(len(numbers)):",
                "    print(f\"Element at index {i} = {numbers[i]}\")",
                "```",
            ].join("\n");
        }

        if (wantsJava || !wantsJavaScript) {
            return [
                "Here is a Java example of an array:",
                "",
                "```java",
                "public class ArrayExample {",
                "    public static void main(String[] args) {",
                "        int[] numbers = {10, 20, 30, 40, 50};",
                "",
                "        for (int i = 0; i < numbers.length; i++) {",
                "            System.out.println(\"Element at index \" + i + \" = \" + numbers[i]);",
                "        }",
                "    }",
                "}",
                "```",
            ].join("\n");
        }
    }

    if (looksLikeFactorial) {
        if (wantsCode && wantsPython) {
            return [
                "Here is an iterative factorial function in Python:",
                "",
                "```python",
                "def factorial(n):",
                "    if n < 0:",
                "        return \"Factorial is not defined for negative numbers\"",
                "",
                "    result = 1",
                "    for i in range(2, n + 1):",
                "        result *= i",
                "    return result",
                "",
                "print(factorial(5))  # 120",
                "print(factorial(0))  # 1",
                "```",
            ].join("\n");
        }

        if (wantsCode && (wantsJavaScript || !wantsPython)) {
            return [
                "Here is an iterative factorial function in JavaScript:",
                "",
                "```javascript",
                "function factorial(n) {",
                "  if (n < 0) {",
                "    return \"Factorial is not defined for negative numbers\";",
                "  }",
                "",
                "  let result = 1;",
                "  for (let i = 2; i <= n; i++) {",
                "    result *= i;",
                "  }",
                "",
                "  return result;",
                "}",
                "",
                "console.log(factorial(5)); // 120",
                "console.log(factorial(0)); // 1",
                "```",
            ].join("\n");
        }

        return [
            "Factorial means multiplying a number by all positive integers below it.",
            "Example: 5! = 5 x 4 x 3 x 2 x 1 = 120.",
            "Recursive definition:",
            "- Base case: 0! = 1",
            "- Recursive case: n! = n x (n - 1)!",
            "If you want, I can also show the iterative code for factorial in JavaScript, Java, or Python."
        ].join("\n");
    }

    if (looksLikeRecursion && (text.includes("example") || text.includes("explain") || text.includes("what") || text.includes("how"))) {
        return [
            "Recursion is when a function calls itself to solve a smaller version of the same problem.",
            "It has two key parts:",
            "1. Base case: stops the recursion.",
            "2. Recursive case: calls the function again with a smaller input.",
            "Example: factorial(4) = 4 * factorial(3) = 4 * 3 * factorial(2) = 4 * 3 * 2 * factorial(1) = 24.",
            "In short: recursion breaks a big problem into smaller pieces until the base case is reached."
        ].join("\n");
    }

    if (looksLikeDataStructures) {
        return [
            "A data structure is a way to organize and store data so you can use it efficiently.",
            "Common examples: arrays, linked lists, stacks, queues, hash maps, trees, and graphs.",
            "How to choose one:",
            "- Need fast lookup by key: hash map",
            "- Need ordered sequence: array or linked list",
            "- Need LIFO behavior: stack",
            "- Need FIFO behavior: queue",
            "- Need hierarchical or searchable data: tree",
            "If you want, I can compare two data structures side by side."
        ].join("\n");
    }

    if (looksLikeSystemDesign && (text.includes("all") || text.includes("full") || text.includes("topics") || text.includes("topic") || text.includes("everything") || text.includes("what") || text.includes("explain") || text.includes("list"))) {
        return [
            "System design topics, fully covered:",
            "1. Requirements gathering: functional requirements, non-functional requirements, scope, constraints.",
            "2. High-level architecture: clients, load balancers, app servers, services, databases, caches, queues.",
            "3. Data modeling: entities, relationships, schemas, normalization, denormalization.",
            "4. APIs: endpoint design, request/response formats, pagination, filtering, versioning.",
            "5. Scalability: horizontal vs vertical scaling, sharding, partitioning, replication.",
            "6. Performance: caching, CDNs, indexes, read/write optimization, async processing.",
            "7. Reliability: redundancy, failover, retries, idempotency, circuit breakers.",
            "8. Consistency and availability: CAP tradeoffs, eventual consistency, strong consistency.",
            "9. Messaging: queues, pub/sub, stream processing, background workers.",
            "10. Security: authentication, authorization, rate limiting, encryption, secrets management.",
            "11. Observability: logging, metrics, tracing, alerting, dashboards.",
            "12. Tradeoffs: cost, complexity, latency, throughput, maintainability.",
            "13. Interview flow: clarify requirements, estimate scale, design core, identify bottlenecks, then optimize.",
            "If you want, I can now expand any one of these topics with a real interview example."
        ].join("\n");
    }

    if (text.includes("recursion")) {
        return "Recursion is when a function solves a problem by calling itself on smaller inputs until it reaches a base case.";
    }

    if (text.includes("array")) {
        return [
            "An array is a contiguous data structure used to store ordered elements.",
            "It gives fast access by index, and it is commonly used when you know the number of items or need direct access.",
            "If you want, I can also show an array example in Java, JavaScript, or Python."
        ].join("\n");
    }

    if (text.includes("tree")) {
        return "A tree is a hierarchical data structure made of nodes, commonly used for search, parsing, and organizing data.";
    }

    if (text.includes("stack") || text.includes("queue")) {
        return "Stacks and queues are linear data structures: stacks use LIFO order, while queues use FIFO order.";
    }

    return [
        "I can help with your question.",
        "Ask for an explanation, example, comparison, code snippet, summary, or step-by-step solution.",
        "For example: 'Write iterative factorial code in JavaScript', 'Explain recursion', 'What is system design?', or 'Give me Java code for an array'."
    ].join("\n");
};

export const chat = async (req, res) => {
    try {
        const { messages } = req.body;

        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            return res.status(400).json({
                error: "Messages array is required",
            });
        }

        const lastMessage = messages[messages.length - 1];
        if (lastMessage.role !== "user") {
            return res.status(400).json({
                error: "Last message must be from the user",
            });
        }

        const normalizedQuery = lastMessage.content.trim().toLowerCase();
        const shouldUseLocalResponse =
            normalizedQuery.includes("factorial") ||
            normalizedQuery.includes("array") ||
            normalizedQuery.includes("recursion") ||
            normalizedQuery.includes("data structure") ||
            normalizedQuery.includes("stack") ||
            normalizedQuery.includes("queue") ||
            normalizedQuery.includes("tree") ||
            normalizedQuery.includes("system design");

        if (!normalizedQuery || ["hi", "hello", "hey", "example", "examples", "help", "explain"].includes(normalizedQuery)) {
            return res.status(200).json({
                message: "Ask me anything. I can explain concepts, give examples, or write code for programming, system design, and other topics.",
            });
        }

        if (shouldUseLocalResponse) {
            return res.status(200).json({
                message: getFallbackResponse(lastMessage.content),
            });
        }

        const apiKey = process.env.RAPIDAPI_KEY;

        if (!apiKey) {
            return res.status(500).json({
                error: "RapidAPI key is missing from the server environment.",
            });
        }

        const prompt = buildPrompt(messages);

        try {
            const response = await axios.get(RAPIDAPI_URL, {
                params: {
                    message: prompt,
                    uid: "sip-user",
                },
                headers: {
                    "Content-Type": "application/json",
                    "x-rapidapi-host": RAPIDAPI_HOST,
                    "x-rapidapi-key": apiKey,
                },
                timeout: 30000,
            });

            const data = response.data;
            const assistantMessage =
                data?.chatbot?.response ||
                data?.response ||
                data?.message ||
                data?.text ||
                (typeof data === "string" ? data : null);

            if (!assistantMessage || assistantMessage === "Internal Server") {
                throw new Error("RapidAPI returned an invalid response.");
            }

            return res.status(200).json({
                message: assistantMessage,
            });
        } catch (apiError) {
            console.error("RapidAPI error:", apiError.message || apiError);

            return res.status(200).json({
                message: getFallbackResponse(lastMessage.content),
            });
        }
    } catch (error) {
        console.error("AI error:", error.message || error);
        console.error("Full error stack:", error.stack);

        if (error.status === 401) {
            return res.status(401).json({
                error: "Invalid RapidAPI key. Please verify your credentials.",
            });
        }

        res.status(500).json({
            error: error.message || "Failed to process AI request",
        });
    }
};
