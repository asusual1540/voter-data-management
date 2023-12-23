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
                  <p className="w-full text-lg font-bold ml-2">ভোটার তথ্য ব্যবস্থাপনা ২০২৪</p>
                </div>

              </Link>
            </div>
            <div className="flex w-full items-center justify-between pl-4">
              <div></div>
              <div className="flex items-center justify-end">
                <div>
                  <ThemeToggler />

                </div>

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




              </div>
            </div>
          </div>
        </div>

      </header>
    </>
  );
};

export default Header;
