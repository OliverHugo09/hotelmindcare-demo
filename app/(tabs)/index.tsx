import { View, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import ViewInset from '@/components/ViewInset';
import { Link } from "expo-router";
import AnimationTest from "../../assets/images/animationtest.gif";
import Carousel from 'react-native-reanimated-carousel';
import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { themeData, ThemeData, IconFamily } from '@/constants/themesData';
import { estreslabolarData, EstresLaboralData } from '@/constants/estresLaboral';

type FontAwesomeIconNames = keyof typeof FontAwesome.glyphMap;
type MaterialCommunityIconsIconName = keyof typeof MaterialCommunityIcons.glyphMap;
type MaterialIconsIconName = keyof typeof MaterialIcons.glyphMap;

type IconName = FontAwesomeIconNames | MaterialCommunityIconsIconName | MaterialIconsIconName;

export default function Home() {

    const IconComponent: React.FC<{iconName: IconName | any; iconFamily: IconFamily }> = ({ iconName, iconFamily }) => {
        switch (iconFamily) {
          case 'FontAwesome':
            return <FontAwesome name={iconName as FontAwesomeIconNames} size={24} color="#052F4A" />;
          case 'MaterialCommunityIcons':
            return <MaterialCommunityIcons name={iconName as MaterialCommunityIconsIconName} size={24} color="#052F4A" />;
          case 'MaterialIcons':
            return <MaterialIcons name={iconName as MaterialIconsIconName} size={24} color="#052F4A" />;
          default:
            return null;
        }
      };

      const renderThemes = ({ item }: { item: ThemeData }) => (
        <TouchableOpacity
          className='rounded-xl mt-4 mr-2 justify-center items-center p-3 bg-sky-100 border border-sky-300'
          onPress={() => console.log(item.title)}
        >
            <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center',}}>
            <IconComponent iconName={item.iconName} iconFamily={item.iconFamily} />
            <Text className='pl-2 text-sm text-sky-950' numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
            </View>
        </TouchableOpacity>
      );

      const renderEstres = ({ item }: { item: EstresLaboralData }) => (
        <Link className="mt-2" href={`/testBienestar/bienestar${item.id}`} asChild>
        <TouchableOpacity
          className='rounded-xl mt-4 mr-2 justify-center items-center border border-sky-300'
          onPress={() => console.log(item.title)}
        >
            <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center',}}>
            <Image contentFit="cover" source={item.img} style={{ width: 200, height: 200 }}/>
            </View>
            <View className='self-start ml-2 mt-2'>
                <Text>{item.title}</Text>
            </View>
            <View className="w-full h-[1px] bg-gray-500 my-2" />

            <View className='flex-row m-2 justify-center items-center'>
                <View className='bg-gray-300 px-5 py-2 rounded-2xl'>
                    <Text>Articulo</Text>
                </View>
                <View className='ml-2'>
                    <Text>8 min</Text>
                </View>
            </View>
        </TouchableOpacity>
        </Link>
      );

  return (
    <ViewInset className="flex-1">
        <View>
            <Text className='text-lg font-medium text-center dark:text-white'>🌈 Cada emoción cuenta. Avancemos juntos. 🤝</Text>
        </View>
      <View className="w-full h-[1px] bg-gray-500 my-4" />

      <View className='flex-row bg-sky-100 rounded-xl'>
        <View className='flex-col-reverse'>
            <Image source={AnimationTest} style={{ width: 200, height: 200 }} />
        </View>
        <View className="flex-1 flex-wrap ml-2 items-start py-4">
          <Text className="text-2xl font-bold text-sky-900">
            Test de Bienestar Mensual
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
      <View className='mt-6'>
        <Text className='text-lg font-bold text-gray-600 dark:text-white'>
            Hoy quiero...
        </Text>
      </View>

     {/* Botones de apartados */}
      <View>
        <FlatList
            data={themeData}
            renderItem={renderThemes}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
        />
      </View>
        {/* Cards */}
      <View>
      <FlatList
            data={estreslabolarData}
            renderItem={renderEstres}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
        />
      </View>


    </ViewInset>
  );
}
