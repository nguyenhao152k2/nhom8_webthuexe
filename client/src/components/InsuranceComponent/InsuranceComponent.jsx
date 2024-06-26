import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/Insurance.css';

function InsuranceComp() {
    //   render() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    // initialSlide: 2,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                },
            },
        ],
    };
    return (
        <div className='insurance-car'>
            <div className='container insurance-slider p-60 bg-light'>
                <div className='insurance-title text-center'>
                    <h1 className='title'>Hành Trình Của Bạn Luôn Được Bảo Vệ</h1>
                </div>
                <div className='insurance-container row row-cols-xl-4 row-cols-xs-1 g-3 pt-48'>
                    <a href='' className='insurance-item col-xl-3 col-xs-12'>
                        <div className='item-ins card'>
                            <img
                                src='https://www.mioto.vn/static/media/global-care.e4fc7ef6.jpg'
                                alt=''
                                className='fix-img'
                            />
                        </div>
                    </a>
                    <a href='' className='insurance-item col-xl-3 col-xs-12'>
                        <div className='item-ins card'>
                            <img
                                src='https://www.mioto.vn/static/media/mic.ad48f066.jpg'
                                alt=''
                                className='fix-img'
                            />
                        </div>
                    </a>
                    <a href='' className='insurance-item col-xl-3 col-xs-12'>
                        <div className='item-ins card'>
                            <img
                                src='https://www.mioto.vn/static/media/vni.d1b15e7a.jpg'
                                alt=''
                                className='fix-img'
                            />
                        </div>
                    </a>
                    <a href='' className='insurance-item col-xl-3 col-xs-12'>
                        <div className='item-ins card'>
                            <img
                                src='https://www.mioto.vn/static/media/pvi.cfd4805b.jpg'
                                alt=''
                                className='fix-img'
                            />
                        </div>
                    </a>
                </div>
                <Slider {...settings} classNameName=''>
                    <a href='' className='insurance-item '>
                        <div className='item-ins card'>
                            <img
                                src='https://www.mioto.vn/static/media/global-care.e4fc7ef6.jpg'
                                alt=''
                                className='fix-img'
                            />
                        </div>
                    </a>
                    <a href='' className='insurance-item '>
                        <div className='item-ins card'>
                            <img
                                src='https://www.mioto.vn/static/media/mic.ad48f066.jpg'
                                alt=''
                                className='fix-img'
                            />
                        </div>
                    </a>
                    <a href='' className='insurance-item '>
                        <div className='item-ins card'>
                            <img
                                src='https://www.mioto.vn/static/media/vni.d1b15e7a.jpg'
                                alt=''
                                className='fix-img'
                            />
                        </div>
                    </a>
                    <a href='' className='insurance-item '>
                        <div className='item-ins card'>
                            <img
                                src='https://www.mioto.vn/static/media/pvi.cfd4805b.jpg'
                                alt=''
                                className='fix-img'
                            />
                        </div>
                    </a>
                </Slider>
            </div>
        </div>
    );
    //   }
}

export default InsuranceComp;
