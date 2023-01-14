import { Menu, Transition } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment } from "react";

const BaseLayout = ({ children }) => {
  return (
    <div className="box-border">
      <header className="flex justify-between bg-black">
        <div className="px-6 py-3 text-4xl font-medium text-main-900 text-white">あなただけの予定表を作れる</div>
        <Menu as="div" className="relative">
          <Menu.Button className="inline-flex justify-end rounded-md px-4 py-2 text-sm font-medium">
            <UserCircleIcon className="w-14 h-14 text-white" />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 ml-20 mr-1 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex items-center w-full rounded-md pl-5 py-2 text-sm`}
                  >
                    マイページ
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex items-center w-full rounded-md pl-5 py-2 text-sm`}
                  >
                    プロフィール編集
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex items-center w-full rounded-md pl-5 py-2 text-sm`}
                  >
                    メール受信設定
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex items-center w-full rounded-md pl-5 px-6 py-2 text-sm`}
                  >
                    ログアウト
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </header>

      <main>{children}</main>

      <div className="box-border">
      <footer className="flex justify-between bg-black mt-20">
        <div className="px-6 py-3 grid md:px-10 md:grid-cols-4 md:gap-x-7 lg:mx-auto lg:max-w-screen-lg">
          <div className="pb-6">
            <p className="pb-2 text-xl text-main-900 font-bold text-white">TodoList</p>
            <p className="text-xs text-white">自分好みの予定表</p>
          </div>
          <div className="pb-6">
            <p className="mb-2 text-lg font-bold border-b-2 md:border-b-0 text-white">Links</p>
            <p className="pb-2 text-sm text-white">お問い合わせ</p>
            <p className="text-sm text-white">運営会社</p>
          </div>
          <div className="pb-6">
            <p className="mb-2 text-lg font-bold border-b-2 md:border-b-0 text-white">Legal</p>
            <p className="pb-2 text-sm text-white">利用規約</p>
            <p className="text-sm text-white">プライバシーポリシー</p>
          </div>
          <div className="pb-6">
            <p className="mb-2 text-lg font-bold border-b-2 md:border-b-0 text-white">SNS</p>
            <Link href="">
              <p className="pb-2 text-sm text-white hover:underline hover:text-blue-500">
                Twitter
              </p>
            </Link>
            <p className="text-sm text-white">公式LINE</p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default BaseLayout;
