import {
    View,
    Text,
    TouchableOpacity
  } from "react-native";
  import { Link } from "expo-router";
  import ViewInset from '@/components/ViewInset';
  import { useState } from "react";

  const options = [
    { id: 1, label: "Nada de acuerdo", color: "bg-blue-400 border-blue-600" },
    { id: 2, label: "Algo de desacuerdo", color: "bg-blue-300 border-blue-500" },
    { id: 3, label: "Ni de acuerdo ni en desacuerdo", color: "bg-blue-200 border-blue-400" },
    { id: 4, label: "Ligeramente en acuerdo", color: "bg-pink-200 border-pink-400" },
    { id: 5, label: "Algo de acuerdo", color: "bg-pink-300 border-pink-500" },
    { id: 6, label: "Muy de acuerdo", color: "bg-pink-400 border-pink-600" },
  ];
  
  export default function BienestarPage5() {

    const [selected, setSelected] = useState<number | null>(null);
  
    return (
      <ViewInset className="flex-1 bg-sky-600">
          <View>
              <Text className="text-xl font-medium text-center text-white">3. No tengo miedo de expresar mis opiniones, incluso cuando son opuestas a las opiniones de la gente</Text>
          </View>
          <View className="mt-10 w-[150px] h-[2px] bg-white my-4 self-center" />

          <View className=" flex-1 flex-row">
            {/* Columna de opciones con textos y botones */}
               <View className="flex-1">
                    {options.map((option) => (
                    <View key={option.id} className="flex-row items-center justify-between mb-4">
                        {/* Texto a la izquierda */}
                        <Text className="text-xl font-light text-white flex-1">{option.label}</Text>

                        {/* Botón circular */}
                        <TouchableOpacity
                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center 
                            ${selected === option.id ? option.color : "bg-gray-200 border-gray-400"}`}
                        onPress={() => setSelected(option.id)}
                        >
                        <Text className="text-white font-bold">{option.id}</Text>
                        </TouchableOpacity>
                    </View>
                    ))}
                 </View>
            </View>       

          <Link className="mb-10" href="/testBienestar/bienestar6" asChild>
            <TouchableOpacity className="bg-gray-800 p-4 rounded-lg items-center">
                <Text className="text-white font-medium text-lg dark:text-white">Siguiente</Text>
            </TouchableOpacity>
        </Link>
      </ViewInset>
    );
  }