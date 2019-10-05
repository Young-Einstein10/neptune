import React from 'react';
import Styles from './index.module.css';
import ProfCard from '../elements/ProfCard';
import Details from '../elements/Details';

const InfoArea = () => {
    return (
        <div className={Styles.container}>
            <ProfCard />
            <Details />
        </div>
    )
}

export default InfoArea;