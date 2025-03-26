export type IconFamily = 'FontAwesome' | 'MaterialCommunityIcons' | 'MaterialIcons';

export interface ThemeData {
  id: string;
  title: string;
  iconName: string;
  iconFamily: IconFamily;
}

export const themeData: ThemeData[] = [
  { id: '1', title: 'Estrés laboral', iconName: 'briefcase', iconFamily: 'FontAwesome' },
  { id: '2', title: 'Salud mental laboral', iconName: 'heartbeat', iconFamily: 'FontAwesome' },
  { id: '3', title: 'Meditación', iconName: 'meditation', iconFamily: 'MaterialCommunityIcons' },
  { id: '4', title: 'Sueño reparador', iconName: 'bedtime', iconFamily: 'MaterialIcons' },
  { id: '5', title: 'Autoestima', iconName: 'account-circle', iconFamily: 'MaterialIcons' },
  { id: '6', title: 'Acoso laboral', iconName: 'gavel', iconFamily: 'FontAwesome' },
  { id: '7', title: 'Depresión', iconName: 'emoticon-sad', iconFamily: 'MaterialCommunityIcons' },
  { id: '8', title: 'Ansiedad', iconName: 'emoticon-neutral', iconFamily: 'MaterialCommunityIcons' },
  { id: '9', title: 'Adolescencia e hijos', iconName: 'human-male-female-child', iconFamily: 'MaterialCommunityIcons' },
];
