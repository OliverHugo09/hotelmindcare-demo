import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import ViewInset from '@/components/ViewInset';
import { Image } from 'react-native';
import Logo from '@/assets/images/logo.png';
import { Picker } from '@react-native-picker/picker';
import { termsUseData } from '@/constants/termsUse';
import { privacyUseData } from '@/constants/privacityTerms';

export default function Registro3() {

    const [selectedSex, setSelectedSex] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedCivil, setSelectedCivil] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

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
            <Picker.Item label="Hombre" value="opcion1" />
            <Picker.Item label="Mujer" value="opcion2" />
            </Picker>
        </View>
        <View className="mt-4 border border-gray-400 rounded-md bg-transparent dark:bg-gray-400">
            <Picker
                selectedValue={selectedGender}
                onValueChange={(itemValue) => setSelectedGender(itemValue)}
            >
            <Picker.Item label="Genero" value="" />
            <Picker.Item label="No binario" value="opcion1" />
            <Picker.Item label="Gay" value="opcion2" />
            <Picker.Item label="Lesbiana" value="opcion3" />
            <Picker.Item label="Homosexual" value="opcion4" />
            <Picker.Item label="Otro" value="opcion5" />
            </Picker>
        </View>
        <View className="mt-4 border border-gray-400 rounded-md bg-transparent dark:bg-gray-400">
            <Picker
                selectedValue={selectedCivil}
                onValueChange={(itemValue) => setSelectedCivil(itemValue)}
            >
            <Picker.Item label="Estado civil" value=""/>
            <Picker.Item label="Soltero" value="opcion1" />
            <Picker.Item label="Casado" value="opcion2" />
            <Picker.Item label="Viudo" value="opcion3" />
            <Picker.Item label="Union libre" value="opcion4" />
            </Picker>
        </View>

      {/* Modal de Términos y Condiciones */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="w-3/4 bg-white p-2 rounded">
            <Text className="text-lg font-bold">Términos y Política de Privacidad</Text>
            <Text className="mt-2">App de Terapia Psicológica HOTEL MINDCARE</Text>
            <View className="flex-row mt-3 h-[50vh]">
            <ScrollView>
            <Text className="font-bold mb-1">Términos de Uso</Text>
            {termsUseData.map((item) => (
                <View key={item.id} style={{ marginBottom: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                <Text>{item.description}</Text>
                </View>
                ))}
            <Text className="font-bold mb-1">Política de Privacidad</Text>
            {privacyUseData.map((item) => (
                <View key={item.id} style={{ marginBottom: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                <Text>{item.description}</Text>
                </View>
                ))}
            </ScrollView>
            </View>
            <Link href="/login/login" asChild>
                <TouchableOpacity
                className='mt-10 p-4 rounded-lg items-center bg-gray-800'
                >
                <Text className="text-white font-medium text-lg">Acepto los terminos y condiciones</Text>
                </TouchableOpacity>
            </Link>
          </View>
        </View>
      </Modal>
      
      {/* Botón de Registro */}
      <TouchableOpacity
        className='mt-10 p-4 rounded-lg items-center bg-gray-800'
        onPress={() => setModalVisible(true)}
        >
        <Text className="text-white font-medium text-lg">Registrar</Text>
      </TouchableOpacity>

    </ViewInset>
  );
}