/* eslint-disable react/jsx-key */
import Link from 'next/link'
import { Activity, ArrowUpRight, CircleUser, CreditCard, DollarSign, Menu, Package2, Search, Users } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export function Dashboard(props) {
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <header className='sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6'>
        <nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
          <Link href='#' className='flex items-center gap-2 text-lg font-semibold md:text-base'>
            <Package2 className='h-6 w-6' />
            <span className='sr-only'>Acme Inc</span>
          </Link>
          <Link href='#' className='text-foreground transition-colors hover:text-foreground'>
            Dashboard
          </Link>
          {/* <Link href='#' className='text-muted-foreground transition-colors hover:text-foreground'>
            Orders
          </Link>
          <Link href='#' className='text-muted-foreground transition-colors hover:text-foreground'>
            Products
          </Link>
          <Link href='#' className='text-muted-foreground transition-colors hover:text-foreground'>
            Customers
          </Link>
          <Link href='#' className='text-muted-foreground transition-colors hover:text-foreground'>
            Analytics
          </Link> */}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='outline' size='icon' className='shrink-0 md:hidden'>
              <Menu className='h-5 w-5' />
              <span className='sr-only'>Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='left'>
            <nav className='grid gap-6 text-lg font-medium'>
              <Link href='#' className='flex items-center gap-2 text-lg font-semibold'>
                <Package2 className='h-6 w-6' />
                <span className='sr-only'>Acme Inc</span>
              </Link>
              <Link href='#' className='hover:text-foreground'>
                Dashboard
              </Link>
              <Link href='#' className='text-muted-foreground hover:text-foreground'>
                Orders
              </Link>
              <Link href='#' className='text-muted-foreground hover:text-foreground'>
                Products
              </Link>
              <Link href='#' className='text-muted-foreground hover:text-foreground'>
                Customers
              </Link>
              <Link href='#' className='text-muted-foreground hover:text-foreground'>
                Analytics
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
        <div className='grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3'>
          <Card className='xl:col-span-4'>
            <CardHeader className='flex flex-row items-center'>
              <div className='grid gap-2'>
                <CardTitle>Teams</CardTitle>
                <CardDescription>Overview of teams and number of updates.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Team</TableHead>
                    <TableHead className='text-left'>Transcript</TableHead>
                    <TableHead className='text-left'>Blockers</TableHead>
                    <TableHead className='text-left'>Solutions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {props.transcripts.map((transcript, index) => (
                    <TableRow>
                      <TableCell>
                        <div className='font-medium'>{transcript.teamId}</div>
                      </TableCell>
                      <TableCell className='text-left'>{transcript.summary}</TableCell>
                      <TableCell className='text-left'>{transcript.blockers}</TableCell>
                      <TableCell className='text-left'>{transcript.solutions}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
