const Friend = ({src, alt}) => {
    const classNameValue = alt === 'friend7' || alt === 'friend9'
        ? "col-sm-4 p-1 rounded-bottom-5"
        : "col-sm-4 p-1";

    return (
        <img className={classNameValue} src={src} alt={alt}/>
    );
};

export default Friend;