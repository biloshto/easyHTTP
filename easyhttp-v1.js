function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open("GET", url, true);

  // we set the "self" variable because "this" is undefined in the function, so we can capture that "this" in the scope of the function - the "this" keyword pretains to that function so it's in a different scope right there
  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
      // instead of sending back just the response, we also want to send back an error if there's one, so the null is for the error, we want the error to be the first parameter that's passed back and the response to be the second
      callback(null, self.http.responseText);
    } else {
    callback("Error: " + self.http.status);
    }
  }

  this.http.send();
}


// Make an HTTP POST Request
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("Content-type", "application/json");

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);    
  }

  this.http.send(JSON.stringify(data));
}

// Make an HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("Content-type", "application/json");

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);    
  }

  this.http.send(JSON.stringify(data));
}

// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open("DELETE", url, true);

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
      // the response is actually going to be an empty object because we're deleting the post
      // callback(null, self.http.responseText);
      // so if it's succesfull, instead of returning an empty object, let's just say Post Deleted
      callback(null, "Post Deleted");
    } else {
    callback("Error: " + self.http.status);
    }
  }

  this.http.send();
}