import { FiFastForward } from "react-icons/fi"
import Button from "../ui/button"
import Image from "next/image"

const Herosection = () => {
    return (
        <section 
            id="hero-section" 
            className="container mx-auto h-screen flex"
        >
            <div className="div realtive self-center">
                <Image 
                    src="/images/img-basketball.png" 
                    width={432} 
                    height={423} 
                    alt="sporton"
                    className="grayscale absolute left-10 top-20"
                />
                <div className="relative ml-40 w-full">
                    <div className="div text-primary italic">Friday Sale, 50%</div>
                    <h1 className="font-extrabold text-[95px] italic leading-tight bg-gradient-to-b from-black to-[#CBCBCB] bg-clip-text text-transparent">
                        WEAR YOUR <br /> TOP-QUALITY <br />SPORTSWEAR
                    </h1>
                    <p className="w-1/2 mt-10 leading-loose">
                        Engineered for endurance and designed for speed. Experience gear that moves as fast as you do. Premium fabrics. Unmatched comfort. Limitless motion.
                    </p>
                    <div className="div flex gap-5 mt-8">
                        <Button>
                            Explore More <FiFastForward/>
                        </Button>
                        <Button variant="ghost">
                            Watch Video {""} 
                            <Image 
                                src="/images/icon-play-video.svg" 
                                alt="icon playvideo" 
                                width={29} 
                                height={29}
                            />
                        </Button>
                    </div>
                </div>
                <Image 
                    src="/images/img-hero.png" 
                    alt="hero" 
                    width={700} 
                    height={950} 
                    className="absolute right-75 top-130 -translate-y-1/2" 
                />
            </div>
            <Image 
                src="/images/img-ornament-hero.svg"
                width={420}
                height={420}
                alt="image sporton"
                className="absolute -right-[280px] top-1/2 -translate-y-1/2"
            />
        </section>
    )
}

export default Herosection