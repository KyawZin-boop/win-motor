import gsap from "gsap";

export default function Services() {

    // gsap.registerPlugin(ScrollTrigger);

    // gsap.from(".fade-in-section", {
    // opacity: 0,
    // y: 50,
    // duration: 1,
    // ease: "power2.out",
    // scrollTrigger: {
    //     trigger: ".fade-in-section",
    //     start: "top 80%", // Trigger when the section reaches 80% of the viewport
    //     toggleActions: "play none none reverse", // Play when in view, reverse when out
    // },
    // });

    return (
        <div className="services">
            <div className="container py-5">
                <h1
                className="text-center mb-4 fw-bold"
                style={{color: "var(--primary-color)", textShadow: "2px 2px 2px #b3b3b3"}}
                >
                Our Services
                </h1>
                <div className="row">
                <div className="col-md-4">
                    <div className="service-item text-center p-4">
                    <img
                        className="img-fluid"
                        src="/services_images/delivery.jpg"
                        alt=""
                    />
                    <h3 className="mt-4" style={{color: "var(--primary-color)"}}>
                        After Sale Service
                    </h3>
                    <p style={{color: "var(--secondary-color)"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam, officiis.
                    </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-item text-center p-4">
                    <img
                        className="img-fluid"
                        src="/services_images/support.jpg"
                        alt=""
                    />
                    <h3 className="mt-4" style={{color: "var(--primary-color)"}}>
                        Warranty
                    </h3>
                    <p style={{color: "var(--secondary-color)"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam, officiis.
                    </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-item text-center p-4">
                    <img
                        className="img-fluid"
                        src="/services_images/payment.jpg"
                        alt=""
                    />
                    <h3 className="mt-4" style={{color: "var(--primary-color)"}}>
                        Spare Part
                    </h3>
                    <p style={{color: "var(--secondary-color)"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam, officiis.
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}