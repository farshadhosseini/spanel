import React, { useState } from "react";
import { Text } from "../Form/Text";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { IPost } from "../../../interfaces/posts";

export const Search = () => {
  const [query, setQuery] = useState<string>("");
  const { posts } = useSelector((state: RootState) => state.posts);
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);
  let timer: NodeJS.Timeout;

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    const filtered = posts.filter((post) => {
      return post.title.includes(query);
    });
    setFilteredPosts(filtered);
  };

  return (
    <div className="relative">
      <Text
        classes="w-full"
        type="text"
        placeholder="جستجو کنید ..."
        onChange={search}
        value={query}
        name="serach"
      />
      {query ? (
        <div className="absolute text-black bg-slate-100 z-10 mt-1 rounded-md w-full max-h-60 overflow-auto shadow-lg">
          {filteredPosts.map((post: IPost) => {
            return (
              <div className="flex items-center gap-2 m-2">
                <span
                  className="bg-orange-500 w-1 h-1 rounded-lg"
                  id="indicator"
                ></span>
                <p className="cursor-pointer w-full" key={post.id}>
                  {post.title}
                </p>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
