const QuestionText = ({text, as = "p"}) => {
    const Tag = as;
    return (
        <Tag style={{fontSize: "1.2rem", marginBottom: "1rem",}}>{text}</Tag>
    );
};

export default QuestionText;