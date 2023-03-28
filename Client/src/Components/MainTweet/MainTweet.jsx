import React, { useState } from "react";

import axios from "axios";

const MainTweet = () => {
  const [tweetText, setTweetText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitTweet = await axios.post("/tweets", {
        // userId: currentUser._id,
        // description: tweetText,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form className="border-b-2 pb-6">
        <textarea
          onChange={(e) => setTweetText(e.target.value)}
          type="text"
          placeholder="What's happening"
          maxLength={280}
          className="bg-slate-200 rounded-lg w-full p-2"
        ></textarea>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded-full ml-auto"
        >
          Tweet
        </button>
      </form>
    </div>
  );
};

export default MainTweet;
