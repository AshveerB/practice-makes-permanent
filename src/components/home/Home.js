import React from 'react';
import ReactPlayer from 'react-player';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='one'>Welcome To Practice Makes Permanent</div>
            <div className='two'>Let's improve ourselves and build good habits through practice.</div>
            <div className='three'>We can set goals daily, and track our persistence to those goals daily as well! We can also reflect on our successes and set-back's to keep striving forward.</div>
            <div className='five'>Here is some more information on the science of habits:</div>
            <div className='reactplayer'><ReactPlayer url="https://www.youtube.com/watch?v=FSZyzhi8C9o"/></div>
            <div className='six'>Here are some links for further reading. Set a routine that works best for your lifestyle</div>
            <a href='https://www.sclhealth.org/blog/2018/09/the-benefits-of-getting-a-full-night-sleep/' target='_blank' rel='noreferrer'>Benefits of a good nights sleep</a><br />
            <a href='https://www.healthline.com/nutrition/7-health-benefits-of-water' target='_blank' rel='noreferrer'>Benefits of Water</a><br />
            <a href='https://www.healthline.com/nutrition/10-benefits-of-exercise' target='_blank' rel='noreferrer'>Benefits of Execise</a><br />
            <a href='https://www.health.harvard.edu/blog/benefits-of-a-healthy-diet-with-or-without-weight-loss-2018121915572' target='_blank' rel='noreferrer'>Benefits of a healthy diet</a><br />
            <a href='https://medium.com/@vicspec/why-is-it-important-to-learn-new-things-everyday-c9fc687edd9e' target='_blank' rel='noreferrer'>Benefits of learnings new things</a><br />
            <a href='https://www.nbcnews.com/better/wellness/5-scientifically-proven-health-benefits-traveling-abroad-n759631' target='_blank' rel='noreferrer'>Benefits of Travel</a><br />
            <a href='https://www.marcus.com/us/en/resources/personal-finance/how-a-financial-plan-could-benefit-your-health' target='_blank' rel='noreferrer'>Benefits of a financial plan</a>
        </div>
    );
};

export default Home;