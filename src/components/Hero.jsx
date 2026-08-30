import styles from "./Hero.module.css"
import { useState } from "react";
import { Link2, Copy, Check } from 'lucide-react';

import api from "../api/api";

function Hero() {

    const [url, setUrl] = useState("");
    const [short, setShort] = useState("");
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(short);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            console.error("Failed to copy");
        }
    }

    let handleUrl = (event) => {
        setUrl(event.target.value);
    }

    let handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await api.post('/', { longUrl: url });

            let shortUrl = "http://localhost:5000/" + res.data.code
            setShort(shortUrl);
        } catch (err) {
            console.error(err.response?.data || err.message);
        }
        setUrl("");
    }

    return (
        <section className={`${styles.hero} box-grid`} id="hero">
            <h1 className={styles.heading}>
                Compact Links <br />
                <span className={styles.track}>Limitless Possibilities</span>
            </h1>

            <div className={styles.URL}>
                <form action="#" onSubmit={handleSubmit}>
                    <div className={styles.URLInput}>
                        <Link2 />
                        <input value={url} onChange={handleUrl} type="text" id="" placeholder="Paste your URL here..." />
                    </div>
                    <button type="submit">Shorten Now</button>
                </form>
            </div>

            {short && (
                <div className={styles.resultRow}>
                    <span className={styles.resultLabel}>Your short link:</span>
                    <a href={short} target="_blank" rel="noopener noreferrer" className={styles.resultLink}>
                        {short}
                    </a>
                    <button
                        type="button"
                        className={`${styles.copyBtn} ${copied ? styles.copiedBtn : ""}`}
                        onClick={handleCopy}
                    >
                        {copied ? <><Check size={14} /> Copied!</> : <><Copy size={14} /> Copy</>}
                    </button>
                </div>
            )}

            <p className={styles.footer}>Fast, simple, and free URL shortening.</p>
        </section>
    )
}

export default Hero;