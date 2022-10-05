const postsController = new PostsController();

const newPostForm = document.querySelector("#newPostForm");

newPostForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newPostName = document.querySelector("#newPostName");
  const newPostText = document.querySelector("#newPostText");
  const newPostImageUrl = document.querySelector("#newPostImageUrl");
  const newPostAuthor = document.querySelector("#newPostAuthor");
  const newPostCreatedAt = document.querySelector("#newPostCreatedAt");

  // Get the values of the inputs
  const name = newPostName.value;
  const text = newPostText.value;
  const imageUrl = newPostImageUrl.value;
  const author = newPostAuthor.value;
  const createdAt = newPostCreatedAt.value;
  /*
        Validation code here
    */

  // Add the item to the PostsController
  PostsController.addItem(name, text, imageUrl, author, createdAt);

  // Clear the form
  newPostName.value = "";
  newPostText.value = "";
  newPostImageUrl.value = "";
  newPostAuthor.value = "";
  newPostCreatedAt.value = "";
});
