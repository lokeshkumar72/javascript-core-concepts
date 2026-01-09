// Callback Example
function fetchData(callback) {
  console.log("Fetching data...");
  callback();
}

fetchData(() => {
  console.log("Data received!");
});

// Closure Example
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log("Count:", count);
  };
}

const increment = counter();
increment();
increment();
