import React, { useState } from 'react'
import Image from "next/image";

import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as UserActions from '../../store/reducers/user/actionTypes';
import * as SettingActions from '../../store/reducers/setting/actionTypes';
import { ApplicationState } from "@/store/reducers/rootReducer";


import Link from 'next/link';
import { Button, Card, Checkbox, Input } from '@nextui-org/react';
import { useDispatch, useSelector } from 'react-redux';
import { useValidateUserToken } from '@/hooks/useValidateUserToken';
import { useUserLogin } from '@/hooks/useUserLogin';

const LoginForm = () => {
  const [loading, setLoading] = useState(false)
  let setting_state = useSelector((state: ApplicationState) => state.setting_state)
  let user_state = useSelector((state: ApplicationState) => state.user_state)
  const dispatch = useDispatch()
  const { mutate } = useUserLogin();


  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('পূরণ করা আবশ্যিক'),
      password: Yup.string()
        .required('পূরণ করা আবশ্যিক'),
    }),
    onSubmit: values => {
      setLoading(true)
      console.log("submittion", values)
      mutate(values, {
        onSuccess: (response) => {
          setLoading(false)
          console.log("Form submitted successfully");
          console.log("response", response["data"]);
          let token_payload = {
            token: response["data"].access_token
          }
          dispatch({ type: UserActions.SET_USER_TOKEN, payload: token_payload })
          let auth_payload = {
            authenticated: true
          }
          dispatch({ type: UserActions.AUTHENTICATE_USER, payload: auth_payload })
          let panel_payload = {
            panel: setting_state.panels[2]
          }
          dispatch({ type: SettingActions.SHOW_PANEL, payload: panel_payload })
        },
        onError: (response) => {
          setLoading(false)
          console.log("An error occured while submiting the form");
          console.log(response);
        }
      });


      // alert(JSON.stringify(values, null, 2));
      // router.push("/otp")
    }
  });

  const handleRegistrationClick = () => {
    let panel_payload = {
      panel: setting_state.panels[1]
    }
    dispatch({ type: SettingActions.SHOW_PANEL, payload: panel_payload })
  }

  const handleLoginClose = () => {
    let panel_payload = {
      panel: setting_state.panels[0]
    }
    dispatch({ type: SettingActions.SHOW_PANEL, payload: panel_payload })
  }
  return (
    <div className="relative flex justify-center items-center">

      <Card className='xxs:w-full xs:w-[400px] sm:w-[500px] md:w-[500px] lg:w-[500px]' shadow='lg'>
        <div className='absolute top-2 right-2 cursor-pointer' onClick={handleLoginClose}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

        </div>
        <div className="shadow-three px-12 py-16">
          <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
            ভোটার তথ্য ব্যবস্থাপনা
          </h3>
          <p className="mb-5 text-center text-base font-medium text-body-color">
            ব্যবহারকারী লগইন
          </p>
          <div className='w-full flex justify-center items-center'>
            <Image
              src="/static/images/logo/ec-light.svg"
              alt="logo"
              width={100}
              height={100}
              className="dark:hidden"
            />
            <Image
              src="/static/images/logo/ec-dark.svg"
              alt="logo"
              width={100}
              height={100}
              className="hidden dark:block"
            />
          </div>



          <form onSubmit={formik.handleSubmit}>
            <div className="mb-8">
              <label
                htmlFor="email"
                className="mb-3 block text-sm text-dark dark:text-white"
              >
                ইউজারনেম
              </label>
              <Input
                size='md'
                variant='bordered'
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                placeholder="আপনার ইউজারনেমটি লিখুন"
                isInvalid={formik.touched.username && formik.errors.username != undefined && formik.errors.username.length != 0}
                errorMessage={formik.errors.username}
              // className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="password"
                className="mb-3 block text-sm text-dark dark:text-white"
              >
                পাসওয়ার্ড
              </label>
              <Input
                size='md'
                variant='bordered'
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}

                isInvalid={formik.touched.password && formik.errors.password != undefined && formik.errors.password.length != 0}
                errorMessage={formik.errors.password}

                placeholder="আপনার পাসওয়ার্ডটি লিখুন"
              // className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
              />
            </div>
            {/* <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center">
              <div className="mb-4 sm:mb-0">
                <Checkbox ><p className="flex cursor-pointer select-none items-center text-sm font-medium text-body-color">আমাকে মনে রাখুন</p></Checkbox>

              </div>
              <div>
                <a
                  href="#0"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  পাসওয়ার্ড ভুলে গেছেন?
                </a>
              </div>
            </div> */}
            <div className="mb-6">

              <Button isLoading={loading} type="submit" className="flex w-full items-center justify-center rounded-lg bg-primary px-9 py-6 text-base font-medium text-white duration-300 hover:bg-primary/90">
                লগইন
              </Button>


            </div>
          </form>
          {/* <p className="text-center text-base font-medium text-body-color">
            অ্যাকাউন্ট নেই?{" "}

            <p className='inline text-primary cursor-pointer' onClick={handleRegistrationClick}>রেজিষ্ট্রেশন করুন</p>

          </p> */}
        </div>
      </Card>
    </div>

  );
};

export default LoginForm;
