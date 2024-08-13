import React, { useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { PRIMARY_COLOR } from '../commons/constants';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';
import { TitleComponent } from '../components/TitleComponest';


//interface - props
interface Props {
    users: User[];  //arreglo con la lista de usuarios
}

//interface - formulario Login
interface FormLogin {
    email: string;
    password: string;
}

export const LoginScreen = ({ users }: Props) => {
    //hook useState: cambiar el estado del formulario
    const [formLogin, setFormLogin] = useState<FormLogin>({
        email: '',
        password: ''
    });

    //hook useState: manipular la visualización o no del password
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    //hook useNavigation: navegar de una pantalla a otra
    const navigation = useNavigation();

    //función actualizar el estado del formulario
    const handleSetValues = (name: string, value: string) => {
        //...operador de propagación | spread: sacar una copia de las propiedades del objeto
        setFormLogin({ ...formLogin, [name]: value })
    }

    //función para iniciar sesión
    const handleSingIn = () => {
        //Validar que todos los campos estén completos
        if (!formLogin.email || !formLogin.password) {
            //Mensaje de aviso
            Alert.alert(
                'Error',
                'Por favor, ingrese valores en todos los campos!'
            );
            return;
        }

        //Validar que el usuario si exista (usuario registrado)
        if (!verifyUser()) {
            Alert.alert(
                'Error',
                'Correo y/o contraseña incorrecta!'
            );
            return;
        }

        //Si inicio sesión correctamente ir al Home Screen
        navigation.dispatch(CommonActions.navigate({ name: 'Home' }));
        //console.log(formLogin);
    }

    //función permitir verificar si el usuario en el arreglo (registrado)
    const verifyUser = () => {
        const existUser = users.filter(user => user.email === formLogin.email && user.password === formLogin.password)[0];
        return existUser; //User | null
    }

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title='Iniciar Sesión' />
            <BodyComponent>
                <View>
                    <Text style={styles.textBody}>Bienvenido de nuevo!</Text>
                    <Text style={styles.textBody}>Realiza tus compras de manera rápida y segura</Text>
                </View>
                <View style={styles.contenInput}>
                    <InputComponent
                        placeholder='Correo'
                        handleSetValues={handleSetValues}
                        name={'email'} />
                    <InputComponent
                        placeholder='Contraseña'
                        handleSetValues={handleSetValues}
                        name={'password'}
                        isPassword={hiddenPassword}
                        hasIcon={true}
                        setHiddenPaswword={() => setHiddenPassword (!hiddenPassword)}/>
                </View>
                <ButtonComponent textButton='Iniciar' onPress={handleSingIn} />
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Register' }))}>
                    <Text
                        style={styles.textRegister}>
                        No tienes una cuenta? Regístrate ahora
                    </Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    )
}
