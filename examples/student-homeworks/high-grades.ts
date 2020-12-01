import mingo from "mingo";

import data from "./data.json";

export const checkHighGrades = () => {
  console.log(`Running function: checkHighGrades`);
  let query = new mingo.Query({
    type: "homework",
    score: { $gte: 50 }
  });

  data.forEach(element => {
    console.log(query.test(element));
  });
};
