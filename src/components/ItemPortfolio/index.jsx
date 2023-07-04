import React from 'react'
import './style.scss'

function ItemPortfolio(props) {
    return (
        <div className="itemPortfolio">
            <div className="itemPortfolio__img">
                <img src={props.img} alt={props.project} />
            </div>
            <div className="itemPortfolio__content">
                <div className="itemPortfolio__content--title">
                    <h3>{props.project}</h3>
                </div>
                <div className="itemPortfolio__content--tecnologies">
                    {props.stack}
                </div>
                <div className="itemPortfolio__content--description">
                    {props.description}
                </div>
            </div>
        </div>
    )
}

export default ItemPortfolio
