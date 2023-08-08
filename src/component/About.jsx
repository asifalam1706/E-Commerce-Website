import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                        Welcome to "A SQUARE STORE" We are a premier online destination for all your shopping needs. With a wide range of high-quality products and a seamless shopping experience, we strive to provide the best online shopping experience for our valued customers.

At "A SQUARE STORE", we believe that shopping should be convenient, enjoyable, and reliable. Our team is dedicated to curating a diverse selection of products from trusted brands, ensuring that you have access to the latest trends and timeless classics across various categories.

We understand the importance of customer satisfaction, which is why we prioritize exceptional service. Our user-friendly interface allows you to browse through our extensive catalog effortlessly. Whether you're searching for fashion and apparel, electronics, home decor, beauty products, or more, you'll find it all in one place.

Sincerely,
A SQUARE STORE Team
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/about.png" alt="About Us" height="200px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About