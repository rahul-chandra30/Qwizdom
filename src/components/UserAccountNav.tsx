'use client'

import { User } from 'next-auth';
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { LogOut } from 'lucide-react';
import UserAvatar from './UserAvatar';

type Props = {
  user: Pick<User, "name" | "email" | "image">;
}

const UserAccountNav = ({ user }: Props) => {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {/* user avatar */}
        <UserAvatar user={user} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='bg-white' align='end'>
        <div className="flex item-center justify-start gap-2 p-2 ">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-medium">{user.name}</p>}
            {user.email && (<p className="w-[200px] truncate text-sm text-zinc-700">{user.email}</p>)}
          </div>
        </div>

        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/">Hello! {user?.name}</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={(e) => {
          e.preventDefault();
          signOut().catch(console.error);
        }}
          className='text-red-700 cursor-pointer'
        >
          Sign Out
          <LogOut className='w-4 h-4 pl-1 cursor-pointer' />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAccountNav