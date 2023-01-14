import { useEffect, useState } from "react";
import Link from "next/link";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";


const Login=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const submit=()=>{
        if (email === "") {
            alert("メールアドレスを入力してください");
            return;
          }
          if (password === "") {
            alert("パスワードを入力してください");
            return;
          }
    }

    return(
        <div className="mx-10 lg:mx-auto lg:max-w-62rem w-3/5">
        <div className="mx-auto w-11/12 py-4">
          <div className="w-full border-2 border-gray-500 border-shadow shadow-lg">
            <div className="text-center font-medium text-5xl py-4 border-b-2 border-gray-500">
              アカウントログイン
            </div>

            <form className="mx-auto w-10/12 py-10">
              <div className="pb-6">
                パスワードを忘れた方：リセットは
                <span className="text-blue-500">
                  <Link href="">こちら</Link>
                </span>
              </div>
              <div className="font-medium text-xl mb-2">メールアドレス</div>
              <div className="flex text-xl mb-4">
                <div className="pt-1">
                  <EnvelopeIcon className=" w-6 h-6" />
                </div>

                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="border border-gray-500 px-3 w-full"
                />
              </div>
              <div className=" font-medium text-xl mb-2">パスワード</div>
              <div className="flex text-xl mb-4">
                <div className="pt-1">
                  <LockClosedIcon className="w-6 h-6" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="border border-gray-500 px-3 w-full"
                />
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  onClick={submit}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  ログイン
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};


export default Login;