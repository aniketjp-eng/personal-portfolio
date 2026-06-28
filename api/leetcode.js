export default async function handler(req, res) {
  const response = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query {
        matchedUser(username: "55k72silsv") {
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
      }`,
    }),
  });

  const data = await response.json();

  res.status(200).json({
    solved:
      data.data.matchedUser.submitStats.acSubmissionNum[0].count,
  });
}