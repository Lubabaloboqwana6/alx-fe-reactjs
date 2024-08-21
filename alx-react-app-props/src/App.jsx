import ProfilePage from "./components/ProfilePage";
import UserContext from "./components/UserContext";

function App() {
  const userData = {
    name: "Lubabalo Boqwana",
    email: "jane.doe@example.com",
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
