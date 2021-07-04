export type AccountInfoProps = {};

export const AccountInfo: React.FC<AccountInfoProps> = () => {
  return (
    <>
      <form>
        <div className="bg-grey shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              value={"email"}
              onChange={(e) => console.log()}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="Email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              type="password"
              placeholder="******************"
              onChange={(e) => console.log()}
            />
            <p className="text-red text-xs italic">Please enter a password.</p>
          </div>
          <div className="flex items-center justify-between">
            {/* <a
                  className="inline-block align-baseline font-bold text-sm text-white"
                  href="#"
                >
                  Forgot Password?
                </a> */}
          </div>
        </div>
      </form>
    </>
  );
};
