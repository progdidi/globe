import './historyItem.scss';

const HistoryItem = () => {
    return (
        <div className="user-history__item">
            <img src="" alt="" className="user-history__item-img" />

            <div className="user-history__date">
                <div className="user-history__date-from">
                    <h6 className="user-history__date-title">Check-In</h6>

                    <p className="user-history__date-text">Thur, Dec 8</p>
                </div>

                <div className="user-history__date-to">
                    <h6 className="user-history__date-title">Check Out</h6>

                    <p className="user-history__date-text">Fri, Dec 9</p>
                </div>
            </div>
        </div>
    )
}

export default HistoryItem;