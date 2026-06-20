/*
====================================================
TOP == vs === OUTPUT QUESTIONS
Predict every output before running.
====================================================
*/

// Q1
console.log(5 == "5");
console.log(5 === "5");

// ---------------------------------------------

// Q2
console.log(true == 1);  
console.log(true === 1);

// ---------------------------------------------

// Q3
console.log(false == 0);
console.log(false === 0);

// ---------------------------------------------

// Q4
console.log(null == undefined);
console.log(null === undefined);

// ---------------------------------------------

// Q5
console.log("" == 0);
console.log("" === 0);

// ---------------------------------------------

// Q6
console.log("0" == 0);
console.log("0" === 0);

// ---------------------------------------------

// Q7
console.log([] == "");
console.log([] === "");

// ---------------------------------------------

// Q8
console.log([] == 0);
console.log([] === 0);

// ---------------------------------------------

// Q9
console.log([1] == 1);
console.log([1] === 1);

// ---------------------------------------------

// Q10
console.log([1, 2] == "1,2");
console.log([1, 2] === "1,2");

// ---------------------------------------------

// Q11
console.log({} == {});
console.log({} === {});

// ---------------------------------------------

// Q12
const obj = {};
console.log(obj == obj);
console.log(obj === obj);

// ---------------------------------------------

// Q13
console.log(NaN == NaN);
console.log(NaN === NaN);

// ---------------------------------------------

// Q14
console.log(Number.NaN == NaN);
console.log(Number.NaN === NaN);

// ---------------------------------------------

// Q15
console.log(Infinity == "Infinity");
console.log(Infinity === "Infinity");

// ---------------------------------------------

// Q16
console.log(false == "");
console.log(false === "");

// ---------------------------------------------

// Q17
console.log(false == "0");
console.log(false === "0");

// ---------------------------------------------

// Q18
console.log(null == 0);
console.log(undefined == 0);

// ---------------------------------------------

// Q19
console.log(null == false);
console.log(undefined == false);

// ---------------------------------------------

// Q20
console.log("" == false);
console.log("" === false);

// ---------------------------------------------

// Q21
console.log([0] == false);
console.log([0] === false);

// ---------------------------------------------

// Q22
console.log([1] == true);
console.log([1] === true);

// ---------------------------------------------

// Q23
console.log([] == false);
console.log([] === false);

// ---------------------------------------------

// Q24
console.log([null] == "");
console.log([undefined] == "");

// ---------------------------------------------

// Q25
console.log([] == ![]);
console.log([] === ![]);

// ---------------------------------------------

// Q26
console.log("" == []);
console.log("" === []);

// ---------------------------------------------

// Q27
console.log("" == [0]);
console.log("" == [""]);

// ---------------------------------------------

// Q28
console.log([[]] == "");
console.log([[[]]] == "");

// ---------------------------------------------

// Q29
console.log([] == []);
console.log([] === []);

// ---------------------------------------------

// Q30
const a = [];
const b = a;

console.log(a == b);
console.log(a === b);

// ---------------------------------------------

// Q31
console.log(new String("hello") == "hello");
console.log(new String("hello") === "hello");

// ---------------------------------------------

// Q32
console.log(new Number(5) == 5);
console.log(new Number(5) === 5);

// ---------------------------------------------

// Q33
console.log(new Boolean(false) == false);
console.log(new Boolean(false) === false);

// ---------------------------------------------

// Q34
console.log(Boolean(false) == false);
console.log(Boolean(false) === false);

// ---------------------------------------------

// Q35
console.log(0 == "\n");
console.log(0 === "\n");

// ---------------------------------------------

// Q36
console.log(0 == " ");
console.log(0 === " ");

// ---------------------------------------------

// Q37
console.log(" \t\n" == 0);
console.log(" \t\n" === 0);

// ---------------------------------------------

// Q38
console.log([] == "");
console.log([] == 0);
console.log("" == 0);

// ---------------------------------------------

// Q39
console.log([1] == "1");
console.log([1] == true);
console.log("1" == true);

// ---------------------------------------------

// Q40 (FINAL BOSS)
console.log([] == false);      // ?
console.log(false == "");      // ?
console.log("" == 0);          // ?
console.log(0 == []);          // ?

// All four are true or false?

/*
====================================================
INTERVIEW LEGENDS
====================================================
*/

// Q41
console.log(typeof null);
console.log(null == null);
console.log(null === null);

// ---------------------------------------------

// Q42
console.log(+[] == 0);
console.log(+{} == 0);

// ---------------------------------------------

// Q43
console.log([] + []);
console.log([] + {});
console.log({} + []);

// ---------------------------------------------

// Q44
console.log([] == ![]);
console.log(![]);

// ---------------------------------------------

// Q45
console.log(
  [] == false &&
  false == 0 &&
  0 == ""
);

// What does this print?

/*
====================================================
MOST ASKED INTERVIEW QUESTIONS
====================================================

1. [] == false
2. null == undefined
3. NaN === NaN
4. {} === {}
5. [1] == 1
6. "" == 0
7. false == "0"
8. [] == ![]
9. new Number(5) == 5
10. [1,2] == "1,2"

If you can explain WHY each works,
you understand JavaScript coercion.
====================================================
*/