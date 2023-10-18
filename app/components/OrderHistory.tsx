import React from 'react'
import OrderItem from './OrderItem'
import { orders } from '@/public/data'
import Image from 'next/image'
import history1 from '@/public/assets/history1.png'
import holidayRating from '@/public/assets/holidayrating.svg'
import OrderItemActive from './OrderItemActive'

const OrderHistory = () => {

  const activeOrder = orders.find(order => order.bookingDetails.status === "Active");

  return (
    <div className='max-w-5xl w-full border rounded-3xl p-10'>
      <h1 className='font-medium text-2xl'>Order History</h1>

      <hr className='my-8' />

      <OrderItemActive />

      <div className='rounded-2xl overflow-hidden border text-gray-600'>
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-xs uppercase text-gray-600 sm:pl-6 font-medium">
                Order Details
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-xs uppercase text-gray-600 font-medium">
                Date
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-xs uppercase text-gray-600 font-medium">
                Status
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 xs:pr-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {
              orders.map((order) => (
                <OrderItem key={order.id} data={order} />
              ))
            }
          </tbody>
        </table>
      </div>

      <div className='mt-9 flex justify-center'>
        <button
          type="button"
          className="rounded-full bg-white px-3.5 py-2 text-sm font-medium text-gray-900 hover:shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          View more orders
        </button>
      </div>

    </div>
  )
}

export default OrderHistory