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


const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg'] };

function isValidFileType(fileName: string, fileType: string) {
    return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
}

function isValidFileSize(value: any) {
    console.log("filesize value", typeof (value))
    return value && value.size <= MAX_FILE_SIZE
}


const NidForm = () => {
    let setting_state = useSelector((state: ApplicationState) => state.setting_state)
    const dispatch = useDispatch()


    const formik = useFormik({
        initialValues: {
            nid_front: '',
            nid_back: ''
        },
        validationSchema: Yup.object().shape({

            nid_front: Yup
                .mixed()
                .required("পূরণ করা আবশ্যিক")
                .test("is-valid-type", "Not a valid image type",
                    (value: any) => isValidFileType(value && value.name.toLowerCase(), "image"))
                .test("is-valid-size", "Max allowed size is 5MB",
                    (value: any) => isValidFileSize(value)),
            nid_back: Yup
                .mixed()
                .required("পূরণ করা আবশ্যিক")
                .test("is-valid-type", "Not a valid image type",
                    (value: any) => isValidFileType(value && value.name.toLowerCase(), "image"))
                .test("is-valid-size", "Max allowed size is 5MB",
                    (value: any) => isValidFileSize(value))
        }),
        onSubmit: values => {
            //   let payload = {
            //     mobile: values.mobile,
            //     mobile_verified: false,
            //   }
            //   dispatch({ type: UserActions.SET_USER_MOBILE, payload: payload })
            let auth_payload = {
                authenticated: true
            }
            dispatch({ type: UserActions.AUTHENTICATE_USER, payload: auth_payload })
            let panel_payload = {
                panel: setting_state.panels[5]
            }
            dispatch({ type: SettingActions.SHOW_PANEL, payload: panel_payload })

            // alert(JSON.stringify(values, null, 2));
            // router.push("/otp")
        }
    });
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
                                জাতীয় পরিচয়পত্র সামনের পাতা
                            </label>
                            <input
                                id="nid_front"
                                name="nid_front"
                                type="file"

                                onBlur={formik.handleBlur}
                                onChange={(e) => {
                                    formik.setFieldValue("nid_front", e.target.files[0]);
                                }}
                                className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                            />
                            {formik.touched.nid_front && formik.errors.nid_front ? (
                                <p className='text-sm text-[#ff2800]'>{formik.errors.nid_front}</p>
                            ) : null}
                        </div>
                        <div className="mb-8">
                            <label
                                htmlFor="password"
                                className="mb-3 block text-sm text-dark dark:text-white"
                            >
                                জাতীয় পরিচয়পত্র পেছনের পাতা
                            </label>
                            <input
                                id="nid_back"
                                name="nid_back"
                                type="file"
                                onChange={(e) => {
                                    formik.setFieldValue("nid_back", e.target.files[0]);
                                }}
                                onBlur={formik.handleBlur}

                                className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                            />
                            {formik.touched.nid_back && formik.errors.nid_back ? (
                                <p className='text-sm text-[#ff2800]'>{formik.errors.nid_back}</p>
                            ) : null}
                        </div>

                        <div className="mb-6">

                            <Button type="submit" className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-lg bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                                নিশ্চিত করুন
                            </Button>

                            {/* <div className='flex justify-end mt-2'>

                                <button>
                                    <p className='underline'>এড়িয়ে যান</p>
                                </button>


                            </div> */}

                        </div>
                    </form>
                </div>
            </Card>


        </div>

    );
};

export default NidForm;
