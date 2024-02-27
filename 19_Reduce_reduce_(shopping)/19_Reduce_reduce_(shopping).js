

const shoppingCard = [
    {
        itemName: "javaScript",
        price: 7000
    },
    {
        itemName: "Python",
        price: 5000
    },
    {
        itemName: "C++",
        price: 4000
    },
    {
        itemName: "Ruby",
        price: 4000
    }

]


const price_to_pay = shoppingCard.reduce((acc, item) => acc + item.price,0);

console.log(price_to_pay);