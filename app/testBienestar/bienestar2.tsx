import {
    View,
    Text,
    TouchableOpacity
  } from "react-native";
  import { Link } from "expo-router";
  import ViewInset from '@/components/ViewInset';
  
  export default function BienestarPage2() {
  
    return (
      <ViewInset className="flex-1 bg-sky-600">
          <View>
              <Text className="text-xl font-medium text-center text-white">A continuación, se le presentará una serie de anunciados donde usted deberá responder a lo que considere, por medio de un puntaje del 1 al 6, donde 6 es muy de acuerdo y el 1 es nada de acuerdo.</Text>
          </View>
          <View className="mt-10 w-[150px] h-[2px] bg-white my-4 self-center" />
          <View className="mt-10">
              <Text className="text-xl font-light text-white">1. Nada de acuerdo</Text>
              <Text className="text-xl font-light mt-2 text-white">2. Algo de desacuerdo</Text>
              <Text className="text-xl font-light mt-2 text-white">3. Ni de acuerdo ni en desacuerdo</Text>
              <Text className="text-xl font-light mt-2 text-white">4. Ligeramente en acuerdo</Text>
              <Text className="text-xl font-light mt-2 text-white">5. Algo de acuerdo </Text>
              <Text className="text-xl font-light mt-2 text-white">6. Muy de acuerdo</Text>
          </View>

          <Link className="mt-10" href="/testBienestar/bienestar3" asChild>
            <TouchableOpacity className="bg-gray-800 p-4 rounded-lg items-center">
                <Text className="text-white font-medium text-lg dark:text-white">Siguiente</Text>
            </TouchableOpacity>
        </Link>
      </ViewInset>
    );
  }