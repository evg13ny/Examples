import bcrypt from 'bcryptjs';

const data = {

    users: [
        {
            name: 'Evgeny',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Vasily Petrovich',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],

    products: [
        {
            name: 'Nokia X20',
            category: 'Smartphone',
            image: '/images/p1.jpg',
            price: 389,
            countInStock: 10,
            brand: 'Nokia',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name: 'Nokia X10',
            category: 'Smartphone',
            image: '/images/p2.jpg',
            price: 349,
            countInStock: 0,
            brand: 'Nokia',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name: 'Nokia G20',
            category: 'Smartphone',
            image: '/images/p3.jpg',
            price: 179,
            countInStock: 20,
            brand: 'Nokia',
            rating: 4.8,
            numReviews: 17,
            description: 'high quality product',
        },
        {
            name: 'Nokia G10',
            category: 'Smartphone',
            image: '/images/p4.jpg',
            price: 149,
            countInStock: 15,
            brand: 'Nokia',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product',
        },
        {
            name: 'Nokia C20',
            category: 'Smartphone',
            image: '/images/p5.jpg',
            price: 99,
            countInStock: 5,
            brand: 'Nokia',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name: 'Nokia 8.3 5G',
            category: 'Smartphone',
            image: '/images/p6.jpg',
            price: 649,
            countInStock: 0,
            brand: 'Nokia',
            rating: 4.5,
            numReviews: 15,
            description: 'high quality product',
        },
    ],
};

export default data;