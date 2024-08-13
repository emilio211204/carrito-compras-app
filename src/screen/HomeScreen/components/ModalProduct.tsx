import React from 'react' 
import { Text, View } from 'react-native' 
import { Modal } from 'react-native' 
import { styles } from '../../../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Product } from '../HomeScreen';
 
//Interface - props 
interface Props { 
  Product : Product;
  isVisible: boolean; 
  setShowModal: () => void;

} 
 
export const ModalProductComponents = ({ isVisible, setShowModal, Product }: Props) => { 
  return ( 
    <Modal visible={isVisible} animationType='slide' transparent ={true}> 
      <View style={styles.modal}>
        <TouchableOpacity
        onPress={setShowModal}>
        <Text>{Product.name}</Text>
        </TouchableOpacity>
         
      </View> 
    </Modal> 
  ) 
}