import humanImg from '../assets/Rectangle 37.jpg';
//philosophy-section image
import philosophySectionImg from '../assets/Rectangle 39.png';

//skillset-section images
import productSkillsetIcon from '../assets/Vector (1).svg';
import motionSkillsetIcon from '../assets/Group 62.svg';
import photographySkillsetIcon from '../assets/Frame 16.svg';
import visualSkillsetIcon from '../assets/Group 20.svg';
//icons-section icons
import companyIcon1 from '../assets/Group 107.svg';
import companyIcon2 from '../assets/Group 108.svg';
import companyIcon3 from '../assets/Group 109.svg';
import companyIcon4 from '../assets/Group 110.svg';
import companyIcon5 from '../assets/Group.svg';
import companyIcon6 from '../assets/Vector (2).svg';
//projects-section images
import projectImage1 from '../assets/Rectangle 41.jpg';
import projectImage2 from '../assets/Rectangle 41 (1).jpg';
import projectImage3 from '../assets/Rectangle 41 (2).jpg';
import projectImage4 from '../assets/Rectangle 41 (3).jpg';
//inst-section img
import instagramSectionImg from '../assets/Rectangle 39.jpg'
//dribbble-section image
import dribbbleSectionImg from '../assets/Rectangle 42.png';
//reviews-section images
import reviewImg1 from '../assets/Rectangle 41.png';
import reviewImg2 from '../assets/Rectangle 41 (1).png';
import reviewImg3 from '../assets/Rectangle 41 (2).png';
//photography-section 
import photo1 from '../assets/Rectangle 47.png';
import photo2 from '../assets/Rectangle 48.png';
import photo3 from '../assets/Rectangle 49.png';
import photo4 from '../assets/Rectangle 50.png';
import '../styles/main.scss'
import { useRef, useState } from 'react';
export default function MainNode () {
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 1.0; // Ускорение
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => setIsDragging(false);
    const handleMouseLeave = () => setIsDragging(false);

    return (
        <main>
            <section className="about-section">
                <div className="container">
                    <div className="img-container">
                        <img src={humanImg} alt="" />
                    </div>
                    <div className="text-container">
                        <div className="title">I’m Robin Williams. A Product Designer <span className='gray-text'>based in Italy.</span></div>
                        <div className="subtitle">I’m probably the most passionate designer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.</div>
                    </div>
                </div> 
            </section>
            <section className="companies-section">
                <div className="container">
                    <div className="text-container">
                        <h2 className="title">work experience</h2>
                        <div className="subtitle">Companies I have worked for in the past</div>
                    </div>
                    <div className="companies-container">
                        <div className="company-item">
                            <div className="num">01</div>
                            <h3 className="company-title"><span className='google'>Google</span>, Interaction Designer</h3>
                            <div className="company-description">I currently am the lead designer on the interaction design team for Google Play.</div>
                        </div>
                        <div className="company-item">
                            <div className="num">02</div>
                            <h3 className="company-title"><span className='facebook'>Facebook</span>, Product Designer</h3>
                            <div className="company-description">I’ve worked on a wide variety of internal tools for facebook over the past 6 years.</div>
                        </div>
                        <div className="company-item">
                            <div className="num">03</div>
                            <h3 className="company-title"><span className='dribbble'>Dribbble</span>, Graphic Designer</h3>
                            <div className="company-description">I started my design career with Dribbble. I was incharge of creating illustrations for the platform.</div>
                        </div>
                    </div>
                </div> 
            </section>
            <section className="philosophy-section">
                <div className="container">
                    <div className="text-container">
                        <h2 className="title">Philosophy & values</h2>
                        <div className="description">I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality.</div>
                        <a href="# " className="link-item">More about me</a>
                    </div>
                    <img src={philosophySectionImg  } className='section-img' alt="" />
                </div>
            </section>
            <section className="skillset-section">
                <div className="container">
                    <div className="text-column">
                        <h2 className="title">Skillset</h2>
                        <div className="description">With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.</div>
                    </div>
                    <div className="skillset-container">
                        <div className="skillset-item">
                            <img src={productSkillsetIcon} alt="" className="item-icon" />
                            <h3 className="item-title">Product Design</h3>
                            <div className="item-description">Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.</div>
                        </div>
                        <div className="skillset-item">
                            <img src={visualSkillsetIcon} alt="" className="item-icon" />
                            <h3 className="item-title">Visual Design</h3>
                            <div className="item-description">My experience at dribbble has helped me learn to develop the eye for design. Colors, typography, layout and the whole package.</div>
                        </div>
                        <div className="skillset-item">
                            <img src={motionSkillsetIcon} alt="" className="item-icon" />
                            <h3 className="item-title">Motion Design</h3>
                            <div className="item-description">I started my design journey with motion design in my college days. Motion is something that really fascinates me because of the flexibility of story telling. </div>
                        </div>
                        <div className="skillset-item">
                            <img src={photographySkillsetIcon} alt="" className="item-icon" />
                            <h3 className="item-title">Photography</h3>
                            <div className="item-description">Clicking pictures really brings out the creative in me. Phtography really makes you look and percieve things in a different way.</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="icons-section">
                <div className="container">
                    <div className={`icons-container ${isDragging ? 'dragging' : ''}`}
                        ref={containerRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="icon-item">
                            <img src={companyIcon1} alt="" className="icon-img" />
                        </div>
                        <div className="icon-item">
                            <img src={companyIcon2} alt="" className="icon-img" />
                        </div>
                        <div className="icon-item">
                            <img src={companyIcon3} alt="" className="icon-img" />
                        </div>
                        <div className="icon-item">
                            <img src={companyIcon4} alt="" className="icon-img" />
                        </div>
                        <div className="icon-item">
                            <img src={companyIcon5} alt="" className="icon-img" />
                        </div>
                        <div className="icon-item">
                            <img src={companyIcon6} alt="" className="icon-img" />
                        </div>
                    </div> 
                </div> 
            </section>
            <section className="projects-section">
                <div className="container">
                    <div className="text-container">
                        <h2 className="title">my projects</h2>
                        <div className="subtitle">Work that I’ve done for the past 8 years</div>
                    </div>
                    <div className="projects-container">
                        <div className="left-column-container">
                            <article className="project-item">
                                <img src={projectImage1} alt="" className="project-image" />
                                <div className="project-text">
                                    <h4 className="project-title">Restaurant Website Design</h4>
                                    <div className="project-description">I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.</div>
                                </div>
                            </article>
                            <article className="project-item">
                                <img src={projectImage2} alt="" className="project-image" />
                                <div className="project-text">
                                    <h4 className="project-title">Restaurant Website Design</h4>
                                    <div className="project-description">I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.</div>
                                </div>
                            </article>
                        </div>
                        <div className="right-column-container">
                            <article className="project-item">
                                <img src={projectImage3} alt="" className="project-image" />
                                <div className="project-text">
                                    <h4 className="project-title">Restaurant Website Design</h4>
                                    <div className="project-description">I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.</div>
                                </div>
                            </article>
                            <article className="project-item">
                                <img src={projectImage4} alt="" className="project-image" />
                                <div className="project-text">
                                    <h4 className="project-title">Restaurant Website Design</h4>
                                    <div className="project-description">I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.</div>
                                </div>
                            </article>
                            <a href="# " className="view-projects-link">view all projects</a>
                        </div> 
                    </div>
                </div>
            </section>
            <section className="instagram-section">
                <div className="container">
                    <div className="text-container">
                        <h2 className="title">Instagram</h2>
                        <div className="description">If you area a person who enjoys photography, then I highly recommend that you check out my Instagram. I’m an avid traveller and I capture the best moments that I would love to cherish with the world</div>
                        <a href="# " className="link-item">Follow me on IG</a>
                    </div>
                    <img src={instagramSectionImg} alt="" className="section-img" />
                </div>
            </section>
            <section className="dribbble-section">
                <div className="container">
                    <div className="text-container">
                        <h2 className="title">Dribbble</h2>
                        <div className="description">Each dribbble shot is made with love and care. Do check out my work on Dribbble. Likes and comments are appreciated.</div>
                        <a href="# " className="link-item">Follow me on Dribbble</a>
                    </div>
                    <div className="img-container">
                        <div className="header-img__container">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                        <img src={dribbbleSectionImg} alt="" className="page-img" />
                    </div>
                </div>
            </section>
            <section className="reviews-section">
                <div className="container">
                    <div className="text-container">
                        <div className="title">This is what people say about me</div>
                        <div className="subtitle">Here are a few lines from people who I have worked with over the past 8+ years in my design career.</div>
                        <a href="# " className="link-item">See all testimonials</a>
                    </div>
                    <div className="reviews-container">
                        <div className="review-item">
                            <img src={reviewImg1} alt="" className="review-img" />
                            <div className="info-container">
                                <div className="review-text">‘’Robin is one of the best designers I have worked with in my entire life. He is a designer who is very capable of taking up complex projects and delivers impeccable design.’’</div>
                                <h4 className="review-author">Richard Owens</h4>
                                <h4 className="reviewer-pos">CEO, Company 1</h4> 
                            </div>
                        </div>
                        <div className="review-item">
                            <img src={reviewImg2} alt="" className="review-img" />
                            <div className="info-container">
                                <div className="review-text">‘’I think Robin has an incredible gift. It has been an absolute pleasure to work with a designer of this caliber.’’</div>
                                <h4 className="review-author">Emily Parker</h4>
                                <h4 className="reviewer-pos">CEO, Company 2</h4> 
                            </div>
                        </div>
                        <div className="review-item">
                            <img src={reviewImg3} alt="" className="review-img" />
                            <div className="info-container">
                                <div className="review-text">‘’All I can say that, Robin is a phenomenal designer. The wavelength at which he thinks is astoundaing. I love the focus, passion and attention to detial in the design.’’</div>
                                <h4 className="review-author">Vincent  Rudd</h4>
                                <h4 className="reviewer-pos">CEO, Company 1</h4> 
                            </div>
                        </div>
                    </div>
                </div> 
            </section>
            <section className="photography-section">
                <div className="container">
                    <div className="text-container">
                        <h2 className="title">Photography</h2>
                        <div className="description">Here is a collection of my best travel pictures that I took while travelling places all around the world. </div>
                    </div>
                    <div className="photographies-container">
                        <div className="countries-container">
                            <div className="country-item active">italy</div>
                            <div className="country-item">australia</div>
                            <div className="country-item">india</div>
                            <div className="country-item">brazil</div>
                        </div>
                        <div className="photos-container">
                            <img src={photo1} alt="" className="photo-item" />
                            <img src={photo2} alt="" className="photo-item" />
                            <img src={photo3} alt="" className="photo-item" />
                            <img src={photo4} alt="" className="photo-item" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="form-section">
                <div className="container">
                    <div className="text-container">
                        <h2 className="title">Let’s get started</h2>
                        <div className="description">Now that you know a lot about me, let me know if you are interested to work with me.</div>
                    </div>
                    <form className="form-container">
                        <div className="input-container">
                            <label htmlFor="" className='label'>Name</label>
                            <input type="text" className='name-input'/>
                        </div>
                        <div className="input-container">
                            <label htmlFor="" className='label'>Email</label>
                            <input type="email" className='email-input'/>
                        </div>
                        <div className="input-container">
                            <label htmlFor="" className='label'>Message</label>
                            <textarea name="" id="" className='message-input'></textarea>
                        </div>
                        <button type="submit" className='submit-btn'>Let’s get started</button>
                    </form>
                </div>
            </section>
        </main>
    )
}