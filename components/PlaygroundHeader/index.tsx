import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';


import ThemeToggler from "./ThemeToggler";
import { ApplicationState } from "@/store/reducers/rootReducer";


import * as SettingActions from "../../store/reducers/setting/actionTypes"
import * as UserActions from "../../store/reducers/user/actionTypes"



const Header = () => {
  let dispatch = useDispatch()
  let user_state = useSelector((state: ApplicationState) => state.user_state)
  let setting_state = useSelector((state: ApplicationState) => state.setting_state)

  const handleLogOut = () => {
    let auth_payload = {
      authenticated: false
    }
    dispatch({ type: UserActions.AUTHENTICATE_USER, payload: auth_payload })
    let panel_payload = {
      panel: setting_state.panels[0]
    }
    dispatch({ type: SettingActions.SHOW_PANEL, payload: panel_payload })
  }
  const handleLogin = () => {
    let panel_payload = {
      panel: setting_state.panels[1]
    }
    dispatch({ type: SettingActions.SHOW_PANEL, payload: panel_payload })
  }
  const handleSidebarOpen = () => {
    console.log("toogle sidebar")
    dispatch({ type: SettingActions.TOGGLE_SIDEBAR })
  }

  return (
    <>
      <header
        className={`w-full flex justify-center items-center shadow-lg bg-white dark:bg-bdDarkBg`}
      >
        <div className="flex justify-center items-center px-6 w-full overflow-hidden border-b border-pdfLightHover dark:border-dgenDarkBorder">
          <div className="xxs:w-full xs:w-[400px] sm:w-[500px] md:w-[600px] lg:w-[800px] relative -mx-4 flex items-center justify-between">
            <div className="w-full flex justify-between items-center">
              {/* <div className="ml-2 mr-4 cursor-pointer" onClick={handleSidebarOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>

              </div> */}
              <Link
                href="/"
                className={`header-logo block w-full pl-3 py-5 lg:py-2`}
              >
                <div className="flex w-full items-center">
                  <Image
                    src="/static/images/logo/ec-light.svg"
                    alt="logo"
                    width={40}
                    height={30}
                    className="dark:hidden"
                  />
                  <Image
                    src="/static/images/logo/ec-dark.svg"
                    alt="logo"
                    width={40}
                    height={30}
                    className="hidden dark:block"
                  />
                  <p className="w-full text-lg font-bold ml-2">ভোটার ডাটা ম্যানেজমেন্ট</p>
                </div>

              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div></div>
              <div className="flex items-center justify-end">


                <div className="flex items-center gap-4">
                  {/* <div className="flex">
                      <Image
                        src="/static/images/energy.svg"
                        alt="logo"
                        width={25}
                        height={25}
                      />
                      <p>122</p>
                    </div> */}
                  {user_state.authenticated ? <Dropdown>
                    <DropdownTrigger>
                      <Avatar
                        size="sm"
                        as="button"
                        className="transition-transform"
                        src={user_state.user.photo_url}
                        classNames={{
                          base: "",
                          img: "",
                          fallback: "",
                          name: "",
                          icon: "text-white",
                        }}
                      />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                      <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-semibold">Signed in as</p>
                        <p className="font-semibold">{user_state.user.email}</p>
                      </DropdownItem>
                      {/* <DropdownItem key="settings">
                          My Settings
                        </DropdownItem>
                        <DropdownItem key="team_settings">Team Settings</DropdownItem>
                        <DropdownItem key="analytics">
                          Analytics
                        </DropdownItem>
                        <DropdownItem key="system">System</DropdownItem>
                        <DropdownItem key="configurations">Configurations</DropdownItem>
                        <DropdownItem key="help_and_feedback">
                          Help & Feedback
                        </DropdownItem> */}
                      <DropdownItem key="logout" color="danger" onClick={handleLogOut}>
                        Log Out
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown> : <Button variant="solid" size="sm" color="primary" onClick={handleLogin}>লগইন</Button>}

                </div>

                <div>
                  <ThemeToggler />

                </div>
                <div className="cursor-pointer">
                  <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                      <div>
                        <Image
                          src="/static/images/nine-dots-light.svg"
                          alt="logo"
                          width={20}
                          height={20}
                          className="dark:hidden"
                        />
                        <Image
                          src="/static/images/nine-dots-dark.svg"
                          alt="logo"
                          width={20}
                          height={20}
                          className="hidden dark:block"
                        />
                      </div>

                    </DropdownTrigger>
                    <DropdownMenu aria-label="User Actions" variant="flat" className="flex">
                      <DropdownItem
                        key="history"
                        startContent={<div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
                          </svg>

                        </div>}
                      >
                        <p className="font-semibold">হিস্টরি</p>
                      </DropdownItem>
                      <DropdownItem
                        key="order"
                        startContent={<div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                          </svg>

                        </div>}
                      >
                        <p className="font-semibold">অর্ডার ট্র্যাকিং</p>
                      </DropdownItem>
                      <DropdownItem
                        key="profile"
                        startContent={<div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                          </svg>

                        </div>}
                      >
                        <p className="font-semibold">পেমেন্ট সেটিংস</p>
                      </DropdownItem>
                      <DropdownItem
                        key="profile"
                        startContent={<div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                          </svg>
                        </div>}
                      >
                        <p className="font-semibold">অ্যাড্রেস সেটিংস</p>
                      </DropdownItem>

                    </DropdownMenu>
                  </Dropdown>


                </div>

              </div>
            </div>
          </div>
        </div>

      </header>
    </>
  );
};

export default Header;
