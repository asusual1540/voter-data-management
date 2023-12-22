import { Card, CardBody, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Divider, CheckboxGroup, Checkbox, Textarea } from '@nextui-org/react'
import React from 'react'
import BookingNavigation from './BookingNavigation'

export default function FinalComponent(props: { steps: any, step: number, setActiveStep: any }) {
    const [selectedService, setSelectedService] = React.useState(["নিজে পাঠান"]);


    const handleServiceSelect = (selection: any) => {
        // console.log("selection", selection)
        setSelectedService([selection[selection.length - 1]])
    }

    return (
        <div>
            <div className='weight-details'>

                <form>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="mb-3 block text-md font-bold text-dark dark:text-white"
                        >
                            চূড়ান্তকরণ
                        </label>

                        <Table hideHeader removeWrapper aria-label="Example static collection table">
                            <TableHeader>
                                <TableColumn>ওজন</TableColumn>
                                <TableColumn>৩০,০০০ গ্রাম</TableColumn>
                            </TableHeader>
                            <TableBody>
                                <TableRow key="1" className='border-b-1 border-dgenLight'>
                                    <TableCell>প্রেরক</TableCell>
                                    <TableCell>আজিজুর রহমান, ১/২, পূর্বপাড়া, ঘোড়াশাল, নরসিংদী</TableCell>
                                </TableRow>
                                <TableRow key="2" className='border-b-1 border-dgenLight'>
                                    <TableCell>প্রাপক</TableCell>
                                    <TableCell>মাসুদ হাসান, ১২৯/২, কালা পানি, টঙ্গি, গাজীপুর</TableCell>
                                </TableRow>
                                <TableRow key="3" className='border-b-1 border-dgenLight'>
                                    <TableCell>ওজন</TableCell>
                                    <TableCell>৩০,০০০ গ্রাম</TableCell>
                                </TableRow>
                                <TableRow key="4" className='border-b-1 border-dgenLight'>
                                    <TableCell>সেবা</TableCell>
                                    <TableCell>পার্সেল (৳ ৩০৫)</TableCell>
                                </TableRow>
                                <TableRow key="5" className='border-b-1 border-dgenLight'>
                                    <TableCell>অতিরিক্ত সেবা</TableCell>
                                    <TableCell>রেজিস্ট্রি (৳ ৩)</TableCell>
                                </TableRow>
                                <TableRow key="6" className=''>
                                    <TableCell>প্রদেয় বিল</TableCell>
                                    <TableCell>৳ ৩০৮</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>




                        <Divider />


                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="mb-3 block text-sm text-dark dark:text-white"
                        >
                            পাঠানোর ধরণ
                        </label>
                        <div className="flex flex-col gap-3">
                            <CheckboxGroup
                                label=""
                                orientation={"horizontal"}
                                color="primary"
                                value={selectedService}
                                onValueChange={(value: any) => handleServiceSelect(value)}
                            >
                                <Checkbox value="নিজে পাঠান">নিজে পাঠান</Checkbox>
                                <Checkbox value="পিক আপ">পিক আপ</Checkbox>

                            </CheckboxGroup>
                        </div>
                    </div>

                    <div className="pb-6">
                        <label
                            htmlFor="address"
                            className="mb-3 block text-sm text-dark dark:text-white"
                        >
                            পিক আপের ঠিকানা (সর্বোচ্চ ২০০ অক্ষর)
                        </label>

                        <Textarea
                            label=""
                            labelPlacement='outside'
                            variant="bordered"
                            placeholder="পিক আপের ঠিকানাটি লিখুন"
                            disableAnimation
                            maxLength={200}
                            classNames={{
                                input: "resize-y min-h-[40px]",
                            }}
                        />
                    </div>


                    <BookingNavigation steps={props.steps} step={props.step} setActiveStep={props.setActiveStep} />
                </form>



            </div>
        </div>
    )
}
