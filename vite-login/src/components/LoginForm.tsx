import "./LoginForm.css";
function LoginForm() {
  return (
    <>
      <div className="login-form">
        <h2 className="login-title"> Login </h2>
        <input className="size-xxl" placeholder="Enter username"></input>
        <input
          className="size-xxl"
          type="password"
          placeholder="Enter your password"
        />
        <button className="size-xxl primary"> Submit </button>
      </div>
    </>
  );
}

export default LoginForm;
