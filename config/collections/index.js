/** Returns all blog posts as a collection. */
const getAllPosts = collection => {
  const projects = collection.getFilteredByGlob('./src/posts/*.md');
  return projects.reverse();
};

/** Returns all blog posts as a collection. */
const getAllTrials = collection => {
  const projects = collection.getFilteredByGlob('./src/trials/*.md');
  return projects.reverse();
};

module.exports = {
  getAllPosts
};
