import React, {useState} from 'react';
import {Text, View, ToastAndroid} from 'react-native';
import useBackButton from '../../hooks/useBackButton';
import useMultiState from '../../hooks/useMultiState';

interface StackProps {
  stack: any;
  initialRoute: string;
  stackKeys: string[];
}

const RenderNoScreenFound = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'red'}}>{'Screen not found.'}</Text>
    </View>
  );
};

const showToast = () => {
  ToastAndroid.show('Press back again to exit.', ToastAndroid.SHORT);
};

const Stack: React.FC<StackProps> = ({stack: defaultStack, initialRoute}) => {
  const [stackData, setStackData] = useMultiState({
    stack: [{screenName: initialRoute, params: {}}],
  });
  const [allowClose, setAllowClose] = useState(false);

  const toggleAllowClose = () => {
    setAllowClose(true);
    setTimeout(() => {
      setAllowClose(false);
    }, 3000);
  };

  const {stack} = stackData;

  const goBack = () => {
    const newStack = [...stack];
    if (newStack.length > 1) {
      const updatedStack = newStack.splice(0, newStack.length - 1);
      setStackData({stack: updatedStack});
      return true;
    } else if (!allowClose) {
      toggleAllowClose();
      return true;
    } else {
      return false;
    }
  };

  useBackButton(goBack);

  return (
    <View style={{flex: 1}}>
      {stack.map(
        (screenData: {screenName: any; params: any}, screenIndex: any) => {
          const {screenName, params} = screenData;
          const {screen: Screen, title} = defaultStack[screenName] || {};
          const Component = Screen || RenderNoScreenFound;
          const navigation = {
            push: (view: string, params: any) => {
              const newStack = [...stack];
              newStack[screenIndex + 1] = {screenName: view, params};
              setStackData({
                stack: newStack,
              });
            },
            pop: (numberOfScreen: number = 1) => {
              if (stack.length > numberOfScreen) {
                const newStack = [...stack];
                const updatedStack = newStack.splice(
                  0,
                  newStack.length - numberOfScreen,
                );
                setStackData({stack: updatedStack});
              }
            },
            replace: (view: string, params: any) => {
              const newStack = [...stack];
              newStack[screenIndex] = {screenName: view, params};
            },
            goBack: () => {},
          };
          navigation.goBack = () => {
            navigation.pop(1);
          };
          return (
            <View
              key={`stack-${screenIndex}`}
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'white',
              }}>
              <Component
                screenIndex={screenIndex}
                screenName={screenName}
                params={params}
                navigation={navigation}
              />
            </View>
          );
        },
      )}
    </View>
  );
};

const createStackNavigator = (stack: any, initialRoute?: string) => {
  const stackKeys = Object.keys(stack);

  return React.memo(
    (props: JSX.IntrinsicAttributes & {children?: React.ReactNode}) => (
      <Stack
        {...props}
        stack={stack}
        stackKeys={stackKeys}
        initialRoute={initialRoute || stackKeys[0]}
      />
    ),
  );
};

export default createStackNavigator;
