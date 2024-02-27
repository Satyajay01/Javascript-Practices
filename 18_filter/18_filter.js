//-------------filter----------

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const new_number = arr.filter((num) => (num > 4))
{
    console.log(new_number)
}

// -----------------------------


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fict ion', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


const Userbooks = books.filter((mybook)=>(mybook.genre=== 'Science'))
console.log("Search Result 1",Userbooks);

const Userbook_2 = books.filter((mybook)=>{return mybook.publish >= 2000})
console.log("Search Result 2",Userbook_2);

const Userbook_3 = books.filter((mybook)=>{return mybook.publish >= 1995 && mybook.genre === 'History'})
console.log("Search Result 3",Userbook_3);


