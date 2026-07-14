const ExperienceItem = ({ title, company, location, period, type }) => {
    return (
        <div className="relative pl-3">
            <div className="absolute -left-3 top-2 w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
            <div>
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title}
                </h5>

                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {company}
                </p>

                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 dark:text-gray-400">
                    <span>{type}</span>
                    <span>•</span>
                    <span>{location}</span>
                    <span>•</span>
                    <span>{period}</span>
                </div>
            </div>
        </div>
    )
}

export default ExperienceItem;