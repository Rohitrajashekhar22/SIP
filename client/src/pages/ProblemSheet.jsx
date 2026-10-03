import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { getSolvedProblems } from "../utils/localStorage";

function ProblemSheet() {

    const { sheetName } = useParams();

    const navigate = useNavigate();

    const [problems, setProblems] = useState([]);

    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");

    const [difficulty, setDifficulty] = useState("");

    const [topic, setTopic] = useState("");

    const solvedProblems = getSolvedProblems();

    // URL -> DATABASE SHEET NAME
    const sheetMap = {
        blind75: "Blind75",
        neetcode150: "NeetCode150",
        striversde: "StriverSDE",
        grind169: "Grind169",
        topinterview150: "TopInterview150",
    };

    const actualSheet = sheetMap[sheetName];

    // FETCH PROBLEMS
    useEffect(() => {

        const fetchProblems = async () => {

            try {

                const response = await axios.get(
                    `http://localhost:5000/api/problems/filter?sheet=${actualSheet}`
                );

                // SAFE ARRAY
                setProblems(
                    Array.isArray(response.data)
                        ? response.data
                        : []
                );

            } catch (error) {

                console.log(error);

                setProblems([]);

            } finally {

                setLoading(false);

            }

        };

        fetchProblems();

    }, [actualSheet]);

    // FILTER PROBLEMS
    const filteredProblems = problems.filter((problem) => {

        const matchesSearch =
            (problem?.title || "")
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesDifficulty =
            difficulty === "" ||
            problem?.difficulty === difficulty;

        const matchesTopic =
            topic === "" ||

            (
                Array.isArray(problem?.topic)

                    ? problem.topic.includes(topic)

                    : problem?.topic === topic
            );

        return (
            matchesSearch &&
            matchesDifficulty &&
            matchesTopic
        );

    });

    // LOADING
    if (loading) {

        return (

            <div
                className="
                min-h-screen
                bg-slate-900
                flex
                justify-center
                items-center
                "
            >

                <div
                    className="
                    w-16
                    h-16
                    border-4
                    border-blue-500
                    border-t-transparent
                    rounded-full
                    animate-spin
                    "
                ></div>

            </div>
        );
    }

    return (

        <div className="min-h-screen bg-slate-900 text-white p-8">

            {/* TITLE */}
            <h1 className="text-5xl font-black mb-10">

                {actualSheet} Problems

            </h1>

            {/* FILTERS */}
            <div className="flex flex-wrap gap-4 mb-8">

                {/* SEARCH */}
                <input
                    type="text"
                    placeholder="Search Problems..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    className="
                    bg-slate-800
                    border
                    border-slate-700
                    p-3
                    rounded-xl
                    flex-1
                    outline-none
                    "
                />

                {/* DIFFICULTY */}
                <select
                    value={difficulty}
                    onChange={(e) =>
                        setDifficulty(e.target.value)
                    }
                    className="
                    bg-slate-800
                    border
                    border-slate-700
                    p-3
                    rounded-xl
                    "
                >

                    <option value="">
                        All Difficulty
                    </option>

                    <option value="Easy">
                        Easy
                    </option>

                    <option value="Medium">
                        Medium
                    </option>

                    <option value="Hard">
                        Hard
                    </option>

                </select>

                {/* TOPIC */}
                <select
                    value={topic}
                    onChange={(e) =>
                        setTopic(e.target.value)
                    }
                    className="
                    bg-slate-800
                    border
                    border-slate-700
                    p-3
                    rounded-xl
                    "
                >

                    <option value="">
                        All Topics
                    </option>

                    <option value="Array">
                        Array
                    </option>

                    <option value="String">
                        String
                    </option>

                    <option value="Binary Search">
                        Binary Search
                    </option>

                    <option value="Graph">
                        Graph
                    </option>

                    <option value="Tree">
                        Tree
                    </option>

                </select>

            </div>

            {/* TABLE */}
            <div
                className="
                overflow-x-auto
                rounded-2xl
                border
                border-slate-700
                "
            >

                <table className="w-full text-left">

                    {/* HEAD */}
                    <thead
                        className="
                        bg-slate-800
                        text-slate-300
                        "
                    >

                        <tr>

                            <th className="p-5">
                                #
                            </th>

                            <th className="p-5">
                                Title
                            </th>

                            <th className="p-5">
                                Difficulty
                            </th>

                            <th className="p-5">
                                Topic
                            </th>

                            <th className="p-5">
                                Status
                            </th>

                        </tr>

                    </thead>

                    {/* BODY */}
                    <tbody>

                        {filteredProblems?.map((problem, index) => (

                            <tr
                                key={problem?._id || index}
                                className="
                                border-t
                                border-slate-800
                                hover:bg-slate-800
                                transition
                                "
                            >

                                {/* NUMBER */}
                                <td className="p-5">

                                    {index + 1}

                                </td>

                                {/* TITLE */}
                                <td
                                    className="
                                    p-5
                                    font-semibold
                                    text-blue-400
                                    hover:underline
                                    cursor-pointer
                                    "
                                    onClick={() =>
                                        navigate(
                                            `/problem/${problem?.slug}`
                                        )
                                    }
                                >

                                    {problem?.title || "No Title"}

                                </td>

                                {/* DIFFICULTY */}
                                <td className="p-5">

                                    <span
                                        className={`
                                        px-3
                                        py-1
                                        rounded-full
                                        text-sm
                                        font-bold

                                        ${
                                            problem?.difficulty === "Easy"

                                                ? "bg-green-500/20 text-green-400"

                                                : problem?.difficulty === "Medium"

                                                ? "bg-yellow-500/20 text-yellow-400"

                                                : "bg-red-500/20 text-red-400"
                                        }
                                        `}
                                    >

                                        {problem?.difficulty}

                                    </span>

                                </td>

                                {/* TOPIC */}
                                <td className="p-5">

                                    {
                                        Array.isArray(problem?.topic)

                                            ? problem.topic.join(", ")

                                            : problem?.topic
                                    }

                                </td>

                                {/* STATUS */}
                                <td className="p-5">

                                    <span className="inline-flex items-center justify-center text-white text-lg font-bold">
                                        {solvedProblems.includes(problem?.slug) ? "✓" : "NOT SOLVED"}
                                    </span>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default ProblemSheet;