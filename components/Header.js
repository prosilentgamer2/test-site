import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const links = [
    {
        name: "Discord",
        jsx: (
            <a
            key="discord-Link"
            href='https://discord.gg/void-bot'
            target='_blank'
            className='border border-nav-button py-2 px-5 rounded-md font-semibold mr-4'
            >
                Discord Invite
            </a>
        )
    }
]

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='bg-nav md:bg-transparent md:mt-6 relative text-white py-2'>
            <div className='container mx-auto px-4 flex items-center justify-between'>
                <Link href='/' className='w-8 h-8 md:w-14 md:h-14'>
                    <Image
                    className='w-full h-full'
                    src="/void.png"
                    width={100}
                    height={100}
                    alt="Void Logo"
                    />
                </Link>

                <nav className='hidden md:flex'>
                    {links.map(({ name, url, jsx}) => {
                        if (url) {
                            return (
                                <Link key={namee} href={url}>
                                    <button className='bg-nav border border-nav-butoon py-2 px-5 rounded-md font-semibold'>
                                        {name}
                                    </button>
                                </Link>
                            )
                        }
                        return jsx;
                    })}
                </nav>

                <button
                className='flex flex-col md:hidden gap-1 p-2'
                onClick={() => setIsOpen(!isOpen)}
                >
                    <div className='w-6 h-1 bg-white rounded'></div>
                    <div className='w-6 h-1 bg-white rounded'></div>
                    <div className='w-6 h-1 bg-white rounded'></div>
                </button>

                <nav
                className={`bg-nav w-full p-4 absolute top-12 left-0 ${isOpen ? 'flex md:hidden' : 'hidden'}`}
                >
                    <div className='flex flex-col gap-1 w-full'>
                        {links.map(({ name, url, jsx }) => {
                            if (url) {
                                return (
                                    <Link key={name} href={url}>
                                        <button className='w-full text-lg font-semibold p-2 block'>
                                            {name}
                                        </button>
                                    </Link>
                                )
                            }

                            return jsx;
                        })}
                    </div>
                </nav>
                </div>
        </header>
    )
}

export default Header;