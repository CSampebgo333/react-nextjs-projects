const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row bg-white dark:bg-gray-800 items-center rounded-xl shadow-md p-6 text-left transition mb-16">
            <img 
            src={testimonial.image}
            alt={testimonial.name}
            className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-blue-600 dark:border-blue-400 sm:mb-0 sm:mr-6"
            />
            <div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
                    {testimonial.text}
                </p>
                <p className="font-semibold text-lg text-gray-900 dark:text-white">
                    {testimonial.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.position} at {testimonial.company}
                </p>
            </div>
        </div>
    )
}

export default TestimonialCard;