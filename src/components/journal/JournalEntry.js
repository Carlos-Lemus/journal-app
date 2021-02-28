import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div
                className="journal__entry-picture"
                style={ {
                    backgroundSize: "cover",
                    backgroundImage: "url(https://banner2.cleanpng.com/20180711/kwo/kisspng-technology-computer-icons-high-tech-tecnologia-png-5b46575858ac72.4532727915313365363632.jpg)"
                } }
            >

            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>

                <p className="journal__entry-content">
                    Aliquip ipsum veniam reprehenderit voluptate.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>

        </div>
    )
}
