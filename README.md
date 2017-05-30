# Rec framework

Rec is a data processing framework focus on stream-based processing
for different data source like **plain data file**/**http services**/**database**/**message queues**.

## Get started

Given you have following csv file for employees of a company ([`employee.csv`](src/index/employee.csv))
```csv
0001, Kimmy Leo  , Software Engineer, 1999/01/09
0002, Graphy Chan, Project Manager  , 1983/07/04
0003, Angilina Y , Tech Consultant  , 1996/13/15
```
then you want to check their DOB correct or not, what you can do is just
write a script([`checking.js`](src/index/checking.js))
```javascript
const format = java.lang.String.format;

const {println, csv, stateless, dummy} = require("rec");

csv("employee.csv", "ID, name, job_title, dob")
  .tee(stateless(function({name, dob}) {
    if (dob.split("/")[1] > 12) {
      println(format("Error: employee [%s] has incorrect dob [%s]", 
        name, dob));
    }
  })).to(dummy());
```

Put the script file and data file under same directory, and just simply run:
```bash
java -jar rec-core.jar checking.js
```
and the output should be:
```
=> Rec v2
Error: employee [Angilina Y] has incorrect dob [1996/13/15]
```

## Documentations

You can see [guide](guide.html) or [API document](api.html) for details.

For more receipts, you can refer [Best practices](best-practice.html).

## Contact

Rec-framework and [PowerRec](PowerRec.html) projects are maintained by [KimmyLeo](https://github.com/kenpusney).

For advanced consulting & service, please contact E-mail: **kimmy#typecons.com** (replace # with @).