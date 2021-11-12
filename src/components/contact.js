import React from 'react';
import '../assets/styles.scss';

// const element = 

const AboutMe = (props) => {


    return (
        <div>
            <main id="contact">
                <h1 class="lg-heading">
                    Contact <span class="text-secondary">Me </span>
                </h1>
                <h2 class="sm-heading">
                    This is how you can reach me...
                </h2>
                <div class="boxes">
                    <div>
                        <span class="text-secondary"> Email: </span>
                        arman.cs50@gmail.com
                    </div>
                    <div>
                        <span class="text-secondary"> Phone: </span>
                        +91 8169 567 599
                    </div>
                    <div>
                        <span class="text-secondary"> Address: </span>
                        Sion(E), Mumbai 400022
                    </div>
                </div>
            </main>
        </div >
    )
}

export default AboutMe;