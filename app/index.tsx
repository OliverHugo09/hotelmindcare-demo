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
    <ViewInset className="flex-1 ml-[16px] mr-[16px]">
        <View className="items-center mt-[40px]">
            <Welcome className="items-center" width={356} height={188} />
        </View>
        <View className="flex-row items-center mt-[16px]">
            <Image source={Logo} className="w-[82px] h-[83px]"/>
            <Text className="text-2xl items-center content-center dark:text-white">HOTELMINDCARE</Text>
        </View>
        <View className="items-start mt-[16px]">
            <Text className="text-2xl font-bold dark:text-white">Tu bienestar es nuestra prioridad.</Text>
            <Text className="text-lg mt-[16px] dark:text-white">Encuentra apoyo emocional y herramientas para tu bienestar mental. Estamos aquí para acompañarte en cada paso.</Text>
        </View>
        <Link className="mt-[40px]" href="/login/login" asChild>
            <TouchableOpacity className="bg-gray-800 p-[12px] rounded-lg items-center">
                <Text className="text-white font-medium text-lg dark:text-white">Iniciar sesión</Text>
            </TouchableOpacity>
        </Link>
        <Link className="mt-[24px]" href="/registro/registro1" asChild>
            <TouchableOpacity className="bg-gray-800 p-[12px] rounded-lg items-center">
                <Text className="text-white font-medium text-lg">Registrarse</Text>
            </TouchableOpacity>
        </Link>
    </ViewInset>
  );
}