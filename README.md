# Rec framework

Rec is a data processing framework focus on stream-based processing
for different data formats like CSV or JSON. It mainly focus on JVM
platform and currently migrating to multiple platforms like native
or .NET Core

## Get started

Given you have following csv file for employees of a company (`employee.csv`)
```csv
0001, Kimmy Leo  , Software Engineer, 1999/01/09
0002, Graphy Chan, Project Manager  , 1983/07/04
0003, Angilina Y , Tech Consultant  , 1996/13/15
```
then you want to check their DOB correct or not, what you can do is just
write a script(`checking.js`)
```javascript
const format = java.lang.String.format;

const {println, csv, stateless, dummy} = rec;

csv("employee.csv", "ID, name, job_title, dob")
  .tee(stateless(function({name, dob}) {
    if (parseInt(dob.split("/")[1]) > 12) {
      println(format("Error: employee [%s] has incorrect dob [%s]", 
        name, dob));
    }
  })).to(dummy());
```

## Documentations

You can see [guide](/guide.html) or [API document](api.html) for details.

For more receipts, you can refer [Best practices](best-practice.html).