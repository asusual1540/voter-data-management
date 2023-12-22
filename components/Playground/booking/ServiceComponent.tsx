import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Divider, Checkbox, CheckboxGroup, CardHeader, Input, Button, Select, SelectItem } from '@nextui-org/react'
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as PostActions from '@/store/reducers/post/actionTypes';
import { ApplicationState } from "@/store/reducers/rootReducer";
import { useDispatch, useSelector } from 'react-redux';
import { PostService, ServiceInfo, SetPostActiveAdditionalServicePayload, SetPostActiveService, SetPostActiveServicePayload, SetPostServiceCostPayload, SetPostWeightPayload } from '@/store/reducers/post/types';
import { convertToBanglaNumber } from '@/lib/utils/EnglishNumberToBengali';

const findServiceCostFromWeight = (serviceInfo: ServiceInfo[], weight: number) => {
    for (let i = 0; i < serviceInfo.length; i++) {
        const lowerLimit = parseFloat(serviceInfo[i].Lower_limit);
        const upperLimit = parseFloat(serviceInfo[i].Upper_Limit);

        if (weight >= lowerLimit && weight <= upperLimit) {
            return i; // Return the index when the weight is within the range
        }
    }

    return -1; // Return -1 if the weight doesn't fall within any range
}


export default function ServiceComponent(props: { steps: any, step: number, setActiveStep: any }) {

    const [weightError, setWeightError] = React.useState("");
    const [serviceError, setServiceError] = React.useState("");

    const [additionalServiceError, setAdditionalServiceError] = React.useState("");

    const [infoShown, setInfoShown] = React.useState(true);

    let setting_state = useSelector((state: ApplicationState) => state.setting_state)
    let post_state = useSelector((state: ApplicationState) => state.post_state)
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            weight: `${post_state.weight}` || ''
        },
        validationSchema: Yup.object({
            weight: Yup.string()
                .matches(/^-?\d+$/, 'নাম্বার হতে হবে')
                .required('পূরণ করা আবশ্যিক'),
        }),
        onSubmit: values => {
            if (!post_state.services[post_state.activeServiceIndex]) {
                console.log("no service")
                setServiceError("বাছাই করা আবশ্যিক")
                return
            }
            if (!post_state.additionalServices[post_state.additionalServiceIndex]) {
                console.log("no additional service")
                setAdditionalServiceError("বাছাই করা আবশ্যিক")
                return
            }
            console.log("selectedService", post_state.services[post_state.activeServiceIndex].name)
            console.log("selectedAdditionalService", post_state.additionalServices[post_state.additionalServiceIndex].name)
            console.log("values", values)
            let service_infos: ServiceInfo[] = post_state.info[post_state.services[post_state.activeServiceIndex].name]

            const service_info_index = findServiceCostFromWeight(service_infos, Number(values.weight))
            console.log("service_info_index", service_info_index)
            const lower_limit = convertToBanglaNumber(service_infos[0].Lower_limit)
            const upper_limit = convertToBanglaNumber(service_infos[service_infos.length - 1].Upper_Limit)

            if (service_info_index == -1) {
                setWeightError(`${post_state.services[post_state.activeServiceIndex].label} হতে পারে ${lower_limit} গ্রাম থেকে ${upper_limit} গ্রাম`)
                return
            }
            setWeightError("")



            const service_info = service_infos[service_info_index]
            console.log("service_info", service_info)

            let payloadServiceCost: SetPostServiceCostPayload = {
                cost: parseFloat(service_info.Charge)
            }
            dispatch({ type: PostActions.SET_POST_SERVICE_COST, payload: payloadServiceCost })

            let payloadService: SetPostActiveServicePayload = {
                index: findIndexByName(post_state.services, post_state.services[post_state.activeServiceIndex].name)
            }
            dispatch({ type: PostActions.SET_POST_ACTIVE_SERVICE, payload: payloadService })

            let payloadAddService: SetPostActiveAdditionalServicePayload = {
                index: findIndexByName(post_state.additionalServices, post_state.additionalServices[post_state.additionalServiceIndex].name)
            }
            dispatch({ type: PostActions.SET_POST_ACTIVE_ADDITIONAL_SERVICE, payload: payloadAddService })

            let payloadWeight: SetPostWeightPayload = {
                weight: Number(values.weight)
            }
            dispatch({ type: PostActions.SET_POST_WEIGHT, payload: payloadWeight })

            props.setActiveStep(props.step + 1)

            // let auth_payload = {
            //     authenticated: true
            // }
            // dispatch({ type: UserActions.AUTHENTICATE_USER, payload: auth_payload })
            // let panel_payload = {
            //     panel: setting_state.panels[5]
            // }
            // dispatch({ type: SettingActions.SHOW_PANEL, payload: panel_payload })

            // alert(JSON.stringify(values, null, 2));
            // router.push("/otp")
        }
    });

    const findIndexByName = (services: PostService[], inputName: string) => {
        const index = services.findIndex(service => service.name === inputName);
        return index;
    }

    const handleServiceSelect = (selection: any) => {
        // console.log("service selection", selection)
        setServiceError("")
        let payloadService: SetPostActiveServicePayload = {
            index: findIndexByName(post_state.services, selection[selection.length - 1])
        }
        dispatch({ type: PostActions.SET_POST_ACTIVE_SERVICE, payload: payloadService })
    }

    const handleAdditionalServiceSelect = (selection: any) => {
        // console.log("add serviceselection", selection)
        setAdditionalServiceError("")
        let payloadAddService: SetPostActiveAdditionalServicePayload = {
            index: findIndexByName(post_state.additionalServices, selection[selection.length - 1])
        }
        dispatch({ type: PostActions.SET_POST_ACTIVE_ADDITIONAL_SERVICE, payload: payloadAddService })
    }

    return (
        <div>
            <div className='weight-details'>

                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="weight"
                            className="mb-3 block font-bold text-dark dark:text-white"
                        >
                            ওজন (গ্রাম)
                        </label>
                        <Input
                            size='sm'
                            variant='bordered'
                            id="weight"
                            name="weight"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.weight}
                            isInvalid={formik.touched.weight && formik.errors.weight != undefined && formik.errors.weight.length != 0}
                            errorMessage={formik.errors.weight}
                            type="number"
                            classNames={
                                {
                                    errorMessage: "text-postRed text-sm"
                                }
                            }
                            placeholder="আপনার পোস্টের ওজনটি লিখুন"
                        />
                        <p className='text-sm ml-2 my-2 text-postRed'>{weightError}</p>
                    </div>

                    <div className="mb-6">
                        <div className='flex items-center'>
                            <label
                                htmlFor="email"
                                className="mb-3 block font-bold text-dark dark:text-white"
                            >
                                সেবা

                            </label>

                        </div>

                        <div className="flex flex-col gap-3">
                            <CheckboxGroup
                                orientation='horizontal'
                                label=""
                                id='service'
                                name='service'
                                color="primary"
                                value={[post_state.services.map(service => service.name)[post_state.activeServiceIndex]]}
                                onValueChange={(value: any) => handleServiceSelect(value)}
                            >
                                {post_state.services.map(service => (
                                    <Checkbox key={service.name} className='mr-2' value={service.name}>{service.label}</Checkbox>
                                ))}
                            </CheckboxGroup>
                        </div>
                        <p className='text-sm ml-2 my-2 text-postRed'>{serviceError}</p>
                    </div>
                    <div className="mb-6">
                        <div className='flex items-center'>
                            <label
                                htmlFor="email"
                                className="mb-3 block font-bold text-dark dark:text-white"
                            >
                                অতিরিক্ত সেবা

                            </label>

                        </div>

                        <div className="flex flex-col gap-3">
                            <CheckboxGroup
                                orientation='horizontal'
                                label=""
                                id='additional_service'
                                name='additional_service'
                                color="primary"
                                value={[post_state.additionalServices.map(add_service => add_service.name)[post_state.additionalServiceIndex]]}
                                onValueChange={(value: any) => handleAdditionalServiceSelect(value)}
                            >
                                {post_state.additionalServices.map(service => (
                                    <Checkbox key={service.name} className='mr-2' value={service.name}>{service.label}</Checkbox>
                                ))}

                            </CheckboxGroup>
                        </div>
                        <p className='text-sm ml-2 my-2 text-postRed'>{additionalServiceError}</p>
                    </div>

                    <div className='mb-6 flex gap-3'>
                        <Button
                            color='primary'
                            isDisabled={props.step == 0 ? true : false}
                            onClick={() => props.setActiveStep(props.step - 1)}
                            className="w-full"
                        >
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>


                            </span>
                            <p>পূর্ববর্তী</p>

                        </Button>



                        <Button
                            type='submit'
                            color='primary'
                            className="w-full"
                        >
                            <p>পরবর্তী</p>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>

                            </span>
                        </Button>
                    </div>


                </form>



                <div className=''>
                    <div className='py-4 w-full flex cursor-pointer' onClick={() => setInfoShown(!infoShown)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                        <p className='pl-2 inline'>তথ্য</p>
                    </div>
                    {infoShown &&
                        <>



                            <div className='flex justify-between py-2'>
                                <p className='font-bold'>সেবা সংক্রান্ত তথ্য</p>
                                <div className="cursor-pointer" onClick={() => setInfoShown(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>


                                </div>
                            </div>

                            <Divider />


                            <Table removeWrapper aria-label="Example static collection table">
                                <TableHeader>
                                    <TableColumn>সেবা</TableColumn>
                                    <TableColumn>ওজনসীমা (গ্রাম)</TableColumn>
                                    <TableColumn>মূল্যসীমা (৳)</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow key="1">
                                        <TableCell>চিঠি</TableCell>
                                        <TableCell>১-১০০</TableCell>
                                        <TableCell>৫</TableCell>
                                    </TableRow>
                                    <TableRow key="2">
                                        <TableCell>বুক প্যাকেট</TableCell>
                                        <TableCell>১০০-২,০০০</TableCell>
                                        <TableCell>৫-২০</TableCell>
                                    </TableRow>
                                    <TableRow key="3">
                                        <TableCell>ডকুমেন্ট</TableCell>
                                        <TableCell>১,০০০-২০০০</TableCell>
                                        <TableCell>২৫-৩৫</TableCell>
                                    </TableRow>
                                    <TableRow key="4">
                                        <TableCell>পার্সেল</TableCell>
                                        <TableCell>১,০০০-৩০,০০০</TableCell>
                                        <TableCell>১৫-৩০৫</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <Table removeWrapper aria-label="Example static collection table">
                                <TableHeader>
                                    <TableColumn>অতিরিক্ত সেবা</TableColumn>
                                    <TableColumn>মূল্য (৳)</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow key="1">
                                        <TableCell>রেজিস্ট্রি</TableCell>
                                        <TableCell>৩</TableCell>
                                    </TableRow>
                                    <TableRow key="2">
                                        <TableCell>জিইপি</TableCell>
                                        <TableCell>৫</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>



                            <Divider />

                        </>
                    }



                </div>
            </div>
        </div>
    )
}
