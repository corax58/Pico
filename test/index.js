import simpleGit from "simple-git";

const git = simpleGit();
const date = "2024-02-05T14:30:00+03:00"; // Use ISO format

(async () => {
  try {
    await git.add(".");

    // Set commit date using environment variables
    await git.env({
      GIT_AUTHOR_DATE: date,
      GIT_COMMITTER_DATE: date,
    });

    await git.commit("Updated files");
    console.log("Committed with a custom date!");
  } catch (err) {
    console.error("Error:", err);
  }
})();
