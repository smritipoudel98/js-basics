//slug,description generator,email validation..(assignments)

const slug = (str) => {
  return str.toLowerCase().replace(/\s+/g, "-");
};

module.exports = { slug };
