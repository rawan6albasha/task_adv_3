import React from 'react'
import style from './Properties.module.css'
import Card from '../Card/Card'
import Title from '../Title/Title'


import CardImg1 from '/src/assets/images/property-01.jpg'
import CardImg2 from '/src/assets/images/property-02.jpg'
import CardImg3 from '/src/assets/images/property-03.jpg'
import CardImg4 from '/src/assets/images/property-04.jpg'
import CardImg5 from '/src/assets/images/property-05.jpg'
import CardImg6 from '/src/assets/images/property-06.jpg'
const dataCard=[
    {
        src:CardImg1,
        type:"Luxury villa",
        price:'$1,500,000',
        add:"18 New Street Miami, OR 97219",
        Bedrooms:7,
        Pathrooms:2,
        Area:'545m2',
        Floor:1,
        Parking:'6 spots',

    },
    {

        src:CardImg2,
        type:"Luxury villa",
        price:"$925,600",
        add:'12 New street Miami, OR 12650',
        Bedrooms:3,
        Pathrooms:1,
        Area:'545m2',
        Floor:4,
        Parking:'6 spots',

    },
    {

        src:CardImg3,
        type:"Apartment",
        price:"$925,600",
        add:'34 Beach Street Miami, OR 42680',
        Bedrooms:7,
        Pathrooms:3,
        Area:'545m2',
        Floor:3,
        Parking:'6 spots',

    },
    {
        src:CardImg4,
        type:"Penthouse",
        price:'$584,500',
        add:'22 New Street Portland, OR 16540',
        Bedrooms:3,
        Pathrooms:7,
        Area:'545m2',
        Floor:6,
        Parking:'6 spots',

    },
    {

        src:CardImg5,
        type:"Penthouse",
        price:"$925,600",
        add:"18 New Street Miami, OR 97219",
        Bedrooms:5,
        Pathrooms:2,
        Area:'545m2',
        Floor:6,
        Parking:'6 spots',

    },
    {
        src:CardImg6,
        type:"Modern Condo",
        price:'$450,000',
        add:'12 New street Miami, OR 12650',
        Bedrooms:8,
        Pathrooms:8,
        Area:'545m2',
        Floor:5,
        Parking:'6 spots',

    },
]

const Properties = () => {
    const TitleData={
        span:'PROPERTIES',
        pargh:"WE Provide The Best Property You Like",
        direction:false,
        ColorP:false
    }

    return (
        <div className={`${style.properties} section_margin container`}>
            <Title TitleData={TitleData}/>
            <Card dataCard={dataCard} />
        </div>
    )
}

export default Properties
