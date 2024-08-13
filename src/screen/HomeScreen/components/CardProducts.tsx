import React, { useState } from 'react' 
import { Image, Modal, Text, View } from 'react-native' 


import Icon from 'react-native-vector-icons/MaterialIcons'; 
 
import { styles } from '../../../theme/appTheme';
import { ModalProductComponents } from './ModalProduct';
import { Product } from '../HomeScreen';
 
//interface - props 
interface Props { 
  product: Product; 
} 
 
export const CardProductComponents = ({ product }: Props) => { 
  //hook useState: permitir que se haga visible/no visible el contenido del modal 
  const [showModal, setShowModal] = useState<boolean>(false); 
  return ( 
    <View> 
      <View style={styles.contentCard}> 
        <Image source={{ uri: product.pathImage }} style={styles.imageCard} /> 
 
        <View> 
          <Text style={styles.titleCard}>{product.name}</Text> 
          <Text style={styles.priceCard}> Precio: ${product.price}</Text> 
        </View> 
 
        <View style={styles.iconCard}> 
          <Icon name='add-shopping-cart' 
            onPress={() => setShowModal(!showModal)} 
            size={25} color='#e82020' 
            onPressIn={() => setShowModal(!showModal)}
            />
             
        </View> 
 
      </View> 
      <ModalProductComponents isVisible={showModal}   
      setShowModal={() => setShowModal (!showModal)}
      Product={product}
      /> 
    </View> 
  ) 
}