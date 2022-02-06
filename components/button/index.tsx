import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  TextStyle,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors} from '../../theme/colors';

interface ButtonProps extends TouchableOpacityProps {
  labelStyle?: TextStyle;
  label?: string;
  prefixIcon?: any;
  suffixIcon?: any;
  prefixIconProps?: any;
  suffixIconProps?: any
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  style,
  label,
  labelStyle,
  activeOpacity = 0.5,
  prefixIcon: PrefixIcon,
  suffixIcon: SuffixIcon,
  prefixIconProps,
  suffixIconProps
}) => {
  let leftIconComponent: any = void 0;
  let rightIconComponent: any = void 0;

  if (PrefixIcon || SuffixIcon) {
    leftIconComponent = PrefixIcon ? (
      <PrefixIcon style={{width: 18, height: 18}} {...prefixIconProps} />
    ) : (
      <View style={{width: 18, height: 18}} {...prefixIconProps} />
    );
    rightIconComponent = SuffixIcon ? (
      <SuffixIcon style={{width: 18, height: 18}} {...suffixIconProps} />
    ) : (
      <View style={{width: 18, height: 18}} {...prefixIconProps} />
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={[styles.container, style]}
      onPress={onPress}>
      {leftIconComponent}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={[styles.label, labelStyle]}>{`${label}`}</Text>
      </View>
      {rightIconComponent}
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
    flexDirection: 'row',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.light,
  },
});
