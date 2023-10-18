import history1 from '@/public/assets/history1.png';
// import history2 from '@/public/assets/history2.png';
import history3 from '@/public/assets/history3.png';
import history4 from '@/public/assets/history4.png';
import history5 from '@/public/assets/history5.png';
import history6 from '@/public/assets/history6.png';
import history7 from '@/public/assets/history7.png';

const orders = [
  {
    "id": 123456,
    "image": history1,
    "productName": "The Lounge & Bar",
    "accommodationName": "Hotel Room in Tokyo, Japan",
    "location": {
      "city": "Tokyo",
      "country": "Japan"
    },
    "guests": 6,
    "bathrooms": 3,
    "bedrooms": 3,
    "beds": 3,
    "smokingPolicy": "No Smoking",
    "amenities": [
      "Wi-Fi"
    ],
    "bookingDetails": {
      "date": "2023-10-18",
      "status": "Active"
    },
    "discount": "10%",
    "ratings": [
      4,
      5,
      4,
      4
    ],
    "price": {
      "currency": "€",
      "amount": 2320.00
    }
  },
  {
    "id": 123457,
    "image": history3,
    "productName": "Luxury Suite in Paris, France",
    "accommodationName": "Le Grand Hotel",
    "location": {
      "city": "Paris",
      "country": "France"
    },
    "guests": 2,
    "bathrooms": 2,
    "bedrooms": 1,
    "beds": 1,
    "smokingPolicy": "No Smoking",
    "amenities": [
      "Wi-Fi",
      "Breakfast",
      "Gym"
    ],
    "bookingDetails": {
      "date": "2023-11-05",
      "status": "Completed"
    },
    "discount": "15%",
    "ratings": [
      5,
      4,
      5
    ],
    "price": {
      "currency": "€",
      "amount": 250.00
    }
  },
  {
    "id": 123458,
    "image": history4,
    "productName": "Beachfront Villa in Bali, Indonesia",
    "accommodationName": "Tropical Paradise Resort",
    "location": {
      "city": "Bali",
      "country": "Indonesia"
    },
    "guests": 8,
    "bathrooms": 4,
    "bedrooms": 4,
    "beds": 4,
    "smokingPolicy": "No Smoking",
    "amenities": [
      "Wi-Fi",
      "Private Pool",
      "Beach Access"
    ],
    "bookingDetails": {
      "date": "2023-12-20",
      "status": "Completed"
    },
    "discount": "20%",
    "ratings": [
      4,
      4,
      4,
      5
    ],
    "price": {
      "currency": "€",
      "amount": 500.00
    }
  },
  {
    "id": 123459,
    "image": history5,
    "productName": "Mountain Chalet in Aspen, USA",
    "accommodationName": "Snowy Peaks Lodge",
    "location": {
      "city": "Aspen",
      "country": "USA"
    },
    "guests": 6,
    "bathrooms": 3,
    "bedrooms": 3,
    "beds": 3,
    "smokingPolicy": "No Smoking",
    "amenities": [
      "Wi-Fi",
      "Fireplace",
      "Ski Access"
    ],
    "bookingDetails": {
      "date": "2023-11-28",
      "status": "Completed"
    },
    "discount": "12%",
    "ratings": [
      5,
      5,
      4
    ],
    "price": {
      "currency": "€",
      "amount": 350.00
    }
  },
  {
    "id": 123442,
    "image": history6,
    "productName": "Mountain Chalet in Aspen, USA",
    "accommodationName": "Snowy Peaks Lodge",
    "location": {
      "city": "Aspen",
      "country": "USA"
    },
    "guests": 6,
    "bathrooms": 3,
    "bedrooms": 3,
    "beds": 3,
    "smokingPolicy": "No Smoking",
    "amenities": [
      "Wi-Fi",
      "Fireplace",
      "Ski Access"
    ],
    "bookingDetails": {
      "date": "2023-11-28",
      "status": "Completed"
    },
    "discount": "12%",
    "ratings": [
      5,
      5,
      4
    ],
    "price": {
      "currency": "€",
      "amount": 350.00
    }
  },
  {
    "id": 133555,
    "image": history7,
    "productName": "Mountain Chalet in Aspen, USA",
    "accommodationName": "Snowy Peaks Lodge",
    "location": {
      "city": "Aspen",
      "country": "USA"
    },
    "guests": 6,
    "bathrooms": 3,
    "bedrooms": 3,
    "beds": 3,
    "smokingPolicy": "No Smoking",
    "amenities": [
      "Wi-Fi",
      "Fireplace",
      "Ski Access"
    ],
    "bookingDetails": {
      "date": "2023-11-28",
      "status": "Cancelled"
    },
    "discount": "12%",
    "ratings": [
      5,
      5,
      4
    ],
    "price": {
      "currency": "€",
      "amount": 350.00
    }
  }
]

export { orders } 