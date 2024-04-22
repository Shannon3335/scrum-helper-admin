import { Dashboard } from '@/components/Dashboard'
import { cookies } from 'next/headers'

export default async function Home() {
  const res = await fetch(`http://18.235.151.54:3010/getAll`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    //next.js middleware that only revalidates data every 5 seconds
    next: {
      revalidate: 5,
    },
  })

  const cookieStore = cookies()
  const admin_access = cookieStore.getAll()
  const body = await res.json()
  console.log('response in page.js:' + JSON.stringify(body))
  console.log('Admin access:' + JSON.stringify(admin_access))
  //TODO: destruct=>  variables for maps
  return <Dashboard transcripts={body} />
}
