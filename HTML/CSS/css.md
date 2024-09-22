1. Universal Selector (*)
Selects all elements.

* {
  margin: 0;
  padding: 0;
}



2. Type Selector (Element Selector)
Selects elements by their HTML tag name.

p {
  color: blue;
}


3. Class Selector (.)
Selects elements with a specific class attribute.

.myClass {
  background-color: yellow;
}



4. ID Selector (#)
Selects an element with a specific id.

#myId {
  color: red;
}



5. Attribute Selector
Selects elements based on the presence of an attribute or its value.

/* Select elements with a specific attribute */
input[type="text"] {
  border: 1px solid black;
}



6. Group Selector (,)
Groups multiple selectors together.

h1, h2, h3 {
  font-family: Arial;
}




7. Descendant Selector (Space)
Selects elements that are descendants of a specified element.

div p {
  font-size: 14px;
}



8. Child Selector (>)
Selects direct child elements of a specified element.


ul > li {
  list-style-type: none;
}




9. Adjacent Sibling Selector (+)
Selects an element that is immediately next to another specified element.

h2 + p {
  margin-top: 0;
}




10. General Sibling Selector (~)
Selects all elements that are siblings of a specified element.

h2 ~ p {
  color: grey;
}



11. Pseudo-class Selectors
:hover — When the user hovers over an element.
:focus — When an element gains focus (e.g., an input field).
:nth-child(n) — Selects the nth child of a parent element.
:first-child, :last-child — Selects the first/last child of a parent element.

a:hover {
  text-decoration: underline;
}

li:nth-child(odd) {
  background-color: #f9f9f9;
}




12. Pseudo-element Selectors
::before — Insert content before an element.
::after — Insert content after an element.
::first-letter, ::first-line — Styles the first letter or line of an element.

p::before {
  content: "Note: ";
  font-weight: bold;
}




13. Attribute Presence and Value Selectors
[attribute] — Selects elements that have a certain attribute.
[attribute="value"] — Selects elements with an attribute equal to a specific value.
[attribute^="value"] — Selects elements with an attribute starting with a specific value.
[attribute$="value"] — Selects elements with an attribute ending with a specific value.
[attribute*="value"] — Selects elements with an attribute containing a specific value.



/* Elements with a title attribute */
[title] {
  border-bottom: 1px dotted;
}

input[type^="te"] {
  background-color: lightgray;
}



14. Combinator Selectors
Space (descendant) — Matches all elements that are descendants of a specified element.
> (child) — Matches elements that are direct children of a specified element.
+ (adjacent sibling) — Matches an element that is the next sibling.
~ (general sibling) — Matches elements that are siblings after a specified element.



15. Negation Pseudo-class (:not())
Selects all elements that do not match the given selector.

/* Select all elements that are not paragraphs */
*:not(p) {
  color: blue;
}

