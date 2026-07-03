import { useEffect, useMemo, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import { runCode } from "../api/compilerApi";
import {
    getSubmittedCode,
    markProblemSolved,
    saveSubmittedCode,
} from "../utils/localStorage";
import {
    buildExecutableSource,
    detectMethodName,
    normalizeOutput,
    parseProblemInput,
} from "../utils/helper";

const LANGUAGE_IDS = {
    javascript: 63,
    python: 71,
    java: 62,
    cpp: 54,
};

function MonacoEditor({ problem, onSolved }) {

    const starterCode = problem?.starterCode;
    const problemSlug = problem?.slug;

    const [language, setLanguage] = useState("java");

    const [code, setCode] = useState(() => {
        return getSubmittedCode(problemSlug, "java") || starterCode?.java || "";
    });

    const [isRunning, setIsRunning] = useState(false);

    const [statusMessage, setStatusMessage] = useState("Output will appear here...");

    const [testResults, setTestResults] = useState([]);

    const outputRef = useRef(null);

    const allVisibleTests = useMemo(
        () => problem?.visibleTestCases || [],
        [problem]
    );

    const allHiddenTests = useMemo(
        () => problem?.hiddenTestCases || [],
        [problem]
    );

    useEffect(() => {
        if (outputRef.current) {
            outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }
    }, [testResults, statusMessage]);

    const evaluateTestCases = async (cases, mode) => {
        if (!cases.length) {
            setStatusMessage("No test cases available.");
            setTestResults([]);
            return;
        }

        if (!LANGUAGE_IDS[language]) {
            setStatusMessage("This language is not wired for simple execution yet.");
            setTestResults([]);
            return;
        }

        const methodName = detectMethodName(code, language);
        const results = [];

        setIsRunning(true);
        setStatusMessage(mode === "submit" ? "Submitting..." : "Running visible tests...");
        setTestResults([]);

        for (let index = 0; index < cases.length; index += 1) {
            const testCase = cases[index];
            const parsedInput = parseProblemInput(testCase.input);
            const source = buildExecutableSource({
                language,
                code,
                methodName,
                args: parsedInput,
            });

            try {
                const execution = await runCode({
                    language_id: LANGUAGE_IDS[language],
                    code: source,
                    input: "",
                });

                const actualOutput = execution.stdout || execution.stderr || execution.compile_output || "";
                const passed = normalizeOutput(actualOutput) === normalizeOutput(testCase.output);

                results.push({
                    label: mode === "submit" && testCase.hidden ? `Hidden Test ${index + 1}` : `Test ${index + 1}`,
                    input: testCase.hidden ? "Hidden" : testCase.input,
                    expected: testCase.output,
                    actual: actualOutput.trim() || "No output",
                    passed,
                });
            } catch (error) {
                const failureMessage = error.response?.data?.error || error.message || "Execution failed";

                results.push({
                    label: mode === "submit" && testCase.hidden ? `Hidden Test ${index + 1}` : `Test ${index + 1}`,
                    input: testCase.hidden ? "Hidden" : testCase.input,
                    expected: testCase.output,
                    actual: failureMessage,
                    passed: false,
                });
            }
        }

        setTestResults(results);

        const passedCount = results.filter((result) => result.passed).length;
        setStatusMessage(`${passedCount}/${results.length} test cases passed`);
        setIsRunning(false);

        return results;
    };

    // RUN BUTTON
    const handleRun = async () => {
        await evaluateTestCases(allVisibleTests, "run");
    };

    // SUBMIT BUTTON
    const handleSubmit = async () => {
        saveSubmittedCode(problemSlug, language, code);

        const submitTests = [
            ...allVisibleTests.map((testCase) => ({
                ...testCase,
                hidden: false,
            })),
            ...allHiddenTests.map((testCase) => ({
                ...testCase,
                hidden: true,
            })),
        ];

        const results = await evaluateTestCases(submitTests, "submit");

        if (problem?.slug && results?.length > 0 && results.every((result) => result.passed)) {
            markProblemSolved(problem.slug);
            if (typeof onSolved === "function") {
                onSolved(problem.slug);
            }
            setStatusMessage("All test cases passed. Problem solved.");
        }
    };

    return (

        <div className="h-full flex flex-col bg-[#1e1e1e] text-white">

            {/* TOP BAR */}
            <div
                className="
                h-12
                border-b
                border-[#2d2d2d]
                flex
                items-center
                justify-between
                px-4
                bg-[#262626]
                "
            >

                {/* LANGUAGE SELECTOR */}
                <select
                    value={language}
                    onChange={(e) => {
                        const nextLanguage = e.target.value;
                        setLanguage(nextLanguage);
                        setCode(
                            getSubmittedCode(problemSlug, nextLanguage) ||
                            starterCode?.[nextLanguage] ||
                            ""
                        );
                    }}
                    className="
                    bg-[#333333]
                    text-sm
                    px-3
                    py-1
                    rounded
                    border
                    border-[#444]
                    outline-none
                    "
                >

                    <option value="java">
                        Java
                    </option>

                    <option value="python">
                        Python
                    </option>

                    <option value="javascript">
                        JavaScript
                    </option>

                    <option value="cpp">
                        C++
                    </option>

                    <option value="c">
                        C
                    </option>

                </select>

                {/* BUTTONS */}
                <div className="flex gap-3">

                    <button
                        onClick={handleRun}
                        disabled={isRunning}
                        className="
                        bg-green-600
                        hover:bg-green-700
                        px-4
                        py-1
                        rounded
                        text-sm
                        transition
                        disabled:opacity-50
                        disabled:cursor-not-allowed
                        "
                    >
                        {isRunning ? "Running..." : "Run"}
                    </button>

                    <button
                        onClick={handleSubmit}
                        disabled={isRunning}
                        className="
                        bg-blue-600
                        hover:bg-blue-700
                        px-4
                        py-1
                        rounded
                        text-sm
                        transition
                        disabled:opacity-50
                        disabled:cursor-not-allowed
                        "
                    >
                        Submit
                    </button>

                </div>

            </div>

            {/* EDITOR */}
            <div className="flex-1 overflow-hidden">

                <Editor
                    height="100%"
                    theme="vs-dark"
                    language={language}
                    value={code}
                    onChange={(value) =>
                        setCode(value || "")
                    }
                    options={{
                        fontSize: 14,

                        minimap: {
                            enabled: false,
                        },

                        scrollBeyondLastLine: false,

                        wordWrap: "on",

                        automaticLayout: true,
                    }}
                />

            </div>

            {/* CONSOLE */}
            <div className="border-t border-[#2d2d2d] bg-[#0f1115]">

                <div className="flex items-center justify-between px-4 py-2 border-b border-[#22262f] bg-[#11141a]">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                            Output
                        </p>
                    </div>

                    <div className="text-[11px] text-slate-500">
                        {testResults.length > 0 ? `${testResults.length} case${testResults.length === 1 ? "" : "s"}` : "Ready"}
                    </div>
                </div>

                <div className="px-4 py-3">
                    <div className="mb-3 rounded-xl border border-slate-800 bg-[#12151c] px-3 py-2 text-sm text-slate-200">
                        {statusMessage}
                    </div>

                    <div
                        ref={outputRef}
                        className="max-h-48 overflow-y-auto pr-1 space-y-2 scroll-smooth"
                    >
                        {testResults.length > 0 ? (
                            testResults.map((result) => (
                                <div
                                    key={result.label + result.input}
                                    className={`rounded-xl border px-3 py-2 text-xs shadow-sm ${
                                        result.passed
                                            ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-100"
                                            : "border-rose-500/30 bg-rose-500/10 text-rose-100"
                                    }`}
                                >
                                    <div className="flex items-center justify-between gap-3 mb-2">
                                        <div className="flex items-center gap-2 font-semibold">
                                            <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${result.passed ? "bg-emerald-400/20 text-emerald-300" : "bg-rose-400/20 text-rose-300"}`}>
                                                {result.passed ? "✓" : "✕"}
                                            </span>
                                            <span>{result.label}</span>
                                        </div>

                                        {result.passed ? (
                                            <span className="text-white text-sm font-bold leading-none">
                                                ✓
                                            </span>
                                        ) : (
                                            <span className="rounded-full bg-rose-400/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-rose-300">
                                                Wrong Answer
                                            </span>
                                        )}
                                    </div>

                                    {result.input !== "Hidden" ? (
                                        <div className="mb-1 text-slate-300">
                                            <span className="text-slate-500">Input:</span> {result.input}
                                        </div>
                                    ) : null}

                                    <div className="mb-1 text-slate-300">
                                        <span className="text-slate-500">Expected:</span> {result.expected}
                                    </div>

                                    <div className="text-slate-300">
                                        <span className="text-slate-500">Output:</span> {result.actual}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="rounded-xl border border-dashed border-slate-800 bg-[#12151c] px-3 py-4 text-sm text-slate-500">
                                Run or submit to see results here.
                            </div>
                        )}
                    </div>
                </div>

            </div>

        </div>
    );
}

export default MonacoEditor;