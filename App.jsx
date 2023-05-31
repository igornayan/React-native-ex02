import {NativeBaseProvider, Spinner} from 'native-base'
import { THEME } from './src/theme';
import SignUp from './src/screen/SignUp';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from './src/theme/index'
import { Loading } from './src/components/Loading';

export default function App(){
  const[fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})
  return(
    <NativeBaseProvider theme={THEME}>
      {!fontsLoaded ? <SignUp /> : <Loading />}
    </NativeBaseProvider>
  );
}