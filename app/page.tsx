import { orders } from '@/public/data'
import OrderHistory from './components/OrderHistory'

export default function Home() {
  return (
    <div className='flex items-center justify-center min-h-screen py-10'>
      <OrderHistory />
    </div>
  )
}
