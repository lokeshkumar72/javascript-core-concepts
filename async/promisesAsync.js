// Promise example
const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 1000);
  });
};

// Using .then()
getData().then((result) => {
  console.log(result);
});

// Using async/await
async function fetchData() {
  const response = await getData();
  console.log(response);
}

fetchData();
