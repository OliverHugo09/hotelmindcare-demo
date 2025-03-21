import {
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { Link } from "expo-router";
import ViewInset from '@/components/ViewInset';
import Login from '../../assets/images/Login.svg';
import { TextInput } from 'react-native';

export default function LoginPage() {

  return (
    <ViewInset className="flex-1 ml-[16px] mr-[16px]">
        <View className="items-center mt-[40px]">
            <Login className="items-center" width={356} height={188} />
        </View>
        <View className="items-start mt-[32px]">
            <Text className="text-2xl font-bold dark:text-white">Login</Text>
            <Text className="text-lg mt-[16px] dark:text-white">Tu bienestar es nuestra prioridad 🌟🧘‍♀️</Text>
        </View>
            <View className="mt-[16px] border border-gray-400 rounded-lg">
                <TextInput
                    className="p-[11px] text-xl text-black dark:text-white"
                    placeholder="Numero de colaborador"
                    placeholderTextColor="#9CA3AF" // Color gris para el placeholder
                    />
            </View>
            <View className="mt-[16px] border border-gray-400 rounded-lg">
                <TextInput
                    className="p-[11px] text-xl text-black dark:text-white"
                    placeholder="Contraseña"
                    placeholderTextColor="#9CA3AF" // Color gris para el placeholder
                />
            </View>
        <Link className="mt-[40px]" href="/(tabs)" asChild>
            <TouchableOpacity className="bg-gray-800 p-[12px] rounded-lg items-center">
                <Text className="text-white font-medium text-lg dark:text-white">Iniciar sesión</Text>
            </TouchableOpacity>
        </Link>
        <Link className="mt-[16px]" href="/resetPassword/resetPassword" asChild>
            <TouchableOpacity className="p-[12px] items-center">
                <Text className="dark:text-white font-medium text-lg">Olvide mi contraseña</Text>
            </TouchableOpacity>
        </Link>
    </ViewInset>
  );
}