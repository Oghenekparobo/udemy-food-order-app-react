import { useState } from "react";
import { useEffect } from "react";
import Card from "../ui/Card";
import styles from "./availablemeals.module.css";
import MealItem from "./mealitem/MealItem";


const AvailableMeals = () => {
    const [meal, setMeal] = useState([]);
    const [loading, setLoading] = useState(true);
    const [httpError, setHttpError] = useState('');
    useEffect(() => {
        const fetchMeals = async () => {

            const response = await fetch('https://react-8f26a-default-rtdb.firebaseio.com/meals.json');
            const data = await response.json();

            if (!response.ok) {
                throw new Error('something went wrong');
            }

            const loadedMeals = [];

            for (const key in data) {
                loadedMeals.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price
                })
            }

            setMeal(loadedMeals);
            setLoading(false);
        }

      
            fetchMeals().catch(error =>{
                setHttpError(error.message);
                setLoading(false);
            })
         
    }, [])


    if (loading) {
        return <section className={styles.loading} >loading....</section>
    }

    
    if (httpError) {
        return <section>
            <p className={styles.error}>{httpError}</p>
        </section>
    }
    const mealList = meal.map((meal) => (
        <MealItem key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <>
            <section className={styles.meals} >
                <Card >
                    <ul> {mealList} </ul>
                </Card>
            </section>
        </>
    );
};

export default AvailableMeals;