const bakery = [
    {
        id: '0',
        name:'Pandesal',
        img: 'images/baking/SquarePandesal.jpg',
        description: 'flour, egg, sugar, butter, water, salt and milk',
        price: '$2 for 6, $4 for 12'
    },
    
]

const pandesal = [
    {
        id: '0',
        name: 'Hot Dog Pandesal',
        img: 'images/baking/Hot dog pandesal.JPG',
        description: 'This is good',
        price: '$3.50 for 6, $7 for 12'
    },
]

const cakes = [
    {
        id: '0',
        name: 'Mocha Cake',
        img: 'images/baking/Sliced Mocha Cake.JPG',
        description: 'Coffee, flour, egg, butter, whipping cream and sugar',
        price: '$10 a roll'
    },
    {
        id: '1',
        name: 'Ube Cake',
        img: 'images/baking/Sliced Ube Cake.JPG',
        description: 'Ube, flour, egg, butter, whipping cream and sugar',
        price: '$10 a roll'
    },
    {
        id: '2',
        name:'Braso de Mercedes',
        img: 'images/baking/Brasso.JPG',
        description: 'Egg, sugar, cream of tartar',
        //flavors: ube, mango, pandan
        price: '$20 a roll'
    },
]

const others = [
    {
        id: '0',
        name:'Cookies',
        img: 'images/baking/Cookies.jpg',
        description: 'flour, brown sugar, butter',
        //toppings per request. chooclate chips pecans, almonds
        price: '$3 for 6, $6 for 12'
    },
    {
        id: '1',
        name:'Puto',
        img: 'images/baking/Puto.JPG',
        description: 'wheat flower, baking powder, salt, sugar, water, vegetable oil',
        price: '50pcs/$20 100pcs/$40'
    },
]

export default bakery;
export {cakes, pandesal, others};