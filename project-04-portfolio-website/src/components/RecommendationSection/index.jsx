import { useState } from "react";
import ArrowNavigation from "./ArrowNavigation";
import CompanyLogo from "./CompanyLogo";
import TestimonialCard from "./TestimonialCard";
import testimonials from "../../data/testimonials";
import companyLogos from "../../data/companyLogos";

const RecommendationSection = () => {

    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((prev) => prev === 0? testimonials.length - 1 : prev - 1);

    const next = () => setCurrent((prev) => prev === testimonials.length - 1? 0 : prev + 1);

    const testimonial = testimonials[current];

    return (
        <section className="min-h-screen py-20 px-4 text-center bg-gray-100 dark:bg-gray-900">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white"> 
                Testimonials 
            </h2>
            <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-16"> 
                What People Say 
            </h3>
            <TestimonialCard testimonial={testimonial} />
            <ArrowNavigation prev={prev} next={next}/>
            <div className="flex flex-wrap justify-center gap-10 mt-16">
                {companyLogos.map((logo, index) => (
                    <CompanyLogo 
                        key={index}
                        logo={logo}
                        index={index}
                    />
                ))}
            </div>
        </section>
    )
}

export default RecommendationSection;