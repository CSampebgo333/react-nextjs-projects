const SkillsCard = ({ icon, name }) => {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="text-4xl mb-2">
                {icon}
            </div>
            <p className="text-sm font-medium">{name}</p>
        </div>
    )
}

export default SkillsCard;