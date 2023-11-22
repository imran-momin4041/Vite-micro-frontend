import "./Header.css";

function Header({ onLoginClick, onSignUpClick, onDashboardClick }) {
  return (
    <>
      <div className="header-content">
        <button className="size-xl text-xl" onClick={(e) => onLoginClick()}>
          Login
        </button>
        <button className="size-xl text-xl" onClick={onSignUpClick}>
          Signup
        </button>
        <button className="size-xl text-xl" onClick={onDashboardClick}>
          Dashboard
        </button>
      </div>
    </>
  );
}

export default Header;
