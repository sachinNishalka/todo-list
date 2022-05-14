document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").onsubmit = function () {
    let task = document.querySelector("input").value;
    console.log(task);

    // stop submiting but do the stuff in the client side of the browser
    return false;
  };
});
