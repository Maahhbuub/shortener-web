import styles from "./Hero.module.css"
import { useState } from "react";
import { Link2 } from 'lucide-react';

import api from "../api/api";

function Hero() {

    const [url, setUrl] = useState("");

    let handleUrl = (event) => {
        setUrl(event.target.value);
    }

    let handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await api.post('/', { longUrl: url });
            console.log(res.data.code);
            setUrl(res.data.code);
        } catch (err) {
            console.error(err.response?.data || err.message);
        }
    }

    return (
        <section className={`${styles.hero} box-grid`} id="hero">
            <p className={styles.topBadge}>Now with AI Analytics</p>
            <h1 className={styles.heading}>
                Compact links, <br />
                <span className={styles.track}>Limitless possibilities.</span>
            </h1>
            <p className={styles.subHeading}>Experience the high-end link management. <br /> Clean, fast, and reliable infrastructure for your digital presence.</p>

            <div className={styles.URL}>
                <form action="#" onSubmit={handleSubmit}>
                    <div className={styles.URLInput}>
                        <Link2 />
                        <input value={url} onChange={handleUrl} type="text" id="" placeholder="Paste your URL here..." />
                    </div>
                    <button type="submit">Shorten Now</button>
                </form>
            </div>
            <p className={styles.footer}>No credit card required. Free 7-day trial of Pro features.</p>
        </section>
    )
}

export default Hero;