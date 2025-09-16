const container = document.getElementById("Espacio");
fetch("https://api.allorigins.win/raw?url=https://profalisturcursos.blogspot.com/feeds/posts/default?alt=json")
  .then(res => res.json())
  .then(data => {
    
    console.log(data);
    const posts = data.feed.entry;
    

    posts.forEach(post => {
      const title = post.title.$t;
      const content = post.content.$t;

      const postElement = document.createElement("div");
      postElement.classList.add("post");

      const titleElement = document.createElement("h2");
      titleElement.textContent = title;

      const contentElement = document.createElement("div");
      contentElement.innerHTML = content;

      postElement.appendChild(titleElement);
      postElement.appendChild(contentElement);
      container.appendChild(postElement);
    });
  })
  .catch(err => console.error("Error:", err));

  