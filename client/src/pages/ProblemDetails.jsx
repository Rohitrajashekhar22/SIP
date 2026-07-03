import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MonacoEditor from "../components/MonacoEditor";
import { isProblemSolved } from "../utils/localStorage";

function ProblemDetails() {

    const { slug } = useParams();

    const [problem, setProblem] = useState(null);

    const [loading, setLoading] = useState(true);

    const [solved, setSolved] = useState(isProblemSolved(slug));

    useEffect(() => {

        const fetchProblem = async () => {

            try {

                const response = await axios.get(
                    `http://localhost:5000/api/problems/${slug}`
                );

                setProblem(response.data);

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }

        };

        fetchProblem();

    }, [slug]);

    if (loading) {

        return (

            <div className="min-h-screen bg-slate-900 flex justify-center items-center">

                <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

            </div>
        );
    }

    if (!problem) {

        return (

            <div className="text-white p-10">
                Problem Not Found
            </div>
        );
    }

    return (

        <div className="min-h-screen bg-slate-900 text-white flex">

            {/* LEFT SIDE */}
            <div className="w-1/2 p-8 overflow-y-auto h-screen">

                {/* TITLE */}
                <div className="flex items-center gap-3 mb-4">
                    <h1 className="text-4xl font-bold">
                        {problem.title}
                    </h1>

                    {solved ? (
                        <span className="text-white text-2xl font-bold leading-none" title="Solved">
                            ✓
                        </span>
                    ) : null}
                </div>

                {/* DIFFICULTY */}
                <div className="mb-6">

                    <span
                        className={`
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        font-bold

                        ${
                            problem.difficulty === "Easy"
                                ? "bg-green-500/20 text-green-400"
                                : problem.difficulty === "Medium"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-red-500/20 text-red-400"
                        }
                        `}
                    >
                        {problem.difficulty}
                    </span>

                </div>

                {/* DESCRIPTION */}
                <div className="mb-8">

                    <h2 className="text-2xl font-semibold mb-3">
                        Description
                    </h2>

                    <p className="text-slate-300 leading-7">
                        {problem.description}
                    </p>

                </div>

                {/* EXAMPLES */}
                <div className="mb-8">

                    <h2 className="text-2xl font-semibold mb-3">
                        Examples
                    </h2>

                    <div className="space-y-4">

                        {problem.examples?.length > 0 ? (
                            problem.examples.map((example, index) => (
                                <div
                                    key={index}
                                    className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                                >
                                    <div className="mb-3">
                                        <p className="text-sm uppercase tracking-widest text-slate-500 mb-1">
                                            Input
                                        </p>
                                        <pre className="whitespace-pre-wrap rounded-xl bg-slate-900 p-4 text-slate-200">
                                            {example.input}
                                        </pre>
                                    </div>

                                    <div className="mb-3">
                                        <p className="text-sm uppercase tracking-widest text-slate-500 mb-1">
                                            Output
                                        </p>
                                        <pre className="whitespace-pre-wrap rounded-xl bg-slate-900 p-4 text-slate-200">
                                            {example.output}
                                        </pre>
                                    </div>

                                    {example.explanation ? (
                                        <div>
                                            <p className="text-sm uppercase tracking-widest text-slate-500 mb-1">
                                                Explanation
                                            </p>
                                            <p className="text-slate-300 leading-7">
                                                {example.explanation}
                                            </p>
                                        </div>
                                    ) : null}
                                </div>
                            ))
                        ) : (
                            <p className="text-slate-400">
                                No examples available for this problem.
                            </p>
                        )}

                    </div>

                </div>

                {/* TEST CASES */}
                <div className="mb-8">

                    <h2 className="text-2xl font-semibold mb-3">
                        Test Cases
                    </h2>

                    <div className="grid gap-4 md:grid-cols-2">

                        <div className="rounded-2xl border border-emerald-900/60 bg-emerald-950/30 p-5">
                            <p className="text-sm uppercase tracking-widest text-emerald-400 mb-2">
                                Visible Test Cases
                            </p>

                            {problem.visibleTestCases?.length > 0 ? (
                                <div className="space-y-3">
                                    {problem.visibleTestCases.map((testCase, index) => (
                                        <div key={index} className="rounded-xl bg-slate-900 p-4">
                                            <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">
                                                Input
                                            </p>
                                            <p className="text-slate-200 mb-3 whitespace-pre-wrap">
                                                {testCase.input}
                                            </p>
                                            <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">
                                                Expected Output
                                            </p>
                                            <p className="text-slate-200 whitespace-pre-wrap">
                                                {testCase.output}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-slate-400">
                                    No visible test cases available.
                                </p>
                            )}
                        </div>

                        <div className="rounded-2xl border border-amber-900/60 bg-amber-950/30 p-5">
                            <p className="text-sm uppercase tracking-widest text-amber-400 mb-2">
                                Hidden Test Cases
                            </p>

                            {problem.hiddenTestCases?.length > 0 ? (
                                <div className="space-y-3">
                                    {problem.hiddenTestCases.map((testCase, index) => (
                                        <div key={index} className="rounded-xl bg-slate-900 p-4">
                                            <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">
                                                Input
                                            </p>
                                            <p className="text-slate-200 mb-3 whitespace-pre-wrap">
                                                {testCase.input}
                                            </p>
                                            <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">
                                                Expected Output
                                            </p>
                                            <p className="text-slate-200 whitespace-pre-wrap">
                                                {testCase.output}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-slate-400">
                                    No hidden test cases available.
                                </p>
                            )}
                        </div>

                    </div>

                </div>

                {/* CONSTRAINTS */}
                <div className="mb-8">

                    <h2 className="text-2xl font-semibold mb-3">
                        Constraints
                    </h2>

                    <ul className="list-disc pl-6 text-slate-300 space-y-2">

                        {problem.constraints?.map((item, index) => (

                            <li key={index}>
                                {item}
                            </li>

                        ))}

                    </ul>

                </div>

                {/* TOPICS */}
                <div>

                    <h2 className="text-2xl font-semibold mb-3">
                        Topics
                    </h2>

                    <div className="flex gap-3 flex-wrap">

                        {
                            Array.isArray(problem.topic)

                            ? problem.topic.map((item, index) => (

                                <span
                                    key={index}
                                    className="
                                    bg-slate-800
                                    px-3
                                    py-1
                                    rounded-full
                                    text-sm
                                    "
                                >
                                    {item}
                                </span>

                            ))

                            : (

                                <span
                                    className="
                                    bg-slate-800
                                    px-3
                                    py-1
                                    rounded-full
                                    text-sm
                                    "
                                >
                                    {problem.topic}
                                </span>

                            )
                        }

                    </div>

                </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="w-1/2 h-screen border-l border-slate-800">

                <MonacoEditor
                    key={problem.slug}
                    problem={problem}
                    onSolved={() => setSolved(true)}
                />

            </div>

        </div>
    );
}

export default ProblemDetails;