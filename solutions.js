"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

function isBoolean(x) {
    if(x === true || x === false) {
        return true;
    }
    return false;
}

console.log(isBoolean(42)); // outputs false
console.log(isBoolean("true")); // outputs false
console.log(isBoolean(false)); // outputs true

function hasBoolean(input) {
    // look thru all elements in input. if a boolean is found return true
    // IF NO boolean elements are found, return false
    for (let i = 0; i < input.length; i++) {
        if (typeof input[i] === "boolean") {
            return true;
        }
        // haven't found a boolean yet so keep iterating
    }
    return false;
}
// function hasBoolean(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if(isBoolean(arr[i])) {
//             return true;
//         }
//     }
//     // if we get here, we did not find a boolean
//     return false;
// }
console.log(hasBoolean([1, 2, 3, 4])); // outputs false
console.log(hasBoolean([1, "false", 3, 4])); // outputs false
console.log(hasBoolean([1, 2, true, 4])); // outputs true

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

function minAge(arr) {
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].age < min) {
            min = arr[i].age;
        }
    }
    return min;
}
console.log(minAge(people)); // outputs 18


function longestName(arr) {
    let longestNameSoFar = "";
    for (let i = 1; i < arr.length; i++) {
        if(arr[i].name.length > longestNameSoFar.length) {
            longestNameSoFar = arr[i].name;
        }
    }
    return longestNameSoFar;
}
console.log(longestName(people)); // outputs Zanzibar

function createPerson(name, age) {
    return {
        name,
        age
    };
}
const jimbob = createPerson("Jimbob", 22);
console.log(jimbob);
/* outputs
{
name: "Jimbob",
age: 22
}
*/

/*
When the button with an id of bold-btn is clicked, that button's font weight should change to bold.

When the button with an id of reload-btn is clicked, the page should reload (i.e., refresh).

Whenever a list item with a class of loud-item is clicked, display that list item's text in an alert().

Whenever a list item with a class of data-item is hovered over, display that list item's data-id value in the span with an id of data-display.

Whenever the button with an id of change-text-btn is clicked, change that button's text to whatever has been typed in the input with an id of change-text-input.
 */
$("#bold-btn").click(function() {
    $(this).css("font-weight", "bolder");
});

$("#reload-btn").click(function() {
   window.location.reload();
});

$(".loud-item").click(function() {
    alert($(this).text());
});

$(".data-item").hover(function() {
    const dataId = $(this).data("id");
        // $(this).attr("data-id");
    $("#data-display").text(dataId);
});

$("#change-text-btn").click(function() {
    const newButtonName = $("#change-text-input").val();
    $(this).text(newButtonName);
});