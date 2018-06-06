import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>

        <div className="content">
            <div className="inner">
                <h1>frederikhaaning.dk</h1>
                <p>@: fh@frederikhaaning.dk</p>
            </div>
        </div>

    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
