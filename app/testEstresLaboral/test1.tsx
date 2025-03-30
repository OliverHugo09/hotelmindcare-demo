import {
    View,
    Text,
    ScrollView
  } from "react-native";
  import ViewInset from '@/components/ViewInset';

export default function TestEstres1() {
  
    return (
      <ViewInset className="flex-1">
        <ScrollView>
          <View>
              <Text className="text-2xl font-medium dark:text-white">Síndrome de Burnout</Text>
          </View>
          <View className="mt-2">
            <Text className="text-lg dark:text-white">
              El síndrome de desgaste profesional o burnout es un estado de agotamiento mental, emocional y físico que se presenta como resultado de exigencias agobiantes, estrés crónico o insatisfacción laboral. Aunque esta no es una enfermedad en sí misma, se reconoce como el detonante de otros problemas de salud física y mental más graves.
            </Text>
            <Text className="text-lg font-bold pt-4 dark:text-white">Riesgos</Text>
            <Text className="text-lg dark:text-white pt-2">
                En la mayoría de los casos, el síndrome de desgaste profesional está relacionado con el trabajo. Sin embargo, otros factores pueden contribuir con la situación, como tareas y actividades extralaborales exigentes, ciertos rasgos de personalidad (como el perfeccionismo) y un estilo de vida estresante.
            </Text>
            <Text className="text-lg font-bold pt-4 dark:text-white">Síntomas</Text>
            <Text className="text-lg dark:text-white pt-2">
                Los síntomas del síndrome de desgaste profesional pueden ser tanto físicos como emocionales.
            </Text>
            <Text className="text-lg dark:text-white pt-2">
            Los síntomas físicos incluyen dolor de cabeza o de espalda, trastornos del sueño, náuseas, tensión muscular y cansancio.
            </Text>
            <Text className="text-lg dark:text-white pt-2">
            Desde el punto de vista emocional, las personas que tienen el síndrome de desgaste se sienten irritables, tensas y desmotivadas. También pueden sentirse indiferentes (falta de interés en las cosas), mostrarse cínicas y con poco contacto social. Las personas afectadas pueden perder la confianza en su trabajo, sentirse improductivas y sobrecargadas.
            </Text>
            <Text className="text-lg font-bold pt-4 dark:text-white">Prevención</Text>
            <Text className="text-lg dark:text-white pt-2 mb-10">
            Dado que el síndrome de desgaste profesional se desarrolla a lo largo de un período largo de tiempo, es importante estar atento a los signos reveladores de un estrés cada vez mayor y reaccionar a estos tempranamente. Las personas afectadas pueden notar que establecer límites claros en el trabajo, adoptar hábitos saludables (como tener horarios regulares de comidas y realizar ejercicio), y buscar estrategias para contrarrestar el estrés, pueden ayudar a prevenir episodios futuros. Prevenir el síndrome del desgaste profesional puede ser a veces un proceso continuo, por lo que es importante identificar fuentes confiables de apoyo emocional.
            </Text>
          </View>
          </ScrollView>
      </ViewInset>
    );
  }