import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (text) => {
    const newPost = {
      id: Date.now(), // უნიკალური id
      text,
      score: 0
    };
    setPosts([...posts, newPost]);
  };

  const updateScore = (id, delta) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, score: post.score + delta } : post
      )
    );
  };

  const deletePost = (id) => {
    const confirmDelete = window.confirm("ნამდვილად გსურთ პოსტის წაშლა?");
    if (confirmDelete) {
      setPosts(posts.filter((post) => post.id !== id));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-4">
        <Dashboard onAddPost={addPost} />
        <div className="mt-6 space-y-4">
          {posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              onLike={() => updateScore(post.id, 1)}
              onDislike={() => updateScore(post.id, -1)}
              onDelete={() => deletePost(post.id)}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
