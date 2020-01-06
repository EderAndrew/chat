import React, { useState } from 'react'
import styled from 'styled-components/native'

import MsgItem from './src/components/MsgItem'

const Container = styled.SafeAreaView`
  flex:1;
`
const ImageBackground = styled.ImageBackground`
  flex:1;
`
const ListChat = styled.FlatList``

const App = () => {
  let msg = [
    {key:'1', name:'Me', msg:'Hi', m:true},
    {key:'2', name:'Other Person', msg:'Hi. How are you?', m:false},
    {key:'3', name:'Me', msg:'I am fine. And your book?', m:true},
    {key:'4', name:'Other Person', msg:'My book is on the table', m:false},
    {key:'5', name:'Other Person', msg:'Are you from Narnia?', m:false},
    {key:'6', name:'Me', msg:'What? What you talk about?', m:true},
    {key:'7', name:'Other Person', msg:'I am just trash talk', m:false},
    {key:'8', name:'Me', msg:'Yeap...this dialog almost at the end', m:true},
    {key:'9', name:'Me', msg:'Just one more time', m:true},
    {key:'10', name:'Other Person', msg:'And the end', m:false},
    {key:'11', name:'Me', msg:'This is a test', m:true},
    {key:'12', name:'Other Person', msg:'Another test', m:false},
    
  ]
  const [chat, setChat] = useState(msg)

  return(
    <Container>
      <ImageBackground source={require('./src/img/bg.jpg')}>
        <ListChat
          data={ chat }
          renderItem={ ({item})=><MsgItem data={ item } /> }
        />
      </ImageBackground>
    </Container>
  )
}

export default App