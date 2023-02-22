import useAuth from "../../context/userContext/useAuth";
export const MyAccount = () => {
  const { user, message, error, logout } = useAuth();

  return (
    <div className="mx-auto right-0 mt-5 w-60">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-slate-800 border-b">
          <svg
            aria-hidden="true"
            role="img"
            className="h-24 w-24 text-white rounded-full mx-auto"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"
            ></path>
          </svg>
          <p className="pt-2 text-lg font-semibold text-gray-50">
            {user ? user.username : " "}
          </p>
          <p className="text-sm text-gray-100">{user ? user.email : " "}</p>
        </div>

        <div className="">
          <button
            onClick={logout}
            className="w-full justify-center px-4 py-2 pb-4 text-center hover:bg-slate-100 flex"
          >
            <p className="text-sm font-medium text-gray-800 ">Logout</p>
          </button>
        </div>
      </div>
      {message ? (
        <div
          className="bg-blue-100 text-center rounded-lg py-3 px-6 my-4 text-base text-blue-700 mb-3"
          role="alert"
        >
          {message}
        </div>
      ) : null}
      {error && (
        <div
          className="bg-red-100 text-center rounded-lg py-3 px-6 my-4 text-base text-red-700 mb-3"
          role="alert"
        >
          {error}
        </div>
      )}
    </div>
  );
};
