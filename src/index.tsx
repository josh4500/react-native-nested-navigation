import { NativeModules } from 'react-native';

type NestedNavigationType = {
  multiply(a: number, b: number): Promise<number>;
};

const { NestedNavigation } = NativeModules;

export default NestedNavigation as NestedNavigationType;
