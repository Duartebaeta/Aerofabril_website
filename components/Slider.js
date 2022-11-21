import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

const EmblaCarousel = ({ slides }) => {
	const options = { delay: 3000 } // Options
	const autoplayRoot = (emblaRoot) => emblaRoot.parentElement // Root node
	const autoplay = Autoplay(options, autoplayRoot)

  const [viewportRef, embla] = useEmblaCarousel({ loop: true}, [autoplay]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  	if (typeof(window) !== 'undefined')
  		var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	return (
	<div className="embla">
		<div className="embla__viewport" ref={viewportRef}>
		<div className="embla__container">
			{slides.map((index) => (
			<div className="embla__slide" key={index}>
				<div className={["embla__slide__inner"]}>
					<Image src={"/static/equipment/" + index + ".jpg"} alt="equipment pictures" width={460} height={345} layout={width <= 560 ? "responsive" : "intrinsic"}/>
				</div>
			</div>
			))}
		</div>
		</div>
		<PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
		<NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
	</div>
	);
};

export default EmblaCarousel;



















// import React, { useCallback } from 'react'
// import useEmblaCarousel from 'embla-carousel-react'
// import Image from 'next/image'
// import Autoplay from 'embla-carousel-autoplay'

// export const EmblaCarousel = () => {
// 	// const options = { delay: 1000 } // Options
// 	// const autoplayRoot = (emblaRoot) => emblaRoot.parentElement // Root node
// 	// const autoplay = Autoplay(options, autoplayRoot)
	
// 	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

//   return (
// 	<div className="embla" ref={emblaRef}>
// 		<div className='embla__viewport'>
// 			<div className="embla__container">
// 				<div className="embla__slide">
// 					<Image src={`/equipment/IMG_2103.jpg`} alt="equip" width={377} height={235} layout="intrinsic"/>
// 				</div>
// 				<div className="embla__slide">Slide 2</div>
// 				<div className="embla__slide">Slide 3</div>
// 			</div>
// 		</div>
// 		<button className="embla__prev embla__button embla__button--prev">Prev</button>
// 		<button className="embla__next embla__button embla__button--next">Next</button>
//     </div>
//   )
// }

// export default EmblaCarousel;