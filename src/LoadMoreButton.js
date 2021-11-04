function LoadMoreButton({
    loadMore,
    items
}) {
    return ( 
        <div className="loadMoreButton-wrapper">
            <button onClick={loadMore} className="loadMoreButton" >Загрузить еще</button>
        </div>
     );
}

export default LoadMoreButton;