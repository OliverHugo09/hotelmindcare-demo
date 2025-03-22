import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { Link } from "expo-router";
import ViewInset from '@/components/ViewInset';
import { Image } from 'react-native';
import Logo from '@/assets/images/logo.png';
import { Picker } from '@react-native-picker/picker';

export default function Registro3() {

  const [selectedSex, setSelectedSex] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedCivil, setSelectedCivil] = useState('');

  return (
    <ViewInset className="flex-1 mx-4">
        <View className="flex-row items-center justify-center mt-10">
            <Image source={Logo} className="w-[82px] h-[83px]"/>
            <Text className="text-2xl items-center content-center dark:text-white">HOTELMINDCARE</Text>
        </View>
        <View className="items-start mt-4">
            <Text className="text-2xl font-bold dark:text-white">Registrate</Text>
            <Text className="text-lg mt-2 dark:text-white">Por favor introduzca toda su información personal</Text>
        </View>
        <View className="mt-4 border border-gray-400 rounded-md bg-transparent dark:bg-gray-400">
            <Picker
                selectedValue={selectedSex}
                onValueChange={(itemValue) => setSelectedSex(itemValue)}
                className="text-black dark:text-white"
            >
            <Picker.Item label="Sexo" value="" />
            <Picker.Item label="Opción 1" value="opcion1" />
            <Picker.Item label="Opción 2" value="opcion2" />
            <Picker.Item label="Opción 3" value="opcion3" />
            </Picker>
        </View>
        <View className="mt-4 border border-gray-400 rounded-md bg-transparent dark:bg-gray-400">
            <Picker
                selectedValue={selectedGender}
                onValueChange={(itemValue) => setSelectedGender(itemValue)}
            >
            <Picker.Item label="Genero" value="" />
            <Picker.Item label="Opción 1" value="opcion1" />
            <Picker.Item label="Opción 2" value="opcion2" />
            <Picker.Item label="Opción 3" value="opcion3" />
            </Picker>
        </View>
        <View className="mt-4 border border-gray-400 rounded-md bg-transparent dark:bg-gray-400">
            <Picker
                selectedValue={selectedCivil}
                onValueChange={(itemValue) => setSelectedCivil(itemValue)}
            >
            <Picker.Item label="Estado civil" value=""/>
            <Picker.Item label="Opción 1" value="opcion1" />
            <Picker.Item label="Opción 2" value="opcion2" />
            <Picker.Item label="Opción 3" value="opcion3" />
            </Picker>
        </View>
        <Link className="mt-10" href="/" asChild>
            <TouchableOpacity className="bg-gray-800 p-4 rounded-lg items-center">
                <Text className="text-white font-medium text-lg">Registrar</Text>
            </TouchableOpacity>
        </Link>
    </ViewInset>
  );
}