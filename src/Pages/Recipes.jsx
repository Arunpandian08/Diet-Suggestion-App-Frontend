import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Styles/dashboard.css';
import '../components/Styles/Sidebar.css';

const Recipes = () => {
    const [nonVeg, setNonVeg] = useState([]);
    const [vegFoods, setVegFoods] = useState([]);

    useEffect(() => {
        fetchData();
        fetchVegFoods();
    }, []);

    const fetchVegFoods = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/veg-foods`);
            setVegFoods(response.data);
        } catch (error) {
            console.error('Error to Fetch Foods Data', error);
        }
    };

    const fetchData = async () => {
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
            setNonVeg(response.data.categories);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="home" style={{}}>
            <header className='header'>
                <div className="card-header">
                    <h2 className='heading text-center text-white'>All Continental Vegetarians food with calories and proteins</h2>
                </div>
            </header>
            <div className="row row-cols-1 row-cols-md-3 p-5 mt-0 g-4">
                {vegFoods.data && vegFoods.data.map((item, index) => {
                    return (
                        <div key={index} className="col">
                            <div className="card h-100 text-center">
                                <h5 className="card-header">{item.foodsName}</h5>
                                <img style={{ maxHeight: '50vh', maxWidth: '100vw' }} src={item.images} className="card-img-top" alt="foods-img" />
                                <div className="card-body">
                                    <h6 className="card-text"><strong>calories: </strong> {item.calories} <br /><strong>Protein: </strong>{item.protein}%</h6>
                                    <h6 className="card-text"><strong>Continent:</strong>{item.continent}</h6>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <header className='header mt-5'>
                <div className="card-header">
                    <h2 className='heading text-center text-white'>All Continental Non-veg food with calories and proteins</h2>
                </div>
            </header>
            <div className="non mt-5">
                {nonVeg.map((item, index) => (
                    <section className="non-veg" key={index} style={{margin:'5vb', padding: '5vb',background:'#fff',borderRadius:'10px',boxShadow:'0 0 10px' }}>
                        <h4>{item.strCategory}:</h4>
                        <hr />
                        <img className='non-image' style={{ marginRight: '20px', width: '270px', height: '200px', display: 'block', float: 'left' }} src={item.strCategoryThumb} alt="apple-img" />
                        <p className='para pt-3' style={{ bottom: '0', right: '0', minHeight: '200px', width: 'calc(100%-200px-10px)', margin: '0', paddingRight: '1rem' }}><i className="fa-solid fa-quote-left fa-3x"></i> {item.strCategoryDescription} </p>
                        <hr />
                    </section>
                ))}
            </div>
            <hr />
        </div>
    );
};

export default Recipes;
