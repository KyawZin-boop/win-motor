import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function RoleCar(){

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        let right = gsap.timeline({
            scrollTrigger: {
                trigger: ".fade-in",
                start: "-90% center",
                end: "64.7% 57%",
                scrub: true,
                // toggleActions: "play none none reverse",
            },
        });
        right.from(".fade-in", {
            opacity: 0
        });
        right.to(".fade-in", {
            opacity: 1,
            stagger: 0.2,
            ease: "power2.out"
        });
        let left = gsap.timeline({
            scrollTrigger: {
                trigger: ".left",
                start: "-150% center",
                end: "194.7% 60%",
                scrub: true,
                // toggleActions: "play none none reverse",
            },
        });
        left.from(".left", {
            opacity: 0
        });
        left.to(".left", {
            opacity: 1,
            stagger: 0.2,
            ease: "power2.out"
        });
    }, []);

    return(
        <>
            <div className="roleCar p-3 py-5">
            <div className="container">
                <div className="row">
                <div className="col-md-6 align-self-center">
                    <div className="row gap-4 roleCarCards">
                        <div className="card col-md-6 p-0 text-center fade-in">
                            <img
                                src="/modelCar/view1.png"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="card-body">
                                <span>This is the description</span>
                            </div>
                        </div>
                        <div className="card col-md-6 p-0 text-center fade-in">
                            <img
                            src="/modelCar/view2.png"
                            className="img-fluid"
                            alt=""
                            />
                            <div className="card-body">
                                <span>This is the description</span>
                            </div>
                        </div>
                        <div className="card col-md-6 p-0 text-center fade-in">
                            <img
                            src="/modelCar/view3.png"
                            className="img-fluid"
                            alt=""
                            />
                            <div className="card-body">
                                <span>This is the description</span>
                            </div>
                        </div>
                        <div className="card col-md-6 p-0 text-center fade-in">
                            <img
                            src="/modelCar/view4.png"
                            className="img-fluid"
                            alt=""
                            />
                            <div className="card-body">
                                <span>This is the description</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="about-text p-4">
                        <h1 className="mb-4 fw-bold left" style={{color: "var(--primary-color)"}}>
                            We Are Dedicated to Provide Quality Service
                        </h1>
                        <p style={{color: "var(--secondary-color)"}} className="left">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque fugiat sit iste 
                            dolores, qui minima sapiente voluptatem voluptatibus rerum consectetur 
                            dignissimos voluptatum vitae magnam repudiandae ea. Quam ipsum repellendus corrupti!
                        </p>
                        <img src="/modelCar/model.webp" className="img-fluid left" alt="" />
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}