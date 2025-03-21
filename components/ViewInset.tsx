import React from 'react';
import { View, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ViewInsetProps extends ViewProps {
  children: React.ReactNode;
}

const ViewInset = ({ children, style, ...rest }: ViewInsetProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right
          // Otros estilos que desees aplicar
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
};

export default ViewInset;