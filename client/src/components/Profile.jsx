
import { Avatar } from '@nextui-org/react'
import { Helmet } from 'react-helmet'

export default function Profile() {
    return (
        <div className="min-h-screen max-w-7xl mx-auto ">
            <Helmet>
                <title>Profile - Library Management</title>
            </Helmet>
            {/* Profile Info */}
            <div className=" mt-4  flex flex-col sm:flex-row justify-between items-center">
                <div className="flex  sm:flex-row gap-4  sm:p-4  items-center">
                    <Avatar
                        isBordered
                        color="primary"
                        radius="md"
                        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                        className=""
                    />
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter">
                        Welcome, {"profile.name"} 👋
                    </h1>
                </div>
                <div className="sm:p-4 ">
                    <h2 className="flex justify-center items-center gap-2 text-xl font-semibold">
                        <span>
                            <svg                                                                                                    
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-4"
                            >
                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>
                        </span>
                        <span>{"profile.email"}</span>
                    </h2>
                    <h3 className="flex gap-2 items-center  justify-center sm:justify-start">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-4"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>

                        <span>+91 {'profile.mobile'}</span>
                    </h3>
                </div>
            </div>
        </div>
    )
}
