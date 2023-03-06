import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage.jsx";
import Login from "./components/forms/Login.jsx";
import RegisterProfile from "./components/forms/RegisterProfile.jsx";
import RegisterJobPost from "./components/forms/RegisterJobPost.jsx";
import { useState, useEffect } from "react";
function App({ userAuthService, userProfileService, jobPostService }) {
  const services = {
    userAuthService,
    userProfileService,
    jobPostService,
  };
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      const resp = await userAuthService.check();
      if (resp.status === 200) {
        setUser({
          user: {
            userId: resp.data.verified.id,
            role: resp.data.verified.role,
          },
        });
      }
    }
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage {...services} user={user} setUser={setUser}></MainPage>
          }
        ></Route>
        <Route
          path="/login"
          element={<Login service={{ userAuthService, setUser }}></Login>}
        ></Route>
        <Route
          path="/register/user"
          element={
            <RegisterProfile service={{userProfileService, setUser}}></RegisterProfile>
          }
        ></Route>
        <Route
          path="/register/job"
          element={<RegisterJobPost></RegisterJobPost>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
