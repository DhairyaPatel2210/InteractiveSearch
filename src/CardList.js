import React from 'react';
import Card from './Card'

const CardList = ({robots}) => {
    return(

        robots.map((user,i) => {
            return(
                <Card key ={i} 
                name={robots[i].name} 
                email={robots[i].email} 
                id = {robots[i].id}
                />
            )
        })
    )
}

export default CardList