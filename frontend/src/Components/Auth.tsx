import { SignupInput } from "@abhilashtengli/medium-common01";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Base_Url } from "../config";
import axios from "axios";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    email: "",
    password: "",
    name: ""
  });
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        `${Base_Url}/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs,
        { withCredentials: true }
      );
      navigate("/blogs");
      console.log(res.data);
    } catch (err) {
      return "Error: " + err;
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className=" flex justify-center">
        <div className="border px-5 py-10 rounded-md space-y-5 shadow-md">
          <div className="p-5">
            <h1 className="text-3xl font-bold text-center">
              {type === "signup" ? "Create an account" : "Login account"}
            </h1>
            <h2 className="text-slate-500 font-semibold text-center mt-1">
              {type === "signup"
                ? "Already have an account"
                : "Don't have an account"}{" "}
              <Link
                className="underline pl-1"
                to={type === "signup" ? "/signin" : "/signup"}
              >
                {type === "signup" ? "Sign In" : "Sign Up"}
              </Link>
            </h2>
          </div>
          <div>
            {type === "signup" &&
              <div>
                <div className="label my-3">
                  <span className="label-text font-medium ">Username</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={postInputs.name}
                  onChange={e => {
                    setPostInputs({ ...postInputs, name: e.target.value });
                  }}
                  className=" border w-full max-w-xs   focus:ring focus:outline-none  focus:ring-purple-500 px-2 py-1 rounded-md bg-gray-100"
                />
              </div>}
            <div className="label my-3">
              <span className="label-text font-medium ">Email</span>
            </div>
            <input
              type="text"
              placeholder="Jhon@gmail.com"
              value={postInputs.email}
              onChange={e => {
                setPostInputs({ ...postInputs, email: e.target.value });
              }}
              className="w-full max-w-xs border  focus:ring focus:outline-none  focus:ring-purple-500 px-2 py-1 rounded-md bg-gray-100"
            />
            <div className="label my-3">
              <span className="label-text font-medium ">password</span>
            </div>
            <input
              type="password"
              placeholder="Enter your username"
              value={postInputs.password}
              onChange={e => {
                setPostInputs({ ...postInputs, password: e.target.value });
              }}
              className=" w-full max-w-xs px-2 py-1 border focus:ring focus:outline-none  focus:ring-purple-500 rounded-md bg-gray-100"
            />{" "}
          </div>
          <div>
            <button
              onClick={handleSignUp}
              className="border w-full px-2 py-1 rounded-md font-semibold bg-gray-700 text-white hover:bg-gray-600"
            >
              {type === "signup" ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
