import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";


const BackToTopButton = () => {
    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            }
            else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div>
            {backToTopButton &&
                <button
                    onClick={scrollUp}
                    style={{
                        position: 'fixed',
                        bottom: '50px',
                        right: '4px',
                        width: '50px',
                        height: '50px',
                        borderRadius: '5px',



                    }}
                    className="btn border border-sky-400 drop-shadow-2xl shadow-white"
                ><FaArrowUp className="text-xl animate-bounce " /></button>

            }
        </div>
    );
};

export default BackToTopButton;