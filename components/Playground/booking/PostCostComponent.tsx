import { Card, CardBody, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Divider, CardHeader } from '@nextui-org/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import * as PostActions from '@/store/reducers/post/actionTypes';
import * as SettingActions from '@/store/reducers/setting/actionTypes';



import { ApplicationState } from "@/store/reducers/rootReducer";

import BookingNavigation from './BookingNavigation'
import { convertToBanglaNumber } from '@/lib/utils/EnglishNumberToBengali';

export default function PostCostComponent(props: { steps: any, step: number, setActiveStep: any }) {
    const [infoShown, setInfoShown] = React.useState(true);
    let post_state = useSelector((state: ApplicationState) => state.post_state)
    return (
        <div>
            <div className='weight-details'>

                <form>
                    <div className="mb-6">
                        <label
                            htmlFor="postcost"
                            className="mb-3 block font-bold text-dark dark:text-white"
                        >
                            ডাক মাসুল
                        </label>
                        <Table removeWrapper aria-label="Example static collection table">
                            <TableHeader>
                                <TableColumn>সেবার ধরণ</TableColumn>
                                <TableColumn>ওজন</TableColumn>
                                <TableColumn>মূল্য</TableColumn>
                            </TableHeader>
                            <TableBody>
                                <TableRow key="1">
                                    <TableCell>{post_state.services[post_state.activeServiceIndex].label}</TableCell>
                                    <TableCell>{convertToBanglaNumber(`${post_state.weight}`)} গ্রাম</TableCell>
                                    <TableCell>৳ {convertToBanglaNumber(`${post_state.serviceCost}`)}</TableCell>
                                </TableRow>
                                <TableRow key="2">
                                    <TableCell>{post_state.additionalServices[post_state.additionalServiceIndex].label}</TableCell>
                                    <TableCell>{""}</TableCell>
                                    <TableCell className='flex'>৳ {convertToBanglaNumber(`${post_state.additionalServices[post_state.additionalServiceIndex].cost}`)}</TableCell>
                                </TableRow>
                                <TableRow key="৩" className='border-t-2'>
                                    <TableCell>মোট</TableCell>
                                    <TableCell>{""}</TableCell>
                                    <TableCell>৳ {convertToBanglaNumber(`${post_state.serviceCost + post_state.additionalServices[post_state.additionalServiceIndex].cost}`)}</TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </div>


                    <BookingNavigation steps={props.steps} step={props.step} setActiveStep={props.setActiveStep} />
                </form>


                <div className=''>
                    <div className='w-full flex py-4 cursor-pointer' onClick={() => setInfoShown(!infoShown)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                        <p className='pl-2 inline'>তথ্য</p>
                    </div>
                    {infoShown &&
                        <>


                            <div className='flex justify-between py-2'>
                                <p className='font-bold'>ডাক মাসুল সংক্রান্ত তথ্য</p>
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
