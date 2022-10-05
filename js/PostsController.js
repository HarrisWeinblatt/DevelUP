class PostsController {
  constructor(currentId = 0) {
    this.posts = [];
    this.currentId = currentId;
  }

  addPost(name, text, image, author, createdAt) {
    const post = {
      id: this.currentId++,
      name: name,
      text: text,
      image: image,
      author: author,
      createdAt: createdAt,
    };
    this.posts.push(post);
  }
}

loadPostsFromLocalStorage();
{
  const storagePosts = localStorage.getPost("posts");
  if (storagePosts) {
    const posts = JSON.parse(storagePosts);
    for (let i = 0, size = posts.length; i < size; i++) {
      const post = posts[i];
      this.posts.push(post);
    }
  }
}

const postsController = new PostsController();

postsController.addPost(
  "Harris",
  "We made it!!",
  "happy face",
  "Yarelys Rivera",
  "Yesterday"
);

postsController.addPost(
  "Yarelys",
  "We made it!!",
  "happy face",
  " Harris Weinblatt",
  "Today"
);

console.log(postsController.posts);
