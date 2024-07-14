import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

export default function SignUpThree() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [userType, setUserType] = useState("Customer");
  const [loading, setLoading] = useState(false);

  // navigation
  const navigate = useNavigate();

  // signup function
  const signupHandle = async () => {
    //client side validation
    if (!name || !email || !password || !mobile || !userType) {
      return toast.error("Provide All The Data..!");
    }

    // email validation
    if (!email.includes("@")) {
      return toast.error("Please Enter Valid Credentials..!");
    }

    // contact validation
    if (mobile.length !== 10) {
      return toast.error("Please Enter Valid Contact Number..!");
    }

    // send data through backend API
    const response = await fetch(
      import.meta.env.VITE_BASE_URL + `/api/user/register`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ name, email, password, mobile, userType }),
      }
    );

    const signupData = await response.json();
    // console.log(signupData);

    // checking condition

    if (signupData.error) {
      toast.error(signupData.error);
    } else {
      setLoading(false);
      toast.success(signupData.success);

      setName("");
      setEmail("");
      setPassword("");
      setMobile("");
      setUserType("");

      navigate("/");

      const token = signupData?.token;
      localStorage.setItem("token", signupData?.token);

      const decoded = jwtDecode(token);
      console.log(decoded);

      localStorage.setItem("userId", decoded.user.id);
      localStorage.setItem("userType", decoded.user.userType);
    }

    // end of handlesubmin
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <Helmet>
        <title>Sign Up - Library Management</title>
      </Helmet>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Sign up to create account
          </h2>
          <p className="mt-2 text-center text-base text-gray-600">
            Already have an account?{" "}
            <NavLink
              to="/login"
              title=""
              className="font-medium text-black transition-all duration-200 hover:underline"
            >
              Sign In
            </NavLink>
          </p>
          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Full Name{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Full Name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Email address{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Password{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Mobile No.{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="number"
                    placeholder="Mobile No."
                    id="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  ></input>
                </div>
              </div>

              <div>
                <label
                  htmlFor="type"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  User Type{" "}
                </label>
                <div className="mt-2">
                  <select
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    name="User Type"
                    id="type"
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                  >
                    <option value="customer">Customer</option>
                    <option value="student">Student</option>
                    <option value="admin">Admin</option>
                    <option value="librarian">Librarian</option>
                  </select>
                </div>
              </div>

              <div>
                <button
                  onClick={signupHandle}
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Create Account <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
