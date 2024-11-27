
export default function Footer() {
    return (
        <div className="footer">
            <div className="footerDiv p-4">
                <div className="contact text-white">
                <h3 className="mb-4" style={{color: "#ffeb3b"}}>Contact Us</h3>
                <p className="fs-4" style={{color: "var(--primary-color)"}}>
                    Win Motor Myanamr Company Limited
                </p>
                <p>
                    Thamine Train Station Road, Yangon, Myanmar, 11061
                </p>
                <h3 className="mb-4" style={{color: "var(--primary-color)"}}>
                    +95 9 254 122 299
                </h3>
                <p>Email: info@winmotormm.com</p>
                <p>www.winmotormyanmar.com</p>
                <div></div>
                </div>
                <div className="links text-white">
                <h3 className="mb-4" style={{color: "#ffeb3b"}}>Links</h3>
                <p><a href="#" className="nav-link text-white">Home</a></p>
                <p><a href="#" className="nav-link text-white">About</a></p>
                <p><a href="#" className="nav-link text-white">Contact</a></p>
                <p><a href="#" className="nav-link text-white">Privacy Policy</a></p>
                <p><a href="#" className="nav-link text-white">Terms & Conditions</a></p>
                </div>
                <div className="map">
                <div
                    style={{
                    position: "relative",
                    overflow: "hidden",
                    height: 0,
                    maxWidth: "100%",
                    height: "auto",
                    }}
                >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d954.7310342301797!2d96.1320378!3d16.8301192!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smm!4v1732366205231!5m2!1sen!2smm" 
                        width="600" 
                        height="300" 
                        style={{border:0}} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                </div>
            </div>
        </div>
    )
}