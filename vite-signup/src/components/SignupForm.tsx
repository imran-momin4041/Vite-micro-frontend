import "./SignupForm.css";
function SignupForm() {
  return (
    <>
      <div className="signup-content">
        <h2 className="signup-title"> Signup </h2>
        <input className="size-xxl" placeholder="Enter username"></input>
        <input className="size-xxl" placeholder="Enter your email"></input>
        <input
          className="size-xxl"
          type="password"
          placeholder="Enter your password"
        />
        <button className="size-xxl primary"> Signup </button>
      </div>
    </>
  );
}

export default SignupForm;
