import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NotesScreen = () => {
    return (
        <div className="notes__content-main">
            <NotesAppBar />
            
            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                />
                
                <textarea
                    placeholder="What happened today"
                    className="notes_textarea"
                >
                </textarea>

                <div className="notes__image">
                    <img
                        src="https://airbus-h.assetsadobe2.com/is/image/content/dam/stock-and-creative/imagery/generic-press-images/space-generic-1.jpg?wid=1920&fit=fit,1&qlt=85,0"
                        alt="imagen"
                    />
                </div>

            </div>
        </div>
    )
}
