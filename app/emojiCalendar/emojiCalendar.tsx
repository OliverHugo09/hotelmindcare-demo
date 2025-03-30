import {
    View,
    Text,
    TouchableOpacity,
  } from "react-native";
  import ViewInset from '@/components/ViewInset';
  import React, { useState } from 'react';

export default function TestEstres1() {

    const [selectedId, setSelectedId] = useState<number | null>(null); // ✅ Definir tipo explícito

    const feelings = [
        {id: 1, emoji: '😊', label: 'Feliz' },
        {id: 2, emoji: '🥰', label: 'Agradecido' },
        {id: 3, emoji: '😌', label: 'Calmado' },
        {id: 4, emoji: '😁', label: 'Bien' },
        {id: 5, emoji: '😡', label: 'Enfadado' },
        {id: 6, emoji: '😐', label: 'Aburrido' },
        {id: 7, emoji: '😴', label: 'Cansado' },
        {id: 8, emoji: '😖', label: 'Frustrado' },
        {id: 9, emoji: '😣', label: 'Disgustado' },
        {id: 10, emoji: '😫', label: 'Preocupado' },
        {id: 11, emoji: '😓', label: 'Inseguro' },
        {id: 12, emoji: '😬', label: 'Ansioso' },
        {id: 13, emoji: '🤯', label: 'Estresado' },
        {id: 14, emoji: '😢', label: 'Solo' },
        {id: 15, emoji: '😔', label: 'Triste' },
        {id: 16, emoji: '😞', label: 'Deprimido' },
      ];
  
    return (
      <ViewInset className="flex-1 bg-sky-50">
    <View className="flex-1 bg-sky-50 p-4">
      <Text className="text-2xl font-bold text-sky-900 text-center mb-4">¿Cómo te sientes?</Text>
      <View className="flex-row flex-wrap justify-between">
        {feelings.map((feeling) => (
          <TouchableOpacity
            key={feeling.id}
            className={`w-[30%] aspect-square items-center justify-center m-[1.5%] rounded-lg ${
              selectedId === feeling.id ? 'bg-sky-200' : 'bg-white'
            }`}
            onPress={() => setSelectedId(feeling.id)}
          >
            <Text className="text-4xl">{feeling.emoji}</Text>
            <Text className="text-xl font-bold text-sky-900 mt-2">{feeling.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
      </ViewInset>
    );
  }