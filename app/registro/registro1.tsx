import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { Link } from "expo-router";
import ViewInset from '@/components/ViewInset';
import { Image, TextInput } from 'react-native';
import Logo from '@/assets/images/logo.png';
import { useColorScheme } from 'nativewind';

export default function Registro() {

  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <ViewInset className="flex-1 ml-[16px] mr-[16px]">
        <View className="flex-row items-center justify-center mt-[40px]">
            <Image source={Logo} className="w-[82px] h-[83px]"/>
            <Text className="text-2xl items-center content-center dark:text-white">HOTELMINDCARE</Text>
        </View>
        <View className="items-start mt-[16px]">
            <Text className="text-2xl font-bold dark:text-white">Registrate</Text>
            <Text className="text-lg mt-[8px] dark:text-white">Por favor introduzca toda su información personal</Text>
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
            placeholder="Correo electrónico"
            placeholderTextColor="#9CA3AF" // Color gris para el placeholder
            />
        </View>
        <View className="mt-[16px] border border-gray-400 rounded-lg">
            <TextInput
            className="p-[11px] text-xl text-black dark:text-white"
            placeholder="Numero de teléfono"
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
        <View className="mt-[16px] border border-gray-400 rounded-lg">
            <TextInput
            className="p-[11px] text-xl text-black dark:text-white"
            placeholder="Confirmar contraseña"
            placeholderTextColor="#9CA3AF" // Color gris para el placeholder
            />
        </View>
        <Link className="mt-[40px]" href="/registro/registro2" asChild>
            <TouchableOpacity className="bg-gray-800 p-[12px] rounded-lg items-center">
                <Text className="text-white font-medium text-lg">Siguiente</Text>
            </TouchableOpacity>
        </Link>
    </ViewInset>
  );
}