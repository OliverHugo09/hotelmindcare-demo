import {
    View,
    Text,
    TouchableOpacity
  } from "react-native";
  import { Link } from "expo-router";
  import ViewInset from '@/components/ViewInset';
  import Feather from '@expo/vector-icons/Feather';
  
  export default function BienestarPage1() {
  
    return (
      <ViewInset className="flex-1 bg-sky-600">
          <View>
              <Text className="text-2xl font-medium text-center text-white">Test de bienestar</Text>
              <Text className="text-2xl font-medium text-center text-white">¿Cómo se encuentra tu salud emocional?</Text>
          </View>
          <View className="mt-10">
              <Text className="text-lg text-center text-white">
                Este momento es para tí. Tómate el tiempo que necesites. Recuerda que no hay respuestas idóneas o perfectas; tu perspectiva es lo más importante
              </Text>
          </View>
          <View className="mt-[50px] w-[150px] h-[2px] bg-white my-4 self-center" />
          <View className="mt-10 flex-row self-center">
            <Feather className="mr-2" name="clock" size={24} color="white" />
              <Text className="text-2xl font-bold text-center text-white">7 min</Text>
          </View>
          <Link className="mt-10" href="/testBienestar/bienestar2" asChild>
            <TouchableOpacity className="bg-gray-800 p-4 rounded-lg items-center">
                <Text className="text-white font-medium text-lg dark:text-white">Comenzar</Text>
            </TouchableOpacity>
        </Link>
      </ViewInset>
    );
  }