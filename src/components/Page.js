import React, {PropTypes, Component } from 'react'

export default class Page extends Component {
    onYearBtnClick(e) {
        this.props.setYear(+e.target.innerText)
    }
    render() {
        const {year, photos} = this.props
        return (
            <div>
                <p>
                    <button onClick={::this.onYearBtnClick}>2016</button>
                    <button onClick={::this.onYearBtnClick}>2015</button>
                    <button onClick={::this.onYearBtnClick}>2014</button>
                </p>
                <h3>{year} year</h3>
                <p>You have {photos.length} photo(s)</p>
            </div>
        )
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    setYear: PropTypes.func.isRequired
}