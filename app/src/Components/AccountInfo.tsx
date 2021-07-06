import { useUserQuery } from "../generated/graphql";

import { useRecoilValue } from "recoil";
import { userIdState } from "../atoms";

export type AccountInfoProps = {};

export const AccountInfo: React.FC<AccountInfoProps> = () => {
  const userId = useRecoilValue(userIdState);

  const userInfo = useUserQuery({ variables: { userId: userId ?? 0 } });

  return (
    <>
      <form>
        <div className="bg-grey shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col mx-5">
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              value={userInfo.data?.user.email}
              onChange={(e) => console.log()}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="Email"
              type="text"
              placeholder="Email"
            />
          </div>
        </div>
      </form>
    </>
  );
};
