# Forcepoint Code Challenge

## Language and Framework

Please use React and Redux. If you are not familiar with one or both technologies, please propose alternatives before proceeding:
* We recommend using a tool like create-react-app to handle startup boilerplate
* Vanilla Redux is sufficient
* Routing is not necessary

Your architecture should support a Single-Page Application

### Dummy Data
```
{
  "data": [
    {
      "name":  "Jerry",
      "age": 39,
      "priority": 1,
      "category": "two"
    },
    {
      "name":  "Amy",
      "age": 28,
      "priority": 4,
      "category": "one"
    },
    {
      "name":  "Bernice",
      "age": 99,
      "priority": 2,
      "category": "two"
    },
    {
      "name":  "Antoine",
      "age": 50,
      "priority": 1,
      "category": "three"
    },
    {
      "name":  "Andrea",
      "age": 25,
      "priority": 1,
      "category": "three"
    },
    {
      "name":  "Fredrick",
      "age": 44,
      "priority": 3,
      "category": "one"
    },
    {
      "name":  "Mariel",
      "age": 34,
      "priority": 2,
      "category": "three"
    },
    {
      "name":  "Arnold",
      "age": 74,
      "priority": 4,
      "category": "two"
    },
    {
      "name":  "Janice",
      "age": 54,
      "priority": 2,
      "category": "two"
    }
  ]
}
```
### HTML and Visuals

* The grid should display data in the order that it is received
* Each person should be displayed in a rectangle with a black border of 2px
* There should be 3 person items per row (no need to be responsive)
* Each grid item should contain the name, age, and category of the person.
* Each grid item should have a corresponding background color based on the priority of the person featured: 1 - Orange 2 - Green 3 - Blue 4 - Purple

### Header Functionality

Please implement a header that allows the user to sort and filter the data.

### Implement Sorting

Provide the user a way to sort the data. The user should be allowed to choose from 3 methods:

1. Default: no sort performed (rely on order of the data)
2. A-Z: Alphabetically ascending by name
3. Priority: Numerically ascending by priority

### Implement Filtering

Provide the user with radio buttons that allow them to filter the data. Each radio button should be dynamically generated based on the category field in the dummy data - do not hard-code this. When a filter is selected, only people matching the filter should be displayed.