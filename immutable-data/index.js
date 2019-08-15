const meal = {
  id: 1,
  description: "breakfast"
};

// cloning object hardly
const updatedMeal = {
  id: meal.id,
  description: meal.description
};

// using spread
const updatedMeal2 = {
  ...meal,
  calories: 150,
  description: "eggs"
};

console.log(updatedMeal2);

const { description, calories } = updatedMeal;

console.log(description, calories);

const meals = [
  {
    id: 1,
    calories: 150,
    description: "breakfast"
  },
  {
    id: 2,
    calories: 450,
    description: "lunch"
  },
  {
    id: 3,
    calories: 550,
    description: "dinner"
  }
];

const updatedMeals = [...meals, meal];

// updating arrays
function updateDescription(meal) {
  if (meal.id === 2) {
    return {
      ...meal,
      description: "early"
    };
  }
  return meal;
}

console.log(meals.map(updateDescription));

// sum all grades in an array
const grades = [50, 80, 90, 100];

function sum(acc, grade) {
  return acc + grade;
}

console.log(grades.reduce(sum, 0));

function groupByGrade(acc, grade) {
  const { a = 0, b = 0, c = 0, d = 0, f = 0 } = acc;
  if (grade >= 90) {
    return { ...acc, a: a + 1 };
  } else if (grade >= 80) {
    return { ...acc, b: b + 1 };
  } else if (grade >= 70) {
    return { ...acc, c: c + 1 };
  } else if (grade >= 60) {
    return { ...acc, d: d + 1 };
  } else if (grade >= 50) {
    return { ...acc, f: f + 1 };
  }
}

console.log(grades.reduce(groupByGrade, {}));

// Functional Programming for Beginners Exercise

const reviews = [
  4.5,
  4.0,
  5.0,
  2.0,
  1.0,
  5.0,
  3.0,
  4.0,
  1.0,
  5.0,
  4.5,
  3.0,
  2.5,
  2.0
];

// 1. Using the reduce function, create an object that
// has properties for each review value, where the value
// of the property is the number of reviews with that score.
// for example, the answer should be shaped like this:
// { 4.5: 1, 4: 2 ...}
//
function groupValues(acc, value) {
  if (acc[value]) {
    return { ...acc, [value]: acc[value] + 1 };
  }
  return { ...acc, [value]: 1 };
}
console.log(reviews.reduce(groupValues, {}));
// TIP: checkout computed properties discussed here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
// solution can be found at:
// https://jsbin.com/dehiqux/1/edit?js,console
