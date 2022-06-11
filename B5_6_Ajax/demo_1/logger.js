import axios from "axios";
async function getTodo(id) {
  try {
    return await axios.get(`http://jsonplaceholder.typicode.com/todo/${id}`);
  } catch (error) {
    throw new Error(error);
    return null;
  }
}

async function createToto(title, body, userId) {
  try {
    return await axios.post(
      "http://jsonplaceholder.typicode.com/posts",
      {
        title,
        body,
        userId,
      },
      {
        headers: {
          "Content-type": "application/JSON; charset=UTF-8",
        },
      }
    );
  } catch (error) {
    throw new Error(error);
  }
}
const response = getTodo(1);
response.then((response) =>
  console.log(response.data).catch((error) => {
    console.log(error);
  })
);
