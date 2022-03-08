import Image from "next/image";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const router = useRouter();

  console.log(user);

  return (
    <div className="grid h-screen w-screen place-items-center bg-white">
      <div className="rounded-2xl border-gray-200 p-8 xs:border-2">
        <div className="w-[240px]">
          <div className="flex gap-3">
            {user.photoURL ? (
              <div className="relative h-12 w-12 flex-none overflow-hidden rounded-full border-2 border-gray-200">
                <Image src={user.photoURL} alt="pfp" layout="fill" />
              </div>
            ) : (
              <div className="grid h-12 w-12 flex-none place-items-center rounded-full bg-gray-500 text-xl font-medium text-white">
                {user.displayName[0]}
              </div>
            )}
            <div className="overflow-hidden">
              <p className="-mb-1 truncate text-xl font-medium text-gray-700">
                {user.displayName}
              </p>
              <p className="font-sm truncate text-gray-500">{user.email}</p>
            </div>
          </div>
          <p className="mt-4 truncate text-sm text-gray-500">
            <span className="font-bold">ID:</span> {user.uid}
          </p>
          <button
            onClick={async () => {
              await logout();
              router.push("/login");
            }}
            className="mt-4 rounded-lg border-2 border-gray-600 px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-600 hover:text-white"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
