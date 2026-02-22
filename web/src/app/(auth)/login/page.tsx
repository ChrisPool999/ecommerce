'use client'

import { Logo } from "@/components/Navigation/Logo"
import { Button } from "@components/ui/Button"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import Cookies from 'js-cookie'
import { ActionLink } from "@/components/Navigation/ActionLink"
import { API_URL } from "@lib/constants"

type AuthStep = 'email' | 'login' | 'signup'

type FormData = {
  email: string,
  password: string,
  name: string,
  confirmPassword: string
}

type FormErrors = {
  email: boolean
  password: boolean
  name: boolean
  confirmPassword: boolean
}

const COOKIE_KEYS = {
  TOKEN: "token",
  NAME: "userName",
  REFRESH: "refreshToken",
  LOGGED_IN: "loggedIn"
} as const

export default function Page() {
  const router = useRouter()

  const [step, setStep] = useState<AuthStep>('email')

  const [form, setForm] = useState<FormData>({
    email: "",
    password: "",
    name: "",
    confirmPassword: ""
  })  
  
  const [errors, setErrors] = useState<FormErrors>({
    email: false, 
    password: false, 
    name: false,
    confirmPassword: false
  })

  function resetErrors() {
    setErrors({email: false, password: false, name: false, confirmPassword: false})
  }

  function updateField(
    field: keyof FormData,
    value: string
  ) {
    setForm(prev => ({
      ...prev,
      [field]: value,
    }))
  }

  function updateErrors(
    field: keyof FormErrors,
    value: boolean
  ) {
    setErrors(prev => ({
      ...prev,
      [field]: value
    }))
  }

  function isValidEmail() {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  }

  async function hasAccount(email: string) {
    const res = await fetch(`${API_URL}/auth/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email})
    })
    const data = await res.json()
    return !!data.exists
  }

  async function emailHandler() {
    if (!isValidEmail()) {
      updateErrors("email", true)
      return
    }
    resetErrors()
    await hasAccount(form.email) ? setStep("login") : setStep("signup")
  }

  function updateEmailOnChange(e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) {
    form.email = e.target.value.replace(/\s/g, "")
    updateField("email", form.email)
  }

  function changeEmail() {
    setStep("email")
    resetErrors()
  }

  async function handleLogin(name: string) {
    const baseOptions = {
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === 'production' ? "none" as const : "lax" as const,
      expires: 7,    // 1 week
      path: "/",
    }

    Cookies.set(COOKIE_KEYS.NAME, name, baseOptions)
    Cookies.set(COOKIE_KEYS.LOGGED_IN, 'true', baseOptions)    
  }

  async function login() {
    if (!form.password) {
      return
    }
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "email": form.email,
        "password": form.password
      })
    })

    if (res.ok) {
      const data = await res.json()
      handleLogin(data.name)
      router.push("/")
    } else if (res.status === 401) {
      console.log(res)
      updateErrors("password", true)
    } else {
      updateErrors("password", true)
    }
  }

  function verifyAccountSignUp() {
    const newErrors = {
      email: !isValidEmail(),
      name: !form.name,
      password: form.password.length < 6,
      confirmPassword: form.confirmPassword != form.password 
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some(v => v)
  }

  async function createAccount() {
    if (!verifyAccountSignUp()) {
      return
    }

    const res = await fetch(`${API_URL}/auth/signup`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "email": form.email,
        "password": form.password,
        "firstName": form.name
      })
    })

    if (!res.ok) {
      const error = await res.text()
      console.log("Signup failed:", error)
      return 
    } else {    
      const data = await res.json()
      handleLogin(data.name) 
      router.push("/")
    }
  }

  return (
    <main className="min-h-screen flex flex-col justify-start pt-16">
      <div className="flex flex-col items-center justify-center mt-1">
        <section className="top-)section">
          <Logo/>
        </section>

        { step === 'email' && (
          <section className="flex flex-col mt-3 w-full max-w-md rounded space-y-5">
            <header className="text-xl font-bold mt-3 self-center">Sign in or create account</header>
            <div className="flex flex-col mt-3">
              <form onSubmit={e => e.preventDefault()} className="flex flex-col">
                <label className="font-bold text-sm mb-1" htmlFor="fname">Email address</label>
                <input type="text" value={form.email} onChange={updateEmailOnChange} className="w-full h-12 outline px-4 
                  border border-gray-300 rounded
                  outline-none
                  focus:border-blue-100
                  focus:ring-1
                  focus:ring-blue-500
                  focus:ring-offset-0"
                ></input>
                <Button
                  variant="danger"
                  size="md"
                  className="mt-5 mb-5 w-full rounded-2xl"
                  onClick={emailHandler}
                >
                  <p>Continue</p>
                </Button>
              </form>
            </div>
            <div className="h-5">
              {errors.email && (
                <p className="text-red-500">Invalid Email</p>
              )}
            </div>
          </section>
        )}

        { step === 'login' && (
          <section className="flex flex-col mt-3 w-full max-w-md rounded space-y-5">
            <header className="text-2xl font-bold mt-3 self-center">Sign into your account</header>
            <div className="flex space-x-2 mt-3">
              <p className="text-sm font-bold">{form.email}</p>
              <ActionLink onClick={() => changeEmail()} label="change"></ActionLink>
            </div>
            <div className="flex flex-col">
              <form onSubmit={e => e.preventDefault()} className="flex flex-col">
                <label htmlFor="fname">Password</label>
                <input type="password" onChange={e =>  updateField('password', e.target.value)} className="w-full h-12 outline px-4 
                  border border-gray-300 rounded
                  outline-none
                  focus:border-blue-100
                  focus:ring-1
                  focus:ring-blue-500
                  focus:ring-offset-0"
                ></input>
                <div className="h-8">
                  {errors.password && (
                    <p className="text-red-700 text-sm font-normal mt-1">Incorrect password</p>
                  )}
                </div>
                <Button
                  variant="danger"
                  size="md"
                  className="mt-5 mb-5 w-full rounded-2xl"
                  onClick={login}
                >
                  <p>Sign in</p>
                </Button>
              </form>
            </div>
          </section>
        )}

        { step === 'signup' && (
          <section className="flex flex-col mt-3 w-full max-w-sm rounded space-y-5">
            <header className="text-2xl font-bold mt-3 self-center">Create account</header>
            <div className="flex flex-col mt-3">
              <form onSubmit={e => e.preventDefault()} className="flex flex-col items-center justify-center">
                <div className="flex flex-col">
                  <label className="font-semibold text-sm" htmlFor="email">Email</label>
                  <input type="text" value={form.email} onChange={e => updateField('name', e.target.value)} className="w-80 h-8 outline px-2 text-sm 
                    border border-gray-300 rounded
                    outline-none
                    focus:border-blue-100
                    focus:ring-1
                    focus:ring-blue-500
                    focus:ring-offset-0"
                  ></input>
                  <div className="h-8">
                    {errors.email && (
                      <p className="text-red-700 text-xs font-normal mt-1">Invalid Email</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold text-sm" htmlFor="name">Your name</label>
                  <input type="text" onChange={e => updateField('name', e.target.value)} className="w-80 h-8 outline px-2 text-sm
                    border border-gray-300 rounded
                    outline-none
                    focus:border-blue-100
                    focus:ring-1
                    focus:ring-blue-500
                    focus:ring-offset-0"
                  ></input>
                  <div className="h-8">
                    {errors.name && (
                      <p className="text-red-700 text-xs font-normal mt-1">Please enter your name!</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold text-sm" htmlFor="password">Password (atleast 6 characters)</label>
                  <input type="password" onChange={e => updateField('password', e.target.value)} className="w-80 h-8 outline px-2 text-sm
                    border border-gray-300 rounded
                    outline-none
                    focus:border-blue-100
                    focus:ring-1
                    focus:ring-blue-500
                    focus:ring-offset-0"
                  ></input>
                  <div className="h-8">
                    {errors.password && (
                      <p className="text-red-700 text-xs font-normal mt-1">Password must be 6 characters!</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold text-sm" htmlFor="confirmpassword">Confirm password</label>
                  <input type="password" onChange={e => updateField('confirmPassword', e.target.value)} className="w-80 h-8 outline px-2 text-sm
                    border border-gray-300 rounded
                    outline-none
                    focus:border-blue-100
                    focus:ring-1
                    focus:ring-blue-500
                    focus:ring-offset-0"
                  ></input>
                  <div className="h-8">
                    {errors.confirmPassword && (
                      <p className="text-red-700 text-xs font-normal mt-1">Passwords must match!</p>
                    )}
                  </div>
                </div>
                <Button
                  variant="danger"
                  size="md"
                  className="mt-5 mb-5 w-80 rounded-2xl"
                  onClick={createAccount}
                >
                  <p>Sign up</p>
                </Button>
              </form>
            </div>
          </section>
        )}

      </div>
      <hr className="w-full my-6 border-t border-gray-300"></hr>
    </main>
  )
}