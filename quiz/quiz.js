const questionWrapper = document.getElementsByClassName("question-wrapper");
const submitButton = document.getElementsByClassName("submit-button");
const main = document.getElementById("main");
const toast = document.getElementById("toast");
const toastEnd = document.getElementById("toast-end");

for(let i = 0; i < submitButton.length; i++) {
  submitButton[i].addEventListener("click", function() {
    if(i != 4) {
      document.getElementById(`question-${i+1}`).classList.remove("active-question");
      document.getElementById(`question-${i+2}`).classList.add("active-question");
      
      toast.showModal()
      setTimeout(() => {
        toast.close();
      }, 2000);
    } else {
      toastEnd.showModal()
      setTimeout(() => {
        toast.close();
        window.location.href = "/course/course.html";
      },2000);
    }
  });
}