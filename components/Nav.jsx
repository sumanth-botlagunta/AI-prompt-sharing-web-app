'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Navbar = () => {
  const isUserLoggedin = false;
  const [providers, setProviders] = useState(null);
  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setProviders();
  }, []);
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="prompt Infinity"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Prompt Infinity</p>
      </Link>
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedin ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                alt="user_profile"
                width={35}
                height={35}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="black_btn"
                ></button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
