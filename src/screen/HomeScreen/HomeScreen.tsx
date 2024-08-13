import React from 'react' 
import { Text, View } from 'react-native' 
 
import { FlatList } from 'react-native-gesture-handler'; 
import { TitleComponent } from '../../components/TitleComponest';
import { BodyComponent } from '../../components/BodyComponent';
import { CardProductComponents } from './components/CardProducts';
 
//interface - productos 
export interface Product { 
    id: number; 
    name: string; 
    price: number; 
    stock: number; 
    pathImage: string;  
} 
 
export const HomeScreen = () => { 
    //arreglo de productos 
    const products: Product[] = [ 
        { 
            id: 5, 
            name: 'Combo Gamer', 
            price: 600.00, 
            stock: 5, 
            pathImage: 'https://portal-center.com/wp-content/uploads/2020/09/PC-GAMER.png', 
 
        }, 
        { 
            id: 6, 
            name: 'Samsung Galaxy A15', 
            price: 1000.00, 
            stock: 5, 
            pathImage: 'https://i0.wp.com/cemco.com.ec/wp-content/uploads/2024/05/Samsung-A15-LIGHT-BLUE.webp?fit=720%2C660&ssl=1', 
 
        }, 
 
        { 
            id: 7, 
            name: 'Playstation 1', 
            price: 900.00, 
            stock: 5, 
            pathImage: 'https://bitjumpgaming.com/cdn/shop/files/PS1_Black_FrontTop.png?v=1716654411&width=1000', 
 
        }, 
 
        { 
            id: 8, 
            name: 'Caja de rachas', 
            price: 800.00, 
            stock: 5, 
            pathImage: 'https://bpecuador.com/wp-content/uploads/2023/05/BP01806-open.png', 

        }, 
 
 
        { 
            id: 9, 
            name: 'Combo Gamer Extra', 
            price: 600.00, 
            stock: 5, 
            pathImage: 'https://www.computeach.com.ec/wp-content/uploads/2021/12/16267637454035.png', 

        }, 
    ]; 
    return ( 
        <View> 
            <TitleComponent title='Productos' /> 
            <BodyComponent> 
                <FlatList 
                    data={products} 
                    renderItem={({ item }) => <CardProductComponents product={item} />} 
                    keyExtractor={item => item.id.toString()} /> 
            </BodyComponent> 
        </View> 
    ) 
}
