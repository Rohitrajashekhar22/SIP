function CodingContest() {
  const contests = [
    {
      name: "LeetCode",
      image: "https://cdn.simpleicons.org/leetcode",
      link: "https://leetcode.com/contest/",
      description: "Coding interviews, Daily Challenges and Weekly Contests."
    },
    {
      name: "Codeforces",
      image: "https://cdn.simpleicons.org/codeforces",
      link: "https://codeforces.com/contests",
      description: "The world's most popular competitive programming platform."
    },
    {
      name: "CodeChef",
      image: "https://cdn.simpleicons.org/codechef",
      link: "https://www.codechef.com/contests",
      description: "Monthly contests and thousands of practice problems."
    },
    {
      name: "AtCoder",
      image: "https://img.atcoder.jp/assets/atcoder.png",
      link: "https://atcoder.jp/contests",
      description: "Japanese programming contests with high-quality problems."
    },
    {
      name: "HackerRank",
      image: "https://cdn.simpleicons.org/hackerrank",
      link: "https://www.hackerrank.com/contests",
      description: "Practice DSA, SQL, Java, Python and interview questions."
    },
    {
      name: "HackerEarth",
      image: "https://cdn.simpleicons.org/hackerearth",
      link: "https://www.hackerearth.com/contests",
      description: "Coding competitions, hiring challenges and hackathons."
    },
    {
      name: "TopCoder",
      image: "https://www.topcoder.com/favicon.ico",
      link: "https://www.topcoder.com/contests",
      description: "Algorithm contests and software competitions."
    },
    {
      name: "Codility",
      image: "https://www.codility.com/wp-content/uploads/2026/05/favicon-512-300x300.png",
      link: "https://www.codility.com/contests",
      description: "Technical interview preparation and coding assessments."
    },
    {
      name: "GeeksforGeeks",
      image: "https://cdn.simpleicons.org/geeksforgeeks",
      link: "https://practice.geeksforgeeks.org/contests",
      description: "Practice DSA, company questions and coding contests."
    },
{
  name: "Code360",
  image: "https://files.codingninjas.com/new-cn-logos-1-1711622387.svg",
  link: "https://www.naukri.com/code360",
  description: "Practice DSA, coding contests and interview preparation."
},
    {
      name: "CSES Problem Set",
      image: "https://cses.fi/static/logo.png",
      link: "https://cses.fi/problemset",
      description: "One of the best curated DSA problem collections."
    },

{
  name: "CodeSignal",
  image: "https://cdn.simpleicons.org/codesignal",
  link: "https://codesignal.com",
  description: "Technical assessments, coding practice and competitive challenges."
}
  ];

  return (
    <div
      style={{
        background: "#eef2ff",
        minHeight: "100vh",
        padding: "40px"
      }}
    >
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
        Coding Contest Platforms
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
          gap: "30px"
        }}
      >
        {contests.map((contest, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              transition: "0.3s"
            }}
          >
            <div
              style={{
                height: "180px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#f8fafc"
              }}
            >
              <img
                src={contest.image}
                alt={contest.name}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain"
                }}
              />
            </div>

            <div style={{ padding: "20px" }}>
              <h2
                style={{
                  marginBottom: "10px",
                  color: "#111827"
                }}
              >
                {contest.name}
              </h2>

              <p
                style={{
                  color: "#6b7280",
                  marginBottom: "20px",
                  lineHeight: "1.5"
                }}
              >
                {contest.description}
              </p>

              <a
                href={contest.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  background: "#2563eb",
                  color: "#fff",
                  textDecoration: "none",
                  padding: "10px 18px",
                  borderRadius: "8px",
                  fontWeight: "bold"
                }}
              >
                Visit Platform →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CodingContest;