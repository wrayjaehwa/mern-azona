import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'x',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234'),
      isAdmin: true,
    },
    {
      name: 'sosa',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'White Test Shirt',
      slug: 'white-test-shirt',
      category: 'shirts',
      image: '/images/p1.png', // 679px x 829px
      price: 50,
      countInStock: 10,
      brand: 'X-Wray',
      rating: 2.7,
      numReviews: 10,
      description: 'Okay quality shirts',
    },
    {
      // _id: '2',
      name: 'Black Test Shirt',
      slug: 'black-test-shirt',
      category: 'shirts',
      image: '/images/p2.png',
      price: 60,
      countInStock: 0,
      brand: 'X-Wray',
      rating: 4.7,
      numReviews: 10,
      description: 'High quality shirts',
    },
    {
      // _id: '3',
      name: 'Swag-X Shorts',
      slug: 'swag-x-pants',
      category: 'pants',
      image: '/images/p3.png',
      price: 40,
      countInStock: 10,
      brand: 'XWray',
      rating: 3.2,
      numReviews: 10,
      description: 'Good shorts',
    },
    {
      // _id: '4',
      name: 'Yucky Orange PooPoo Pants',
      slug: 'orange-x-pants',
      category: 'pants',
      image: '/images/p4.png',
      price: 29,
      countInStock: 10,
      brand: 'X-Wray',
      rating: 4.8,
      numReviews: 10,
      description: 'High quality pants',
    },
  ],
};
export default data;
