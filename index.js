// Arrays to keep track of each task's state
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
};

const task1 = newTask('Clean Cat Litter', 'Take all the crap out of the litter box');
const task2 = newTask('Do Laundry', '😩');
const tasks = [task1, task2];
const task3 = newTask('eat','sooooo much dirt');
tasks.push(task3);


// // Create a new task by adding to the arrays
// // A new task will be created as incomplete
// function newTask(title, description) {
//   taskTitles.push(title);
//   taskComplete.push(false);
//   taskDescriptions.push(description);
// }


// // Print the state of a task to the console in a nice readable way



task3.logState(); // Clean Cat Litter has not been completed
task3.markCompleted();
task3.logState(task1); // Clean Cat Litter has been completed

console.log(tasks);
