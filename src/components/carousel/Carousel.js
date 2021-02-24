import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        src: 'https://www.carriermanagement.com/assets/bigstock-152634356-620x618.jpg',
    },
    {
        src: 'https://media.istockphoto.com/photos/weather-forecast-concept-picture-id531889697?k=6&m=531889697&s=612x612&w=0&h=MmIJOtcpw9werZenO6IJ5I69vm2atJ1UhZbIqo5pG6I=',
    },
    {
        src: 'https://www.offalyexpress.ie/resizer/-1/-1/true/1608119857862.jpg--.jpg?1608119860000',
    },
    {
        src: 'https://i.redd.it/odw8slw2jwl41.png',
    },
    {
        src: 'https://i.pinimg.com/originals/c3/02/43/c3024341e58c15bd3693492b87d787c1.jpg',
    },
];

const Example = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                    onExiting={() => setAnimating(true)}
                    onExited={() => setAnimating(false)}
                    key={item.src}

            >
                    <img className="img-fuild" width="1100" height="600" src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <div className="col">
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                className="mb-5"
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>
    );
}

export default Example;