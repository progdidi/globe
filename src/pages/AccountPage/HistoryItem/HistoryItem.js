import './historyItem.scss';

const HistoryItem = () => {
    return (
        <div className="user-history__item">
            <img src="" alt="" className="user-history__img" />

            <div className="user-history__date">
                <div className="user-history__date-check">
                    <h6 className="user-history__date-title">Check-In</h6>

                    <p className="user-history__date-text">Thur, Dec 8</p>
                </div>

                <div className="user-history__date-check">
                    <h6 className="user-history__date-title">Check Out</h6>

                    <p className="user-history__date-text">Fri, Dec 9</p>
                </div>
            </div>

            <div className="user-history__details">
                <div className="history-detail__item">
                    <img src="" alt="" className="history-detail__item-img" />
                    <div>
                        <h6 className="history-detail__item-titlr">Check-In time</h6>
                        <p className="history-detail__item-text">12:00pm</p>
                    </div>
                </div>
                <div className="history-detail__item">
                    <img src="" alt="" className="history-detail__item-img" />
                    <div>
                        <h6 className="history-detail__item-titlr">Room no.</h6>
                        <p className="history-detail__item-text">On arrival</p>
                    </div>
                </div>
                <div className="history-detail__item">
                    <img src="" alt="" className="history-detail__item-img" />
                    <div>
                        <h6 className="history-detail__item-titlr">Check-In out</h6>
                        <p className="history-detail__item-text">11:30am</p>
                    </div>
                </div>
            </div>

            <button className="user-history__download-btn">Download Ticket</button>

            <button className="user-history__btn">></button>
            
        </div>
    )
}

export default HistoryItem;