import simpleGit from "simple-git";

const git = simpleGit();
const date = "2024-01-04 14:30:00 +0300";

git.add("../").commit("Updated more files", { "--date": date }).push(); // Corrected commit message
