import { Button, Input } from '@nextui-org/react'
import React from 'react'
import Image from "next/image";
import { SearchIcon } from './icons/SearchIcon'

export default function Search() {
    return (
        <div className=''>
            <Image
                src="/static/images/banner-ec.png"
                alt="logo"
                width={800}
                height={300}
                className="rounded-lg"
            />
            <div className='flex items-center'>
                <Input
                    size='md'
                    label="Search VoterID/Name"
                    // labelPlacement='outside'
                    isClearable
                    radius="lg"
                    className='my-2 mr-2'
                    // variant='bordered'
                    classNames={{
                        base: "rounded-full",
                        label: "text-black/50 dark:text-white/90",
                        input: [
                            // "bg-transparent",
                            "text-black/90 dark:text-white/90",
                            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                        ],
                        // innerWrapper: "bg-transparent",
                        inputWrapper: [
                            "shadow-xl",
                            "bg-default-200/50",
                            "dark:bg-default/60",
                            "backdrop-blur-xl",
                            "backdrop-saturate-200",
                            "hover:bg-default-200/70",
                            "dark:hover:bg-default/70",
                            "group-data-[focused=true]:bg-default-200/50",
                            "dark:group-data-[focused=true]:bg-default/60",
                        ],
                    }}
                    placeholder="Type to search..."
                    startContent={
                        <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0 cursor-pointer" />
                    }
                />
                <Button isIconOnly size="lg" color="default" aria-label="Like" className='shadow-xl bg-default-200/50'>
                    <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>


                </Button>
            </div>
        </div>
    )
}
