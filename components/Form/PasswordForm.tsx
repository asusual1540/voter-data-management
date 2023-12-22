import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Image from "next/image";

import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as UserActions from '../../store/reducers/user/actionTypes';
import * as SettingActions from '../../store/reducers/setting/actionTypes';
import { ApplicationState } from "@/store/reducers/rootReducer";


import Link from 'next/link';
import { Button, Card, Input } from '@nextui-org/react';

const PasswordForm = () => {
    let setting_state = useSelector((state: ApplicationState) => state.setting_state)
    const dispatch = useDispatch()


    const formik = useFormik({
        initialValues: {
            password: '',
            confirmpassword: ''
        },
        validationSchema: Yup.object({
            password: Yup
                .string()
                .required('পূরণ করা আবশ্যিক')
                .min(5, 'আপনার পাসওয়ার্ড অত্যন্ত ছোট')
                .matches(/[A-Z]/, 'অন্তত একটি বড় হাতের অক্ষর প্রয়োজন')
                .matches(/[a-z]/, 'অন্তত একটি ছোট হাতের অক্ষর প্রয়োজন')
                .matches(/\d/, 'অন্তত একটি সংখ্যা প্রয়োজন')
                .matches(/^.{8,}$/, 'কমপক্ষে ৮টি অক্ষর প্রয়োজন'),
            confirmpassword: Yup.string()
                .oneOf([Yup.ref('password')], 'পাসওয়ার্ড অবশ্যই মিলতে হবে'),
        }),
        onSubmit: values => {
            //   let payload = {
            //     mobile: values.mobile,
            //     mobile_verified: false,
            //   }
            //   dispatch({ type: UserActions.SET_USER_MOBILE, payload: payload })
            let panel_payload = {
                panel: setting_state.panels[4]
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
        <div className="relative flex justify-center items-center">
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
                                htmlFor="password"
                                className="mb-3 block text-sm text-dark dark:text-white"
                            >
                                পাসওয়ার্ড
                            </label>
                            <Input
                                size='sm'
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
                        <div className="mb-8">
                            <label
                                htmlFor="password"
                                className="mb-3 block text-sm text-dark dark:text-white"
                            >
                                পাসওয়ার্ড নিশ্চিত করণ
                            </label>
                            <Input
                                size='sm'
                                variant='bordered'
                                id="confirmpassword"
                                name="confirmpassword"
                                type="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmpassword}
                                isInvalid={formik.touched.confirmpassword && formik.errors.confirmpassword != undefined && formik.errors.confirmpassword.length != 0}
                                errorMessage={formik.errors.confirmpassword}


                                placeholder="আপনার পাসওয়ার্ডটি নিশ্চিত করুন"
                            // className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                            />
                        </div>

                        <div className="mb-6">

                            <Button type="submit" className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-lg bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                                রেজিষ্ট্রেশন করুন
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

    );
};

export default PasswordForm;
