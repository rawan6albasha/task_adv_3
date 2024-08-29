import React, { useState } from 'react';
import style from './BestDeal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

import property1 from '/src/assets/images/property-06.jpg';
import property2 from '/src/assets/images/property-05.jpg';
import property3 from '/src/assets/images/property-04.jpg';
import Title from '../Title/Title';
import FilterBtns from '../FilterBtns/FilterBtns';

const BestDeal = () => {
    const TitleData = {
        span: 'BEST DEAL',
        pargh: "Find Your Best Deal Right Now!",
        direction: true
    };

    const datafilter = [
        "Appartment",
        "Villa House",
        "Penthouse"
    ];

    const data = [
        {
            type: "Appartment",
            src: property1,
            space: "185",
            floor: '26',
            romes: "4",
            Parking: "Yes",
            payment: "Bank"
        },
        {
            type: "Villa House",
            src: property2,
            space: "300",
            floor: '1',
            romes: "10",
            Parking: "Yes",
            payment: "Bank"
        },
        {
            type: "Penthouse",
            src: property3,
            space: "140",
            floor: '20',
            romes: "3",
            Parking: "No",
            payment: "Bank"
        },
    ];

    const [filter, setFilter] = useState('Appartment');

    const handleFilterChange = (selectedFilter) => {
        setFilter(selectedFilter);
    };

    const filteredData = data.find(item => item.type === filter);

    return (
        <div className={`${style.best_deal} section_margin container`}>
            <div className={style.best_head}>
                <Title TitleData={TitleData} />
                <FilterBtns datafilter={datafilter} onFilterChange={handleFilterChange} activeFilter={filter} />
            </div>
            <div className={style.best_body}>
                {filteredData && (
                    <>
                        <div className={style.details}>
                            <div className={style.detail}>
                                <p>Total Flat Space</p>
                                <b>{filteredData.space} m2</b>
                            </div>
                            <hr />
                            <div className={style.detail}>
                                <p>Floor number</p>
                                <b>{filteredData.floor}th</b>
                            </div>
                            <hr />
                            <div className={style.detail}>
                                <p>Number of rooms</p>
                                <b>{filteredData.romes}</b>
                            </div>
                            <hr />
                            <div className={style.detail}>
                                <p>Parking Available</p>
                                <b>{filteredData.Parking}</b>
                            </div>
                            <hr />
                            <div className={style.detail}>
                                <p>Payment process</p>
                                <b>{filteredData.payment}</b>
                            </div>
                        </div>
                        <img src={filteredData.src} alt="Property" />
                        <div className={style.pargh}>
                            <b>Extra Info About Property</b>
                            <p className={style.p_line}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                               Do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                               Quis ipsum suspendisse ultrices gravida.</p>
                            <p className={style.p_line}>When you need free CSS templates, you can simply type TemplateMo in any search engine website. 
                               In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p>
                            <div className={style.schedule}>
                                <span><FontAwesomeIcon icon={faCalendar} /></span>
                                <p>Schedule a visit</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default BestDeal;
