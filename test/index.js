import simpleGit from "simple-git";

const git = simpleGit();
const date = "2024-01-05 14:30:00 +0300";

git
  .add(".")
  .commit("Updated files", { "--date": date }) // Corrected commit message
  .then(() => console.log("Committed with a custom date!"))
  .catch((err) => console.error("Error:", err));
