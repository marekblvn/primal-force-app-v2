import { useAuth0 } from "@auth0/auth0-react";
import LogInButton from "./components/LogInButton";
import LogOutButton from "./components/LogOutButton";
import Profile from "./components/Profile";
function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) return <div>Loading</div>;
  return (
    <div>
      <h1>App</h1>
      {!isAuthenticated ? <LogInButton /> : <LogOutButton />}
      <Profile />
    </div>
  );
}

export default App;
