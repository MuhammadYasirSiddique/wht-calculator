'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

 
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-6xl font-extrabold text-red-500">404</div>
        <div className="text-2xl font-semibold mt-4">Page Not Found</div>
        <p className="text-gray-600 mt-2">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link href="/">
        
          <Button>Go back to the home page</Button>
        
      </Link>
      </div>
  )
}