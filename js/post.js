const postsController = new PostsController(0);

function addPostCard(post) {
  const postHTML =
    '<div class="card" style="width: 20rem;">\n' +
    '    <img src="' +
    post.img +
    '" width="300" height="250"  alt="User image">\n' +
    '    <div class="card-body">\n' +
    '        <h5 class="card-title">' +
    post.name +
    "</h5>\n" +
    '        <p class="card-text">' +
    post.author +
    "</p>\n" +
    '<p class="card-text">' +
    post.createdAt +
    "</p>\n" +
    '        <a href="#" class="btn btn-primary">Add</a>\n' +
    "    </div>\n" +
    "</div>\n" +
    "<br/>";

  const postsContainer = document.getElementById("list-posts");
  postsContainer.innerHTML += postHTML;
}

function loadPostStorage() {
  if (!localStorage.getPost("posts")) {
    const samplePosts = [
      {
        name: "Harris",
        text: "Having a good day",
        img: "https://www.gs1india.org/media/Juice_pack.jpg",
        author: "Yarelys",
        createdAt: "Today",
      },
      {
        name: "Yarelys",
        text: "Hola!",
        img: "https://www.gs1india.org/media/Juice_pack.jpg",
        author: "Harris",
        createdAt: "Yesterday",
      },
    ];
    localStorage.setPost("posts", JSON.stringify(samplePosts));
  }
}

function loadCardsListFromPostsController() {
  for (let i = 0, size = postsController.posts.length; i < size; i++) {
    const post = postsController.posts[i];
    addPostCard(post);
  }
}

loadPostStorage();
postsController.loadPostsFromLocalStorage();
loadCardsListFromPostsController();
