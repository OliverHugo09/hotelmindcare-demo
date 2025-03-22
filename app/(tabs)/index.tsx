import { View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import TestBienestar from '../../assets/images/testBienestar.svg';
import ViewInset from '@/components/ViewInset';
import { Link } from "expo-router";
import AnimationTest from "../../assets/images/animationtest.gif"

export default function Home() {
  return (
    <ViewInset className="flex-1">
        <View>
            <Text className='text-lg font-medium text-center dark:text-white'>🌈 Cada emoción cuenta. Avancemos juntos. 🤝</Text>
        </View>
      <View className="w-full h-[1px] bg-gray-500 my-4" />

      <View className='flex-row bg-sky-100 rounded-xl'>
        <View className='flex-col-reverse'>
            {/* <TestBienestar classNam style={{ width: 100, height: 100 }}/> */}
            <Image source={AnimationTest} style={{ width: 200, height: 200 }} />
        </View>
        <View className="flex-1 flex-wrap ml-2 items-start py-4">
          <Text className="text-2xl font-bold text-sky-900">
            Test de Bienestar
          </Text>
          <Text className="text-lg text-sky-900">
            Conoce en qué punto se encuentra tu salud emocional
          </Text>
          <Link className="mt-2" href="/testBienestar/bienestar1" asChild>
            <TouchableOpacity className="border border-sky-950 bg-transparent p-2 rounded-lg items-center">
                <Text className="font-medium text-lg text-sky-900">Comenzar</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>


    </ViewInset>
  );
}
