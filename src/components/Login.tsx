import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className="Login px-20 pt-20 pb-5 text-center flex flex-col gap-10">
                  
    <div className="align-middle  flex flex-col gap-2">
      <Link className="flex m-auto" href="/">
        <Image
          src="/app-icon.svg"
          width={55}
          height={100}
          alt=""
        />
      </Link>
      <h2 className="text-2xl color-primary-900 font-bold">
        Vhandar Grocery app
      </h2>
      <p className="text-m  color-neutral-7">Log in or Sign up</p>
    </div>

    <form
      action="#"
      method="POST"
      className="flex flex-col gap-4"
    >
      <div className='flex flex-col gap-3'>
      <input
        type="tel"
        id="tel"
        className="v-input"
        placeholder="Enter Mobile Number"
        required
      />
      <input
        type="password"
        id="password"
        className="v-input"
        placeholder="Enter Password"
        required
      />
      <Link
        href=""
        className="text-right text-sm color-secondary-400 hover-secondary-500 font-semibold hover:underline"
      >
        Forget Password?
      </Link>
      </div>

      <Link
        href="/account"
        className="btn primary-btn w-full"
      >
        Continue
      </Link>
      <p className="color-neutral-8 text-sm ">
        Don't have an Account?&nbsp;
        <Link
          href=""
          className="text-right color-secondary-400 hover-secondary-500 font-semibold hover:underline"
        >
          Sign Up
        </Link>
      </p>
    </form>

    <div className="text-xs color-neutral-7">
      <span>By continuing, you agree to our&nbsp;</span>
      <Link
        target="_blank"
        href="/terms-of-service"
        className="underline underline-offset-1 hover-secondary-600"
      >
        Terms of service
      </Link>
      <span>&nbsp;&amp;&nbsp;</span>
      <Link
        target="_blank"
        href="/privacy-policy"
        className="underline underline-offset-1 hover-secondary-600"
      >
        Privacy policy
      </Link>
    </div>

  </div>
  )
}

export default Login