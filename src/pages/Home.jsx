import React, { useEffect } from 'react'
import styles from './Home.module.css';

import Hero from '../components/Hero';

import api from '../api/api';

function Home() {
    
    return (
        <div className={`${styles.home}`}>
            <Hero />
        </div>
    )
}

export default Home;