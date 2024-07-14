import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const [login, setLogin] = useState(false);

  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");
  const userType = localStorage.getItem("userType");

  const onLogin = () => {
    if (localStorage.getItem("token")) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  // logout handle
  const logoutHandle = () => {
    setLogin(false);

    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userType");

    toast.info("User Loggedout Successfully..!");
    navigate("/");
  };

  useEffect(() => {
    onLogin();
  }, [localStorage.getItem("token")]);

  return (
    <>
      <nav className="bg-slate-300 rounded-full my-4 max-w-7xl mx-auto">
        <div className="mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center space-x-2">
            {/* <img src="logo.png" alt="Logo" className="h-8 w-8" /> */}
            <NavLink to={"/"}>
              <h1 className="text-black font-bold text-medium sm:text-xl">
                Library Management
              </h1>
            </NavLink>
          </div>
          {login ? (
            <div className="flex items-center space-x-2">
              {userType === "admin" ? (
                <NavLink to={`/admin/dashboard`}>
                  <button className="text-black font-bold px-2 py-1">
                    Dashboard
                  </button>
                </NavLink>
              ) : (
                ""
              )}

              <NavLink to={`/profile/${userId}`}>
                <button className="text-black font-bold px-2 py-1">
                  Profile
                </button>
              </NavLink>
              <button
                onClick={logoutHandle}
                className="text-black font-bold px-2 py-1  rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <NavLink to={"/login"}>
                <button className="text-black font-bold px-2 py-1">
                  Login
                </button>
              </NavLink>
              <NavLink to={"/register"}>
                <button className="text-black font-bold px-2 py-1  rounded">
                  Signup
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
