// http://jsonplaceholder.typicode.com/ - JSONPlaceholder is a fake online REST API for Testing and Prototyping
// Using Ajax with Callbacks

const http = new easyHTTP;

// // Get Posts
// returns all the posts
// http.get("http://jsonplaceholder.typicode.com/posts", function(err, posts) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Get Single Post
// returns the post with the ID of 1
// http.get("http://jsonplaceholder.typicode.com/posts/1", function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Create Data
// const data = {
//   title: "Custom Post",
//   body: "This is a custom post"
// };

// Create Post
// creates post with the ID of 101 (the next free ID in the REST API we're using)
// http.post("http://jsonplaceholder.typicode.com/posts", data, function(err, post) {
//   if(err) {
//       console.log(err);
//     } else {
//       console.log(post);
//     }
// });

// Update Post
// updates the post with the ID of 1, changes it to the data we've created
// http.put("http://jsonplaceholder.typicode.com/posts/1", data, function(err, post) {
//     if(err) {
//       console.log(err);
//     } else {
//       console.log(post);
//     }
// });

// Delete Post
// deletes the post with the ID of 1
http.delete("http://jsonplaceholder.typicode.com/posts/1", function(err, response) {
  if(err) {
    console.log(err);
  } else {
    console.log(response);
  }
});