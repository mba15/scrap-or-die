import React, { Component } from 'react';

class MenuSelect extends Component {
    render() {
        return (
            <MenuContainer
                style={{ ...this.props.style, paddingLeft: '44px' }}>
                {
                    this.props.items.map((item, index) =>
                        <div
                            className="menu_item_wrapper"
                            style={this.props.itemStyle}
                            ref={e => this.itemRefs[index] = e}
                            key={index}>
                            {this.props.renderItem(item, index)}
                        </div>
                    )
                }
                {
                    this.props.active ?
                        <div className="menu_hand" style={{ top: this.state.handTop, left: this.state.handLeft }}>
                            <img src="http://res.cloudinary.com/forte-3d/image/upload/v1512749704/hand_gkm8wr.png" />
                        </div> : null
                }
            </MenuContainer>
        )
    }
}