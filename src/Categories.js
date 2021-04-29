import React from 'react'
import { Button } from 'reactstrap';


function Categories({filterItems}) {
    return (
        <div>
            <Button color="info" onClick={()=>filterItems('all')}>All</Button>
            <Button color="success" onClick={()=>filterItems('Breakfast')}>breakfast</Button>
            <Button color="primary" onClick={()=>filterItems('Lunch')}>Lunch</Button>
            <Button color="danger" onClick={()=>filterItems('Dinner')}>Dinner</Button>
        </div>
    )
}

export default Categories
