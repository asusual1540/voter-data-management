import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Image from "next/image";
import { Button, Card, Input } from '@nextui-org/react';
import { useDispatch, useSelector } from 'react-redux';
import * as UserActions from '../../store/reducers/user/actionTypes';
import * as SettingActions from '../../store/reducers/setting/actionTypes';
import { ApplicationState } from "@/store/reducers/rootReducer";

const SignupForm = () => {
  let setting_state = useSelector((state: ApplicationState) => state.setting_state)
  const dispatch = useDispatch()


  const formik = useFormik({
    initialValues: {
      mobile: ''
    },
    validationSchema: Yup.object({
      mobile: Yup.string()
        .length(11, '১১ অক্ষর দীর্ঘ হতে হবে')
        .matches(/^01/, 'বাংলাদেশী মোবাইল নাম্বার হতে হবে')
        .matches(/^-?\d+$/, 'বাংলাদেশী মোবাইল নাম্বার হতে হবে')
        .required('পূরণ করা আবশ্যিক'),
    }),
    onSubmit: values => {
      let payload = {
        mobile: values.mobile,
        mobile_verified: false,
      }
      dispatch({ type: UserActions.SET_USER_MOBILE, payload: payload })
      let panel_payload = {
        panel: setting_state.panels[2]
      }
      dispatch({ type: SettingActions.SHOW_PANEL, payload: panel_payload })
      // alert(JSON.stringify(values, null, 2));
      // router.push("/otp")
    }
  });

  const handleLoginClick = () => {
    let panel_payload = {
      panel: setting_state.panels[0]
    }
    dispatch({ type: SettingActions.SHOW_PANEL, payload: panel_payload })
  }


  return (
    <div className="flex flex-wrap justify-center items-center">
      <Card className='xxs:w-full xs:w-[400px] sm:w-[500px] md:w-[500px] lg:w-[500px]' shadow='lg'>
        <div className="shadow-three px-12 py-16">
          <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
            বাংলাদেশ পোস্ট
          </h3>
          <p className="mb-5 text-center text-base font-medium text-body-color">
            গ্রাহক রেজিষ্ট্রেশন
          </p>
          <div className='w-full flex justify-center items-center'>
            <Image
              src="/static/images/logo/logo-icon.svg"
              alt="logo"
              width={100}
              height={100}
              className="dark:hidden"
            />
            <Image
              src="/static/images/logo/logo-icon-dark.svg"
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
                মোবাইল
              </label>
              <Input
                size='sm'
                variant='bordered'
                id="mobile"
                name="mobile"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mobile}
                placeholder="আপনার মোবাইল নাম্বারটি লিখুন"
                isInvalid={formik.touched.mobile && formik.errors.mobile != undefined && formik.errors.mobile.length != 0}
                errorMessage={formik.errors.mobile}
              // className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
              />

            </div>

            {/* <div className="mb-8 flex">
                    <label
                      htmlFor="checkboxLabel"
                      className="flex cursor-pointer select-none text-sm font-medium text-body-color"
                    >
                      <div className="relative">
                        <Checkbox
                          id="consent"
                          name="consent"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />


                        {formik.touched.consent && formik.errors.consent ? (
                          <div>{formik.errors.consent}</div>
                        ) : null}
                      </div>
                      <span>
                        অ্যাকাউন্ট তৈরি করার অর্থ হল আপনি
                        <a href="#0" className="text-primary hover:underline">
                          {" "}
                          নিয়ম ও শর্তাবলী{" "}
                        </a>
                        , এবং আমাদের
                        <a href="#0" className="text-primary hover:underline">
                          {" "}
                          গোপনীয়তা নীতিতে{" "}
                        </a>
                        সম্মত
                      </span>
                    </label>
                  </div> */}
            <div className="mb-6">

              <Button type="submit" className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-lg bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                যাচাই করুন
              </Button>


            </div>
          </form>
          <p className="text-center text-base font-medium text-body-color">
            ইতিমধ্যেই বাংলাদেশ পোস্ট ব্যবহার করছেন?{" "}
            <button className="text-primary hover:underline" onClick={handleLoginClick}>
              লগইন করুন
            </button>
          </p>
        </div>
      </Card>

    </div>
  )
}

export default SignupForm