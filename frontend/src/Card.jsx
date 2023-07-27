import { Button, VStack, Image , Text} from '@chakra-ui/react'
import React from 'react'

const Card = ({amount, img ,model, Item_id,checkoutHandler})=> {
  return (
    <div>
        <VStack>
            <Image src={img} boxSize={40} objectFit={"contain"}/>
            <Text>₹{amount}</Text>
            <Text>{model}</Text>
            <Button onClick={()=>checkoutHandler(amount,model,Item_id)}>Buy Now</Button>
        </VStack>
    </div>
  )
}
export default Card;