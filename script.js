document.getElementById("postButton").addEventListener("click", function () {
   const postContent = document.querySelector("textarea").value;
   if (postContent.trim() === "") {
       alert("Post cannot be empty!");
       return;
   }
   const postSection = document.createElement("div");
   postSection.className = "post";
   postSection.innerHTML = `<p>${postContent}</p>`;
   document.getElementById("content").appendChild(postSection);
   document.querySelector("textarea").value = ""; // Clear the textarea
});