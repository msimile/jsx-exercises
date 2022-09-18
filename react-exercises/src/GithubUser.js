import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data, loading, error } = useGithubUser(username);

  return (
    <div>
      {data && (
        <div>
          {loading && <h1>Loading...</h1>}
          {error && <h1>Warning! An error occurred!</h1>}
          <h1>{data.name}</h1>
          <h3>{data.bio}</h3>
          <p>
            <b>Link:</b> {data.url}
          </p>
        </div>
      )}
    </div>
  );
}

// GITHUBUSER FUNCTION COMPONENT

// export function GithubUser({ username }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   async function fetchGithubUser(user) {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(`https://api.github.com/users/${user}`);
//       const json = await response.json();

//       setUser(json);
//       console.log(user);
//     } catch (error) {
//       setError(error);
//       setUser(null);
//       //   console.error(error)
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchGithubUser(username);
//   }, [username]);

//   return (
//     <div>
//       {loading && <h1>Loading...</h1>}
//       {error && <h1>Warning! An error occurred!</h1>}
//       {user && (
//         <div>
//           <h1>{user.name}</h1>
//           <h3>{user.bio}</h3>
//           <p>
//             <b>Link:</b> {user.url}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }
