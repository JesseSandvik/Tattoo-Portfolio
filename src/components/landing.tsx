import React, { useState } from 'react';
import classNames from '../utils/ClassNames';

const LandingPage: React.FC = () => {
    const [backroundToggle, setBackgroundToggle] = useState(true);

    return (
        <main className={classNames({
            "landing": backroundToggle,
            "landing open": !backroundToggle,
        })}>
            <div className={classNames({
                "left-top": backroundToggle,
                "left-top open": !backroundToggle,
            })}
            >
            </div>
            <div className={classNames({
                "right-top": backroundToggle,
                "right-top open": !backroundToggle,
            })}
            >
            </div>
            <div className={classNames({
                "left-bottom": backroundToggle,
                "left-bottom open": !backroundToggle,
            })}
            >
            </div>
            <div className={classNames({
                "right-bottom": backroundToggle,
                "right-bottom open": !backroundToggle,
            })}
            >
            </div>
            <i
                className="far fa-moon"
                onClick={() => setBackgroundToggle(false)}
            >
            </i>
        </main>
    );
};

export default LandingPage;