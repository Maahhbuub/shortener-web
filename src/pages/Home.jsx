import React, { useEffect } from 'react'
import styles from './Home.module.css';

import Hero from '../components/Hero';

import api from '../api/api';

function Home() {

    // trigger the render server
    async function pingHealth() {
        const res = await api.get('/health');
        console.log(res?.data);
    }
    useEffect(() => {
        pingHealth();
    }, [])

    return (
        <div className={`${styles.home}`}>
            <Hero />
        </div>
    )
}

export default Home;