const splitTopLevel = (text) => {
	const parts = [];
	let current = "";
	let depth = 0;
	let quote = null;

	for (let index = 0; index < text.length; index += 1) {
		const character = text[index];

		if (quote) {
			current += character;

			if (character === quote && text[index - 1] !== "\\") {
				quote = null;
			}

			continue;
		}

		if (character === '"' || character === "'") {
			quote = character;
			current += character;
			continue;
		}

		if (character === "[" || character === "(" || character === "{") {
			depth += 1;
		}

		if (character === "]" || character === ")" || character === "}") {
			depth -= 1;
		}

		if (character === "," && depth === 0) {
			if (current.trim()) {
				parts.push(current.trim());
			}

			current = "";
			continue;
		}

		current += character;
	}

	if (current.trim()) {
		parts.push(current.trim());
	}

	return parts;
};

const parseValue = (value) => {
	const trimmed = value.trim();

	if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
		const inner = trimmed.slice(1, -1).trim();

		if (!inner) {
			return [];
		}

		return splitTopLevel(inner).map(parseValue);
	}

	if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
		try {
			return JSON.parse(trimmed);
		} catch {
			return trimmed;
		}
	}

	if (
		(trimmed.startsWith('"') && trimmed.endsWith('"')) ||
		(trimmed.startsWith("'") && trimmed.endsWith("'"))
	) {
		return trimmed.slice(1, -1);
	}

	if (trimmed === "true") {
		return true;
	}

	if (trimmed === "false") {
		return false;
	}

	if (trimmed === "null") {
		return null;
	}

	if (/^-?\d+(\.\d+)?$/.test(trimmed)) {
		return Number(trimmed);
	}

	return trimmed;
};

export const parseProblemInput = (input) => {
	if (!input) {
		return [];
	}

	return splitTopLevel(input)
		.map((part) => {
			const equalsIndex = part.indexOf("=");

			if (equalsIndex === -1) {
				return parseValue(part);
			}

			return parseValue(part.slice(equalsIndex + 1));
		});
};

export const normalizeOutput = (value) =>
	String(value ?? "")
		.replace(/\r\n/g, "\n")
		.trim()
		.replace(/\s+/g, "")
		.toLowerCase();

export const detectMethodName = (code, language) => {
	const source = code || "";

	if (language === "javascript") {
		const functionMatches = [
			source.match(/(?:var|let|const)\s+([A-Za-z_$][\w$]*)\s*=\s*function/),
			source.match(/function\s+([A-Za-z_$][\w$]*)\s*\(/),
			source.match(/(?:var|let|const)\s+([A-Za-z_$][\w$]*)\s*=\s*\(/),
		];

		const foundMatch = functionMatches.find(Boolean);
		return foundMatch ? foundMatch[1] : "solution";
	}

	const signatureMatches = [...source.matchAll(/([A-Za-z_$][\w$]*)\s*\(/g)];

	const match = signatureMatches.find((item) => {
		const method = item[1];
		return method !== "main" && method !== "Solution" && method !== "if" && method !== "for";
	});

	if (match) {
		return match[1];
	}

	const pythonMatch = source.match(/def\s+([A-Za-z_$][\w$]*)\s*\(/);

	if (pythonMatch) {
		return pythonMatch[1];
	}

	return "solution";
};

const toJavaLiteral = (value) => {
	if (Array.isArray(value)) {
		if (value.every((item) => Number.isInteger(item))) {
			return `new int[]{${value.map(toJavaLiteral).join(", ")}}`;
		}

		if (value.every((item) => typeof item === "string")) {
			return `new String[]{${value.map(toJavaLiteral).join(", ")}}`;
		}

		return `new Object[]{${value.map(toJavaLiteral).join(", ")}}`;
	}

	if (typeof value === "string") {
		return JSON.stringify(value);
	}

	if (typeof value === "boolean") {
		return value ? "true" : "false";
	}

	if (value === null) {
		return "null";
	}

	return String(value);
};

const toCppLiteral = (value) => {
	if (Array.isArray(value)) {
		return `{${value.map(toCppLiteral).join(", ")}}`;
	}

	if (typeof value === "string") {
		return JSON.stringify(value);
	}

	if (typeof value === "boolean") {
		return value ? "true" : "false";
	}

	if (value === null) {
		return "nullptr";
	}

	return String(value);
};

const toPythonLiteral = (value) => {
	if (Array.isArray(value)) {
		return `[${value.map(toPythonLiteral).join(", ")}]`;
	}

	if (typeof value === "string") {
		return JSON.stringify(value);
	}

	if (typeof value === "boolean") {
		return value ? "True" : "False";
	}

	if (value === null) {
		return "None";
	}

	return String(value);
};

const toJavaScriptLiteral = (value) => {
	if (Array.isArray(value)) {
		return `[${value.map(toJavaScriptLiteral).join(", ")}]`;
	}

	if (typeof value === "string") {
		return JSON.stringify(value);
	}

	if (typeof value === "boolean") {
		return value ? "true" : "false";
	}

	if (value === null) {
		return "null";
	}

	return String(value);
};

export const buildExecutableSource = ({ language, code, methodName, args }) => {
	const literalArgs = args.map((argument) => {
		if (language === "java") {
			return toJavaLiteral(argument);
		}

		if (language === "python") {
			return toPythonLiteral(argument);
		}

		if (language === "cpp") {
			return toCppLiteral(argument);
		}

		return toJavaScriptLiteral(argument);
	});

	if (language === "javascript") {
		return `${code}

const __result = ${methodName}(${literalArgs.join(", ")});
console.log(Array.isArray(__result) ? JSON.stringify(__result) : String(__result));
`;
	}

	if (language === "python") {
		return `${code}

if __name__ == "__main__":
	import json

	__result = Solution().${methodName}(${literalArgs.join(", ")})

	if isinstance(__result, (list, dict, tuple)):
		print(json.dumps(__result))
	else:
		print(__result)
`;
	}

	if (language === "java") {
		return `${code}

class Main {
	private static String formatValue(Object value) {
		if (value == null) {
			return "null";
		}

		Class<?> type = value.getClass();

		if (!type.isArray()) {
			return String.valueOf(value);
		}

		int length = java.lang.reflect.Array.getLength(value);
		StringBuilder builder = new StringBuilder("[");

		for (int index = 0; index < length; index += 1) {
			if (index > 0) {
				builder.append(",");
			}

			builder.append(formatValue(java.lang.reflect.Array.get(value, index)));
		}

		builder.append("]");
		return builder.toString();
	}

	public static void main(String[] args) {
		Solution solution = new Solution();
		System.out.println(
			formatValue(solution.${methodName}(${literalArgs.join(", ")}))
		);
	}
}
`;
	}

	if (language === "cpp") {
		return `${code}

template <typename T>
string formatValue(const vector<T>& values) {
	string output = "[";

	for (size_t index = 0; index < values.size(); index += 1) {
		if (index > 0) {
			output += ",";
		}

		output += formatValue(values[index]);
	}

	output += "]";
	return output;
}

template <typename T>
string formatValue(const T& value) {
	return to_string(value);
}

template <>
string formatValue<string>(const string& value) {
	return value;
}

template <>
string formatValue<bool>(const bool& value) {
	return value ? "true" : "false";
}

int main() {
	Solution solution;
	cout << formatValue(solution.${methodName}(${literalArgs.join(", ")}));
	return 0;
}
`;
	}

	return code;
};
