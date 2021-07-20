import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">

            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsTC9ceW_hHu6b5lNqRGxgIoHn2igpO0Csv7bIyqRxF4oHYEkzlwEfc0o3CVHDQ-4QqQuE0ATZHB4&usqp=CAU)'
                }}
            />
            <div className="journal__entry-body">
                <p className="journal_entry-title">
                    Un nuevo dia
                </p>
                <p className="journal_entry-content">
                    asdaskdjbhasdkjbasdjhasbdasdada
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
