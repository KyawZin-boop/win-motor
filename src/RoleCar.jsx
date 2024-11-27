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
                        <div className="card col-md-6 p-0 text-center fade-in shadow">
                            <img
                                src="/modelCar/RL71.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            {/* <div className="card-body">
                                <span>This is the description</span>
                            </div> */}
                        </div>
                        <div className="card col-md-6 p-0 text-center fade-in shadow">
                            <img
                            src="/modelCar/RL72.jpg"
                            className="img-fluid"
                            alt=""
                            />
                            {/* <div className="card-body">
                                <span>This is the description</span>
                            </div> */}
                        </div>
                        <div className="card col-md-6 p-0 text-center fade-in shadow">
                            <img
                            src="/modelCar/RL75.jpg"
                            className="img-fluid"
                            alt=""
                            />
                            {/* <div className="card-body">
                                <span>This is the description</span>
                            </div> */}
                        </div>
                        <div className="card col-md-6 p-0 text-center fade-in shadow">
                            <img
                            src="/modelCar/RL79.jpg"
                            className="img-fluid"
                            alt=""
                            />
                            {/* <div className="card-body">
                                <span>This is the description</span>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="about-text p-4">
                        <h1 className="mb-4 fw-bold left" style={{color: "var(--primary-color)",  textShadow: "2px 2px 2px #a1a1a1"}}>
                            We Are Dedicated to Provide Quality Service
                        </h1>
                        <p style={{color: "var(--secondary-color)"}} className="left">
                            Livan Automotive သည် Geely Auto Group နှင့် Lifan Technology (Group) Co.Ltd တို့ကြား 
                            ဖက်စပ်လုပ်ကိုင်သည့် အမှတ်တံဆိပ်ဖြစ်ပြီး ၎င်းတို့ဖက်စပ်လုပ်ငန်းသည် Geely Auto Group ၏ 
                            လက်ရှိပလပ်ဖောင်းများကို အသုံးပြုပြီး Livan နှင့် Maple အမှတ်တံဆိပ်များအောက်တွင် 
                            <i style={{color: "var(--primary-color)"}}> Battery Electric Vehicle (BEV)</i> များကို အထူးရည်ရွယ်ထုတ်လုပ်ပါသည်။
                        </p>
                        <p style={{color: "var(--secondary-color)"}} className="left">
                            Livan အမှတ်တံဆိပ်ကို Maple နှင့် Lifan နည်းပညာတို့ကြား ပေါင်းစပ်မှုဖြင့် 2022 ခုနှစ် ဇန်နဝါရီလ 24 
                            ရက်နေ့တွင် တည်ထောင်ခဲ့ပါသည်။
                        </p>
                        <p style={{color: "var(--secondary-color)"}} className="left">
                            လက်ရှိတွင် Geely Auto Group ၏ပံ့ကိုးကူညီမှုဖြင့် သုတေသနနှင့် ဖွံဖြိုးတိုးတက်မှုဆိုင်ရာများ၊ 
                            ထုတ်လုပ်မှုအပိုင်းနှင့် လည်ပတ်ဆောင်ရွက်မှုများတွင် အပြည့်အဝထောက်ပံ့ပေးပြီး ဓာတ်ဆီကား၊ 
                            လျှပ်စစ်ကား၊ ဘက်ထရီအားသွင်းစနစ်နှင့် လဲလှယ်မှုနည်းပညာများကို စဥ်ဆက်မပြန်တိုးတက်အောင် 
                            လုပ်ဆောင်လျှက်ရှိပါသည်။
                        {/* <img src="/modelCar/model.webp" className="img-fluid left" alt="" /> */}
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}