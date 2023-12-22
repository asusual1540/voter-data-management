import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem, Textarea, useDisclosure } from '@nextui-org/react'
import React from 'react'

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


export default function BookingNavigation(props: { steps: any, step: number, setActiveStep: any }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [senderMobile, setSenderMobile] = React.useState("01908657844");


    return (
        <div className="mb-6 flex gap-3">
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

            {props.step == props.steps.length - 1 ?
                <Button
                    color='primary'
                    className="w-full"
                    onClick={onOpen}
                >
                    <p>পেমেন্ট</p>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>

                    </span>
                </Button>
                :
                <Button
                    color='primary'
                    onClick={() => props.setActiveStep(props.step + 1)}
                    className="w-full"
                >
                    <p>পরবর্তী</p>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>

                    </span>
                </Button>
            }
            <>

                <Modal
                    backdrop="blur"
                    isOpen={isOpen}
                    onClose={onClose}
                    scrollBehavior={"inside"}
                    classNames={{
                        body: "py-6",
                        base: "border-dgenLight",
                        header: "border-b-1 border-dgenLight",
                        footer: "border-t-1 border-dgenLight",
                        closeButton: "hover:bg-white/5 active:bg-white/10",
                    }}
                >
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">প্রেরকের ঠিকানা</ModalHeader>
                                <ModalBody>
                                    <form>
                                        <div className="pb-6">

                                            <Select
                                                label="প্রেরকের জেলা"
                                                placeholder="প্রেরকের জেলা বাছাই করুণ"
                                                labelPlacement="outside"
                                                className="max-w-md"
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
                                                label="প্রেরকের উপজেলা"
                                                placeholder="প্রেরকের উপজেলা বাছাই করুণ"
                                                labelPlacement="outside"
                                                className="max-w-md"
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
                                                প্রেরকের ঠিকানা (সর্বোচ্চ ২০০ অক্ষর)
                                            </label>

                                            <Textarea
                                                label=""
                                                labelPlacement='outside'
                                                variant="bordered"
                                                placeholder="প্রেরকের ঠিকানাটি লিখুন"
                                                disableAnimation
                                                maxLength={200}
                                                classNames={{
                                                    base: "max-w-sm",
                                                    input: "resize-y min-h-[40px]",
                                                }}
                                            />
                                        </div>
                                        <div className="pb-6">
                                            <label
                                                htmlFor="email"
                                                className="mb-3 block text-sm text-dark dark:text-white"
                                            >
                                                প্রেরকের মোবাইল নম্বর
                                            </label>
                                            <Input
                                                variant="bordered"
                                                type="number"
                                                isDisabled
                                                label=""
                                                labelPlacement="outside"
                                                value={senderMobile}
                                                onValueChange={setSenderMobile}

                                            />
                                        </div>



                                    </form>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        বাতিল করুণ
                                    </Button>
                                    <Button color="primary" onPress={onClose}>
                                        ঠিক আছে
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </>

        </div>
    )
}
