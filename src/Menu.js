import React from 'react'

function Menu({items}) {
    
    return (
        <div>
           {items.map((im)=>{
               const{id,title,img,desc,price}=im;
               return(
                 
                   <div key={id}>
                      <img src={img} alt={title}/>
                     <h4>{title}</h4>
                     <h4>{price}</h4>
                     <p>{desc}</p>

                       </div>
                  
               )
           })}
        </div>
    )
}

export default Menu
