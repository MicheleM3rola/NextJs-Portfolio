const { Octokit } = require("@octokit/rest");

export default async (req, res) => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  });

  const repos = await octokit.request("/users/NewbieWebDev/repos");

  const reposData = repos.data;

  return res.status(200).json({ reposData });
};
