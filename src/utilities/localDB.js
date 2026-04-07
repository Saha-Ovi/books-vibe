const getAllReadBookListFromLocal=()=>
{
    const allBooks=localStorage.getItem("readBooks");
    if(allBooks) return JSON.parse(allBooks);
    else return [];
}

const addReadBookListToLocal=(currentBook)=>
{
    const allBooks=getAllReadBookListFromLocal();
   const isExist=allBooks.find(book=>book.bookId===currentBook.bookId);
   if(!isExist)
   {
        allBooks.push(currentBook);
        localStorage.setItem("readBooks",JSON.stringify(allBooks));
   }
}

const getAllWishBookListFromLocal=()=>
{
    const allWishBooks=localStorage.getItem("wishBooks");
    if(allWishBooks) return JSON.parse(allWishBooks);
    else return [];
}

const addWishBookListToLocal=(currentBook)=>
{
    const allWishBooks=getAllWishBookListFromLocal();
    const isExist=allWishBooks.find(book=>book.bookId===currentBook.bookId);
    if(!isExist)
    {
        allWishBooks.push(currentBook);
        localStorage.setItem("wishBooks",JSON.stringify(allWishBooks));
    }
}




export {addReadBookListToLocal,getAllReadBookListFromLocal,addWishBookListToLocal,getAllWishBookListFromLocal};