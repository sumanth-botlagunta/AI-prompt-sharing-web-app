'use client';
import { useEffect, useState } from 'react';

import PromptCard from '@components/PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [allposts, setAllposts] = useState([]);
  const [searchText, setSearchText] = useState('');

  const fetchPosts = async () => {
    const response = await fetch('api/prompt');
    const data = await response.json();
    setAllposts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {};

  const handleTagClick = (tagname) => {};

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a #tag or username"
          value={searchText}
          required
          onChange={handleSearchChange}
          className="search_input peer"
        />
      </form>
      <PromptCardList data={allposts} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;
