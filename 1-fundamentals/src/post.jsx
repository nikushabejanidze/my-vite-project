import React from "react";

function Post({ post, onLike, onDislike, onDelete }) {
  return (
    <div className="border p-4 rounded shadow flex flex-col gap-2">
      <p className="text-lg">{post.text}</p>
      <div className="flex items-center gap-4">
        <button
          onClick={onLike}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          ლაიქი
        </button>
        <button
          onClick={onDislike}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          დისლაიქი
        </button>
        <span className="font-bold">ქულა: {post.score}</span>
        <button
          onClick={onDelete}
          className="ml-auto bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
        >
          წაშლა
        </button>
      </div>
    </div>
  );
}

export default Post;
