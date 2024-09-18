const relation = {
  'Darth Vader': "father",
  'Leia': "sister",
  'Han': "brother in law",
  'R2D2': "droid",
};

const relationToLuke = (name) => {
//   const result = "Luke, I am your " + relation[name]
  const result = `Luke, I am your  ${relation[name]}`
  console.log(result);
};

relationToLuke("Darth Vader"); // "Luke, I am your father."

relationToLuke("Leia"); // "Luke, I am your sister."

relationToLuke("Han"); // "Luke, I am your brother in law."
