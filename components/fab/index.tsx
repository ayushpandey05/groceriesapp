import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  TextStyle,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import {colors} from '../../theme/colors';

interface ButtonProps extends TouchableOpacityProps {
  labelStyle?: TextStyle;
  label?: string;
  source?: any;
  icon?: any;
  iconProps?: any;
  imageProps?: any
}

const Fab: React.FC<ButtonProps> = ({
  onPress,
  style,
  label,
  labelStyle,
  activeOpacity = 0.5,
  source,
  icon: Icon,
  iconProps,
  imageProps,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={[styles.container, style]}
      onPress={onPress}>
      {Icon ? (
        <Icon {...iconProps} />
      ) : source ? (
        <Image {...imageProps} source={source} />
      ) : (
        <Text style={[styles.label, labelStyle]}>{`${label}`}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Fab;

const styles = StyleSheet.create({
  container: {
    height: 67,
    width: 67,
    borderRadius: 34,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    overflow: 'hidden',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.light,
  },
});
