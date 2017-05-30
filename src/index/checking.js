const format = java.lang.String.format;

const {println, csv, stateless, dummy} = require("rec");

csv("employee.csv", "ID, name, job_title, dob")
  .tee(stateless(function({name, dob}) {
    if (dob.split("/")[1] > 12) {
      println(format("Error: employee [%s] has incorrect dob [%s]", 
        name, dob));
    }
  })).to(dummy());