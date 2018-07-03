// http://jsonplaceholder.typicode.com/ - JSONPlaceholder is a fake online REST API for Testing and Prototyping
// Using Fetch with Async Await

const http = new EasyHTTP;

// Get Users
// gets all users
// http.get("http://jsonplaceholder.typicode.com/users")
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Create User Data
const data = {
  name: "John Doe",
  username: "johndoe",
  email: "jdoe@gmail.com"
}

// Create User
// creates a user with the ID of 11 (the next free ID in the API)
// http.post("http://jsonplaceholder.typicode.com/users", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Update User
// updates the user with ID 2 with the information store in data
// http.put("http://jsonplaceholder.typicode.com/users/2", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete User
// deletes the user with ID 2
http.delete("http://jsonplaceholder.typicode.com/users/2")
  .then(data => console.log(data))
  .catch(err => console.log(err));