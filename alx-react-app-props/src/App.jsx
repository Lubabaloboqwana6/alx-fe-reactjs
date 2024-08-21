import ProfilePage from "./ProfilePage";
import userContext from "./UserContext";

function App() {
  const userData = {
    name: "Lubabalo Boqwana",
    email: "jane.doe@example.com",
  };

  return (
    <userContext.Provider value={userData}>
      <ProfilePage />
    </userContext.Provider>
  );
}

export default App;
