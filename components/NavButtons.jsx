'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const NavButtons = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const { data: session, status } = useSession();
  if (status === 'authenticated') {
    return (
      <>
        <div className="flex gap-3 md:gap-5 max-sm:hidden">
          <Link href="/create-prompt" className="black_btn">
            Create Post
          </Link>

          <button type="button" onClick={signOut} className="outline_btn">
            Sign Out
          </button>

          <Link href="/profile">
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
            />
          </Link>
        </div>
        <div className="flex sm:hidden">
          <Image
            src={session?.user.image}
            width={37}
            height={37}
            className="rounded-full hover:cursor-pointer"
            alt="profile"
            onClick={() => setToggleDropdown((prev) => !prev)}
          />

          {toggleDropdown && (
            <div className="dropdown">
              <Link
                href="/profile"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                My Profile
              </Link>
              <Link
                href="/create-prompt"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                Create Prompt
              </Link>
              <button
                type="button"
                onClick={() => {
                  setToggleDropdown(false);
                  signOut();
                }}
                className="mt-5 w-full black_btn"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </>
    );
  } else {
    return (
      <button
        type="button"
        onClick={() => signIn('google')}
        className="black_btn"
      >
        Sign in
      </button>
    );
  }
};

export default NavButtons;
