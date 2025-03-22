import {
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { Link } from "expo-router";
import ViewInset from '@/components/ViewInset';
import Welcome from '../assets/images/Welcome.svg';
import { Image } from 'react-native';
import Logo from '@/assets/images/logo.png';

export default function WelcomePage() {

  return (
    <ViewInset className="flex-1 mx-4">
        <View className="items-center mt-10">
            <Welcome className="items-center" width={356} height={188} />
        </View>
        <View className="flex-row items-center mt-4">
            <Image source={Logo} className="w-[82px] h-[83px]"/>
            <Text className="text-2xl items-center content-center dark:text-white">HOTELMINDCARE</Text>
        </View>
        <View className="items-start mt-4">
            <Text className="text-2xl font-bold dark:text-white">Tu bienestar es nuestra prioridad.</Text>
            <Text className="text-lg mt-4 dark:text-white">Encuentra apoyo emocional y herramientas para tu bienestar mental. Estamos aquí para acompañarte en cada paso.</Text>
        </View>
        <Link className="mt-10" href="/login/login" asChild>
            <TouchableOpacity className="bg-gray-800 p-4 rounded-lg items-center">
                <Text className="text-white font-medium text-lg dark:text-white">Iniciar sesión</Text>
            </TouchableOpacity>
        </Link>
        <Link className="mt-6" href="/registro/registro1" asChild>
            <TouchableOpacity className="bg-gray-800 p-4 rounded-lg items-center">
                <Text className="text-white font-medium text-lg">Registrarse</Text>
            </TouchableOpacity>
        </Link>
    </ViewInset>
  );
}