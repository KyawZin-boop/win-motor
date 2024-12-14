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
            <div className="container py-4">
                <h1
                className="text-center mb-4 fw-bold"
                style={{color: "var(--main-text)", textShadow: "2px 2px 2px #f1f1f1"}}
                >
                Our Services
                </h1>
                <div className="row">
                <div className="col-md-4">
                    <div className="service-item text-center p-4">
                    <img
                        className="img-fluid shadow-sm"
                        src="/services_images/support.jpg"
                        alt=""
                    />
                    <h3 className="mt-4" style={{color: "var(--link-color)"}}>
                        After Sale Service
                    </h3>
                    <p style={{color: "var(--white-color)"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam, officiis.
                    </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-item text-center p-4">
                    <img
                        className="img-fluid shadow-sm"
                        src="/services_images/warranty.webp"
                        alt=""
                    />
                    <h3 className="mt-4" style={{color: "var(--link-color)"}}>
                        Warranty
                    </h3>
                    <p style={{color: "var(--white-color)"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam, officiis.
                    </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-item text-center p-4">
                    <img
                        className="img-fluid shadow-sm"
                        src="/services_images/spare_part.webp"
                        alt=""
                    />
                    <h3 className="mt-4" style={{color: "var(--link-color)"}}>
                        Spare Part
                    </h3>
                    <p style={{color: "var(--white-color)"}}>
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