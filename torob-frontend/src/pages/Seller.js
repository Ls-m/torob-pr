import React from 'react'
import Header from '../components/Header';


const Seller = (props)=>{
   
    
    return(
        <>
        <Header></Header>
        <div style={{backgroundColor:"#f2f3f5"}}>
            Seller
           
        </div>
       
        
        </>
        
        
    )
}


export default Seller 



// import Header from '../components/Header';
// import React, { useEffect, useState } from "react";
// import styled from "styled-components";

// const Seller = (props)=>{
    
//     const [stores, setShops] = useState([]);
//     const getStores = async () => {
//         const res = await axios.get('http://localhost:8080/api/shops')
//         if (res.status === 200) {
//             setShops(res.data.shops);
//         }
//       };
//       useEffect(()=>{
//         getStores();
//       },[])
//     return(
//         <>
//         <Header></Header>
//         <div style={{backgroundColor:"#f2f3f5"}}>
//             Seller
//             {stores && (
//         <Grid>
//           {stores.length === 0 ? (
//             <h2>No store here</h2>
//           ) : (
//             stores.map((store, id) => (
//               <StoreCard key={id}>
//                 <StoreTitle>
//                   {store.name}
//                 </StoreTitle>
//                 <h3>{store.website}</h3>
//               </StoreCard>
//             ))
//           )}
//         </Grid>
//       )}
//         </div>
       
        
//         </>
        
        
//     )
// }


// export default Seller 

// const StoreCard = styled.div`
//   background-color: ${Colors.white};
//   border-radius: 0.8rem;
//   padding: 1.6rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const StoreTitle = styled.h2`
//   margin: 0;
//   color: ${Colors.grey};
//   :hover {
//     color: ${Colors.red};
//     cursor: pointer;
//   }
// `;
// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
//   grid-auto-rows: auto;
//   grid-gap: 2.4rem;
//   width: 100%;
//   margin: 2.4rem auto;
//   overflow: auto;

//   scrollbar-width: 0;
//   ::-webkit-scrollbar {
//     display: none;
//   }
// `;