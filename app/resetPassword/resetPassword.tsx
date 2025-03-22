import {
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { Link } from "expo-router";
import ViewInset from '@/components/ViewInset';
import ResetPassword from '../../assets/images/resetPassword.svg';
import { TextInput } from 'react-native';

export default function ResetPasswordPage() {

  return (
    <ViewInset className="flex-1 mx-4">
        <View className="items-center mt-10">
            <ResetPassword className="items-center" width={361} height={240} />
        </View>
        <View className="items-start mt-6">
            <Text className="text-2xl font-bold dark:text-white">¿Olvidaste tu contraseña?</Text>
            <Text className="text-lg mt-4 dark:text-white">Olvidar la contraseña es común, por favor introduzca el correo electrónico vinculado a su cuenta</Text>
        </View>
            <View className="mt-10 border border-gray-400 rounded-lg">
                <TextInput
                    className="p-4 text-xl text-black dark:text-white"
                    placeholder="Correo electrónico"
                    placeholderTextColor="#9CA3AF" // Color gris para el placeholder
                    />
            </View>
        <Link className="mt-10" href="/login/login" asChild>
            <TouchableOpacity className="bg-gray-800 p-4 rounded-lg items-center">
                <Text className="text-white font-medium text-lg dark:text-white">Recuperar contraseña</Text>
            </TouchableOpacity>
        </Link>
    </ViewInset>
  );
}