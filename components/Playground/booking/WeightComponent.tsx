import { Card, CardBody, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Divider, CardHeader, Input } from '@nextui-org/react'
import React from 'react'
import BookingNavigation from './BookingNavigation'

export default function WeightComponent(props: { steps: any, step: number, setActiveStep: any }) {
    const [infoShown, setInfoShown] = React.useState(true);
    return (

        <div className='weight-details'>

            <form>
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="mb-3 block text-sm text-dark dark:text-white"
                    >
                        ওজন (গ্রাম)
                    </label>
                    <Input
                        type="number"
                        name="email"
                        placeholder="আপনার পোস্টের ওজনটি লিখুন"
                        variant='bordered'
                    />
                </div>


                <BookingNavigation steps={props.steps} step={props.step} setActiveStep={props.setActiveStep} />
            </form>

            <div className=''>
                <div className='w-full py-4 flex cursor-pointer' onClick={() => setInfoShown(!infoShown)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                    <p className='pl-2 inline'>তথ্য</p>
                </div>
                {infoShown &&
                    <>



                        <div className='flex justify-between py-2'>
                            <p className='font-bold'>ওজন সংক্রান্ত তথ্য</p>
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




                        <Divider />

                    </>
                }



            </div>
        </div>
    )
}
