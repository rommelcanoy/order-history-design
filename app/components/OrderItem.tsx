import React from 'react'
import Image from 'next/image';

type OrderItemData = {
  id: number;
  image: any;
  productName: string;
  accommodationName: string;
  location: {
    city: string;
    country: string;
  };
  guests: number;
  bathrooms: number;
  bedrooms: number;
  beds: number;
  smokingPolicy: string;
  amenities: string[];
  bookingDetails: {
    date: string;
    status: string;
  };
  discount: string;
  ratings: number[] | null;
  price: {
    currency: string;
    amount: number;
  };
};

type OrderItemProps = {
  data: OrderItemData;
};

const OrderItem: React.FC<OrderItemProps> = ({ data }) => {

  const handleBadgeColor = (status: string) => {
    if (status === 'Active') {
      return 'bg-green-100 text-green-700'
    } else if (status === 'Cancelled') {
      return 'bg-red-100 text-red-700'
    } else if (status === 'Active') {
      return 'bg-gray-100 text-gray-600'
    }
    else {
      return 'bg-gray-100 text-gray-600'
    }
  }


  return (
    <tr key={data.accommodationName}>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-6 flex gap-5">
        {/* <Image src=> */}
        <Image src={data.image} alt={data.accommodationName} className='rounded w-16 h-10 object-cover' />
        <div>
          <p className='text-black font-medium'>{data.productName}</p>
          <p className='text-gray-500 font-normal'>{data.accommodationName}</p>
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{data.bookingDetails.date}</td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {
          <>
            <span className={`inline-flex items-center rounded-full font-medium px-2 py-1 text-xs ${handleBadgeColor(data.bookingDetails.status)}`}>
              {data.bookingDetails.status}
            </span>
          </>
        }
      </td>
      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        <a href="#" className="text-[#04CEDB] hover:text-[#329aa1]">
          View<span className="sr-only">, {data.accommodationName}</span>
        </a>
      </td>
    </tr>
  )
}

export default OrderItem