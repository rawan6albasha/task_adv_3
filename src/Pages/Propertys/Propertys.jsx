import React, { useState } from 'react'
import HeroPages from '../../Components/HeroPages/HeroPages'
import FilterBtns from '../../Components/FilterBtns/FilterBtns'
import Card from '../../Components/Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from "./Propertys.module.css"
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

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
      type:"Appartment",
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
      type:"Appartment",
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
      type:"Appartment",
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
]

const Propertys = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 9;

  const datafilter = [
    "Show All",
    "Appartment",
    "Villa House",
    "Penthouse",
  ];
  
  const [filter, setFilter] = useState('Show All');

  const filterMapping = {
    "Show All": "Show All",
    "Appartment": "Appartment",
    "Villa House": "Luxury villa",
    "Penthouse": "Penthouse"
  };

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
    setCurrentPage(1); // إعادة ضبط الصفحة إلى الأولى عند تغيير الفلتر
  };

  const filteredCards = dataCard.filter((card) => 
    filter === 'Show All' ? true : card.type === filterMapping[filter]
  );

  const totalPages = Math.ceil(filteredCards.length / recordsPerPage);

  // حساب العناصر المعروضة على الصفحة الحالية
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredCards.slice(indexOfFirstRecord, indexOfLastRecord);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const heroData = {
    Titel: "PROPERTIS",
    pargh: "Home/PROPERTIS",
  };

  return (
    <>
      <div >
        <HeroPages heroData={heroData} />
      </div>
      <div className='container section_margin'>
        <div className={style.pagination_filter}>
          <FilterBtns datafilter={datafilter} onFilterChange={handleFilterChange}  activeFilter={filter} />
        </div>
        <div className={style.pagination}>
          <Card dataCard={currentRecords} />
          <ul className='ul-pagination'>
            <li onClick={() => handlePageChange(currentPage === 1 ? totalPages : currentPage - 1)}>
              <a >
                <FontAwesomeIcon icon={faAngleLeft} />
              </a>
            </li>
            {[...Array(totalPages)].map((_, i) => (
              <li onClick={() => handlePageChange(i + 1)} key={i} className={currentPage === i + 1 ? style.PageActive : ''}>
                <a >{i + 1}</a>
              </li>
            ))}
            <li onClick={() => handlePageChange(currentPage === totalPages ? 1 : currentPage + 1)}>
              <a >
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Propertys;
