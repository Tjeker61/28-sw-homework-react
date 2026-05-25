const Friend = ({src, alt}) => {
    let classNameValue = "w-full";

    if (alt === 'friend7') classNameValue += " rounded-bl-3xl";
    if (alt === 'friend9') classNameValue += " rounded-br-3xl";

    return (
        <img className={classNameValue} src={src} alt={alt}/>
    );
};

export default Friend;