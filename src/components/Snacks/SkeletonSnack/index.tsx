import { Item, Image, ItemText, Name, Description, Price, AddCart  } from "./styles"

export function SkeletonSnack(){

  return(
    <Item>
      <Image></Image>
      <ItemText>
        <Name></Name>
        <Description></Description>
      </ItemText>
      <Price></Price>
      <AddCart>
        
      </AddCart>
    </Item>
  )

}
