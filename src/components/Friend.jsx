const Friend = ({src, alt}) => {
    const classNameValue = alt === 'friend7' || alt === 'friend9'
        ? "w-full rounded-b-3xl"
        : "w-full";

    return (
        <img className={classNameValue} src={src} alt={alt}/>
    );
};

export default Friend;