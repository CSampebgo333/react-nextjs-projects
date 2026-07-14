import { ChevronLeft, ChevronRight } from "lucide-react";


const ArrowButton = ({ clicked, children }) => {
    return (
        <button onClick={clicked} 
                className="p-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition cursor-pointer"
        >
            {children}
        </button>
    );
}

const ArrowNavigation = ({ prev, next }) => {

    return (
        <div className="flex justify-center mb-16 gap-6">
            <ArrowButton clicked={prev}>
                <ChevronLeft size={20}/>
            </ArrowButton>
            <ArrowButton clicked={next}>
                <ChevronRight size={20}/>
            </ArrowButton>
        </div>
    )
}

export default ArrowNavigation;