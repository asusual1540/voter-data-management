import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as SettingActions from "../../store/reducers/setting/actionTypes"

import { ApplicationState } from "@/store/reducers/rootReducer";
import { PanelSlug, UserDevice } from "@/store/reducers/setting/types";
import PlaygroundHeader from "@/components/PlaygroundHeader";

import { motion } from "framer-motion";
import LoginForm from "../Form/LoginForm";
import Search from "./Search";
import Voter from "./Voter";
import Slip from "./Slip";
import { useValidateUserToken } from "@/hooks/useValidateUserToken";

const PlaygroundSection = () => {
  let user_state = useSelector((state: ApplicationState) => state.user_state)
  let dispatch = useDispatch()
  let setting_state = useSelector((state: ApplicationState) => state.setting_state)
  let { isLoading, isFetching, isError, data, error } = useValidateUserToken(user_state.token)

  useEffect(() => {

    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        dispatch({ type: SettingActions.SET_USER_DEVICE, payload: { device: UserDevice["MOBILE"] } })
      } else if (width < 1024) {
        dispatch({ type: SettingActions.SET_USER_DEVICE, payload: { device: UserDevice["TABLET"] } })
      } else {
        dispatch({ type: SettingActions.SET_USER_DEVICE, payload: { device: UserDevice["DESKTOP"] } })
      }
    };

    // Initial check on component mount
    handleResize();

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [])

  return (
    <>
      <PlaygroundHeader />
      <section id="playground" className="bg-white">
        <div className="flex justify-center items-center">
          <div className="xxs:w-full xs:w-[400px] sm:w-[500px] md:w-[600px] lg:w-[800px]">
            <div className={`flex justify-center items-start relative w-full p-1 cards-container border-b border-pdfLightHover dark:border-dgenDarkBorder ${user_state.authenticated ? "min-h-[94svh]" : "min-h-[100svh]"}`}>

              {setting_state.panels.map((panel, index) => {

                if (panel.slug == PanelSlug["LOGIN"] && panel.shown && !user_state.authenticated) {
                  return <motion.div
                    className="m-1 w-full my-auto"
                    key={index}
                    // transition={{ ease: "easeInOut" }}
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                  >
                    <LoginForm />
                  </motion.div>
                }
                else if (panel.slug == PanelSlug["SEARCH"] && panel.shown) {
                  return <motion.div
                    className="m-1 w-full mt-6"
                    key={index}
                    // transition={{ ease: "easeInOut" }}
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                  >
                    <Search />
                  </motion.div>
                }
                else if (panel.slug == PanelSlug["SLIP"] && panel.shown) {
                  return <motion.div
                    className="m-1 w-full my-auto"
                    key={index}
                    // transition={{ ease: "easeInOut" }}
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                  >
                    <Slip />
                  </motion.div>
                }
                else if (panel.slug == PanelSlug["VOTER"] && panel.shown) {
                  return <motion.div
                    className="m-1 w-full mt-6"
                    key={index}
                    // transition={{ ease: "easeInOut" }}
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                  >
                    <Voter />
                  </motion.div>
                }

              })}




            </div>




          </div>
        </div>
      </section>
    </>

  );
};

export default PlaygroundSection;
