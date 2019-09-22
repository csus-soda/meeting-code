/**
 * Refresher with arrays.
 */

// empty array object
const students = [];

// a sample student JSON object.
const student = {
    name: "John Doe",
    id: 1234,
    major: "English"
};

// an other sample student JSON object.
const other = {
    name: "Jane Doe",
    id: 1111,
    major: "History"
};

// pushing student
students.push(student);
// pushing other
students.push(other);

console.log("Displaying the names....");
// looping through and extracting the names.
for (let i = 0; i < students.length; ++i) {
    console.log(students[i].name);
}

console.log("Displaying all data of the object dynamically");
// Loop through each student in students
for (const student of students) {
    // Loop through each property in the JSON student object
    for (const key in student) {
        // check if the student object has the property
        if (student.hasOwnProperty(key)) {
            // extract the value using the key.
            const value = student[key]; // we can index using the key
            console.log(`${key}: ${value}`);
        }
    }
}
