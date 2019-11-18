import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
               return <BurgerIngredient type={ingredientKey} key={ingredientKey + i}/>
            });
        });

    return (
        <div className={classes.Burger}>
            {transformedIngredients}
        </div>
    );
};

export default burger;