import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-slate-300 rounded-full my-4 max-w-7xl mx-auto">
        <div className="mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center space-x-2">
            {/* <img src="logo.png" alt="Logo" className="h-8 w-8" /> */}
            <NavLink to={"/"}><h1 className="text-black font-bold text-medium sm:text-xl">Library Management</h1></NavLink>
          </div>
          <div className="flex items-center space-x-2">
            <NavLink to={"/login"}><button className="text-black font-bold px-2 py-1">Login</button></NavLink>
            <NavLink to={"/register"}><button className="text-black font-bold px-2 py-1  rounded">Signup</button></NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
