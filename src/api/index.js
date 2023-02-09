
//   post removePOst and UpdatePost are dummy api call

//  get called 
export const  getPost = async ( ) => {
   
  await fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));
}

//  Post call 
export const addPost = async (   ) => {
  await fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: '.title',
    body: 'inputs.body',
    userId: 'inputs.userId'
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  
}
//  Delete call
export const removePost = async ( ) => {
  fetch('https://jsonplaceholder.typicode.com/posts/:id', {
  method: 'DELETE',
});
}