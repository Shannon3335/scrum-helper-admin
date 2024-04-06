import { Dashboard } from '@/components/Dashboard'

export default async function Home() {
  const res = await fetch(`http://localhost:3000/getAll`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    //next.js middleware that only revalidates data every 5 seconds
    next: {
      revalidate: 5,
    },
  })

  const body = await res.json()
  console.log('response in page.js:' + JSON.stringify(body))
  return <Dashboard />
}
