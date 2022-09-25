import { useState, useEffect } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function useGithubUser(username) {
  const { data, error } = useSWR(
    () => (username ? `https://api.github.com/users/${username}` : null),
    fetcher
  );
  return {
    data,
    loading: !data && !error,
    error,
  };
}
// export function useGithubUser(username) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   async function fetchGithubUser(username) {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(`https://api.github.com/users/${username}`);
//       const json = await response.json();

//       setData(json);
//     } catch (error) {
//       setError(error);
//       setData(null);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchGithubUser(username);
//   }, [username]);

//   return {
//     data,
//     loading,
//     error,
//   };
// }
