const Shimmer = () => {
    let shimmerList = Array(15).fill("");
    return (
        <div className="shimmer-container">        
          {shimmerList.map((value, index) => <div className="shimmer-card" key={index}></div>)}
        </div>
    )
}

export default Shimmer;