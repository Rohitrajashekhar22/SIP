const SOLVED_PROBLEMS_KEY = "solvedProblems";
const SUBMITTED_CODES_KEY = "submittedProblemCodes";

export const getSolvedProblems = () => {
	try {
		const storedValue = localStorage.getItem(SOLVED_PROBLEMS_KEY);
		return storedValue ? JSON.parse(storedValue) : [];
	} catch {
		return [];
	}
};

export const isProblemSolved = (slug) => {
	if (!slug) {
		return false;
	}

	return getSolvedProblems().includes(slug);
};

export const markProblemSolved = (slug) => {
	if (!slug) {
		return;
	}

	const solvedProblems = new Set(getSolvedProblems());
	solvedProblems.add(slug);

	localStorage.setItem(
		SOLVED_PROBLEMS_KEY,
		JSON.stringify(Array.from(solvedProblems))
	);
};

export const getSubmittedCodes = () => {
	try {
		const storedValue = localStorage.getItem(SUBMITTED_CODES_KEY);
		return storedValue ? JSON.parse(storedValue) : {};
	} catch {
		return {};
	}
};

export const getSubmittedCode = (slug, language) => {
	if (!slug || !language) {
		return "";
	}

	const submittedCodes = getSubmittedCodes();
	return submittedCodes?.[slug]?.[language] || "";
};

export const saveSubmittedCode = (slug, language, code) => {
	if (!slug || !language) {
		return;
	}

	const submittedCodes = getSubmittedCodes();

	submittedCodes[slug] = {
		...(submittedCodes[slug] || {}),
		[language]: code,
	};

	localStorage.setItem(
		SUBMITTED_CODES_KEY,
		JSON.stringify(submittedCodes)
	);
};
