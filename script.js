document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#submit").disabled = true;

  document.querySelector("#task").onkeyup = function () {
    document.querySelector("#submit").disabled = false;
  };

  document.querySelector("form").onsubmit = function () {
    let task = document.querySelector("input").value;
    console.log(task);

    let li = document.createElement("li");
    li.innerHTML = task;

    document.querySelector("#tasks").append(li);
    document.querySelector("#task").value = "";

    // stop submiting but do the stuff in the client side of the browser
    return false;
  };
});
