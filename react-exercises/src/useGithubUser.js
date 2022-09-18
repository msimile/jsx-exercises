import { useState, useEffect } from "react";

export function useGithubUser(username) {
  const [data, setData] = useState(null);

  async function fetchGithubUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const json = await response.json();

    setData(json);
  }

  useEffect(() => {
    fetchGithubUser(username);
  }, [username]);

  return {
    data,
  };
}
