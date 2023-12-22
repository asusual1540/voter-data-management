import { Card, CardBody, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Divider, CardHeader, Button, Select, SelectItem, Textarea, Input } from '@nextui-org/react'
import React from 'react'
import BookingNavigation from './BookingNavigation'
import { SelectorIcon } from '../icons/selectorIcon';

const animals = [
    { label: "Cat", value: "cat", description: "The second most popular pet in the world" },
    { label: "Dog", value: "dog", description: "The most popular pet in the world" },
    { label: "Elephant", value: "elephant", description: "The largest land animal" },
    { label: "Lion", value: "lion", description: "The king of the jungle" },
    { label: "Tiger", value: "tiger", description: "The largest cat species" },
    { label: "Giraffe", value: "giraffe", description: "The tallest land animal" },
    {
        label: "Dolphin",
        value: "dolphin",
        description: "A widely distributed and diverse group of aquatic mammals",
    },
    { label: "Penguin", value: "penguin", description: "A group of aquatic flightless birds" },
    { label: "Zebra", value: "zebra", description: "A several species of African equids" },
    {
        label: "Shark",
        value: "shark",
        description: "A group of elasmobranch fish characterized by a cartilaginous skeleton",
    },
    {
        label: "Whale",
        value: "whale",
        description: "Diverse group of fully aquatic placental marine mammals",
    },
    { label: "Otter", value: "otter", description: "A carnivorous mammal in the subfamily Lutrinae" },
    { label: "Crocodile", value: "crocodile", description: "A large semiaquatic reptile" },
];


export default function RecipientComponent(props: { steps: any, step: number, setActiveStep: any }) {
    const [infoShown, setInfoShown] = React.useState(true);
    return (
        <div className='min-w-[25vw] max-w-[90vw]'>
            <div className='weight-details'>

                <form>
                    <div className="pb-6">

                        <Select
                            label="প্রাপকের জেলা"
                            placeholder="প্রাপকের জেলা বাছাই করুণ"
                            labelPlacement="outside"
                        >
                            {animals.map((animal) => (
                                <SelectItem key={animal.value} value={animal.value}>
                                    {animal.label}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>
                    <div className="pb-6">
                        <Select
                            label="প্রাপকের উপজেলা"
                            placeholder="প্রাপকের উপজেলা বাছাই করুণ"
                            labelPlacement="outside"
                        >
                            {animals.map((animal) => (
                                <SelectItem key={animal.value} value={animal.value}>
                                    {animal.label}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>
                    <div className="pb-6">
                        <label
                            htmlFor="address"
                            className="mb-3 block text-sm text-dark dark:text-white"
                        >
                            প্রাপকের ঠিকানা (সর্বোচ্চ ২০০ অক্ষর)
                        </label>

                        <Textarea
                            label=""
                            labelPlacement='outside'
                            variant="bordered"
                            placeholder="প্রাপকের ঠিকানাটি লিখুন"
                            disableAnimation
                            maxLength={200}
                            classNames={{
                                input: "resize-y min-h-[40px]",
                            }}
                        />
                    </div>
                    <div className="pb-6">
                        <label
                            htmlFor="email"
                            className="mb-3 block text-sm text-dark dark:text-white"
                        >
                            প্রাপকের মোবাইল নম্বর (যদি থাকে)
                        </label>
                        <Input
                            variant="bordered"
                            type="number"
                            label=""
                            labelPlacement="outside"
                            placeholder="প্রাপকের মোবাইল নম্বরটি লিখুন"
                        />
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
                                <p className='font-bold'>পূর্বে ব্যবহারকৃত ঠিকানাসমূহ</p>
                                <div className="cursor-pointer" onClick={() => setInfoShown(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>


                                </div>
                            </div>


                            <Divider />


                            <Table removeWrapper aria-label="Example static collection table">
                                <TableHeader>
                                    <TableColumn>প্রাপক</TableColumn>
                                    <TableColumn>ঠিকানা</TableColumn>
                                    <TableColumn>অ্যাকশন</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow key="1">
                                        <TableCell>আজিজুর রহমান</TableCell>
                                        <TableCell>১/২, পূর্বপাড়া, ঘোড়াশাল, নরসিংদী</TableCell>
                                        <TableCell>
                                            <Button size="sm">
                                                ব্যবহার করুন
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow key="2">
                                        <TableCell>মাসুদ হাসান</TableCell>
                                        <TableCell>১২৯/২, কালা পানি, টঙ্গি, গাজীপুর</TableCell>
                                        <TableCell>
                                            <Button size="sm">
                                                ব্যবহার করুন
                                            </Button>
                                        </TableCell>
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
