import './slider.css'

function Slider()
{
    return(
        <>
            <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://cdn.youcan.shop/stores/1d21974ecc747096d8326edd771b21d2/others/O0PUfyWlgc6LgVKboaZOLrKzoCHnU5tV44QTUDOD.jpeg" className="d-block w-100 height-300"/>
                </div>
                <div className="carousel-item">
                <img src="https://qph.cf2.quoracdn.net/main-qimg-6275459e09bd20830fd07e471bca6f96-lq" className="d-block w-100 height-300" />
                </div>
                <div className="carousel-item">
                <img src="https://img.freepik.com/premium-vector/modern-sale-banner-website-slider-template-design_54925-46.jpg" className="d-block w-100 height-300"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </>
    )
}

export default Slider;