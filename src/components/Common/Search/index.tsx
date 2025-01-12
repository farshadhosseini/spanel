import React, { useEffect, useRef, useState } from "react";
import { Text } from "../Form/Text";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { IPost } from "../../../interfaces/posts";
import { messages } from "../../../constants/messages";
import { time } from "console";

export const Search = () => {
  const [query, setQuery] = useState<string>("");
  const { posts } = useSelector((state: RootState) => state.posts);
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);

    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      filter()
    }, 500)
  };

  useEffect(() => {
    if (!query.trim()) {
      setFilteredPosts([]);
      return;
    }
    return () => {
      if (timer.current) clearTimeout(timer.current);
    }
  }, [])

  const filter = () => {
    const filtered = posts.filter((post) => {
      return post.title.includes(query);
    });
    setFilteredPosts(filtered);
  }

  return (
    <div className="relative">
      <Text
        classes="w-full"
        type="text"
        placeholder="جستجو کنید (عنوان سرویس) ..."
        onChange={search}
        value={query}
        name="serach"
      />
      {query &&
        <div className="absolute text-black bg-slate-100 z-10 mt-1 rounded-md w-full max-h-60 overflow-auto shadow-lg">
          {filteredPosts.length ? filteredPosts.map((post: IPost) => {
            return (
              <div key={post.id} className="flex items-center gap-2 m-1 hover:bg-slate-200 transition p-1 rounded-md">
                <span
                  className="bg-orange-500 w-1 h-1 rounded-lg"
                  id="indicator"
                ></span>
                <p className="cursor-pointer w-full">
                  {post.title}
                </p>
              </div>
            );
          }) : <div className="m-2">
            {messages.posts.noContent}</div>}
        </div>
      }
    </div>
  );
};
