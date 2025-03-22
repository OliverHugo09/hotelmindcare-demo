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

export default function Registro2() {

  return (
    <ViewInset className="flex-1 mx-4">
        <View className="flex-row items-center justify-center mt-10">
            <Image source={Logo} className="w-[82px] h-[83px]"/>
            <Text className="text-2xl items-center content-center dark:text-white">HOTELMINDCARE</Text>
        </View>
        <View className="items-start mt-4">
            <Text className="text-2xl font-bold dark:text-white">Registrate</Text>
            <Text className="text-lg mt-2 dark:text-white">Datos de nacimiento</Text>
        </View>
        <View className="mt-4 border border-gray-400 rounded-lg">
            <TextInput
            className="p-4 text-xl text-black dark:text-white"
            placeholder="País"
            placeholderTextColor="#9CA3AF" // Color gris para el placeholder
            />
        </View>
        <View className="mt-4 border border-gray-400 rounded-lg">
            <TextInput
            className="p-4 text-xl text-black dark:text-white"
            placeholder="Estado / Provincia"
            placeholderTextColor="#9CA3AF" // Color gris para el placeholder
            />
        </View>
        <View className="mt-4 border border-gray-400 rounded-lg">
            <TextInput
            className="p-4 text-xl text-black dark:text-white"
            placeholder="Ciudad"
            placeholderTextColor="#9CA3AF" // Color gris para el placeholder
            />
        </View>
        <View className="mt-4 border border-gray-400 rounded-lg">
            <TextInput
            className="p-4 text-xl text-black dark:text-white"
            placeholder="Fecha de nacimiento"
            placeholderTextColor="#9CA3AF" // Color gris para el placeholder
            />
        </View>
        <Link className="mt-10" href="/registro/registro3" asChild>
            <TouchableOpacity className="bg-gray-800 p-4 rounded-lg items-center">
                <Text className="text-white font-medium text-lg">Siguiente</Text>
            </TouchableOpacity>
        </Link>
    </ViewInset>
  );
}