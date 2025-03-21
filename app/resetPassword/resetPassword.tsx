import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { Link } from "expo-router";
import ViewInset from '@/components/ViewInset';
import ResetPassword from '../../assets/images/resetPassword.svg';
import { TextInput } from 'react-native';
import { useColorScheme } from 'nativewind';

export default function ResetPasswordPage() {

  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <ViewInset className="flex-1 ml-[16px] mr-[16px]">
        <View className="items-center mt-[40px]">
            <ResetPassword className="items-center" width={361} height={240} />
        </View>
        <View className="items-start mt-[24px]">
            <Text className="text-2xl font-bold dark:text-white">¿Olvidaste tu contraseña?</Text>
            <Text className="text-lg mt-[16px] dark:text-white">Olvidar la contraseña es común, por favor introduzca el correo electrónico vinculado a su cuenta</Text>
        </View>
            <View className="mt-[40px] border border-gray-400 rounded-lg">
                <TextInput
                    className="p-[11px] text-xl text-black dark:text-white"
                    placeholder="Correo electrónico"
                    placeholderTextColor="#9CA3AF" // Color gris para el placeholder
                    />
            </View>
        <Link className="mt-[40px]" href="/login/login" asChild>
            <TouchableOpacity className="bg-gray-800 p-[12px] rounded-lg items-center">
                <Text className="text-white font-medium text-lg dark:text-white">Recuperar contraseña</Text>
            </TouchableOpacity>
        </Link>
    </ViewInset>
  );
}