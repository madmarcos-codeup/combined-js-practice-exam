# JavaScript 2 PLUS DOM Manipulation PRACTICE Assessment

### Suggested time to take this exam: 2.5 hours

## Instructions

1. Read all instructions before beginning the assessment

2. FORK this repository

3. The **FIRST** 5 questions in this exam test your knowledge of JavaScript arrays, objects, loops, conditions, writing functions, and string manipulation.

4. The **SECOND** 5 questions in this exam test your knowledge of manipulating the DOM via JavaScript.

5. Write your solutions to the problems inside `solutions.js`. **NOTE: please use jQuery and BOM methods for this assessment.** Allowing the use of vanilla JS DOM methods is up to the instructor. Please ask your instructor for clarification before the assessment begins.

6. Add and commit throughout the assessment

7. Don't push your branch until the end of the assessment!

## Problems

**THE FIRST FIVE PROBLEMS** are followed by code samples that demonstrate using the functions.
The code samples are intended to show the expected inputs and outputs to the functions, but are not themselves part of
the solution.

**THE SECOND FIVE PROBLEMS** involve calling various DOM and/or BOM functions to achieve certain visual effects in `index.html`. You do NOT need to put your JavaScript for the DOM questions in your own functions.
**Do NOT modify** the HTML attributes or structure. Use jQuery DOM methods and BOM methods in your solutions.


### FIRST FIVE PROBLEMS

The FIRST 5 questions in this exam test your knowledge of JavaScript arrays, objects, loops, conditions, writing functions, and string manipulation.

The SECOND 5 questions in this exam test your knowledge of manipulating the DOM via JavaScript. You may use vanilla JS or jQuery or both.



1. Write a function called `isBoolean` that returns true if the parameter has a data type of boolean. Otherwise, it returns false.
   Examples:
   console.log(isBoolean(42)); // outputs false
   console.log(isBoolean("true")); // outputs false
   console.log(isBoolean(false)); // outputs true

2. Write a function called `hasBoolean` that returns true if the array parameter contains at least one element that is a boolean. Otherwise, it returns false.
   Examples:
```js
   console.log(hasBoolean([1, 2, 3, 4])); // outputs false
   console.log(hasBoolean([1, "false", 3, 4])); // outputs false
   console.log(hasBoolean([1, 2, true, 4])); // outputs true
```

Use the following data to answer questions 3 through 5:
```js
const people = [ {
name: "Bob",
age: 42
}, {
name: "Sue",
age: 27
}, {
name: "Lou",
age: 33
}, {
name: "Zanzibar",
age: 18
}, {
name: "Gladys",
age: 39
}
];
```

3. Write a function called `minAge` that takes an array of people as a parameter and returns the smallest age in the array.
   Example:
```js
   console.log(minAge(people)); // outputs 18
```

4. Write a function called `longestName` that takes an array of people as a parameter and returns the longest name in the array.
   Example:
```js
   console.log(longestName(people)); // outputs Zanzibar
```

5. Write a function called `createPerson` that takes a name parameter and an age parameter and returns an object containing the given name and age as properties.
   Example:
```js
   const jimbob = createPerson("Jimbob", 22);
   console.log(jimbob);
   /* outputs
   {
   name: "Jimbob",
   age: 22
   }
   */
```

### SECOND FIVE PROBLEMS

6. When the button with an id of `bold-btn` is clicked, that button's font weight should change to `bold`.

7. When the button with an id of `reload-btn` is clicked, the page should reload (i.e., refresh).

8. Whenever a list item with a class of `loud-item` is clicked, display that list item's text in an `alert()`.

9. Whenever a list item with a class of `data-item` is hovered over, display that list item's `data-id` value in the span with an id of `data-display`.

10. Whenever the button with an id of `change-text-btn` is clicked, change that button's text to whatever has been typed in the input with an id of `change-text-input`.

