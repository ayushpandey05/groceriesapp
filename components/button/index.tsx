import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  TextStyle,
  StyleSheet,
  Text,
} from 'react-native';
import {colors} from '../../theme/colors';

interface ButtonProps extends TouchableOpacityProps {
  labelStyle?: TextStyle;
  label?: string;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  style,
  label,
  labelStyle,
  activeOpacity = 0.5,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={[styles.container, style]}
      onPress={onPress}>
      <Text style={[styles.label, labelStyle]}>{`${label}`}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 67,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 12,
    overflow: 'hidden',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.light,
  },
});
