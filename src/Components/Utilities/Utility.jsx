
const addDb = (id) =>{
    let blogAdd = getElememtsItem();

     const quantity = blogAdd[id];
     if(quantity){
        const newQuantity = quantity + 1;
        blogAdd[id] = newQuantity;
     }
     else{
        blogAdd[id] = 1;
     }

   localStorage.setItem("blog-details", JSON.stringify(blogAdd))
}

const getElememtsItem = () =>{
    let blogAdd = {};

    const getBlogDetails = localStorage.getItem("blog-details");
    if(getBlogDetails){
        blogAdd = JSON.parse(getBlogDetails);
    }
    return blogAdd;
}

export { addDb , getElememtsItem };