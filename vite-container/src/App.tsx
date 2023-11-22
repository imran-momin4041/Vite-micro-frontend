import "./App.css";
import { lazy, Suspense, useState } from "react";
import Header from "./documents/Header";
const LoginForm = lazy(() => import("loginApp/LoginForm") as any);
const DashboardView = lazy(() => import("dashboardApp/DashboardView") as any);
const SignupForm = lazy(() => import("signupApp/SignupForm") as any);

function App() {
  const [tab, setCount] = useState(0);

  return (
    <>
      <div className="app-content">
        <Header
          onLoginClick={(e) => setCount(0)}
          onSignUpClick={(e) => setCount(1)}
          onDashboardClick={(e) => setCount(2)}
        ></Header>
        {tab == 0 && (
          <Suspense fallback={<div>Loading...</div>}>
            <LoginForm />
          </Suspense>
        )}

        {tab == 2 && (
          <Suspense fallback={<div>Loading...</div>}>
            <DashboardView />
          </Suspense>
        )}

        {tab == 1 && (
          <Suspense fallback={<div>Loading...</div>}>
            <SignupForm />
          </Suspense>
        )}
      </div>
    </>
  );
}

export default App;
