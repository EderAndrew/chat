import React, { useState } from 'react'
import styled from 'styled-components/native'

const Baloon = styled.View`
    background-color:${props=>props.bgcolor};
    margin:10px;
    padding:10px;
    border-radius:10px;
    align-self:${props=>props.alignself};
    margin-left:${props=>props.marginLeft};;
    margin-right:${props=>props.marginRight};
`
const Name = styled.Text`
    font-size:16px;
    font-weight:bold;
`
const TextMsg = styled.Text`

`
const MsgItem = (props) => {
    return(
        <Baloon 
            bgcolor={props.data.m?'#00FF00':'#FFFFFF'} 
            alignself={props.data.m?'flex-end':'flex-start'}
            marginRight={props.data.m?'20':'50'}
            marginLeft={props.data.m?'50':'20'}
            
        >
            <Name>{props.data.name}</Name>
            <TextMsg>{props.data.msg}</TextMsg>
        </Baloon>
    )
}

export default MsgItem