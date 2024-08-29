import React, { useState } from 'react';
import style from './Accordion.module.css';

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={style.featured_card}>
            {items.map((item, index) => (
                <div key={index}>
                    <div className={style.accordion_item}
                        onClick={() => toggleAccordion(index)}
                    >
                        <h3 className={`${style.padding_left} ${openIndex === index ? style.featured_span2 : ""}`}>{item.title}</h3>
                        { (index < items.length - 1) ? <hr/> : '' }


                    </div>
                    {openIndex === index && (
                        <p className={ style.padding_left} dangerouslySetInnerHTML={{ __html: item.content }} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
