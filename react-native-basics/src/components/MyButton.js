import React from 'react';  // 리액트를 불러옴, JSX 사용할 때
import { TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'

const MyButton = props => {
    // console.log(props)
    // console.log(props.children)
    return (
        <TouchableOpacity onPress = {() => props.onPress()}>
            <Text style={{ fontSize: 24 }}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
};

MyButton.defaultProps = {
    title: "default title"
}

// MyButton.propTypes = {
//     title: PropTypes.string.isRequired
// }

export default MyButton;