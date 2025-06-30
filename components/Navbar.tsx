import Link from 'next/link'
import Image from 'next/image'
import { auth, signOut, signIn } from '@/auth'
import { BadgePlus, Github, LogOut } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const Navbar = async() => {

    const session = await auth()

  return (
    <header className="navbar px-5 font-work-sans text-white">
        <nav className="flex items-center justify-between">
            <Link href="/">
                <Image src="/ameri_logo.png" alt="Logo" width={144} height={30} className='size-20'/>
            </Link>
        </nav>
        <div className="flex items-center gap-5">
            {
                session && session?.user ? (
                    <>
                        <Link href={"/startup/create"}>
                            <span className='max-sm:hidden navbar-btn'>
                                Create
                            </span>
                            <BadgePlus className='size-6 sm:hidden text-[#FFB429]' />
                        </Link>
                        <form action={
                            async () => {
                                'use server'
                                await signOut({redirectTo: '/'})
                            }
                        } className='flex items-center'>
                            <button type='submit'>
                                <span className="max-sm:hidden navbar-btn">
                                    Logout
                                </span>
                                <LogOut className='size-6 sm:hidden text-[#FFB429]' />
                            </button>
                        </form>
                        <Link href={`/user/${session?.id}`}>
                            <Avatar className='size-10'>
                                <AvatarImage
                                    src={session?.user?.image || ""}
                                    alt={session?.user?.name || ""}
                                />
                                <AvatarFallback>
                                    AV
                                </AvatarFallback>
                            </Avatar>
                        </Link>
                    </>
                ) : (
                    <form action={
                        async () => {
                            'use server'
                            await signIn('github')
                        }
                    }>
                        <button type='submit' className='navbar-btn'>
                            Sign In
                            <Github/>
                        </button>
                    </form>
                )
            }
        </div>
    </header>
  )
}

export default Navbar