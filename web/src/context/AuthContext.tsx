'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie'
import { API_URL } from '@lib/constants';

const COOKIE_KEYS = {
  TOKEN: "token",
  NAME: "userName",
  REFRESH: "refreshToken",
  LOGGED_IN: "loggedIn"
} as const

interface User {
    name: string
}

interface AuthContextType {
    user: User | null
    isLoading: boolean
    login: (name: string) => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode} ) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedName = Cookies.get(COOKIE_KEYS.NAME)
    return (typeof window !== "undefined" && savedName) ? { name: savedName } : null
  })

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authHint = Cookies.get(COOKIE_KEYS.LOGGED_IN)

    if (!authHint) {
      setIsLoading(false)
      return
    }
    
    const verifyUser = async () => {
      try {
        const response = await fetch(`${API_URL}/users/me`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          }
        })

        if (response.ok) {
          const data = await response.json()
          setUser({name: data.name})
          Cookies.set(COOKIE_KEYS.NAME, data.name, { expires: 7, path: '/' });
        } else {
          logout()
        }
      } catch (error) {
        console.error("Auth verification failed", error)
      } finally {
        setIsLoading(false)
      }
    }

    verifyUser()
  }, [])

  const login = (name: string) => {
    Cookies.set(COOKIE_KEYS.NAME, name, { expires: 7, path: '/' });
    Cookies.set(COOKIE_KEYS.LOGGED_IN, 'true', { expires: 7, path: '/' });

    setUser({name})
  }

  const logout = () => {
    Cookies.remove(COOKIE_KEYS.TOKEN, { path: '/' });
    Cookies.remove(COOKIE_KEYS.REFRESH, { path: '/' });
    Cookies.remove(COOKIE_KEYS.NAME, { path: '/' });
    Cookies.remove(COOKIE_KEYS.LOGGED_IN, { path: '/' });

    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider")
  }
  return context; 
}