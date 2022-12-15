// import {useEffect,useState} from 'react';
// const initialState ={data:{}};
  
//   const productReducer = (state = initialState, action) => {
//     const [dataapi,setDataapi]=useState(state);
//     let sets = action.type.replace(/['"]+/g, '');
//     console.log(sets);
    

//     if (action.type === "products") {
//         useEffect(()=>{
//             fetch(`https://dummyjson.com/${sets}`).then(response=>response.json()).then((json)=>setDataapi(JSON.stringify(json)));
    
//         },[dataapi])
//       return {
//         ...state,
//         data:dataapi,
     
//     } }else
//      {
//       return state;
//     }
// }
  
//   export default productReducer;
  